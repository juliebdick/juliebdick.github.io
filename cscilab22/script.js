$(document).ready(function() {
  $('#clicker').click(function() {
    $.ajax({
      dataType: "json",
      url: "https://api.thecatapi.com/v1/images/search?format=json",
      success: function(results) {
        console.log(results[0].get("url"));
        $('#dog').attr("src", results[0].get("url"));
        //if (results["url"].endsWith(".mp4")) {
          //$('#dog').attr("src", "blank.png");
        //} else {
          //$('#dog').attr("src", results["url"]);
        //}
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
  });
});
