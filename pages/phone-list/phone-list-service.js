angular.module('playboxServices').factory('stockService', ['$http',
    function ($http) {

        function _getStockList() {
            return _getUrlPromise('/data/phone-list/stocklist.json')
                .then(function (response) {
                    return response.data;
                });
        }

        function _getUrlPromise(url) {
            return $http.get(url);
        }

        function _getStock(item) {

            var url = "/api/rest.svc/timeseries_price/wgashqk908?currencyId=EUR&idtype=Morningstar&frequency=daily&startDate=1970-01-01&priceType=&outputType=COMPACTJSON&id=" + item.id;

            return _getUrlPromise(url)
                .then(_convertData)
                .then(function (data) {
                    return {
                        data: data,
                        name: item.name,
                        id: item.id,
                        isin: item.isin
                    };
                });
        }


        function _convertData(response) {
            var chartData = [];

            response.data.forEach(function (data_date, index) {
                chartData.push({
                    date: new Date(data_date[0]),
                    value: data_date[1]
                });
            });

            return chartData;
        }

        return {

            getStock: _getStock,
            getStockList: _getStockList
        }
    }
]);