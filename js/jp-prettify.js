(function() {
  var prettifyJS = "//www.robovm.org/js/prettify.js";
  var prettifyCSS = "//www.robovm.org/css/prettify.css";

  var jqueryJS = "//www.robovm.org/js/jquery-1.8.2.min.js";
  
  function jQueryExists() { return typeof jQuery !== 'undefined'; }
  
  //get jquery
  if(jQueryExists())
    gotJQuery();
  else {
    document.write("<script src='"+jqueryJS+"'></script>");
    var interval = setInterval(function() {      
      if (jQueryExists()) {      
        clearInterval(interval);            
        gotJQuery();
      }
    }, 100);
  }
  
  //got jquery
  function gotJQuery() {
    $("head").append("<link rel='stylesheet' href='"+prettifyCSS+"'></link>");
    jQuery.ajaxSetup({ cache: false });
    $.getScript(prettifyJS, gotPrettify);
  }
  //prettify!
  function gotPrettify(){
    $(document).ready(window.prettyPrint);
  }

})();