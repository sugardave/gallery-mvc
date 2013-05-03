enyo.ready(function() {

	enyo.kind({
		name: "enyojs.Gallery.ListItem",
		classes:"listitem",
		bindings: [
			{from: ".controller.data", to: ".info"}
		],
		components: [
			{name: "name", classes: "name"},
			{name: "owner", classes: "owner"}
		],
		infoChanged: function() {
			var i = this.info;
			if (!i) {
				return;
			}
			this.$.name.setContent(i.displayName);
			this.$.owner.setContent("by " + i.owner.name);
		}
	});

	enyo.kind({
		name: "enyojs.Gallery.Card",
		kind: "enyojs.Gallery.ListItem",
		kindClasses: "card",
		components: [
			{classes: "card-topbar", components: [
				{name: "name", classes: "name"},
				{name: "owner", classes: "owner"}
			]},
			{classes: "icon-holder", components: [
				{name: "icon", kind: "Image", classes: "icon"}
			]}
		],
		infoChanged: function() {
			this.inherited(arguments);
			if (this.info) {
				this.$.icon.setSrc("assets/gallery_images/" + this.info.name + ".jpg");
			}
		}
	});

	enyo.kind({
		name: "enyojs.Gallery.CardDetail"
	});

});