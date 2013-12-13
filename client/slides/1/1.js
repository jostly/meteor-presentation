Template["1"].features = function () {
	return Features.find({}, { sort: { likes: -1 }});
}

// Lägg till sortering: , { sort: { likes: -1 }}

// Steg 3: Lägg till like-button, synkronisering mellan klienter 
Template["1"].events({
	'click .feature': function (event) {
		var li = event.currentTarget;
		Features.update(li.id, {$inc: { likes: 1 }});
	}
})