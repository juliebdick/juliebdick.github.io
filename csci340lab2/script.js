$(document).ready(function() {
  $('#clicker').click(function() {
    $.ajax({
      dataType: "json"
      url: "fooddata.js"
      success: function(results) {
        console.log(results["url"]);
      }
    })
  })
})
