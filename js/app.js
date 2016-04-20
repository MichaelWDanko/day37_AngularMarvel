/* jslint browser: true */
/* jslint esnext: true */
var angular = require('angular');
var mainApp = angular.module('MarvelSuperHeroApp', []);

mainApp.controller('MainController', function ($scope, $http) {
    $scope.name = 'Mike';
    $scope.heroes = [];
    $scope.current = {
        name: '',
        url: '',
        id: '',
        event0: '',
        event1: '',
        event2: '',
        event3: '',
        event4: '',

        info1: '',
        info2: '',
        info3: '',
        info4: '',
        info5: '',
    };
    $scope.getDetails = function (hero) {
        console.log('Clicked on ' + hero.name + ' who has the ID: ' + hero.id);
        $scope.current.name = hero.name;
        $scope.current.url = (hero.thumbnail.path + '/landscape_incredible.' + hero.thumbnail.extension);
        $scope.current.id = hero.id;
        $http({
            method: 'get',
            url: "http://gateway.marvel.com:80/v1/public/characters/" + hero.id + "/events?apikey=0e7466623241b56d92fc74e4d5039354",
        }).then(function (response) {
            if (response.data.data.results[0] !== undefined) {
                $scope.current.event0 = response.data.data.results[0].title;
                $scope.current.info0 = response.data.data.results[0].description;
            } else {
                $scope.current.event0 = '';
                $scope.current.info0 = '';
            }
            if (response.data.data.results[1] !== undefined) {
                $scope.current.event1 = response.data.data.results[1].title;
                $scope.current.info1 = response.data.data.results[1].description;
            } else {
                $scope.current.event1 = '';
                $scope.current.info1 = '';
            }
            if (response.data.data.results[2] !== undefined) {
                $scope.current.event2 = response.data.data.results[2].title;
                $scope.current.info2 = response.data.data.results[2].description;
            } else {
                $scope.current.event2 = '';
                $scope.current.info2 = '';
            }
            if (response.data.data.results[3] !== undefined) {
                $scope.current.event3 = response.data.data.results[3].title;
                $scope.current.info3 = response.data.data.results[3].description;
            } else {
                $scope.current.event3 = '';
                $scope.current.info3 = '';
            }
            if (response.data.data.results[4] !== undefined) {
                $scope.current.event4 = response.data.data.results[4].title;
                $scope.current.info4 = response.data.data.results[4].description;
            } else {
                $scope.current.event4 = '';
                $scope.current.info4 = '';
            }
            return response;
        });
    };

    $http({
        method: 'get',
        //          url: 'http://gateway.marvel.com:80/v1/public/characters?apikey=ea904943b774d2e0bf732697141a07da&limit=20',
        url: 'http://gateway.marvel.com:80/v1/public/characters?apikey=0e7466623241b56d92fc74e4d5039354&limit=6',
    }).then(function (response) {
        console.log('hello');
        console.log(response.data.data.results);
        $scope.heroes = response.data.data.results;
    });



});
