ko.bindingHandlers.validationTooltip = {
	init: function (element, valueAccessor) {
		var el = $(element);
		ko.computed({
			read: function () {
				var field = valueAccessor();
				if (field.isModified() && !field.isValid()) {
					el.parents(".form-group").addClass("has-error");
					var options = {
						title: field.error,
						placement: $(element).data('placement')||'top'
					}
					el.tooltip(options).tooltip("show");
				}
				else {
					el.parents(".form-group").removeClass("has-error");
					el.tooltip("destroy");
				}
			},
			disposeWhenNodeIsRemoved: element
		});

		ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
			$(element).tooltip("destroy");
		});
	}
};
