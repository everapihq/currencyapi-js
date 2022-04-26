# currencyapi-js: CurrencyAPI JavaScript wrapper

This package aims to make the usage of [currencyapi.com]'s API as easy as possible in your JavaScript/node project.

## Installation

### npm
```shell
npm install --save @everapi/currencyapi-js
```
### yarn
```shell
yarn add @everapi/currencyapi-js
```

## Import

ECMAScript:
```js
import CurrencyAPI from '@everapi/currencyapi-js';
```
CommonJS:
```js
const CurrencyAPI = require('@everapi/currencyapi-js');
```

or use it directly in a Browser:

```html
<script src="path/to/currencyapi-js/currencyapi.js"></script>
```

## Usage

Initialize the API with your API Key (get one for free at [currencyapi.com]):

```js
const currencyApi = new CurrencyAPI('YOUR-API-KEY');
```

Afterwards you can make calls to the API like this:

```js
currencyApi.latest({
        base_currency: 'USD',
        currencies: 'EUR'
    }).then(response => {
        console.log(response);
    });
```

Find out more about our endpoints, parameters and data structure in the [docs]

[docs]: https://currencyapi.com/docs
[currencyapi.com]: https://currencyapi.com/docs
