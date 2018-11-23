# Syncano Socket for intercom integration

[![Syncano Socket](https://img.shields.io/badge/syncano-socket-blue.svg)](https://syncano.io)
[![CircleCI branch](https://img.shields.io/circleci/project/github/eyedea-io/syncano-socket-intercom-integration/master.svg)](https://circleci.com/gh/eyedea-io/syncano-socket-intercom-integration/tree/master)
[![Codecov branch](https://img.shields.io/codecov/c/github/eyedea-io/syncano-socket-intercom-integration/master.svg)](https://codecov.io/github/eyedea-io/syncano-socket-intercom-integration/)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![npm](https://img.shields.io/npm/dw/@eyedea-sockets/syncano-socket-intercom-integration.svg)](https://www.npmjs.com/package/@eyedea-sockets/syncano-socket-intercom-integration)
![license](https://img.shields.io/github/license/eyedea-io/syncano-socket-intercom-integration.svg)

Main Socket features:

* **intercom/user-hash** — create user hash

## Getting Started

Install package in your project:

```sh
cd my_project
npm install @syncano/cli --save-dev
npm install @eyedea-sockets/<name> --save
npx s deploy
```

Use it:

```js
import Syncano from '@syncano/client'

const s = new Syncano(<instaneName>)

s.setToken(<userToken>)

const suggestions = await s.post('intercom/user-hash')
```
