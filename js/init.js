(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

var elem = document.querySelector('.collapsible');
var instance = M.Collapsible.init(elem, {
  accordion: false
});