// Initialize Firebase
var config = {
  apiKey: "AIzaSyBG-TRihSTQX4b10YaJs25X0vUD-QkXY-s",
  authDomain: "train-scheduler-370bf.firebaseapp.com",
  databaseURL: "https://train-scheduler-370bf.firebaseio.com",
  projectId: "train-scheduler-370bf",
  storageBucket: "train-scheduler-370bf.appspot.com",
  messagingSenderId: "597970853108"
};

firebase.initializeApp(config);

var database = firebase.database();

var employeeDir = database.ref("employees");

employeeDir.on("value", function(snapshot) {

})
  
  //click event when submit is pressed
  $("button").on("click",function(e){
    console.log("clicked");
    e.preventDefault();
    //store information from fields into vars
    var name = $("#train-name").val().trim();
    var destination = $("#destination-name").val().trim();
    var time = $("#time-name").val().trim(); //moment($("#time-name").val().trim(),"HH:mm");  //convert this value to unix time  in ms using moment.js
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
    //$("thead").append(newRow);

  });