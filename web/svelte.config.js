const path = require('path')
const sass = require('node-sass')

const prepend_content = '@import "essence";\n'

module.exports = {
    preprocess: {
        style: async ({ content, attributes, filename }) => {
            const { type, lang } = attributes
            if (type !== 'text/scss' && lang !== 'scss') return
            data = prepend_content + content

            return new Promise((resolve, reject) => {
                sass.render(
                    {
                        data,
                        sourceMap: 'style.css.map',
                        omitSourceMapUrl: true,
                        includePaths: [
                            path.dirname(filename),
                            path.join(__dirname, 'node_modules'),
                            path.resolve(__dirname, '../src'),
                        ],
                        outFile: 'x',
                    },
                    (err, res) => {
                        if (err) return reject(err)
                        resolve({
                            code: res.css.toString(),
                            map: res.map.toString(),
                        })
                    }
                )
            })
        },
    },
}
