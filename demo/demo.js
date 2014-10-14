'use strict';
var demo = angular.module('demo', ['angular-d3-cluster']);

demo.controller('DemoController', function($scope, $timeout) {
    $scope.option = {
        subjectRange: [15, 30],
        arounderRange: [5, 15]
    };
    $scope.data = [{
        name: '中兴',
        value: 10.0,
        children: [{
            name: '泰康',
            value: -5.1
        }, {
            name: '国贸',
            value: 3.1
        }]
    }, {
        name: '平安',
        value: 12.5,
        children: [{
            name: '人寿',
            value: 3.1
        }, {
            name: '银行',
            value: 6.1
        }]
    }];
    $timeout(function() {
        $scope.data = [{
            name: '国资',
            value: 10.0,
            children: [{
                name: '角瓜',
                value: -2.1
            }, {
                name: '新华',
                value: 3.256
            }]
        }, {
            name: '您拨',
            value: 11.2,
            children: [{
                name: '神马',
                value: 4.8
            }, {
                name: '就行',
                value: 5.1
            }]
        }, {
            name: '中兴',
            value: 10.0,
            children: [{
                name: '泰康',
                value: -5.1
            }, {
                name: '国贸',
                value: 3.1
            }]
        }, {
            name: '平安',
            value: 12.5,
            children: [{
                name: '人寿',
                value: 3.1
            }, {
                name: '银行',
                value: 6.1
            }]
        }];
    }, 5000);

});
