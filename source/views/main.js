enyo.ready(function () {

	enyo.kind({
		name: "enyojs.Gallery.MainView",
		kind: enyo.FittableRows,
		fit: true,
		bindings: [
			{from: ".app.state", to: ".$.detailPopup.showing", transform: "transformState"}
		],
		components: [
			{name: "toolbar", kind: onyx.Toolbar, components: [
				{tag: "a", attributes: {href: "http://enyojs.com"}, components: [
					{kind: "Image", src: "assets/enyo-logo.png", classes: "toolbar-logo"}
				]}
			]},
			{name: "detailPopup", kind: "enyojs.Gallery.DetailPopup", info: "foo"},
		{
			kind: enyo.Scroller,
			fit: true,
			components: [{
				name: "main",
				kind: "wip.Repeater",
				controller: ".app.controllers.messages",
				components: [{
					classes: "nice-padding",
					bindFrom: "message"
				}]
			}]
		}, {
			kind: onyx.Toolbar,
			components: [{
				kind: onyx.Button,
				content: "Record Entry",
				ontap: "addRecord"
			}, {
				kind: onyx.InputDecorator,
				components: [{
					name: "input",
					kind: onyx.Input,
					placeholder: "Watch bindings work"
				}]
			}]
		}],
		transformState: function(inState) {
			if (inState === "detailView") return true;
			return false;
		}
	});
	
});
