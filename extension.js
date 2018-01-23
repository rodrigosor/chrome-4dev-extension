!(function ($) {

    'use strict';

    var DATA_SET_COUNTER = 6;

    var dataSet = {
        femaleFirstNames: [], maleFirstNames: [], lastNames: [], states: [], cities: [], streets: []
    };

    // Carrega todo data set dada a versão e  uma linguagem:

    var loadDataSet = function (version, language, callback) {

        var loadCounter = 0;

        var dataSetPath = 'api/{version}/data/{language}/'.replace('{version}', version).replace('{language}', language);

        var checkCounterAndInvokeCallback = function () {

            if (loadCounter == DATA_SET_COUNTER) callback(dataSet);

        };

        $.getJSON(dataSetPath.concat('female-first-names.json'), function () {

            dataSet.femaleFirstNames = arguments[0];

            ++loadCounter;

            checkCounterAndInvokeCallback();

        });

        $.getJSON(dataSetPath.concat('male-first-names.json'), function () {

            dataSet.maleFirstNames = arguments[0];

            ++loadCounter;

            checkCounterAndInvokeCallback();

        });

        $.getJSON(dataSetPath.concat('last-names.json'), function () {

            dataSet.lastNames = arguments[0];

            ++loadCounter;

            checkCounterAndInvokeCallback();

        });

        $.getJSON(dataSetPath.concat('states.json'), function () {

            dataSet.states = arguments[0];

            ++loadCounter;

            checkCounterAndInvokeCallback();

        });

        $.getJSON(dataSetPath.concat('cities.json'), function () {

            dataSet.cities = arguments[0];

            ++loadCounter;

            checkCounterAndInvokeCallback();

        });

        $.getJSON(dataSetPath.concat('streets.json'), function () {

            dataSet.streets = arguments[0];

            ++loadCounter;

            checkCounterAndInvokeCallback();

        });

    };

    window.extension = {
        'dataSet': dataSet,
        'loadDataSet': loadDataSet
    };


})(window.jQuery);