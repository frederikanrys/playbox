angular.module('playboxDirectives').directive('stock',['$timeout',
    function($timeout) {


        function link($scope, element, attrs) {

            $scope.$watch(attrs.stock, function(value, oldvalue, $scope) {

                $timeout(function($scope) { // You might need this timeout to be sure its run after DOM render.

                    if ($scope.stock && $scope.stock.id) {

                        AmCharts.makeChart($scope.stock.id, {

                            type: "stock",
                            "theme": "light",

                            dataSets: [{
                                color: "#b0de09",
                                fieldMappings: [{
                                    fromField: "value",
                                    toField: "value"
                                }],
                                dataProvider: $scope.stock.data,
                                categoryField: "date"
                            }],

                            panels: [{
                                showCategoryAxis: true,
                                title: $scope.stock.isin,
                                eraseAll: false,

                                stockGraphs: [{
                                    id: "g1",
                                    valueField: "value",
                                    useDataSetColors: false
                                }],


                                stockLegend: {
                                    valueTextRegular: " ",
                                    markerType: "none"
                                },

                                drawingIconsEnabled: true
                            }],

                            chartScrollbarSettings: {
                                graph: "g1"
                            },
                            chartCursorSettings: {
                                valueBalloonsEnabled: true
                            },
                            periodSelector: {
                                position: "bottom",
                                periods: [{
                                    period: "MM",
                                    count: 1,
                                    label: "1 month"
                                }, {
                                    period: "YYYY",
                                    count: 1,
                                    label: "1 year"
                                }, {
                                    period: "YYYY",
                                    count: 2,
                                    label: "2 year"
                                }, {
                                    period: "YYYY",
                                    count: 3,
                                    label: "3 year"
                                }, {
                                    period: "YYYY",
                                    count: 5,
                                    label: "5 year"
                                }, {
                                    period: "YTD",
                                    label: "YTD",
                                    selected: true,
                                }, {
                                    period: "MAX",
                                    label: "MAX"
                                }]
                            }

                        });
                    }



                }, 0, false, $scope);
            });



        };

        return {
            restrict: 'A',
            scope: {
                stock: '='
            },
            template: '<div class="stockchart"><h2>{{stock.name}}</h2><div id={{stock.id}} class="chart"></div></div>>',
            link: link
        };
    }
]);