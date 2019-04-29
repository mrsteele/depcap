#!/usr/bin/env node
const run = async () => {
  console.log('name', process.env.npm_package_name)
  console.log('version', process.env.npm_package_version)
  console.log('dependencies', process.env.npm_package_dependencies)
}

run()
