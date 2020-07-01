const withPlugins = require("next-compose-plugins");
const withCSS = require("@zeit/next-css");
const withLess = require("@zeit/next-less");
const path = require("path");
const fs = require("fs");

//module.exports =
//
module.exports = {
  webpack(config, options) {
    // Do not run type checking twice:
    const dirs = fs.readdirSync(process.cwd(), { withFileTypes: true });
    // add folder alias
    dirs
      .filter(
        (dir) =>
          dir.isDirectory() &&
          !dir.name.startsWith(".") &&
          !["pages", "node_modules"].includes(dir.name)
      )
      .forEach((dir) => {
        config.resolve.alias[dir.name] = path.join(process.cwd(), dir.name);
      });

    // add css, less loader
    const cssLoader = {
      test: /\.css$/,
      use: ["css-loader"],
    };
    const lessLoader = {
      test: /\.less$/,
      use: [
        "css-loader",
        {
          loader: "less-loader",
          options: {
            lessOptions: {
              javascriptEnabled: true,
            },
          },
        },
      ],
    };
    const fontLoader = {
      test: /\.(woff2|eot|woff|ttf)$/,
      loader: "file-loader",
    };
    const iconLoader = {
      test: /\.(png|svg|jpg)$/,
      loader: "url-loader",
      options: {
        limit: 8192,
        esModule: false,
        fallback: require.resolve("file-loader"),
      },
    };
    const txtLoader = {
      test: /\.txt$/i,
      loader: "raw-loader",
    };

    config.module.rules.push(cssLoader);
    config.module.rules.push(lessLoader);
    config.module.rules.push(fontLoader);
    config.module.rules.push(iconLoader);
    config.module.rules.push(txtLoader);

    return config;
  },
};
