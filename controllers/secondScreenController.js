'use strict';

angular.module('playboxModule').controller('secondScreenController',
    ['$stateParams', '$scope', 'mockDataService', function ($stateParams, $scope, mockDataService) {
        var ctrl = this;
        var toFilter, lcFilter;
        ctrl.param = $stateParams.param;
        ctrl.data = [];
        ctrl.filter = '';
        ctrl.cvFilter = '';


        /** init */

        ctrl.init = function () {
            console.log("secondScreenController init");

            mockDataService.loadData().then(function (data) {



           /* // generate some random data
            var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
                data = [];
            for (var i = 0; i < 100; i++) {
                data.push({
                    id: i,
                    country: countries[i % countries.length],
                    date: new Date(2014, i % 12, i % 28),
                    amount: Math.random() * 10000,
                    active: i % 4 == 0
                });
            }*/

            // add data array to scope
            ctrl.data = data;


            ctrl.cvFilter = new wijmo.collections.CollectionView(data);
            ctrl.cvFilter.filter = function (item) { // ** filter function
                if (!ctrl.filter) {
                    return true;
                }

                var andfound = true;

                // and all serch terms.
                for (const filter of lcFilter.split(/\s+/)) {

                    // or all fields
                    var orfound = false;
                    for (const value of Object.values(item)) {
                        orfound = orfound || value.toLowerCase().indexOf(filter) > -1
                    }
                    andfound = andfound && orfound;
                }

                return andfound;

            };
            ctrl.cvFilter.pageSize = 20;


            })


        };

        /** Controller functions */

        ctrl.filterChanged = function () { // ** refresh view when filter changes
            if (toFilter) {
                clearTimeout(toFilter);
            }
            toFilter = setTimeout(function () {
                lcFilter = ctrl.filter.toLowerCase();
                ctrl.cvFilter.refresh();
                ctrl.results = ctrl.cvFilter.totalItemCount;
            }, 50);
        };

        ctrl.setValue = function () {
            helperFunction();
        };


        /** private functions */

        function helperFunction() {

        }

    }]);

