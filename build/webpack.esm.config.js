const path = require('path');

module.exports = {
    entry: './src/hiveLanguageService.ts',
    output: {
        path: path.resolve(__dirname, '../lib/esm'),
        library: 'hiveLanguageService',
        filename: 'hiveLanguageService.js',
        libraryTarget: 'umd2',
        globalObject: "this",
    },
    mode: 'production',
    node: {
        fs: 'empty'
    },
    module: {
        rules: [
            {test: /\.tsx?$/, loader: 'ts-loader'}
        ]
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js']
    }
};
