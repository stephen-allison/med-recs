'use strict';

/* global define:true*/
/* global document:true*/
define(['jquery',
    'knockout',
    'models/appViewModel',
    'jquery.bootstrap'
    ], function ($, ko, AppViewModel) {

  var UI = new AppViewModel();

  ko.applyBindings(UI, document.getElementById('medsContainer'));
  ko.applyBindings(UI, document.getElementById('demographicsContainer'));

});
