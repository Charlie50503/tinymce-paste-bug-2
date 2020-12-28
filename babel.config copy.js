/*
 * @Descripttion:
 * @version: 1.1
 * @Author: Ko Kanei
 * @Date: 2020-12-28 14:39:58
 * @LastEditors: Ko Kanei
 * @LastEditTime: 2020-12-28 14:40:04
 */
const plugins = [];
//ログを非表示する処理
module.exports = {
    plugins: plugins,
    presets: [
        [
            "@vue/app",
            {
                useBuiltIns: "entry",
                polyfills: ["es6.promise", "es6.symbol"],
            },
        ],
    ],
    comments: false,
};
