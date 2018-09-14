# GCF Config
This is a reusable configuration module to leverage ENV vars for app configuration

# Installation
```
npm install gcf-config
yarn add gcf-config
```

# Usage
## Node
``` javascript
const conf = require("gcf-config");

// instantiate: assume ENV var API_KEY exists
const config = new conf.Config({
    apiKey: "API_KEY"
});

// access
const baseUrl = `https://api.google.com`;
const url = `${baseUrl}?api_key=${config.get("apiKey")}`;

console.log(`URL: ${url}`);
```

## Typescript
``` typescript
import {Config, IConfig} from "gcf-config";

// instantiate: assume ENV var API_KEY exists
const config: IConfig<string> = new Config({
    apiKey: "API_KEY"
});

// access
const baseUrl: string = `https://api.google.com`;
const url: string = `${baseUrl}?api_key=${config.get("apiKey")}`;
```

# Testing
```
npm test
npm run coverage
```

# Build (compiles Typescript to JS)
```
npm run build
```

