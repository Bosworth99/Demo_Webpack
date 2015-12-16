(function () {
    'use strict';

    var $           = require('jquery');
    var _           = require('underscore');
    var Backbone    = require('backbone');

    function init(){
        console.log('app::init $ : %o _ : %o Backbone : %o', $, _, Backbone);
    }

    init();

})();