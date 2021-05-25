angular.module("meanGuitars", ["ngRoute"]).config(appConfig);

function appConfig($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/guitar-list/guitar-list.html",
            controller: "GuitarListController",
            controllerAs: "guitarListCtrl"
        })
        .otherwise({
            redirectTo: "/"
        })
}