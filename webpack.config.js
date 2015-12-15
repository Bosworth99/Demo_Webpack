'use strict';

var webpack = require('webpack');

module.exports = {
    context : __dirname,
    entry: './Javascript/app/index',
    module: {
        loaders: [
            { test: /underscore/,   loader: 'exports?_' },
            { test: /backbone/,     loader: 'exports?Backbone!imports?underscore,jquery' }
        ]
    },
    output: {
        path: __dirname + '/Javascript/dist/',
        filename: "bundle.js"
    },
    resolve : {
        root : [
            __dirname + '/Javascript/app',
            __dirname + '/Javascript/vendor'
        ],
        modulesDirectories: ['Javascript', 'node_modules'],
        extensions: ['', '.js'],
        alias: {
                'jquery'    : 'jquery/dist/jquery.min',
                'backbone'  : 'backbone/backbone-min',
                'underscore': 'underscore/underscore-min'
        },
        watch : true,
        devtool: '#inline-source-map',
        devServer: {
            contentBase: './Javascript/dist',
            proxy : {

            }
        }
    }
};