const fs = require("fs");
const util = require("util");
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

// Convert Markdown syntax to HTML
const marked = require("marked");

// Strip HTML tags from a string
const striptags = require("striptags");

// YAML parser
const yaml = require("js-yaml");

// Checks if NPM package exists
const NPMExists = require('npm-exists');

// MoleculerJS modules
const MODULES_PATH = "modules.yml";

// Output dir
const SITE_MODULES = "out/site_modules.yml";

/**
 * Transforms data from `modules.yml` format into another (acceptable my moleculer/site)
 *
 * @param {object} modules
 */
async function transform(modules) {
	const obj = {};

	for (const moduleKey of Object.keys(modules)) {
		const entry = modules[moduleKey];

		if (toTransform(entry)) {
			// Sanitize all entries
			const promises = await Promise.all(entry.entries.map(elem => sanitizeEntry(elem)))
			obj[moduleKey] = promises
		} else {
			// Sub-topics
			for (const subModuleKey of Object.keys(entry)) {
				const subEntry = entry[subModuleKey];
				if (toTransform(subEntry)) {
					// Sanitize all entries
					const promises = await Promise.all(subEntry.entries.map(elem => sanitizeEntry(elem)))
					obj[subModuleKey] = promises
				}
			}
		}
	}

	return obj;
}

/**
 * Sanitize the an entry
 *
 * @param {object} entry
 */
async function sanitizeEntry(entry) {
	try {
		// Slice initial escape char
		if (
			entry.desc.startsWith("/") === true ||
			entry.desc.startsWith("\\") === true
		) {
			entry.desc = entry.desc.slice(1);
		}

		// Convert Markdown syntax into HTML syntax
		entry.desc = marked(entry.desc);

		// Remove unwanted HTML tags
		// Prepare the description for moleculer/site
		entry.desc = striptags(entry.desc, ["a"]);

		if(!entry.name) {
			console.log(desc)
		}

		// Check if module is registered at NPM
		const moduleExists = await NPMExists(entry.name)
		// Set CSS value for display tag
		// This is going to be used to build modules page
		entry.display = moduleExists ? 'unset': 'none'

		return entry;
	} catch (error) {
		console.log(error);
		console.log(entry);
		process.exit(1);
	}
}

/**
 * Checks if a list of modules should be published on site or not
 */
function toTransform(entry) {
	const keys = Object.keys(entry);

	return (
		keys.includes("to-pub-on-site") === true && entry["to-pub-on-site"] === true
	);
}

async function main() {
	try {
		// Load module files
		const payload = await readFile(MODULES_PATH, { encoding: "utf8" });

		// Parse yaml payload
		const modules = yaml.safeLoad(payload, "utf8");

		// Transform into site acceptable format
		const siteModules = await transform(modules);

		// Store new file
		await writeFile(
			SITE_MODULES,
			yaml.safeDump(siteModules, { lineWidth: 500 })
		);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
}

main();
