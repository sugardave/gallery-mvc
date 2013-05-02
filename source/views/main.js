enyo.ready(function () {

	enyo.kind({
		name: "enyojs.Gallery.MainView",
		kind: enyo.FittableRows,
		fit: true,
		bindings: [
			{from: ".app.controllers.state.view", to: ".$.detailPopup.showing", transform: "transformView"},
			{from: ".app.controllers.cards.data", to: ".cards", oneWay: false}
		],
		components: [
			{name: "toolbar", kind: onyx.Toolbar, ontap: "changeState", components: [
				{tag: "a", attributes: {href: "http://enyojs.com"}, components: [
					{kind: "Image", src: "assets/enyo-logo.png", classes: "toolbar-logo"}
				]}
			]},
			{kind: enyo.Scroller, fit: true, classes: "main", ondragfinish: "preventTap", components: [
				// using media query to determine which one should be displayed
				{name: "cards", classes: "cards"},
				{name: "list", classes: "list"}
			]},
			{name: "detailPopup", kind: "enyojs.Gallery.DetailPopup", showing: false, centered: true, modal: true, floating: true, info: "foo"},
		],
		changeState: function(inSender, inEvent) {
			app.controllers.state.set("view", "detailView");
			return true;
		},
		cardsChanged: function() {
			if (this.cards.length) {
				this.renderItems();
			}
		},
		transformView: function(inView) {
			if (inView === "detailView") return true;
			return false;
		},
		renderItems: function(customItems) {
			this.$.cards.destroyClientControls();
			this.$.list.destroyClientControls();
			//
			var items = customItems || this.cards;
			//
			// to sorted by submission date array
			items = this.toDateSortedArray(items);
			//
			for (var i=0, w; (w=items[i]); i++) {
				//var more = {info: w, ontap: "itemTap"};
				var info = w;
				var cc = new enyojs.Gallery.CardController();
				this.createComponent({kind: "enyojs.Gallery.Card", container: this.$.cards, controller: cc, ontap: "itemTap"});
				this.createComponent({kind: "enyojs.Gallery.ListItem", container: this.$.list, controller: cc, ontap: "itemTap"});
				cc.set("data", info);
			}
			// to make cards in last row left-aligned
			for (i=0; i<3; i++) {
				this.createComponent({kind: "enyojs.Gallery.Card", container: this.$.cards, classes: "card-empty"});
			}
			this.$.cards.render();
			this.$.list.render();
		},
		toDateSortedArray: function(inItems) {
			var ls = [];
			for (var n in inItems) {
				ls.push(inItems[n]);
			}
			ls.sort(function(i1, i2) {
				var d1 = new Date(i1.submissionDate);
				var d2 = new Date(i2.submissionDate);
				if (d1 > d2) {
					return -1;
				} else if (d1 < d2) {
					return 1;
				} else {
					return 0;
				}
			});
			return ls;
		},
		itemTap: function(inSender) {
			this.log(inSender.info.name);
			return true;
		},
		preventTap: function(inSender, inEvent) {
			inEvent.preventTap();
		}
	});

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
		transformData: function(inData) {
			if (inData && inData.info) {
				inData = inData.info;
			}
			return inData;
		},
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
	
});
