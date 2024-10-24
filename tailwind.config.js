/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
	  extend: {
		animation: {
		  shimmer: "shimmer 2s linear infinite",
		  spotlight: "spotlight 2s ease .75s 1 forwards",
		  "meteor-effect": "meteor 5s linear infinite",
		},
		keyframes: {
			meteor: {
				"0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
				"70%": { opacity: "1" },
				"100%": {
				  transform: "rotate(215deg) translateX(-500px)",
				  opacity: "0",
				},
			  },
			spotlight: {
				"0%": {
				  opacity: 0,
				  transform: "translate(-72%, -62%) scale(0.5)",
				},
				"100%": {
				  opacity: 1,
				  transform: "translate(-50%,-40%) scale(1)",
				},
			  },
		  shimmer: {
			from: {
			  backgroundPosition: "0 0",
			},
			to: {
			  backgroundPosition: "-200% 0",
			},
		  },
		},
	  },
	},
	plugins: [addVariablesForColors],
  };
  
  function addVariablesForColors({ addBase, theme }) {
	const colors = theme('colors');
	
	const colorVars = Object.keys(colors).reduce((acc, color) => {
	  const colorValue = colors[color];
	  
	  if (typeof colorValue === 'string') {
		// For single color values
		acc[`--${color}`] = colorValue;
	  } else if (typeof colorValue === 'object') {
		// For color shades (like blue-100, blue-200, etc.)
		Object.keys(colorValue).forEach(shade => {
		  acc[`--${color}-${shade}`] = colorValue[shade];
		});
	  }
	  
	  return acc;
	}, {});
  
	addBase({
	  ":root": colorVars,
	});
  }
  