define([
    'underscore', 'jquery'
], function (_, $) {
    'use strict';

    var exports = {};

    /**
     * Gets json from a server. `onError` param is optional.
     */
    exports.getJSON = function (url, onError) {
        console.assert(!!url);

        onError = (onError !== undefined) ? onError : function () {
            console.error('request failed: %s', url);
        };

        var promise = $.ajax({
            type: 'GET',
            url: url,
            contentType: 'application/json',
            dataType: 'json',
            processData: false
        });

        promise.fail(onError);

        return promise;
    };

    return exports;
});