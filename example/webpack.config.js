const path = require("path");
const fs = require("fs");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PACKAGE = require("./package.json");

const PATHS = {
    STATIC: path.resolve(__dirname, "./static"),
    SRC: path.resolve(__dirname, "./src"),
    BUILD: path.resolve(__dirname, "./build"),
    DIST: path.resolve(__dirname, "./dist"),
    PACKAGE: path.resolve(__dirname, "./packages"),
    EMULATOR: path.resolve(__dirname, "./packages/zpe-port/build/emulator"),
    EDITOR: path.resolve(__dirname, "./packages/zpe-port/build/editor"),
    PORT: path.resolve(__dirname, "./packages/zpe-port"),
    DATA: path.resolve(__dirname, "./data")
};

module.exports = function (env, argv) {
    const IS_DEV = env.production ? false : true;
    const IS_EMULATOR = env.emulator ? true : false;
    const IS_DIST = env.dist ? true : false;

    return {
        mode: env.production ? "production" : "development",
        devtool: IS_DEV ? "cheap-module-source-map" : false,
        entry: path.resolve(PATHS.SRC, "main.ts"),
        output: {
            path: IS_DIST ? PATHS.DIST : PATHS.BUILD,
            libraryTarget: "amd",
            filename: "entry.js",
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
            static: [path.resolve(PATHS.STATIC), path.resolve(PATHS.EMULATOR)],
            open: false,
            hot: false,
            host: "0.0.0.0",
            port: 8080,
            setupMiddlewares: (middlewares, devServer) => {
                if (!devServer) {
                    throw new Error("webpack-dev-server is not defined");
                }
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
                                    localIdentName: IS_DEV
                                        ? "[local]"
                                        : "[hash:base64]"
                                },
                                url: false
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: PATHS.STATIC,
                        to: "./",
                        info: { minimized: true },
                        globOptions: {
                            ignore: ["*.DS_Store"]
                        }
                    },
                    {
                        from: path.resolve(PATHS.EDITOR),
                        to: "./",
                        info: { minimized: true },
                        globOptions: {
                            ignore: ["*.DS_Store"]
                        }
                    },
                    ...(IS_DEV || IS_EMULATOR
                        ? [
                              {
                                  from: path.resolve(
                                      PATHS.EMULATOR,
                                      "emulator.js"
                                  ),
                                  to: "./emulator.js",
                                  info: { minimized: true }
                              },
                              {
                                  from: path.resolve(
                                      PATHS.DATA,
                                      "savedata.json"
                                  ),
                                  to: "./savedata.json",
                                  info: { minimized: true }
                              }
                          ]
                        : [])
                ]
            }),
            IS_DEV || IS_EMULATOR
                ? new HtmlWebpackPlugin({
                      title: `${PACKAGE.name} ${PACKAGE.version} - Development`,
                      favicon: path.resolve(PATHS.EMULATOR, "favicon.png"),
                      template: path.resolve(PATHS.EMULATOR, "index.html"),
                      filename: "index.html"
                  })
                : null
        ],
        optimization: {
            minimize: false
        },
        performance: {
            hints: false
        }
    };
};
