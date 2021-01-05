const fs = require('fs')

function deleteFolder(filePath) {
  if (fs.existsSync(filePath)) {
    const files = fs.readdirSync(filePath)
    files.forEach((file) => {
      const nextFilePath = `${filePath}/${file}`
      const states = fs.statSync(nextFilePath)
      if (states.isDirectory()) {
        //recurse
        deleteFolder(nextFilePath)
      } else {
        //delete file
        fs.unlinkSync(nextFilePath)
      }
    })
    fs.rmdirSync(filePath)
  }
}

function updateBabelConfig(rcPath, pkgPath, callback) {
  // const rcPath = api.resolve('./.eslintrc.js')
  // const pkgPath = api.resolve('./package.json')
  let config, configPath
  if (fs.existsSync(rcPath)) {
    configPath = rcPath
    config = callback(require(rcPath))
  } else if (fs.existsSync(pkgPath)) {
    configPath = pkgPath
    config = JSON.parse(fs.readFileSync(pkgPath, { encoding: 'utf8' }))
    config.babel = callback(config.babel || {})
  }

  if (configPath) {
    const moduleExports = configPath !== pkgPath ? 'module.exports = ' : ''
    fs.writeFileSync(
      configPath,
      `${moduleExports}${JSON.stringify(config, null, 2)}`,
      { encoding: 'utf8' }
    )
  }
}

function updateEslintRuleConfig(configPath) {
  if (fs.existsSync(configPath)) {
    const { EOL } = require('os')
    const fs = require('fs')
    const contentMain = fs.readFileSync(configPath, { encoding: 'utf-8' })
    const lines = contentMain.split(/\r?\n/g)

    const renderIndex = lines.findIndex((line) => line.match(/rules/))
    lines[
      renderIndex
    ] += `${EOL}    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'warn' : 'off',`

    fs.writeFileSync(configPath, lines.join(EOL), { encoding: 'utf-8' })
  }
}

module.exports = {
  deleteFolder,
  updateEslintRuleConfig,
}
