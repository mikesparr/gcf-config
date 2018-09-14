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
const Config = require("gcf-config");

// instantiate: assume ENV var API_KEY exists
const config = new Config({
    apiKey: "API_KEY"
});

// access
const url = `${someUrl}?api_key=${config.get("apiKey")}`;
```

## Typescript
``` typescript
import {Config, IConfig} from "gcf-config";

// instantiate: assume ENV var API_KEY exists
const config: IConfig<string> = new Config({
    apiKey: "API_KEY"
});

// access
const url: string = `${someUrl}?api_key=${config.get("apiKey")}`;
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

