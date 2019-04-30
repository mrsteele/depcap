#!/usr/bin/env node
const path = require('path')

const defaultLimit = 10
const defaultLimits = {
  dependencies: defaultLimit,
  devDependencies: defaultLimit,
  optionalDependencies: defaultLimit
}
const depArr = [
  'dependencies',
  'devDependencies',
  'optionalDependencies'
]

const parseConfig = (config) => {
  if (Number.isInteger(config)) {
    return {
      dependencies: config,
      devDependencies: config,
      optionalDependencies: config
    }
  } else if (!Array.isArray(config) && typeof config === 'object') {
    return {
      ...defaultLimits,
      ...config
    }
  }

  return defaultLimits
}

const run = async () => {
  console.log('Testing dependency size with "depcap"...')

  const pkg = require(path.resolve(process.env.INIT_CWD, 'package.json'))
  const limits = parseConfig(pkg.depcap)
  depArr.forEach(dep => {
    if (pkg[dep]) {
      const length = Object.keys(pkg[dep]).length
      const limit = limits[dep]
      if (length > limit) {
        throw new Error(`You are using "${length}" ${dep}, which excedes the limit of "${limit}"`)
      }
    }
  })

  console.log('PASSED')
}

run()
