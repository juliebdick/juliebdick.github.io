$(document).ready(function() {
  $('#clicker').click(function() {
    $.ajax({
      dataType: "json"
      url: "https://api.thecatapi.com/v1/images/search$format=json"
      success: function(results) {
        console.log(results[0]);
        $('#cat').attr("src", results[0]["url"]);
      }
    })
  })
})
