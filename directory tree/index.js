function buildTree(paths) {
	const root = {};

	for (const path of paths) {
		const parts = path.split("/");
		let current = root;
		// console.log("parts", parts);

		for (const part of parts) {
			current[part] = current[part] || {};

			current = current[part];
		}
	}
	console.log(root);
	return root;
}

function printTree(node, prefix = "", isLast = true) {
	const keys = Object.keys(node);
	let output = "";

	keys.forEach((key, index) => {
		const last = index === keys.length - 1;
		const connector = last ? "└── " : "├── ";
		output += prefix + connector + key + "\n";

		const newPrefix = prefix + (last ? "    " : "│   ");
		if (Object.keys(node[key]).length > 0) {
			output += printTree(node[key], newPrefix, last);
		}
	});

	return output;
}

// Contoh penggunaan
const paths = [
	"src/index.js",
	"src/components/Button.js",
	"src/components/Input.js",
	"src/utils/helpers.js",
	"README.md",
];

const tree = buildTree(paths);
console.log(printTree(tree));
