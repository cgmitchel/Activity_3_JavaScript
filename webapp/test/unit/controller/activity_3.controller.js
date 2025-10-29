/*global QUnit*/

sap.ui.define([
	"activity3/controller/activity_3.controller"
], function (Controller) {
	"use strict";

	QUnit.module("activity_3 Controller");

	QUnit.test("I should test the activity_3 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
