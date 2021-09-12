$(document).ready(function() {
  $('#clicker').click(function() {
    $.ajax({
      dataType: "json",
      url: "https://api.thecatapi.com/v1/images/search?format=json",
      success: function(results) {
        console.log(results[0]);
        $('#cat').attr("src", results[0]["url"]);
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    })
  })
  $('clicker2').click(function() {
    $.ajax({
      dataType: "json",
      url: "https://foodish-api.herokuapp.com/api/?format=json",
      success: function(results) {
        console.log(results["image"]);
        $('#food').attr("src", results["image"]);
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    })
  })
})
