var app = angular.module("siedgeApp", ['pascalprecht.translate']);

app.controller("siedgeController", function($scope, $translate){

    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
    };
});
app.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.useStaticFilesLoader({
        prefix: '/translations/',
        suffix: '.json'
    });
    $translateProvider.preferredLanguage('es');
    $translateProvider.useSanitizeValueStrategy('escapeParameters');
}]);