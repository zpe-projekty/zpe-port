const path = require("path");
const fs = require("fs");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PACKAGE = require("./package.json");
const { runtime, library } = require("webpack");
const env = require("process").env;

module.exports = [
    // Editor Build
    // ===================================================
    function (env, argv) {
        const PATHS = {
            STATIC: path.resolve(__dirname, "./static"),
            SRC: path.resolve(__dirname, "./src"),
            DIST: path.resolve(__dirname, "../../dist/editor"),
            EMULATOR_DIST: path.resolve(__dirname, "./emulator/dist"),
            PACKAGE: path.resolve(__dirname, "./packages"),
            DATA: env.DATA
                ? path.resolve(__dirname, "./data", env.DATA)
                : path.resolve(__dirname, "./data")
        };

        console.log(env);
        console.log("PATHS", PATHS);

        const IS_DEV = env.production ? false : true;
        console.log("******", env, env.production);

        return {
            mode: env.production ? "production" : "development",
            devtool: IS_DEV ? "cheap-module-source-map" : false,
            entry: {
                editor: {
                    import: path.resolve(PATHS.SRC, "main.ts"),
                    filename: "editor.js"
                }
            },
            output: {
                path: PATHS.DIST,
                libraryTarget: "amd",
                filename: "[name].js",
                clean: {
                    keep: /.git|.gitignore|.github/
                }
            },
            externals: {},
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
                    env.data
                        ? path.resolve(env.data)
                        : path.resolve(PATHS.DATA),
                    path.resolve(PATHS.STATIC)
                ],
                open: false,
                hot: false,
                host: "0.0.0.0",
                port: 8090
            },
            module: {
                rules: [
                    {
                        test: /\.ts$/,
                        loader: "ts-loader",
                        options: {
                            transpileOnly: true
                        },
                        exclude: /node_modules/
                    },
                    {
                        test: /\.css$/i,
                        use: [
                            {
                                loader: "style-loader"
                            },
                            {
                                loader: "css-loader",
                                options: {
                                    // modules: "local"
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
                            from: PATHS.EMULATOR_DIST,
                            to: "./",
                            info: { minimized: true },
                            globOptions: {
                                dot: true,
                                ignore: [
                                    "**/*.DS_Store",
                                    "**/editor-emulator.html"
                                ]
                            }
                        }
                    ]
                }),
                new HtmlWebpackPlugin({
                    title: `${PACKAGE.name} ${PACKAGE.version} - Editor Emulator`,
                    favicon: path.resolve(PATHS.EMULATOR_DIST, "favicon.png"),
                    template: path.resolve(
                        PATHS.EMULATOR_DIST,
                        "editor-emulator.html"
                    ),
                    filename: IS_DEV ? "index.html" : "editor-emulator.html",
                    minify: false,
                    chunks: ["editor"]
                })
            ],
            optimization: {
                minimize: false
            }
        };
    }
];
