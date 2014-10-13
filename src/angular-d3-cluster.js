/**
 * angular-d3-cluster is a simple cluster chart directive.
 *
 * @author Howard.Zuo
 * @date   Oct 13th, 2014
 *
 **/
(function(angular, global, doc, d3) {
    'use strict';


    var preventDefault = function(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        }
        if (e.preventDefault) {
            e.preventDefault();
        }
    };


    var dir = function($timeout) {
        return {
            restrict: 'E',
            scope: {
                option: '=',
                data: '='
            },
            link: function($scope, element) {

                var $doc = angular.element(doc);

            }
        };
    };

    mod.directive('ngCluster', [dir]);


}(angular, window, document));
