module.exports = {
  style: {
    postcss: {
      plugin: [
        require("tailwindcss")("./tailwind.config.js"),
        require("autoprefixer"),
      ],
    },
  },
};
