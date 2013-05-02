enyo.ready(function() {
	enyo.kind({
		name: "enyojs.Gallery.DetailPopup",
		kind: onyx.Popup,
		layoutKind: enyo.FittableRowsLayout,
		bindings: [
			{from: ".info", to: ".$.cardDetail.controller.info"}
		],
		components: [
			{name: "cardDetail", kind: "enyojs.Gallery.CardDetail", controller: enyo.ObjectController}
		],
		create: function() {
			this.inherited(arguments);
			this.infoChanged();
		},
		infoChanged: function() {
			this.log("SET POPUP INFO");
			this.log(this.info);
		}
	});
});