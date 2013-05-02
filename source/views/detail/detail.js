enyo.ready(function() {
	enyo.kind({
		name: "enyojs.Gallery.DetailPopup",
		kind: onyx.Popup,
		layoutKind: enyo.FittableRowsLayout,
		components: [],
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