'use strict';

const webpack                       = require('webpack');
const path                          = require('path');

const TerserPlugin                  = require("terser-webpack-plugin");

module.exports = env => {
    return {
        mode            : 'production',
        devtool         : 'hidden-source-map',
        performance     : { hints: false },
        context         : path.resolve(__dirname, 'src'),
        entry           : {
            SCPP            : './SCPP.js'
        },

        output          : {
            path            : path.resolve(__dirname, 'build'),
            filename        : './[name].js'
        },
        optimization    : {
            minimize        : true,
            minimizer       : [
                new TerserPlugin({
                    test: /\.js(\?.*)?$/i,
                    terserOptions: {keep_classnames: true}
                })
            ]
        },
    };
};