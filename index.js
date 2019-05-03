const rp = require("request-promise");
const yaml = require("js-yaml");
const Mustache = require("mustache");

// Travis don't like fsPromises
// const fsPromises = require("fs").promises;
const fs = require("fs");
const util = require("util");
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

// URL pointing to a yaml file that contains the list of companies that use MoleculerJS
const COMPANIES_URL =
	"https://raw.githubusercontent.com/moleculerjs/site/master/source/_data/companies.yml";

// Readme.MD template
const TEMPLATE_PATH = "/templates/readme-template.md";

// MoleculerJS modules
const MODULES_PATH = "modules.yml";

/**
 * Fetch either remote (HTTP GET) or a local yaml file
 * @param {string} url
 * @param {boolean} remote
 */
async function fetchYaml(url, remote) {
	try {
		let payload;
		if (remote) {
			// HTTP GET yaml file as string
			payload = await rp.get(url);
		} else {
			// Get yaml file as string
			payload = await readFile(url, {
				encoding: "utf8"
			});
		}

		// Parse yaml payload
		const data = yaml.safeLoad(payload, "utf8");

		return data;
	} catch (error) {
		throw error;
	}
}

/**
 * Generate companies view
 *
 * @param {object} companies
 */
function generateCompaniesView(companies) {
	const view = [];

	for (const group of Object.values(companies)) {
		for (const company of group) {
			view.push({
				name: company.name,
				link: company.link
			});
		}
	}

	return view;
}

/**
 * Generate companies view
 *
 * @param {object} modules
 */
function generateModulesView(modules) {
	const view = [];

	for (const entry of Object.values(modules)) {
		let subtopic = [];
		let modules = [];

		const keys = Object.keys(entry);

		// Check if there are no sub-topics
		if (
			keys.length === 2 &&
			keys.includes("title") === true &&
			keys.includes("entries") === true
		) {
			// Indication to Mustache that there is nothing add to template
			subtopic = undefined;
			modules = buildEntriesList(entry["entries"]);
		} else {
			modules = undefined;
			for (const key of Object.keys(entry)) {
				if (key !== "title") {
					subtopic.push({
						name: entry[key].title,
						link: entry[key].title.replace(/\s+/g, "-").toLowerCase(),
						modules: buildEntriesList(entry[key]["entries"])
					});
				}
			}
		}

		view.push({
			name: entry.title,
			link: entry.title.replace(/\s+/g, "-").toLowerCase(),
			subtopic,
			modules
		});
	}

	return view;
}

/**
 * Sanitize the description string
 *
 * @param {string} desc Plain text or Markdown formated string
 */
function sanitizeDescription(desc) {
	if (desc === undefined) return;

	// Slice initial escape char
	if (desc.startsWith("/") === true || desc.startsWith("\\") === true)
		desc = desc.slice(1);

	// Add a dash
	return ` - ${desc}`;
}

/**
 * Generates an array with Mustache compatible elements
 *
 * @param {array} entries
 */
function buildEntriesList(entries) {
	return entries.map(elem => {
		return {
			name: elem.name,
			link: elem.link,
			official:
				elem.official === true
					? "![Official Moleculer Module][official]"
					: undefined,
			desc: sanitizeDescription(elem.desc)
		};
	});
}

async function main() {
	try {
		// Get companies list from moleculer/site repo
		const companies = await fetchYaml(COMPANIES_URL, true);

		// Get Template
		const template = await readFile(__dirname + TEMPLATE_PATH, {
			encoding: "utf8"
		});

		// Load module files
		const modules = await fetchYaml(MODULES_PATH, false);

		// Generate Mustache view object
		const view = {
			index: generateModulesView(modules),
			companies: generateCompaniesView(companies)
		};

		// Generate new ReadMe file
		const output = Mustache.render(template, view);

		// Write ReadMe file
		await writeFile("README.md", output);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
}

main();
