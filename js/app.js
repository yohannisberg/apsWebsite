angular.module('apsApp', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('home',{
                url:'/',
                templateUrl: "./views/home.html",
                controller: "homeCtrl"
            })

            .state('about', {
              url: '/about',
              templateUrl: './views/about.html'
            })

            .state('shows', {
              url: '/shows',
              templateUrl: './views/shows.html',
              controller: 'showsCtrl'
            })

            .state('weather', {
              url: '/shows/:zip',
              templateUrl: './views/weather.html',
              controller: 'weatherCtrl'
            })

            .state('music', {
              url: '/music',
              templateUrl: './views/music.html',
              controller: 'musicCtrl'
            })

            .state('album', {
              url: '/music/:title',
              templateUrl: './views/album.html',
              controller: 'albumCtrl'
            });


        $urlRouterProvider
            .otherwise('/');
    });
