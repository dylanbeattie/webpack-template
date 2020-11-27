module.exports = {
    // Use the src/index.js file as entry point to bundle it. 
    // If the src/index.js file imports other JavaScript files, bundle them as well.
    entry: [
        './src/index.js', './src/styles.scss'
    ],

    module: {
        rules: [
            // Compile SCSS files to standalone CSS
            {
                test: /\.s[ac]ss$/i,
                use: [
                    { loader: 'file-loader', options: { name: 'css/styles.css' } },
                    "extract-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            // Include Babel in the build process to transpile shiny JS to old-school JS
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js']
    },
    // The bundled source code files shall result in a bundle.js file in the /dist/js folder.
    output: {
        path: `${__dirname}/dist/js`,
        filename: 'bundle.js'
    },
    // The /dist folder will be used to serve our application to the browser.
    devServer: {
        contentBase: './dist'
    }
};