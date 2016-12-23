angular.module("bapsnagpur.states", ['ngAnimate', 'ui.bootstrap'])
        .config(function ($stateProvider, templateRoot, $sceDelegateProvider) {
//            $stateProvider.state('corporate_site', {
//                'url': '/corporate_site',
//                'templateUrl': templateRoot + '/corporate_site.html',
//                'controller': 'CorporateSiteController'
//            });
//            $stateProvider.state('corporate_site.home', {
//                'url': '/home',
//                'templateUrl': templateRoot + '/corporate_site/home.html',
//                'controller': 'HomeController'
//            });

            $stateProvider.state('main.logout', {
                'url': '/logout',
                'templateUrl': templateRoot + '/logout.html',
                'controller': 'LogoutController'
            });
            $stateProvider.state('main', {
                'url': '/main',
                'templateUrl': templateRoot + '/main.html',
                'controller': 'MainController'
            });
            $stateProvider.state('main.masters', {
                'url': '/masters',
                'templateUrl': templateRoot + '/masters/menu.html'
            });
            $sceDelegateProvider.resourceUrlWhitelist([
                'https://www.youtube.com/embed/**'
            ]);
        })
        .controller('MainController', function ($scope, $state, $window) {
//            $scope.introVideo = VideoService.findIntroVideo();
//            var parrentDiv = $('#parrentDiv');
//            parrentDiv.removeClass();
//            parrentDiv.addClass('bg-city-spcl');
        });
//        .controller('HomeController', function ($scope) {
//
//            $scope.myInterval = 2000;
//            $scope.noWrapSlides = false;
//            $scope.active = 0;
//            $scope.slides = [
//                {
//                    image: 'images/banner.jpg',
//                    text: 'To take an Informed Decision'
//                },
//                {
//                    image: 'images/banner.jpg'
//                },
//                {
//                    image: 'images/banner.jpg'
//                }
//            ];
//        })
//        .controller('CorporateSiteController', function ($scope, $state, $stateParams, $timeout) {
//            $scope.username = $stateParams.username;
//            $scope.message = $stateParams.message;
//            $scope.error = $stateParams.error;
//            $timeout(function () {
//                $scope.message = false;
//            }, 3000);
//            $scope.login = function (username, password) {
//                UserService.login({
//                    'username': username,
//                    'password': password
//                }, function () {
//                    if (username === "guest" && password === "guest") {
//                        $state.go("corporate_site.home", {reload: 'true'});
//                    } else {
//                        $state.go("admin.masters");
//                    }
//                }, function () {
//                    $scope.error = "Login Failed. Invalid Credentials.";
//                });
//            };
//            $scope.guestLogin = function () {
//                $scope.login("guest", "guest");
//            };
//        });

