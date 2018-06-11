function Travel(place, date, landmark){
  this.place = place;
  this.date = date;
  this.landmark =landmark;
}

$(document).ready(function(){
  $("form#new-location").submit(function(e){
    e.preventDefault();
    var inputtedPlace = $("input#new-place").val();
    var inputtedDate = $("input#new-date").val();
    var inputtedLandmark = $("input#new-landmark").val();

    var newLocation = new Travel(inputtedPlace, inupttedDate, inputtedLandmark);

    $("ul#trips").append("<li><span class='trip'>" + newLocation.inputtedPlace + "</span></li>")

    $(".trip").last().click(function(){
      $("#show-trip").show();
      $("#show.trips h2").text(newTravel.place);
      $(".place").text(newLocation.place);
      $(".date").text(newLocation.date);
      $(".landmark").text(newLocation.landmark);
    });

    $("input#new-location").val("");
    $("input#new-date").val("");
    $("input#new-landmark").val("");
  });
});
