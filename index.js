#!/usr/bin/env node
const run = async () => {
  console.log('name', process.env.npm_package_name)
  console.log('version', process.env.npm_package_version)
  console.log('dependencies', process.env.npm_package_dependencies)

  const {
    npm_package_dependencies,
    npm_config_depcap
  } = process.env

  console.log('Testing dependency size with "depcap"...')
  if (npm_package_dependencies) {
    const limit = parseInt(npm_config_depcap) || 10
    const size = Object.keys(npm_package_dependencies)
    if (size > limit) {
      throw new Error(`You are using "${size}" dependencies, which excedes the limit of "${limit}"`)
    }
  }

}

run()
