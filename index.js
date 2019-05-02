const rp = require("request-promise");
const yaml = require("js-yaml");
const fsPromises = require("fs").promises;
const Mustache = require("mustache");

// URL pointing to a yaml file that contains the list of companies that use MoleculerJS
const COMPANIES_URL =
	"https://raw.githubusercontent.com/moleculerjs/site/master/source/_data/companies.yml";

const TEMPLATE_PATH = "./templates/readme-template.md";

/**
 * Fetch either remote or a local yaml file
 */
async function fetchYaml(url, remote) {
	try {
		let payload;
		if (remote) {
			// Get yaml file as string
			payload = await rp.get(url);
		} else {
			// Get yaml file as string
			payload = await fsPromises.readFile(url, {
				encoding: "utf8"
			});
		}

		// Parse companies.yml
		const data = yaml.safeLoad(payload, "utf8");

		return data;
	} catch (error) {
		throw error;
	}
}

function generateCompaniesView (companies) {
	const view = []

	// Companies
	for (const group of Object.values(companies)) {
		for (const company of group) {
			view.push({
				name: company.name,
				link: company.link
			});
		}
	}

	return view
}

function generateModulesView(modules) {
	const view = []
	
	// Index
	for (const mod of Object.values(modules)) {
		let subtopic = [];
		let modules = [];

		const keys = Object.keys(mod);

		// If "mod" Object only has "title" and "modules" just skip because there are no sub-topics
		if (
			keys.length === 2 &&
			keys.includes("title") === true &&
			keys.includes("modules") === true
		) {
			subtopic = undefined;
			modules = buildEntriesList(mod["modules"])
		} else {
			modules = undefined;
			for (const key of Object.keys(mod)) {
				if (key !== "title") {
					subtopic.push({
						name: mod[key].title,
						link: mod[key].title.replace(/\s+/g, "-").toLowerCase(),
						modules: buildEntriesList(mod[key]["modules"])
					});
				}
			}
		}

		view.push({
			topic: mod.title,
			link: mod.title.replace(/\s+/g, "-").toLowerCase(),
			subtopic,
			modules
		});
	}

	return view;
}

function sanitizeDescription (desc) {
	return desc.startsWith('/') === true || desc.startsWith('\\') === true ? desc.slice(1) : desc
}

function buildEntriesList (list) {
	return list.map(elem => {
		return {
			name: elem.name,
			link: elem.link,
			official:
				elem.official === true
					? "![Official Moleculer Module][official]"
					: undefined,
			desc: sanitizeDescription(elem.desc)
		}
	})
}

async function main() {
	try {
		// Get companies list
		const companies = await fetchYaml("companies.yml", false);

		// Get Template
		const template = await fsPromises.readFile(TEMPLATE_PATH, {
			encoding: "utf8"
		});

		const modules = await fetchYaml("modules.yml", false);

		// Generate Mustache view object
		const view = {
			index: generateModulesView(modules),
			companies: generateCompaniesView(companies)
		}

		// Build readme file
		const output = Mustache.render(template, view);

		// Write new readme file
		await fsPromises.writeFile("newRead.md", output);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
}

main();
