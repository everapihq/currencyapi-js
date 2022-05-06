'use strict';

class CurrencyAPI {
    baseUrl = 'https://api.currencyapi.com/v3/';

    constructor(apiKey = '') {
        this.headers = {
            apikey: apiKey
        };
    }

    call (endpoint, params = {}) {
        const paramString = new URLSearchParams({
            ...params
        }).toString();

        return fetch(`${this.baseUrl}${endpoint}?${paramString}`, { headers: this.headers })
            .then(response => response.json())
            .then(data => {
                return data;
            });
    }

    status () {
        return this.call('status');
    }

    currencies (params) {
        return this.call('currencies', params);
    }

    latest (params) {
        return this.call('latest', params);
    }

    historical (params) {
        return this.call('historical', params);
    }

    range (params) {
        return this.call('range', params);
    }

    convert (params) {
        return this.call('convert', params);
    }
}

export default CurrencyAPI;
