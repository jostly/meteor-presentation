Meteor.startup(function () {
	setPage(1);

	var presentation = Meteor.render(function () {
		var page = "" + Session.get("page");
		return Template[page]();
	});

	document.body.appendChild(presentation);
});

window.setPage = function(page) { 
	Session.set("page", page);
}