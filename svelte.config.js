const path = require('path')
const sass = require('node-sass')

const prepend_content = '@import "helpers";\n'

module.exports = function(dir = __dirname) {
  return {
    preprocess: {
      style: async ({ content, attributes, filename }) => {
        const { type, lang } = attributes
        if (type !== 'text/scss' && lang !== 'scss') return
        content = prepend_content + content

        return new Promise((resolve, reject) => {
          sass.render(
            {
              data: content,
              sourceMap: 'style.css.map',
              omitSourceMapUrl: true,
              includePaths: [
                path.dirname(filename),
                path.join(dir, 'node_modules'),
                path.resolve(__dirname, 'css'),
              ],
              outFile: 'x',
            },
            (err, result) => {
              if (err) return reject(err)
              resolve({
                code: result.css.toString(),
                map: result.map.toString(),
              })
            }
          )
        })
      },
    },
  }
}
