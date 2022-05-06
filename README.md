<p align="center">
<img src="https://app.currencyapi.com/img/logo/currencyapi.png" width="300"/>
</p>

# currencyapi-js: JS Currency Converter

This package is a JavaScript wrapper for [currencyapi.com] that aims to make the usage of the API as easy as possible in your project.

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

```js
import CurrencyAPI from '@everapi/currencyapi-js';
```

or use it directly in a Browser:

```html
<script src="path/to/currencyapi-js/index.js"></script>
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

Endpoints accessible with a free account:
- `status`
- `currencies`
- `latest`
- `historical`

These advanced endpoints currently require a paid subscription:
- `convert`
- `range`

Find out more about our endpoints, parameters and response data structure in the [docs]

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

[docs]: https://currencyapi.com/docs
[currencyapi.com]: https://currencyapi.com
