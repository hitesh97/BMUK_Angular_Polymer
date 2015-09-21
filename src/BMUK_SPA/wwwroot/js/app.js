var app = angular.module('StarterApp', ['ngRoute', 'ngMaterial', 'ngMdIcons', 'md.data.table']);

app.config(function ($mdThemingProvider) {
    var customBlueMap = $mdThemingProvider.extendPalette('light-blue', {
        'contrastDefaultColor': 'light',
        'contrastDarkColors': ['50'],
        '50': 'ffffff'
    });
    $mdThemingProvider.definePalette('customBlue', customBlueMap);
    $mdThemingProvider.theme('default')
      .primaryPalette('customBlue', {
          'default': '500',
          'hue-1': '50'
      })
      .accentPalette('pink');
    $mdThemingProvider.theme('input', 'default')
      .primaryPalette('grey')
});

// configure our routes
app.config(function ($routeProvider) {
    $routeProvider
        // route for the List Members page
        .when('/ListMembers', {
            templateUrl: 'partials/ListMembers.html',
            controller: 'appController'
        })

        // route for the about page
        .when('/CreateHead', {
            templateUrl: 'partials/CreateHead.html',
            controller: 'appController'
        })

        // route for the contact page
        .when('/view3', {
            templateUrl: 'partials/view3.html',
            controller: 'appController'
        })
        // route for the contact page
        .when('/', {
            templateUrl: 'partials/ListMembers.html',
            controller: 'appController'
        }).otherwise({ redirectTo: "/" });
});