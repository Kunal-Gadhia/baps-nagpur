<%-- 
    Document   : index
    Created on : 10 Dec, 2016, 9:18:27 PM
    Author     : hp2
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html ng-app="bapsnagpur">
    <head>
        <base href="/baps-nagpur/" target="_blank">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>BAPS Nagpur</title>

        <!--Stylesheet-->
        <link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/webjars/bootstrap/3.3.5/css/bootstrap.min.css"/>
        <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/style.css"/>
        <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/webjars/font-awesome/4.4.0/css/font-awesome.min.css"/>
        <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/modal_override.css"/>
        <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/corporate_site.css"/>        

        <!--Libraries-->
        <script src="${pageContext.request.contextPath}/webjars/jquery/1.12.0/jquery.min.js"></script>
        <script src="${pageContext.request.contextPath}/webjars/angularjs/1.5.3/angular.min.js"></script>  
        <script src="${pageContext.request.contextPath}/webjars/nervgh-angular-file-upload/2.1.1/angular-file-upload.min.js"></script>
        <script src="${pageContext.request.contextPath}/webjars/angular-animate/1.5.3/angular-animate.js"></script>  
        <script src="${pageContext.request.contextPath}/webjars/angular-resource/1.2.28/angular-resource.js"></script>  
        <script src="${pageContext.request.contextPath}/webjars/bootstrap/3.3.5/js/bootstrap.min.js"></script>  
        <script src="${pageContext.request.contextPath}/webjars/angular-ui-router/0.2.15/angular-ui-router.js"></script>  
        <script src="${pageContext.request.contextPath}/webjars/angular-ui-bootstrap/1.2.5/ui-bootstrap-tpls.min.js"></script>
        <script src="${pageContext.request.contextPath}/webjars/underscorejs/1.5.1/underscore.min.js"></script>        
        <!--<script src="${pageContext.request.contextPath}/webjars/jquery/2.1.4/jquery.min.js"></script>--> 
        <script src="${pageContext.request.contextPath}/js/lib/angular-google-map.js"></script>
        <script src="${pageContext.request.contextPath}/js/lib/angular-simple-logger.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?libraries=geometry,places&region=IN"></script>
        <script src="${pageContext.request.contextPath}/js/lib/fusioncharts.js"></script>
        <script src="${pageContext.request.contextPath}/js/lib/fusioncharts.charts.js"></script>
        <script src="${pageContext.request.contextPath}/js/lib/fusioncharts.theme.fint.js"></script>
        <script src="${pageContext.request.contextPath}/js/lib/ng-google-chart.js"></script>
        <script src="${pageContext.request.contextPath}/js/lib/calcumateemi.js"></script>
        <script src="${pageContext.request.contextPath}/js/lib/googleMap.js"></script>
        <script src="${pageContext.request.contextPath}/js/lib/jquery.flexslider-min.js"></script>
        <script src="${pageContext.request.contextPath}/js/lib/scripts.js"></script>
        <script src="${pageContext.request.contextPath}/js/lib/wow.min.js"></script>        
        <script>
            angular.module("bapsnagpur.constants", [])
                    .constant('contextPath', '${pageContext.request.contextPath}')
                    .constant('restRoot', '${pageContext.request.contextPath}/rest')
                    .constant('templateRoot', '${pageContext.request.contextPath}/templates')
                    .constant('paginationLimit', 5);
        </script>

        <!--JavaScript-->
        <script src="${pageContext.request.contextPath}/js/app.js"></script>
        <!--<script src="${pageContext.request.contextPath}/js/auth.js"></script>-->
        <script src="${pageContext.request.contextPath}/js/filters.js"></script>
        <!--<script src="${pageContext.request.contextPath}/js/directives/datetime_picker.js"></script>-->
        <!--states-->
        <script src="${pageContext.request.contextPath}/js/states.js"></script>       
        <script src="${pageContext.request.contextPath}/js/states/corporate_site.js"></script>
        <!--Services-->
<!--        <script src="${pageContext.request.contextPath}/js/services/branch_service.js"></script>
        <script src="${pageContext.request.contextPath}/js/services/country_service.js"></script>
        <script src="${pageContext.request.contextPath}/js/services/state_service.js"></script>
        <script src="${pageContext.request.contextPath}/js/services/city_service.js"></script>
        <script src="${pageContext.request.contextPath}/js/services/bank_service.js"></script>
        <script src="${pageContext.request.contextPath}/js/services/location_service.js"></script>
        <script src="${pageContext.request.contextPath}/js/services/amenity_service.js"></script>
        <script src="${pageContext.request.contextPath}/js/services/amenity_detail_service.js"></script>
        <script src="${pageContext.request.contextPath}/js/services/income_slab_service.js"></script>
        <script src="${pageContext.request.contextPath}/js/services/property_service.js"></script>
        <script src="${pageContext.request.contextPath}/js/services/co_ordinate_service.js"></script>
        <script src="${pageContext.request.contextPath}/js/services/school_service.js"></script>
        <script src="${pageContext.request.contextPath}/js/services/hospital_service.js"></script>
        <script src="${pageContext.request.contextPath}/js/services/guidelines_service.js"></script>
        <script src="${pageContext.request.contextPath}/js/services/project_service.js"></script>
        <script src="${pageContext.request.contextPath}/js/services/mall_service.js"></script>
        <script src="${pageContext.request.contextPath}/js/services/transportation_service.js"></script>
        <script src="${pageContext.request.contextPath}/js/services/ready_reckoner_service.js"></script>
        <script src="${pageContext.request.contextPath}/js/services/raw_ready_reckoner_service.js"></script>
        <script src="${pageContext.request.contextPath}/js/services/raw_market_price_service.js"></script>
        <script src="${pageContext.request.contextPath}/js/services/salary_range_service.js"></script>
        <script src="${pageContext.request.contextPath}/js/services/safedeal_zone_service.js"></script>
        <script src="${pageContext.request.contextPath}/js/services/workplace_area_service.js"></script>
        <script src="${pageContext.request.contextPath}/js/services/workplace_category_service.js"></script>
        <script src="${pageContext.request.contextPath}/js/services/workplace_category_detail_service.js"></script>
        <script src="${pageContext.request.contextPath}/js/services/user_service.js"></script>
        <script src="${pageContext.request.contextPath}/js/services/location_type_service.js"></script>
        <script src="${pageContext.request.contextPath}/js/services/location_category_service.js"></script>
        <script src="${pageContext.request.contextPath}/js/services/market_price_service.js"></script>
        <script src="${pageContext.request.contextPath}/js/services/business_associate_service.js"></script>
        <script src="${pageContext.request.contextPath}/js/services/franchise_service.js"></script>
        <script src="${pageContext.request.contextPath}/js/services/property_type_service.js"></script>
        <script src="${pageContext.request.contextPath}/js/services/video_service.js"></script>
        <script src="${pageContext.request.contextPath}/js/services/agency_service.js"></script>
        <script src="${pageContext.request.contextPath}/js/services/agent_service.js"></script>
        <script src="${pageContext.request.contextPath}/js/services/builder_service.js"></script>
        <script src="${pageContext.request.contextPath}/js/services/testimonial_service.js"></script>
        <script src="${pageContext.request.contextPath}/js/services/event_service.js"></script>
        <script src="${pageContext.request.contextPath}/js/services/team_service.js"></script>
        <script src="${pageContext.request.contextPath}/js/services/enquiry_service.js"></script>
        <script src="${pageContext.request.contextPath}/js/services/amenity_code_service.js"></script>
        <script src="${pageContext.request.contextPath}/js/services/private_amenities_service.js"></script>
        <script src="${pageContext.request.contextPath}/js/services/road_service.js"></script>-->

    </head>
    <body class="">
        <div id="parrentDiv" class="bg-city-spcl" data-ui-view></div>
    </body>
</html>
