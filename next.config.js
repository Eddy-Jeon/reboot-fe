const withPlugins = require("next-compose-plugins");
const withCSS = require("@zeit/next-css");
const withLess = require("@zeit/next-less");
const path = require("path");
const fs = require("fs");

//module.exports =
module.exports = withPlugins(
  [
    [
      withLess,
      {
        lessLoaderOptions: {
          javascriptEnabled: true
        }
      }
    ],
    [
      withCSS,
      {
        cssModules: true,
        cssLoaderOptions: {
          importLoaders: 1,
          localIdentName: "[local]___[hash:base64:5]"
        }
      }
    ]
  ],
  {
    webpack(config, options) {
      // Do not run type checking twice:
      const dirs = fs.readdirSync(process.cwd(), { withFileTypes: true });
      // add folder alias
      dirs
        .filter(
          dir =>
            dir.isDirectory() &&
            !dir.name.startsWith(".") &&
            !["pages", "node_modules"].includes(dir.name)
        )
        .forEach(dir => {
          config.resolve.alias[dir.name] = path.join(process.cwd(), dir.name);
        });

      return config;
    }
  }
);
