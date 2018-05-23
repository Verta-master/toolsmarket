$(function() {
  $("#slider-price" ).slider({
    range: true,
    min: 0,
    max: 50000,
    values: [750, 30000],
    slide: function(event, ui) {
      $( "#price-min" ).val( ui.values[ 0 ] );
      $( "#price-max" ).val( ui.values[ 1 ] );
    }
  });
  $( "#price-min" ).val( $( "#slider-price" ).slider( "values", 0 ) );
  $( "#price-max" ).val( $( "#slider-price" ).slider( "values", 1 ) );
});

$(function() {
  $("#slider-weight" ).slider({
    range: true,
    min: 1,
    max: 5000,
    values: [10, 3000],
    slide: function(event, ui) {
      $( "#weight-min" ).val( ui.values[ 0 ] );
      $( "#weight-max" ).val( ui.values[ 1 ] );
    }
  });
  $( "#weight-min" ).val( $( "#slider-weight" ).slider( "values", 0 ) );
  $( "#weight-max" ).val( $( "#slider-weight" ).slider( "values", 1 ) );
});
