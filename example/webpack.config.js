const path = require("path");
const fs = require("fs");
const process = require("process");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const LibraryUpdateCheckPlugin = require("./scripts/library-update-check-plugin");
const PACKAGE = require("./package.json");

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const CODE_LEN = 9;

function genCode9() {
    let out = "";
    for (let i = 0; i < CODE_LEN; i++) {
        out += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
    }
    return out;
}

function getArg(flag, defaultValue) {
    const index = process.argv.indexOf(flag);
    if (index !== -1 && index + 1 < process.argv.length) {
        return process.argv[index + 1];
    }
    return defaultValue;
}

const PATHS = {
    STATIC: path.resolve(__dirname, "./static"),
    SRC: path.resolve(__dirname, "./src"),
    BUILD: path.resolve(__dirname, "./build"),
    DIST: path.resolve(__dirname, "./dist"),
    PACKAGE: path.resolve(__dirname, "./packages"),
    EMULATOR: path.resolve(__dirname, "./packages/zpe-port/build/emulator"),
    EDITOR: path.resolve(__dirname, "./packages/zpe-port/build/editor"),
    PORT: path.resolve(__dirname, "./packages/zpe-port"),
    DATA: path.resolve(__dirname, "./data"),
    // PATHNAME: `prev/${genCode9()}/pl/main/`
    PATHNAME: `prev/RESOURCE-ID/pl/main/`
};

// console.log(process.argv);

module.exports = function (env, argv) {
    const IS_DEV = env.development ? true : false;
    const IS_DIST = env.dist ? true : false;
    const IS_BUILD = !IS_DIST;
    const SERVER_PORT = env.port || 8080;

    console.log(
        `\x1b[36m[Webpack Config] Mode: ${
            IS_DEV ? "Development" : IS_DIST ? "Distribution" : "Build"
        }, Port: ${SERVER_PORT}\x1b[0m`
    );

    return {
        mode: env.production ? "production" : "development",
        devtool: IS_DEV ? "cheap-module-source-map" : false,
        entry: {
            app: path.resolve(PATHS.SRC, "main.ts")
        },
        output: {
            libraryTarget: "amd",
            filename: IS_DEV
                ? path.join(PATHS.PATHNAME, "entry.js")
                : "entry.js",
            clean: {
                keep: /.git|.github|.gitignore|README.md/
            }
        },
        externals: {
            // jquery: "jquery:3"
        },
        resolve: {
            alias: {
                "~": path.join(PATHS.SRC),
                "@": path.join(PATHS.PACKAGE)
            },
            modules: ["packages", "node_modules", "src"],
            extensions: [".ts", ".tsx", ".js", ".jsx"]
        },
        devServer: {
            static: [
                {
                    directory: path.resolve(PATHS.STATIC),
                    publicPath: `/${PATHS.PATHNAME}`
                },
                {
                    directory: path.resolve(PATHS.EMULATOR),
                    publicPath: `/${PATHS.PATHNAME}`
                }
            ],
            open: false,
            hot: false,
            host: "0.0.0.0",
            port: SERVER_PORT,
            setupMiddlewares: (middlewares, devServer) => {
                if (!devServer) {
                    throw new Error("webpack-dev-server is not defined");
                }

                devServer.app.get(["/", "/index.html"], (req, res) => {
                    res.redirect(
                        301,
                        path.join(`${PATHS.PATHNAME}`, "/index.html")
                    );
                });

                devServer.app.get("/favicon.png", (req, res) => {
                    const faviconFile = path.resolve(
                        PATHS.EMULATOR,
                        "favicon.png"
                    );
                    res.sendFile(faviconFile);
                });

                devServer.app.get("/engine.json", (req, res) => {
                    if (IS_DEV && env.engine) {
                        const engineFile = path.resolve(PATHS.DATA, env.engine);
                        res.sendFile(engineFile);
                    } else {
                        const defaultEngineFile = path.resolve(
                            PATHS.STATIC,
                            "engine.json"
                        );
                        res.sendFile(defaultEngineFile);
                    }
                });

                devServer.app.get("/savedata.json", (req, res) => {
                    const savedataFile = path.resolve(
                        PATHS.DATA,
                        env.savedata || "savedata.json"
                    );
                    if (fs.existsSync(savedataFile)) {
                        res.sendFile(savedataFile);
                    } else {
                        console.log(
                            "\x1b[35m[devServerMid] Savedata file not found, returning null:",
                            savedataFile,
                            "\x1b[0m"
                        );
                        res.send("null");
                    }
                });

                return middlewares;
            }
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: "ts-loader",
                    options: {
                        transpileOnly: true
                    },
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/i,
                    use: [
                        "style-loader",
                        {
                            loader: "css-loader",
                            options: {
                                modules: {
                                    mode: "local",
                                    localIdentName:
                                        "[name]__[local]--[hash:base64:5]"
                                }
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new CopyPlugin({
                patterns: [
                    {
                        from: PATHS.STATIC,
                        to: "./",
                        info: { minimized: true },
                        globOptions: {
                            ignore: ["*.DS_Store"]
                        }
                    },
                    ...(IS_DIST
                        ? [
                              {
                                  from: path.resolve(PATHS.EDITOR, "editor.js"),
                                  to: "./editor.js",
                                  info: { minimized: true }
                              }
                          ]
                        : []),
                    ...(IS_DEV || IS_BUILD
                        ? [
                              {
                                  from: path.resolve(PATHS.EDITOR),
                                  to: "./",
                                  info: { minimized: true },
                                  globOptions: {
                                      ignore: [
                                          "**/*.DS_Store",
                                          "**/favicon.png"
                                      ]
                                  }
                              },
                              {
                                  from: path.resolve(PATHS.EMULATOR),
                                  to: "./",
                                  info: { minimized: true },
                                  globOptions: {
                                      ignore: [
                                          "**/index.html",
                                          "**/*.DS_Store",
                                          "**/favicon.png"
                                      ]
                                  }
                              }
                          ]
                        : [])
                ]
            }),
            IS_DEV || IS_BUILD
                ? new HtmlWebpackPlugin({
                      inject: false,
                      //   minify: false,
                      //   chunks: ["app"],
                      title: `${PACKAGE.name} ${PACKAGE.version} - Development`,
                      favicon: path.resolve(PATHS.EMULATOR, "favicon.png"),
                      template: path.resolve(PATHS.EMULATOR, "index.html"),
                      filename: IS_DEV
                          ? path.join(PATHS.PATHNAME, "index.html")
                          : "index.html"
                  })
                : null,
            new LibraryUpdateCheckPlugin({
                configFile: ".updaterc",
                checkIntervalHours: 24,
                timeoutMs: 5000,
                quiet: false
            })
        ],
        optimization: {
            minimize: false
        },
        performance: {
            hints: false
        }
    };
};
