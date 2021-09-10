$(document).ready(function() {
  $('#clicker').click(function() {
    $.ajax({
      dataType: "json"
      url: ""
      success: function(results) {
        console.log(results["url"]);
        
      }
    })
  })
})
