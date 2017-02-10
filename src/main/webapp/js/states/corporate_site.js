angular.module("bapsnagpur.states.corporate_site", [])
        .config(function ($stateProvider, templateRoot) {
            $stateProvider
                    .state('corporate_site', {
                        'url': '/corporate_site',
                        'templateUrl': templateRoot + '/corporate_site.html',
                        'controller': 'CorporateSiteController'
                    })
                    .state('corporate_site.home', {
                        'url': '/home',
                        'templateUrl': templateRoot + '/corporate_site/home.html',
                        'controller': 'HomeController'
                    })
                    .state('corporate_site.intro_baps_home', {
                        'url': '/intro_baps_home',
                        'templateUrl': templateRoot + '/corporate_site/introduction_baps_home.html',
                        'controller': 'IntroBapsHomeController'
                    })
                    .state('corporate_site.baps', {
                        'url': '/baps',
                        'templateUrl': templateRoot + '/corporate_site/baps.html',
                        'controller': 'BapsController'
                    })
                    .state('corporate_site.nagpur_mandir', {
                        'url': '/nagpur_mandir',
                        'templateUrl': templateRoot + '/corporate_site/nagpur_mandir.html',
                        'controller': 'NagpurMandirController'
                    })
                    .state('corporate_site.baps_international_centers_home', {
                        'url': '/baps_international_centers_home',
                        'templateUrl': templateRoot + '/corporate_site/baps_international_centers_home.html',
                        'controller': 'BapsInternationalCentersHomeController'
                    })
                    .state('corporate_site.delhi_akshardham', {
                        'url': '/delhi_akshardham',
                        'templateUrl': templateRoot + '/corporate_site/delhi_akshardham.html',
                        'controller': 'DelhiAkshardhamController'
                    })
                    .state('corporate_site.gandhinagar_akshardham', {
                        'url': '/gandhinagar_akshardham',
                        'templateUrl': templateRoot + '/corporate_site/gandhinagar_akshardham.html',
                        'controller': 'GandhiNagarAkshardhamController'
                    })
                    .state('corporate_site.newjersey_akshardham', {
                        'url': '/newjersey_akshardham',
                        'templateUrl': templateRoot + '/corporate_site/newjersey_akshardham.html',
                        'controller': 'NewJerseyAkshardhamController'
                    })
                    .state('corporate_site.international_centers', {
                        'url': '/international_centers',
                        'templateUrl': templateRoot + '/corporate_site/international_centers.html',
                        'controller': 'InternationalCentersController'
                    })
                    .state('corporate_site.bhagwan_swaminarayan_introduction', {
                        'url': '/bhagwan_swaminarayan_introduction',
                        'templateUrl': templateRoot + '/corporate_site/bhagwan_swaminarayan_introduction.html',
                        'controller': 'BhagwanSwaminarayanIntroductionController'
                    })
                    .state('corporate_site.mandir', {
                        'url': '/mandir',
                        'templateUrl': templateRoot + '/corporate_site/mandir.html',
                        'controller': 'MandirController'
                    })
                    .state('corporate_site.sacred_murti_timings', {
                        'url': '/sacred_murti_timings',
                        'templateUrl': templateRoot + '/corporate_site/sacred_murti_timings.html',
                        'controller': 'SacredMurtiTimingsController'
                    })
                    .state('corporate_site.abhishek_mandapam', {
                        'url': '/abhishek_mandapam',
                        'templateUrl': templateRoot + '/corporate_site/abhishek_mandapam.html',
                        'controller': 'AbhishekMandapamController'
                    })
                    .state('corporate_site.baps_products_facilities', {
                        'url': '/baps_product_facilities',
                        'templateUrl': templateRoot + '/corporate_site/baps_products_facilities.html',
                        'controller': 'BapsProductFacilitiesController'
                    })
                    .state('corporate_site.children_activities', {
                        'url': '/children_activities',
                        'templateUrl': templateRoot + '/corporate_site/children_activities.html',
                        'controller': 'ChildrenActivitiesController'
                    })
                    .state('corporate_site.swaminarayan_school', {
                        'url': '/swaminarayan_school',
                        'templateUrl': templateRoot + '/corporate_site/swaminarayan_school.html',
                        'controller': 'SwaminarayanSchoolController'
                    })
                    .state('corporate_site.weekly_satsang_assembly', {
                        'url': '/weekly_satsang_assembly',
                        'templateUrl': templateRoot + '/corporate_site/weekly_satsang_assembly.html',
                        'controller': 'WeeklySatsangAssemblyController'
                    })
                    .state('corporate_site.facts_figures', {
                        'url': '/facts_figures',
                        'templateUrl': templateRoot + '/corporate_site/facts_figures.html',
                        'controller': 'FactsFiguresController'
                    });
        })

        .controller('CorporateSiteController', function ($scope, $stateParams, $state, $location) {
//            var parrentDiv = $('#parrentDiv');
//            parrentDiv.removeClass();
//            parrentDiv.addClass('bg-site');
//            $scope.hidden = true;
//
//            $scope.gotoTop = function () {
//                $location.hash('top');
//                $anchorScroll();
//            };
        })
        .controller('HomeController', function ($scope) {
            console.log("Hello Kunal");
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
        })
        .controller('IntroBapsHomeController', function ($scope) {
            console.log("Hello Intro BAPS Controller");
        })
        .controller('BapsController', function ($scope) {
            console.log("Hello BAPS Controller");
            $scope.myInterval = 2000;
            $scope.noWrapSlides = false;
            $scope.active = 0;
            $scope.slides = [
                {
                    image: 'images/bapa.jpg',
                    text: 'His Holiness Pramukh Swami Maharaj'
                },
                {
                    image: 'images/bhagwan-swaminarayan1.jpg'
                },
                {
                    image: 'images/baps_1.jpg'
                },
                {
                    image: 'images/baps_2.jpg'
                },
                {
                    image: 'images/baps_3.jpg'
                }
            ];
        })
        .controller('NagpurMandirController', function ($scope) {
            console.log("Hello Nagpur Mandir Controller");
            $scope.myInterval = 2000;
            $scope.noWrapSlides = false;
            $scope.active = 0;
            $scope.slides = [
                {
                    image: 'images/baps_1.jpg',                    
                },
                {
                    image: 'images/baps_2.jpg'
                },
                {
                    image: 'images/baps_3.jpg'
                },
                {
                    image: 'images/baps_4.jpg'
                },
                {
                    image: 'images/baps_5.jpg'
                },
                {
                    image: 'images/baps_6.jpg'
                }
            ];
        })
        .controller('BapsInternationalCentersHomeController', function ($scope) {
            console.log("Hello BAPS International Centers Controller");
        })
        .controller('DelhiAkshardhamController', function ($scope) {
            console.log("Hello Delhi Akshardham Controller");
            $scope.myInterval = 2000;
            $scope.noWrapSlides = false;
            $scope.active = 0;
            $scope.slides = [
                {
                    image: 'images/Akshardham/Delhi/1.jpg'
                },
                {
                    image: 'images/Akshardham/Delhi/2.jpg'
                },
                {
                    image: 'images/Akshardham/Delhi/3.jpg'
                },
                {
                    image: 'images/Akshardham/Delhi/4.jpg'
                },
                {
                    image: 'images/Akshardham/Delhi/5.jpg'
                },
                {
                    image: 'images/Akshardham/Delhi/6.jpg'
                },
                {
                    image: 'images/Akshardham/Delhi/7.jpg'
                },
                {
                    image: 'images/Akshardham/Delhi/8.jpg'
                },
                {
                    image: 'images/Akshardham/Delhi/9.jpg'
                },
                {
                    image: 'images/Akshardham/Delhi/10.jpg'
                },
                {
                    image: 'images/Akshardham/Delhi/11.jpg'
                },
                {
                    image: 'images/Akshardham/Delhi/12.jpg'
                },
                {
                    image: 'images/Akshardham/Delhi/13.jpg'
                },
                {
                    image: 'images/Akshardham/Delhi/14.jpg'
                },
                {
                    image: 'images/Akshardham/Delhi/15.jpg'
                },
                {
                    image: 'images/Akshardham/Delhi/16.jpg'
                },
                {
                    image: 'images/Akshardham/Delhi/17.jpg'
                }
                
            ];
        })
        .controller('GandhiNagarAkshardhamController', function ($scope) {
            console.log("Hello Gandhinagar Akshardham Controller");
            $scope.myInterval = 2000;
            $scope.noWrapSlides = false;
            $scope.active = 0;
            $scope.slides = [
                {
                    image: 'images/Akshardham/Gandhinagar/1.jpg'
                },
                {
                    image: 'images/Akshardham/Gandhinagar/2.jpg'
                },
                {
                    image: 'images/Akshardham/Gandhinagar/3.jpg'
                },
                {
                    image: 'images/Akshardham/Gandhinagar/4.jpg'
                },
                {
                    image: 'images/Akshardham/Gandhinagar/5.jpg'
                }
                
            ];
        })
        .controller('NewJerseyAkshardhamController', function ($scope) {
            console.log("Hello New Jersey Akshardham Controller");
            $scope.myInterval = 2000;
            $scope.noWrapSlides = false;
            $scope.active = 0;
            $scope.slides = [
                {
                    image: 'images/Akshardham/NewJersey/1.JPG'
                },
                {
                    image: 'images/Akshardham/NewJersey/2.jpg'
                },
                {
                    image: 'images/Akshardham/NewJersey/3.jpg'
                },
                {
                    image: 'images/Akshardham/NewJersey/4.jpg'
                },
                {
                    image: 'images/Akshardham/NewJersey/5.jpg'
                },
                {
                    image: 'images/Akshardham/NewJersey/6.jpg'
                },
                {
                    image: 'images/Akshardham/NewJersey/7.jpg'
                },
                {
                    image: 'images/Akshardham/NewJersey/8.jpg'
                },
                {
                    image: 'images/Akshardham/NewJersey/9.jpg'
                },
                {
                    image: 'images/Akshardham/NewJersey/10.jpg'
                },
                {
                    image: 'images/Akshardham/NewJersey/11.jpg'
                }
            ];
        })
        .controller('InternationalCentersController', function ($scope) {
            console.log("Hello International Center Controller");
            $scope.myInterval = 2000;
            $scope.noWrapSlides = false;
            $scope.active = 0;
            $scope.slides = [
                {
                    image: 'images/Akshardham/InternationalCenters/atlanta1.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/atlanta2.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/atlanta3.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/atlanta4.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/atlanta5.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/atlanta6.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/chicago1.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/chicago2.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/chicago3.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/chicago4.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/chicago5.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/houston1.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/houston2.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/houston3.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/houston4.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/houston5.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/houston6.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/houston7.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/london.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/london1.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/london2.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/london3.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/london4.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/london5.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/london6.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/losangeles.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/losangeles2.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/losangeles3.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/losangeles4.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/losangeles5.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/nairobi1.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/nairobi2.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/nairobi3.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/nairobi4.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/toronto.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/toronto1.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/toronto2.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/toronto3.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/toronto4.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/toronto5.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/toronto6.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/toronto7.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/toronto8.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/toronto9.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/toronto10.jpg'
                },
                {
                    image: 'images/Akshardham/InternationalCenters/toronto11.jpg'
                }
            ];
        })
        .controller('BhagwanSwaminarayanIntroductionController', function ($scope) {
            console.log("Hello Bhagwan Swaminarayan Introduction Controller");
        })
        .controller('MandirController', function ($scope) {
            console.log("Hello Mandir Controller");
        })
        .controller('SacredMurtiTimingsController', function ($scope) {
            console.log("Hello Sacred Murti Timing Controller");
    $scope.myInterval = 2000;
            $scope.noWrapSlides = false;
            $scope.active = 0;
            $scope.slides = [
                {
                    image: 'images/murti1.JPG'
                },
                {
                    image: 'images/murti2.JPG'
                },
                {
                    image: 'images/murti3.JPG'
                },
                {
                    image: 'images/murti4.JPG'
                },
                {
                    image: 'images/murti5.JPG'
                },
                {
                    image: 'images/murti6.JPG'
                },
                {
                    image: 'images/murti7.JPG'
                },
                {
                    image: 'images/murti8.JPG'
                },
                {
                    image: 'images/murti9.JPG'
                },
                {
                    image: 'images/murti10.JPG'
                },
                {
                    image: 'images/murti11.JPG'
                },
                {
                    image: 'images/murti12.JPG'
                },
                {
                    image: 'images/murti13.JPG'
                }
            ];
        })
        .controller('AbhishekMandapamController', function ($scope) {
            console.log("Hello Abhishek Mandapam Controller");
        })
        .controller('BapsProductFacilitiesController', function ($scope) {
            console.log("Hello Baps Product Controller");
        })
        .controller('ChildrenActivitiesController', function ($scope) {
            console.log("Hello Children Controller");
        })
        .controller('SwaminarayanSchoolController', function ($scope) {
            console.log("Hello Swaminarayan School Controller");
        })
        .controller('WeeklySatsangAssemblyController', function ($scope) {
            console.log("Hello Weekly Satsang Assembly Controller");
        })
        .controller('FactsFiguresController', function ($scope) {
            console.log("Hello Facts Figures Controller");
        });


//        .controller('AboutUsController', function ($scope) {
//            $scope.hidden = true;
//            $scope.IsVisible = true;
//            $scope.Toggle = true;
//        })
//
//        .controller('ServiceController', function ($scope, TestimonialService) {
//            $scope.myInterval = 3000;
//            $scope.noWrapSlides = false;
//            $scope.active = 0;
//            $scope.slides = [
//                {
//                    image: 'images/img5.jpg',
//                    name: 'Kristiana',
//                    designation: 'Web Developer www.example1.com',
//                    text: 'Lorem ipsum dolor sit amet consectetur quam felis, ultricies nec, pellentesque eu, pretium quis, sem\n\
//Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec. In enim justo,rhoncus ut'
//                },
//                {
//                    image: 'images/img6.jpg',
//                    name: 'Kristiana',
//                    designation: 'photographer www.example1.com',
//                    text: 'Lorem ipsum dolor sit amet consectetur quam felis, ultricies nec, pellentesque eu, pretium quis, sem\n\
//Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec. In enim justo,rhoncus ut'
//                },
//                {
//                    image: 'images/img7.jpg',
//                    name: 'Kristiana',
//                    designation: 'Web Developer www.example1.com',
//                    text: 'Lorem ipsum dolor sit amet consectetur quam felis, ultricies nec, pellentesque eu, pretium quis, sem\n\
//Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec. In enim justo,rhoncus ut'
//                },
//                {
//                    image: 'images/img8.jpg',
//                    name: 'Kristiana',
//                    designation: 'Web Developer www.example1.com',
//                    text: 'Lorem ipsum dolor sit amet consectetur quam felis, ultricies nec, pellentesque eu, pretium quis, sem\n\
//Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec. In enim justo,rhoncus ut'
//                }
//            ];
////            $scope.IsVisible = true;
//////            $scope.IsHidden = true;
//////            $scope.IsContent = true;
//////            $scope.IsHide = true;
//////            $scope.IsToggle = true;
////            $scope.testimonials = TestimonialService.query();
////            console.log("$scope.testimonials", $scope.testimonials);
////            $scope.myInterval = 3000;
//        })
//
//        .controller('SdNetworkController', function ($scope, CityService, FranchiseService, LocationService, CityService, $state, paginationLimit, $stateParams) {
//
//
//            var map;
//            var mapContainer = document.getElementById("mapContainerSdNetwork");
//            var nagpurCoordinate = new google.maps.LatLng(21.1458, 79.0882);
//            var mapProp = {
//                center: nagpurCoordinate,
//                zoom: 11,
//                mapTypeId: google.maps.MapTypeId.ROADMAP
//            };
//            var drawMap = function () {
//                map = new google.maps.Map(mapContainer, mapProp);
//            };
//            drawMap();
//            var drawDynamicMap = function (newMapProp) {
//                console.log("newMapProp %O", newMapProp);
//                map = new google.maps.Map(mapContainer, newMapProp);
//            };
//            $scope.franchises = FranchiseService.findByCityId({
//                'cityId': 78
//            }, function (franchises) {
//                angular.forEach(franchises, function (franchise) {
//                    console.log("Single Object :%O", franchise);
//                    LocationService.get({
//                        'id': franchise.locationId
//                    }, function (locationObject) {
//                        drawMarker({lat: locationObject.latitude, lng: locationObject.longitude}, franchise.name, map);
//                    });
//                });
//            });
//            var drawMarker = function (position, title, map) {
//                console.log("Position :%O", position);
//                new google.maps.Marker({
//                    map: map,
//                    position: position,
//                    title: title
//                            // icon: 'images/icons_svg/dot.png'
//                });
//            };
//            $scope.setCity = function (city) {
//                $scope.city = city;
//                $scope.franchises = FranchiseService.findByCityId({
//                    'cityId': city.id
//                }, function (franchiseList) {
//                    angular.forEach(franchiseList, function (franchise) {
//                        LocationService.get({
//                            'id': franchise.locationId
//                        }, function (locationObject) {
//                            var newMapProp = {
//                                center: new google.maps.LatLng(city.latitude, city.longitude),
//                                zoom: 11,
//                                mapTypeId: google.maps.MapTypeId.ROADMAP
//
//                            };
//                            console.log("new map prop %O", newMapProp);
//                            drawDynamicMap(newMapProp);
//                            drawMarker({lat: locationObject.latitude, lng: locationObject.longitude}, franchise.name, map);
//                        });
//                    });
//                });
//            };
//            $scope.searchCities = function (searchTerm) {
//                console.log("Search Term :%O", searchTerm);
//                return CityService.findByNameLike({
//                    'name': searchTerm
//                }).$promise;
//            };
////            if (
////                    $stateParams.offset === undefined ||
////                    isNaN($stateParams.offset) ||
////                    new Number($stateParams.offset) < 0)
////            {
////                $scope.currentOffset = 0;
////            } else {
////                $scope.currentOffset = new Number($stateParams.offset);
////            }
////
////            $scope.nextOffset = $scope.currentOffset + 5;
////
////            $scope.nextFranchises = FranchiseService.query({
////                'offset': $scope.nextOffset
////            });
////
////            $scope.franchises = FranchiseService.query({
////                'offset': $scope.currentOffset
////            }
////            , function (franchises) {
////                angular.forEach(franchises, function (franchise) {
////
////                    franchise.city = CityService.get({
////                        'id': franchise.cityId
////                    });
////                    franchise.location = LocationService.get({
////                        'id': franchise.locationId
////                    });
////                });
////            });
//            console.log("$scope.franchises", $scope.franchises);
//            $scope.nextPage = function () {
//                $scope.currentOffset += paginationLimit;
//                $state.go(".", {'offset': $scope.currentOffset}, {'reload': true});
//            };
//            $scope.previousPage = function () {
//                if ($scope.currentOffset <= 0) {
//                    return;
//                }
//                $scope.currentOffset -= paginationLimit;
//                $state.go(".", {'offset': $scope.currentOffset}, {'reload': true});
//            };
//        })
//
//        .controller('PostQueryController', function (EnquiryService, $scope, $state) {
//            $scope.editableEnquiry = {};
//            $scope.saveEnquiry = function (enquiry) {
//                console.log("enquiry name:", enquiry);
//                $scope.sendSms(enquiry.mobileNo);
//                EnquiryService.save(enquiry, function () {
//                    $state.go('corporate_site.home', null, {'reload': true});
//                });
//            };
//            $scope.sendSms = function (clientNumber) {
//                EnquiryService.sendSms();
//            };
//            $scope.$watch('editableEnquiry.category', function (category) {
//                console.log("Category :" + category);
//                if (category === "PROPERTY_GUIDANCE") {
//                    $scope.propertyGuidance = true;
//                    $scope.propertySelling = false;
//                    $scope.propertyBuying = false;
//                } else if (category === "PROPERTY_SELLING") {
//                    $scope.propertyGuidance = false;
//                    $scope.propertySelling = true;
//                    $scope.propertyBuying = false;
//                } else if (category === "PROPERTY_BUYING") {
//                    $scope.propertyGuidance = false;
//                    $scope.propertySelling = false;
//                    $scope.propertyBuying = true;
//                } else {
//                    $scope.propertyGuidance = false;
//                    $scope.propertySelling = false;
//                    $scope.propertyBuying = false;
//                }
//            });
//        })
//        .controller('EventsController', function ($scope, EventService) {
//            console.log("EventController");
//            $scope.events = EventService.findByDate();
//            console.log("$scope.events", $scope.events);
//            $scope.myInterval = 2000;
//            $scope.noWrapSlides = false;
//            $scope.active = 0;
//            $scope.slides = [
//                {
//                    image: 'images/banner.jpg'
//                },
//                {
//                    image: 'images/banner.jpg'
//                },
//                {
//                    image: 'images/banner.jpg'
//                }
//
//            ];
//        })
//        .controller('CareerController', function ($scope, TestimonialService) {
//            $scope.myInterval = 3000;
//            $scope.noWrapSlides = false;
//            $scope.active = 0;
//            $scope.slides = [
//                {
//                    image: 'images/img5.jpg',
//                    name: 'Kristiana',
//                    designation: 'Web Developer www.example1.com',
//                    text: 'Lorem ipsum dolor sit amet consectetur quam felis, ultricies nec, pellentesque eu, pretium quis, sem\n\
//Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec. In enim justo,rhoncus ut'
//                },
//                {
//                    image: 'images/img6.jpg',
//                    name: 'Kristiana',
//                    designation: 'photographer www.example1.com',
//                    text: 'Lorem ipsum dolor sit amet consectetur quam felis, ultricies nec, pellentesque eu, pretium quis, sem\n\
//Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec. In enim justo,rhoncus ut'
//                },
//                {
//                    image: 'images/img7.jpg',
//                    name: 'Kristiana',
//                    designation: 'Web Developer www.example1.com',
//                    text: 'Lorem ipsum dolor sit amet consectetur quam felis, ultricies nec, pellentesque eu, pretium quis, sem\n\
//Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec. In enim justo,rhoncus ut'
//                },
//                {
//                    image: 'images/img8.jpg',
//                    name: 'Kristiana',
//                    designation: 'Web Developer www.example1.com',
//                    text: 'Lorem ipsum dolor sit amet consectetur quam felis, ultricies nec, pellentesque eu, pretium quis, sem\n\
//Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec. In enim justo,rhoncus ut'
//                }
//            ];
//        })
//
//        .controller('HomeController', function ($scope) {
//            console.log("Hello Kunal");
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
//        .controller('CareerController', function ($scope, TestimonialService) {
//            $scope.myInterval = 3000;
//            $scope.noWrapSlides = false;
//            $scope.active = 0;
//            $scope.slides = [
//                {
//                    image: 'images/img5.jpg',
//                    name: 'KRISTIANA ANDREW',
//                    designation: 'Web Developer www.example1.com',
//                    text: 'Lorem ipsum dolor sit amet consectetur quam felis, ultricies nec, pellentesque eu, pretium quis, sem\n\
//Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec. In enim justo,rhoncus ut'
//                },
//                {
//                    image: 'images/img6.jpg',
//                    name: 'JONH EDISON',
//                    designation: 'Photographer www.example1.com',
//                    text: 'Lorem ipsum dolor sit amet consectetur quam felis, ultricies nec, pellentesque eu, pretium quis, sem\n\
//Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec. In enim justo,rhoncus ut'
//                },
//                {
//                    image: 'images/img7.jpg',
//                    name: 'ROBIN SHARMA',
//                    designation: 'Web Developer www.example1.com',
//                    text: 'Lorem ipsum dolor sit amet consectetur quam felis, ultricies nec, pellentesque eu, pretium quis, sem\n\
//Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec. In enim justo,rhoncus ut'
//                },
//                {
//                    image: 'images/img8.jpg',
//                    name: 'ANDREW JONH',
//                    designation: 'Photographer www.example1.com',
//                    text: 'Lorem ipsum dolor sit amet consectetur quam felis, ultricies nec, pellentesque eu, pretium quis, sem\n\
//Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec. In enim justo,rhoncus ut'
//                }
//            ];
//        })
//        .controller('ContactController', function ($scope, $state, MailService) {
//            $scope.editableEnquiry = {};
//            $scope.sendMail = function (mailObject) {
//                console.log("Mail Object :%O", mailObject);
//                MailService.sendEmail({
//                    'mailId': mailObject.email
//                }, function () {
//                    alert("Enquiry Submitted Successfully.Safe-Deals team will get back to you soon regarding your enquiry.");
//                    $state.go('corporate_site.contact', null, {'reload': true});
//                });
//            };
//        });
