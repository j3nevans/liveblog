jQuery.fn.reverse = function() {
    return this.pushStack(this.get().reverse(), arguments);
};

$(document).ready(function(){


$( ".interaction-1" ).hover(
  function() {
    $( ".interaction-1" ).addClass( "bg-white" );
  }, function() {
    $( ".interaction-1" ).removeClass( "bg-white" );
  }
);

$( ".interaction-2" ).hover(
  function() {
    $( ".interaction-2" ).addClass( "bg-white" );
  }, function() {
    $( ".interaction-2" ).removeClass( "bg-white" );
  }
);

$( ".interaction-3" ).hover(
  function() {
    $( ".interaction-3" ).addClass( "bg-white" );
  }, function() {
    $( ".interaction-3" ).removeClass( "bg-white" );
  }
);

$( ".interaction-slide" ).hide();
$( ".interaction-slide" ).reverse().each(function(i) {
  $(this).delay(3000*i).slideIn();
});

});
