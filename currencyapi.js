(function (root) {
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

    // Export for both the CommonJS and browser-like environment
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = CurrencyAPI;
    } else {
        root.CurrencyAPI = CurrencyAPI;
    }
}(this));

