'use strict';

/* global define:true*/
define(['knockout'],
function (ko) {
	return function (params) {
		var self = this;
		self.name = ko.observable(params.value);
		self.originalDose = params.dose;
		self.newDose = ko.observable(self.originalDose);
		self.status = ko.observable('');
		self.patientNote = ko.observable('No notes');

		self.statusSet = ko.computed(function () {
			return self.status() !== '';
		});

		self.setStatus = function (newStatus) {
			self.status(newStatus);
		};

		//self.setPatientNote = function
	};
});