/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{html,ts}"
	],
	theme: {
		extend: {
			'primary': '#A5F1E9',
			'secondary': '#7FE9DE',
			'tertiary': '#FFF6BF',
			'quaternary': '#f0d78e',
			'font': '#0a242c',
			'font-hlight': '#39aacf'
		},
	},
	plugins: [],
}

const withMT = require("@material-tailwind/html/utils/withMT");
module.exports = withMT({
	content: [
		"./src/**/*.{html,ts}"
	],
	theme: {
		extend: {
			'primary': '#A5F1E9',
			'secondary': '#7FE9DE',
			'tertiary': '#FFF6BF',
			'quaternary': '#f0d78e',
			'font': '#0a242c',
			'font-hlight': '#39aacf'
		},
	},
	plugins: [],
});