import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import pluginImport from "eslint-plugin-import";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

export default [
	{
		files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
	},
	{
		languageOptions: { globals: globals.browser },
	},
	// ESLint's core recommended rules
	pluginJs.configs.recommended,

	// TypeScript-specific rules
	...tseslint.configs.recommended,
	...tseslint.configs["eslint-recommended"],

	// React-specific rules (React 17+ does not require React in JSX scope)
	pluginReact.configs.flat.recommended,

	// React Hooks rules (for ensuring hooks are used correctly)
	pluginReactHooks.configs.recommended,

	// Accessibility rules for JSX (for a11y best practices)
	pluginJsxA11y.configs.recommended,

	// Import rules to manage ES6 module imports
	pluginImport.configs.recommended,

	// Custom rules and adjustments
	{
		rules: {
			// Turn off React in JSX scope for React 17+ and Next.js
			"react/react-in-jsx-scope": "off",

			// Enable warnings for console logs
			"no-console": "warn",

			// Prevent unused variables, but allow those prefixed with '_'
			"@typescript-eslint/no-unused-vars": [
				"error",
				{ argsIgnorePattern: "^_" },
			],

			// Disable prop-types rule for TypeScript files
			"react/prop-types": "off",

			// Additional rules for cleaner imports
			"import/order": [
				"error",
				{ groups: [["builtin", "external", "internal"]] },
			],

			// Accessibility improvements
			"jsx-a11y/anchor-is-valid": "off", // This rule is often disabled in Next.js

			// Optional: Add stricter rules based on your project needs
			"@typescript-eslint/explicit-module-boundary-types": "off", // Disable explicit return types for React components
		},
	},
];
