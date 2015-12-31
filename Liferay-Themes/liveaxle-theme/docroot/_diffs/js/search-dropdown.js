(function(){
  var searchDropdown = {
    options: {
      searchContainer: '.search-box-container',
      toggle: '.search-box-popup'
    },
    init: function(opts){
      this.options = $.extend({}, this.options, opts);
      this.cacheElements();
      this.addEvents();
    },
    cacheElements: function(){
      this.elements = {
        searchContainer: $(this.options.searchContainer),
        toggle: $(this.options.toggle)
      };
    },
    addEvents: function(){
      if (!this.elements.searchContainer || !this.elements.toggle) return;
      this.elements.toggle.hover(
        $.proxy(this.showSearch, this),
        $.proxy(this.hideSearch, this)
      );
    },
    showSearch: function(e){
      e.preventDefault();
      this.elements.searchContainer.slideDown();
    },
    hideSearch: function(e){
      e.preventDefault();
      this.elements.searchContainer.slideUp();
    }
  };

  $(function(){ searchDropdown.init(); });
})();
