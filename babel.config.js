const pjson = require('./package.json');

module.exports = function(api) {
    api.cache(true);
    const presets = ["@babel/env", "@babel/preset-react"];
    const plugins = [
        [
            "babel-plugin-styled-components",
            {
                "namespace": pjson.name,
                "displayName": false,
                "fileName": false
            }
        ],
        [
            "@babel/plugin-proposal-class-properties",
            {
                "loose": true
            }
        ]
    ];
    return {
        presets,
        plugins
    };
}