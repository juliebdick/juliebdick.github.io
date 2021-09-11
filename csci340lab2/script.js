$(document).ready(function() {
  $('#clicker').click(function() {
    $.ajax({
      //dataType: "json"
      url: "https://api.thecatapi.com/v1/images/search"
      success: function(results) {
        console.log(results[0]);
      }
    })
  })
})
