function Travel(place, date, landmark){
  this.place = place;
  this.date = date;
  this.landmark =landmark;
}

function Item(items) {
  this.toDoItem = items;
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
    });
    $("input#new-place").val("");
    $("input#new-date").val("");
    $("input#new-landmark").val("");
  });

  $("#item-list").submit(function(event) {
    event.preventDefault();
    var inputtedItem = $("#toDoItem").val();
    var newItem = new Item(inputtedItem);
    $("#listOfItems").append("<li><span class='listItems'>" + newItem.toDoItem + "</span></li>")
    $("#toDoItem").val("");

    $(".listItems").last().click(function(){
      $(".listItems")this.append("<img src=\"img/complete.png\" class=\"complete\">");
    });
  });

});
