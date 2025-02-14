angular.module("bapsnagpur", [
    //    include libraries
    'ui.router',
    'ngResource',
    'angularFileUpload',
    'googlechart',
    'bapsnagpur.map',
    'ngAnimate',
    //'ngFileSaver',
    //  include filter
    'bapsnagpur.filters',
    //  include constants
    'bapsnagpur.constants',
    // include services
//    'safedeals.services.branch',
//    'safedeals.services.country',
//    'safedeals.services.state',
//    'safedeals.services.city',
//    'safedeals.services.bank',
//    'safedeals.services.location',
//    'safedeals.services.amenity',
//    'safedeals.services.amenity_detail',
//    'safedeals.services.amenity_code',
//    'safedeals.services.income_slab',
//    'safedeals.services.property',
//    'safedeals.services.co_ordinate',
//    'safedeals.services.school',
//    'safedeals.services.guidelines',
//    'safedeals.services.hospital',
//    'safedeals.services.project',
//    'safedeals.services.mall',
//    'safedeals.services.transportation',
//    'safedeals.services.ready_reckoner',
//    'safedeals.services.raw_ready_reckoner',
//    'safedeals.services.raw_market_price',
//    'safedeals.services.salary_range',
//    'safedeals.services.safedeal_zone',
//    'safedeals.services.workplace_area',
//    'safedeals.services.workplace_category',
//    'safedeals.services.workplace_category_detail',
//    'safedeals.services.user',
//    'safedeals.services.location_type',
//    'safedeals.services.location_category',
//    'safedeals.services.market_price',
//    'safedeals.services.business_associate',
//    'safedeals.services.franchise',
//    'safedeals.services.property_type',
//    'safedeals.services.agency',
//    'safedeals.services.agent',
//    'safedeals.services.builder',
//    'safedeals.services.testimonial',
//    'safedeals.services.event',
//    'safedeals.services.team',
//    'safedeals.services.video',
//    'safedeals.services.enquiry',
//    'safedeals.services.private_amenities',
//    'safedeals.services.road',
    // include controllers and states
    'bapsnagpur.states',
//    'safedeals.states.admin',
    'bapsnagpur.states.corporate_site'
//    'safedeals.states.portal',
//    'safedeals.states.guidelines',
//    'safedeals.states.intro',
//    'safedeals.states.location',
//    'safedeals.states.location_master',
//    'safedeals.states.property',
//    'safedeals.states.property_master',
//    'safedeals.states.faqs',
//    'safedeals.states.thanku',
//    'safedeals.states.faqs',
//    'safedeals.states.help',
//    'safedeals.states.final_deal',
//    //masters states
//    'safedeals.states.branch',
//    'safedeals.states.amenity_code',
//    'safedeals.states.country',
//    'safedeals.states.state',
//    'safedeals.states.city',
//    'safedeals.states.bank',
//    'safedeals.states.amenity',
//    'safedeals.states.amenity_detail',
//    'safedeals.states.ready_reckoner',
//    'safedeals.states.raw_ready_reckoner',
//    'safedeals.states.raw_market_price',
//    'safedeals.states.hospital',
//    'safedeals.states.salary_range',
//    'safedeals.states.safedeal_zone',
//    'safedeals.states.workplace_area',
//    'safedeals.states.workplace_category',
//    'safedeals.states.workplace_category_detail',
//    'safedeals.states.location_type',
//    'safedeals.states.location_category',
//    'safedeals.states.user',
//    'safedeals.states.market_price',
//    'safedeals.states.business_associate',
//    'safedeals.states.franchise',
//    'safedeals.states.property_type',
//    'safedeals.states.agency',
//    'safedeals.states.private_amenities',
//    'safedeals.states.agent',
//    'safedeals.states.builder',
//    'safedeals.states.transportation',
//    'safedeals.states.testimonial',
//    'safedeals.states.event',
//    'safedeals.states.team',
//    'safedeals.states.video',
//    'safedeals.states.user',
//    'safedeals.states.road',
//    'safedeals.states.auth'
])

        .run(['$state', '$rootScope', '$location', function ($state, $rootScope, $location) {
                console.log("Coming to this ??");
//                $location.path("corporate_site.home");
//                $state.go("corporate_site.home", {reload: true});
                $state.go("landing_page", {reload: true});
//                console.log("Auth Factory :%O", AuthFactory);
//                UserService.login({
//                    'username': "guest",
//                    'password': "guest"
//                }, function () {
//                    console.log("Coming Here to log in as a guest??");
//                    $state.go("corporate_site.home", {reload: 'true'});                    
//                }, function () {
//                    $rootScope.error = "Login Failed. Invalid Credentials.";
//                });
//                $state.go("corporate_site.home", {reload: 'true'});

//For tracking state changes during runtime.. outputs the statename as a state change is triggered
//            $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
//                console.log("Switching To: ", toState.name);
//            });
//            //////////////////
//                AuthFactory.registerUserChangeHandler(function (currentUser) {
//                    $rootScope.currentUser = currentUser;
//                });
//
//                AuthFactory.refresh().then(function (currentUser) {
//                    console.log("Current User is", currentUser);
//                }, function (reason) {
////                console.log("Reason :%O", reason);
////                User is not Logged in
////                $location.path("login");
//                    UserService.login({
//                        'username': 'guest',
//                        'password': 'guest'
//                    }, function () {
//                        console.log("Log in as a guest");
//                        $state.go("corporate_site.home", {reload: 'true'});
//                    }, function () {
//                        $rootScope.error = "Login Failed. Invalid Credentials.";
//                    });
//                    $state.go("corporate_site.home", {reload: 'true'});
//                });
//                /////////////
//            $state.go('admin.masters');
            }]);
