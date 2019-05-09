# Steps to reproduce

1. Clone this repo
2. Run `npm install`
3. Run `npm run build`
4. Run `node dist/index.js`

# Expected result:

No errors.

# Actual result:

```
$ node dist/index.js
internal/modules/cjs/loader.js:582
    throw err;
    ^

Error: Cannot find module 'tslib'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:580:15)
    at Function.Module._load (internal/modules/cjs/loader.js:506:25)
    at Module.require (internal/modules/cjs/loader.js:636:17)
    at require (internal/modules/cjs/helpers.js:20:18)
    at Object.<anonymous> (/Users/n636563/Repositories/typesafe-actions-tslib-dependency/node_modules/typesafe-actions/dist/index.js:5:15)
    at Module._compile (internal/modules/cjs/loader.js:688:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:699:10)
    at Module.load (internal/modules/cjs/loader.js:598:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:537:12)
    at Function.Module._load (internal/modules/cjs/loader.js:529:3)
```

# Further information

If you run `npm add tslib` and then run `node dist/index.js` again the error disappears.
