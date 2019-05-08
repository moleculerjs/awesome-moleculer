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

// MoleculerJS modules
const MODULES_PATH = "modules.yml";

// Output dir
const SITE_MODULES = "out/site_modules.yml";

/**
 * Transforms data from `modules.yml` format into another (acceptable my moleculer/site)
 *
 * @param {object} modules
 */
function transform(modules) {
	const obj = {};

	for (const moduleKey of Object.keys(modules)) {
		const entry = modules[moduleKey];

		if (toTransform(entry)) {
			obj[moduleKey] = entry.entries.map(elem => sanitizeEntry(elem));
		} else {
			// Sub-topics
			for (const subModuleKey of Object.keys(entry)) {
				const subEntry = entry[subModuleKey];
				if (toTransform(subEntry)) {
					// console.log(subEntry);
					obj[subModuleKey] = subEntry.entries.map(elem => sanitizeEntry(elem));
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
function sanitizeEntry(entry) {
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

		// ToDo ???
		// test if module is available at NPM???

		return entry;
	} catch (error) {
		console.log(error);
		console.log(entry);
		process.exit(1);
	}
}

/**
 *
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
		const siteModules = transform(modules);

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
