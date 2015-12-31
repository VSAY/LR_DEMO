AUI().ready('aui-aria', 'aui-dialog', 'aui-overlay-manager', 'dd-constrain', function(A) {
  if (A.one('#help-portlet-link')!=null) {
	var options = {
		title: 'Help',
		bodyContent:A.one('.help-portlet-container').html(),
		centered: true,
		constrain2view: true,
		height: 400,
		width: 500
	};


	A.one('#help-portlet-link').on('click', function() {
		var dialog = new A.Dialog(
			A.merge(options, {
				title: 'Help',
				modal: false
			})
		).render();


		// manually refresh
		dialog.io.start();
	});
	}
});