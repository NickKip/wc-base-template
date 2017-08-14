var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");
var path = require("path");

module.exports = {

    entry: "./src/client/index.ts",

    output: {
        filename: "client.js",
        path: path.join(__dirname, "build", "js")
    },

    // Enable sourcemaps for debugging webpack's output.
    // devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json", ".scss"],
        modules: [
            (__dirname + "/src"),
            "node_modules"
        ]
    },

    module: {
        rules: [
            // All files with a '.scss' extension will be handled by our scss loader
            { test: /\.scss$/, use: [{ loader: "css-to-string-loader" }, { loader: "css-loader" }, { loader: "sass-loader"}] },

            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    plugins: [
        // new ExtractTextPlugin("styles.css")
    ],

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "skatejs/src/index": "skate",
        "pouchdb": "pouchdb"
    }
};