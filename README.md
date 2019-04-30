# depcap

Limit the number of dependencies through linting.

### Installation

Install through npm:

```
npm i -D depcap
```

### Run

Somewhere in your linting process, add the command `depcap`.

package.json
```
{
  ...
  "scripts": {
    "lint": "depcap"
  }
  ...
}
```

### Configure

By default, the limit is `10` direct dependencies, individually through `dependencies`, `devDependencies`, similar. You can configure the limit in your `package.json` file under the `depcap` property. You can read more about the dependency types at the [npm docs](https://docs.npmjs.com/files/package.json#dependencies).

##### Global Limit

To set the global limit, set the prop to an integer. The following update to your `package.json` file would set all the dependency limits to `3`.

```
{
  ...
  "depcap": 3
  ...
}
```

##### Individual Limit

To set the individual limit, set the prop to an object. The following update to your `package.json` file would set `dependencies` to `5` and `peerDependencies` to `1`. All other dependencies would default to `10`.

```
{
  ...
  "depcap": {
    "dependencies": 5,
    "peerDependencies": 1
  }
  ...
}
```

### License

MIT
