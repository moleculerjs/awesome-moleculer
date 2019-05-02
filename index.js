const rp = require("request-promise");
const yaml = require("js-yaml");
const fsPromises = require("fs").promises;
const Mustache = require("mustache");

// URL pointing to a yaml file that contains the list of companies that use MoleculerJS
const COMPANIES =
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

function generateView(modules, companies) {
	let view = {
		index: [],
		companies: []
	};

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

			for (const entry of Object.values(mod["modules"])) {
				modules.push({
					name: entry.name,
					link: entry.link,
					official:
						entry.official === true
							? "![Official Moleculer Module][official]"
							: undefined,
					desc: entry.desc
				});
			}
		} else {
			modules = undefined;
			for (const key of Object.keys(mod)) {
				if (key !== "title") {
					subtopic.push({
						name: mod[key].title,
						link: mod[key].title.replace(/\s+/g, "-").toLowerCase()
					});
				}
			}
		}

		view.index.push({
			topic: mod.title,
			link: mod.title.replace(/\s+/g, "-").toLowerCase(),
			subtopic,
			modules
		});
	}

	// console.log(view.index);

	// Companies
	for (const group of Object.values(companies)) {
		for (const company of group) {
			view.companies.push({
				name: company.name,
				link: company.link
			});
		}
	}

	return view;
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

		// console.log(modules);

		// Generate Mustache view object
		const view = generateView(modules, companies);

		// Build readme file
		const output = Mustache.render(template, view);

		// Write new readme file
		await fsPromises.writeFile("newRead.md", output);
	} catch (error) {
		console.log(error);
	}
}

main();
