'use strict';
var demo = angular.module('demo', ['angular-d3-cluster']);

demo.controller('DemoController', function($scope, $timeout) {
    $scope.option = {
        subjectRange: [35, 45],
        arounderRange: [15, 25]
    };
    $scope.data = [{
        name: 'Subject01',
        value: 10.0,
        children: [{
            name: '01-01', //arounder
            value: -5.1
        }, {
            name: '01-02',
            value: 3.1
        }]
    }, {
        name: 'Subject02',
        value: 12.5,
        children: [{
            name: '02-01', //arounder
            value: 3.1
        }, {
            name: '02-02',
            value: 6.1
        }]
    }];
});
