(function () {
    var app;
    app = angular.module("speechDemo", ["jonniespratley.angularWebSpeechDirective"]);

    app.controller("MainCtrl", function ($scope) {
        $scope.home = {
            title: "Web Speech API",
            body: "Provide an alternative input method for web applications."
        };

        $scope.speech = {
            maxResults: 25,
            continuous: true,
            interimResults: true
        };

        $scope.getQuoteInfo = function (event) {
            if (event && event.eventCode != 13) {
                return;
            }
            $scope.quoteInfo = {};
            if ($scope.quoteId == '11175000') {
                $scope.QuoteDetails = {
                    QuoteId: 11175000,
                    Type: 'Domestic',
                    Brand: '10 Strawberry Street',
                    Buyer: 'a2parke',
                    Supplier: {
                        Id: '28002387-5883-0',
                        Name: 'Various-React'
                    },
                    CreatedBy: 'virem1',
                    CreatedAt: '5/9/2017',
                    PurchaseCompany: 'Wal-mart stores inc. usa',
                    CopiedQuote: '',
                    VendorStockNumber: 12345,
                    LastChangedBy: 'virem1',
                    LastChangedAt: '5/9/2017 11:57:58 AM',
                    Status: 'Submitted',
                    Open: true
                }
            } else {
                $scope.QuoteDetails = {};
            }

        }

        $scope.submitQuote = function () {
            $scope.quoteInfo = angular.copy($scope.QuoteDetails);
            $scope.quoteInfo.ProductComment = angular.copy($scope.speech.value);
        }
    });

    app.config(['$provide', Decorate]);

    function Decorate($provide) {
        $provide.decorator('jsSpeechDirective', function ($delegate) {
            var directive = $delegate[0];

            directive.template = "<div class=\"jsSpeechFactory-container\">\n<a href=\"\" class=\"jsSpeechFactory-btn\" ng-click=\"toggleStartStop()\">\n\n  <i class=\"fa fa-microphone fa-2x\" ng-hide=\"ngModel.recognizing\"></i>\n  <i class=\"fa fa-microphone-slash fa-2x\" ng-show=\"ngModel.recognizing\"></i>\n\n</a>\n<textarea type=\"text\" class=\"form-control\" ng-model=\"ngModel.value\"/>\n<p class=\"text-muted jsSpeechFactory-hint\" ng-bind-html-unsafe=\"speech.msg\"></p>\n</div>";
            return $delegate;
        });
    }

}).call(this);
