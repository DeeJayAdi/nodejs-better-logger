# NodeJS Better Logger

## Instalation

`npm install nodejs-better-logger`

## Usage

### Example 1

```js
const BetterLogger = require("nodejs-better-logger");

BetterLogger.config();

console.log("OK");
console.warn("WARN");
console.error("ERROR");
console.sucess("SUCESS");
```

### Example 2

```js
require("nodejs-better-logger").config();

console.log("OK");
console.warn("WARN");
console.error("ERROR");
console.sucess("SUCESS");
```

### Example 3

```js
const BetterLogger = require("nodejs-better-logger");

BetterLogger.log("OK");
BetterLogger.warn("WARN");
BetterLogger.error("ERROR");
BetterLogger.sucess("SUCESS");
```
