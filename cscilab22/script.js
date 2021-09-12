$(document).ready(function() {
  $('#clicker').click(function() {
    $.ajax({
      dataType: "json",
      url: "https://random-d.uk/api?format=json",
      success: function(results) {
        console.log(results["url"]);
        if (results["url"].endsWith(".gif")) {
          $('#dog').attr("src", "blank.png");
        } else {
          $('#dog').attr("src", results[0]);
        }
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
  });
});
