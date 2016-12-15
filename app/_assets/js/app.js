jQuery.fn.reverse = function() {
    return this.pushStack(this.get().reverse(), arguments);
};

$(document).ready(function(){


$( ".interaction-1" ).hover(
  function() {
    $( ".interaction-1" ).addClass( "table-fade" );
  }, function() {
    $( ".interaction-1" ).removeClass( "table-fade" );
  }
);

$( ".interaction-2" ).hover(
  function() {
    $( ".interaction-2" ).addClass( "table-fade" );
  }, function() {
    $( ".interaction-2" ).removeClass( "table-fade" );
  }
);

$( ".interaction-3" ).hover(
  function() {
    $( ".interaction-3" ).addClass( "table-fade" );
  }, function() {
    $( ".interaction-3" ).removeClass( "table-fade" );
  }
);

$( ".interaction-slide" ).hide();
$( ".interaction-slide" ).reverse().each(function(i) {
  $(this).delay(2500*i).fadeIn();
});

});
