#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

console.log('NPM_CONFIG_DEPCAP', process.env.NPM_CONFIG_DEPCAP)

const findAppDir = async (dir = __dirname) => {
  if (fs.existsSync(path.resolve(dir, 'node_modules'))) {
    return dir
  }

  const newDir = path.resolve(dir, '..')
  if (newDir === dir) {
    throw new Error('App root directory is not found. Are you running this as a dependency?')
  }

  return findAppDir(newDir)
}

const run = async () => {
  const appDir = await findAppDir()
  const pkg =
  console.log(appDir)
}

run()
