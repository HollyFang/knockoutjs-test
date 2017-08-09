var viewModel = {
	catName: ko.observable('mm~~'),
	catSrc: ko.observable('img/1413379559_412a540d29_z.jpg'),
	clickCount: ko.observable(0),
	incrementClickCounter: function() {
		this.clickCount(this.clickCount() + 1);
	}
}

ko.applyBindings(viewModel);