const daisyui = require('daisyui');
const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
		colors: {
			kumo: {
				primary: '#39296c'
			}
		}
	},

	plugins: [forms, typography, daisyui]
};

module.exports = config;
