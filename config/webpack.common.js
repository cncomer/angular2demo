/**
 * @author: @AngularClass
 */

const webpack = require('webpack');
const helpers = require('./helpers');

/*
 * Webpack Plugins
 */
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
// problem with copy-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');


/*
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = {

    /*
     * Cache generated modules and chunks to improve performance for multiple incremental builds.
     * This is enabled by default in watch mode.
     * You can pass false to disable it.
     *
     * See: http://webpack.github.io/docs/configuration.html#cache
     */
    //cache: false,

    /*
     * The entry point for the bundle
     * Our Angular.js app
     *
     * See: http://webpack.github.io/docs/configuration.html#entry
     */
    entry: {

        'polyfills': './src/polyfills.ts',
        'vendor':    './src/vendor.ts',
        'app':      './src/main.ts'

    },

    /*
     * Options affecting the resolving of modules.
     *
     * See: http://webpack.github.io/docs/configuration.html#resolve
     */
    resolve: {

        /*
         * An array of extensions that should be used to resolve modules.
         *
         * See: http://webpack.github.io/docs/configuration.html#resolve-extensions
         */
        extensions: ['', '.ts', '.js', '.json', '.css', '.scss', '.html'],

        // Make sure root is src
        root: helpers.root('src'),

    },

    /*
     * Options affecting the normal modules.
     *
     * See: http://webpack.github.io/docs/configuration.html#module
     */
    module: {
        preLoaders: [
            //{
            //    test: /\.ts$/,
            //    exclude: /node_modules/,
            //    loader: 'tslint'
            //}
        ],
        /*
         * An array of automatically applied loaders.
         *
         * IMPORTANT: The loaders here are resolved relative to the resource which they are applied to.
         * This means they are not resolved relative to the configuration file.
         *
         * See: http://webpack.github.io/docs/configuration.html#module-loaders
         */
        loaders: [

            /*
             * Typescript loader support for .ts and Angular 2 async routes via .async.ts
             * Replace templateUrl and stylesUrl with require()
             *
             * See: https://github.com/s-panferov/awesome-typescript-loader
             * See: https://github.com/TheLarkInn/angular2-template-loader
             */
            {
                test: /\.ts$/,
                loaders: ['ts', 'angular2-template-loader']
            },

            //{
            //    test: /\.js$/,
            //    loaders: 'file?name=assets/[name].[ext]',
            //    include: [helpers.root('src/index.html')]
            //},

            /*
             * Json loader support for *.json files.
             *
             * See: https://github.com/webpack/json-loader
             */
            {
                test: /\.json$/,
                loader: 'json-loader'
            },

            /*
             * to string and css loader support for *.css files
             * all css in src/style will be bundled in an external css file
             *
             */
            {
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            },
            // all css required in src/app files will be merged in js files
            {
                test: /\.css$/,
                include: helpers.root('src', 'app'),
                loader: 'css-to-string!css'
            },

            /* Raw loader support for *.html
             * Returns file content as string
             *
             * See: https://github.com/webpack/html-loader
             */
            {
                test: /\.html$/,
                loader: 'html',
                exclude: [helpers.root('src/index.html')]
            },

            /* File loader for supporting images, for example, in CSS files.
             */
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'url-loader?name=assets/[name].[hash].[ext]&limit=8192'
            }
        ]

    },


    // more options in the optional jshint object
    //jshint: {
    //    // any jshint option http://www.jshint.com/docs/options/
    //    // i. e.
    //    camelcase: true,
    //
    //    // jshint errors are displayed by default as warnings
    //    // set emitErrors to true to display them as errors
    //    emitErrors: false,
    //
    //    // jshint to not interrupt the compilation
    //    // if you want any file with jshint errors to fail
    //    // set failOnHint to true
    //    failOnHint: false,
    //
    //    // custom reporter function
    //    reporter: function(errors) { }
    //},
    /*
     * Add additional plugins to the compiler.
     *
     * See: http://webpack.github.io/docs/configuration.html#plugins
     */
    plugins: [
        /*
         * Plugin: OccurenceOrderPlugin
         * Description: Varies the distribution of the ids to get the smallest id length
         * for often used ids.
         *
         * See: https://webpack.github.io/docs/list-of-plugins.html#occurrenceorderplugin
         * See: https://github.com/webpack/docs/wiki/optimization#minimize
         */
        new webpack.optimize.OccurenceOrderPlugin(true),

        /*
         * Plugin: CommonsChunkPlugin
         * Description: Shares common code between the pages.
         * It identifies common modules and put them into a commons chunk.
         *
         * See: https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
         * See: https://github.com/webpack/docs/wiki/optimization#multi-page-app
         */
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        /*
         * Plugin: HtmlWebpackPlugin
         * Description: Simplifies creation of HTML files to serve your webpack bundles.
         * This is especially useful for webpack bundles that include a hash in the filename
         * which changes every compilation.
         *
         * See: https://github.com/ampedandwired/html-webpack-plugin
         */
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon:'./src/assets/images/favicon.ico', //favicon存放路径
            chunksSortMode: 'dependency',
            libJS: [
                //上拉下拉
                './src/assets/js/jweixin-1.0.0.js'
            ]
        })

    ],

};