/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#049998",
                secondary: "#d8575b",
            },
        },
    },
    plugins: [
        {
            handler: ({ matchUtilities, theme }) =>
                matchUtilities(
                    {
                        "grid-cols-auto-fill": (value) => ({
                            gridTemplateColumns: `repeat(auto-fill, minmax(${value}, 1fr))`,
                        }),
                    },
                    { values: theme("spacing") }
                ),
        },
    ],
};
