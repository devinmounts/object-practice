function Travel(place, date, landmark){
  this.place = place;
  this.date = date;
  this.landmark =landmark;
}

function Item(what, where, when) {
  this.what = what;
  this.where = where;
  this.when = when;
}

Item.prototype.toDoInfo = function() {
  return this.what + " at " + this.where + " by " + this.when;
}

$(document).ready(function(){
  $("form#new-location").submit(function(e){
    e.preventDefault();
    var inputtedPlace = $("input#new-place").val();
    var inputtedDate = $("input#new-date").val();
    var inputtedLandmark = $("input#new-landmark").val();
    var newLocation = new Travel(inputtedPlace, inputtedDate, inputtedLandmark);
    $(".locationResult").show();
    $("#trips").append("<li><span class='trip'>" + newLocation.place + "</span></li>")
    $(".trip").last().click(function(){
      $("#show-trips").show();
      $("#show.trips h2").text(newLocation.place);
      $(".place").text(newLocation.place);
      $(".date").text(newLocation.date);
      $(".landmark").text(newLocation.landmark);
      $(".half").addClass("col-md-6");
    });
    $("input#new-place").val("");
    $("input#new-date").val("");
    $("input#new-landmark").val("");
  });

  $("#item-list").submit(function(event) {
    event.preventDefault();
    var inputtedWhat = $("#whatItem").val();
    var inputtedWhere = $("#whereItem").val();
    var inputtedWhen = $("#whenItem").val();
    var newItem = new Item(inputtedWhat, inputtedWhere, inputtedWhen);
    $("#listOfItems").append("<li class=\"liItem\"><span class='listItems'>" + newItem.toDoInfo() + "</span><img src=\"img/complete.png\" class=\"complete\"></li>")

    $("input#whatItem").val("");
    $("input#whereItem").val("");
    $("input#whenItem").val("");

    $(".listItems").last().click(function() {
      $(this).parent().children(".complete").toggle();
    });
    $(".complete").last().click(function() {
      $(this).parent().children(".listItems").toggleClass("strikethrough")
      $(this).toggle();
      $(this).toggleClass("complete")
    });
  });
});
