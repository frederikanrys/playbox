angular.module('playboxControllers').controller('stockController', ['$scope', '$http', 'stockService',
    function ($scope, $http, stockService) {


        $scope.stockList = [];

        fetchData();

        function fetchData() {

            stockService.getStockList().then(
                function (data) {
                    data.forEach(function (item, index) {

                        fetchStockItem(item);
                    })
                },
                function (error) {
                    console.log("Fetching list of stock items Failed!", error);

                });
        }


        function fetchStockItem(item) {

            stockService.getStock(item).then(
                function (stock) {
                    $scope.stockList.push(stock);
                },
                function (error) {
                    console.log("Fetching stock item Failed!", error);
                });
        }
    }

]);
