module.exports = function(api) {
    api.cache(false);
    const presets = [
        [
            '@babel/preset-env',
            {
                useBuiltIns: 'entry',
                corejs: { version: '3.3' }
                //debug: true
            }
        ]
    ];

    let plugins = [
        [
            'transform-react-jsx',
            {
                pragma: 'm'
            }
        ],
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-transform-runtime'
    ];
    return {
        presets,
        plugins
    };
};
