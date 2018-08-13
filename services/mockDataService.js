angular
    .module('playboxModule')
    .factory('mockDataService', MockDataService);

MockDataService.$inject = ['$http'];


function MockDataService($http) {

    return {
        loadData: loadData
    };

    function loadData() {
        return $http.get('/data/mockData10000.csv').then(
            function (response) {
                return csvToJSON(response.data);
            });
    }

    function csvToJSON(csv) {
        var lines = csv.split("\n");
        var result = [];
        var headers = lines[0].split(",");
        for (var i = 1; i < lines.length - 1; i++) {
            var obj = {};
            var currentline = lines[i].split(",");
            for (var j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j];
            }
            result.push(obj);
        }

        return result;
    }


}
