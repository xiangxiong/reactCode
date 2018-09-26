const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = env =>{
    if(!env){
        env = {}
    }
    let plugins = [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
          title: 'Development',
          template: './index.html'
        })
    ];

    if(env.production){
        plugins.push(new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV:"production"
            }
        })),
        plugins.push(new ExtractTextPlugin("style.css"))
    }
    
    return {
        entry:{
            app:'./src/index.js'
        },
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true, // 开启gizp 压缩.
            port: 9001
        },
        module:{
            loaders:[{
                test:/\.html$/,
                loader:'html-loader'
            },{
                test: /\.scss$/,
                loaders: [
                  'style-loader?sourceMap',
                  'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                  'resolve-url-loader',
                  'sass-loader?sourceMap',
                  'px2rem-loader?remUni=75&remPrecision=8'
                ]
              }
             ,{
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }]
        },
        plugins,
        output:{
            filename:'[name].min.js',
            path:path.resolve(__dirname,'dist')
        }
    }
}