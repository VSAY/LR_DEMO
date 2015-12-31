AUI().ready(function(A) {

  var userDialog = {
    options : {
      dialog: {
        centered : true,
        cssClass : 'user-dialog',
        constrain2view: true,
        modal    : true,
        width    : 800
      }
    },
    init : function(){
      if (A.one('.user-dialog-link')!=null) {
       this.el    = A.one('.user-dialog-link');
      }
      if (!this.el) return;

      this.options.id    = this.el.guid();
      this.options.title = this.el.attr('title');
      this.options.uri   = this.el.attr('href');
      this.addEvents();
    },
    addEvents : function(){
      this.el.on('click', $.proxy(this.showDialog, this));
    },
    showDialog : function(e){
      e.preventDefault();
      Liferay.Util.openWindow(this.options);
    }
  };

  userDialog.init();
});
