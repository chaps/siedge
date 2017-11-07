var app = angular.module("siedgeApp", ['pascalprecht.translate']);

app.controller("siedgeController", function($scope, $translate){
    $scope.languages = [
        { language: 'es', },
        { language: 'en' }
    ];

    $scope.selectedlanguage = $scope.languages[1];

    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
    };
});

app.config(function ($translateProvider) {
    $translateProvider.translations('es', {
        ABOUT: 'inteligencia en ingenieria',
        LANG: 'Idioma',
        LANG1: 'Espanol',
        LANG2: 'Ingles'
    });
    $translateProvider.translations('en', {
        ABOUT: 'Engineering Intelligence',
        LANG: 'Language',
        LANG1: 'Spanish',
        LANG2: 'English'
    })
    $translateProvider.preferredLanguage('es');
    $translateProvider.useSanitizeValueStrategy('escapeParameters');
});