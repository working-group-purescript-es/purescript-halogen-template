const path = require('path')
const { env } = require('process')

module.exports = (env) => {
    console.log(env.bundleName)
    return {
        entry: './dev/index.js',
        output: {
            path: path.resolve(__dirname, env.bundleFolder),
            filename: env.bundleName,
        },
    }
}
