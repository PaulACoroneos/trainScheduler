  //click event when submit is pressed
  $("button").on("click",function(e){
    console.log("clicked");
    e.preventDefault();
    //store information from fields into vars
    var name = $("#train-name").val().trim();
    var destination = $("#destination-name").val().trim();
    var time = $("#time-name").val().trim();
    var frequency = $("#frequency-name").val().trim();

    //lets log to verify data is good
    console.log(name,destination,time,frequency);

    //let's create a train object and append to the schedule
    var newRow = $("<tr>");
    var nameDisplay = $("<td>");
    var destinationDisplay = $("<td>");
    var timeDisplay = $("<td>");
    var frequencyDisplay = $("<td>");

    nameDisplay.attr("scope","col");
    destinationDisplay.attr("scope","col");
    timeDisplay.attr("scope","col");
    frequencyDisplay.attr("scope","col");

    nameDisplay.html(name);
    destinationDisplay.html(destination);
    timeDisplay.html(time);
    frequencyDisplay.html(frequency);

    newRow.append(nameDisplay,destinationDisplay,timeDisplay,frequencyDisplay);
    $("thead").append(newRow);

  });