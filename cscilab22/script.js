$(document).ready(function() {
  $('#clicker').click(function() {
    $.ajax({
      //dataType: "json",
      url: "https://random-d.uk/api",
      success: function(results) {
        console.log(results["url"]);
        if (results["url"].endsWith(".gif")) {
          $('#dog').attr("src", "images/blank.png");
        } else {
          $('#dog').attr("src", results["url"]);
        }
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
  });
});
