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

var employeeDir = database.ref("/employees");
  
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

    employeeDir.push({
      name: name,
      destination: destination,
      time: time,
      frequency: frequency,
    });

  });

  //if there is something in the database add to the train table
  employeeDir.on("child_added", function(childSnapshot) {

    // Log everything that's coming out of snapshot
    console.log(childSnapshot.val().name);
    console.log(childSnapshot.val().destination);
    console.log(childSnapshot.val().time);
    console.log(childSnapshot.val().frequency);

    var name = childSnapshot.val().name;
    var destination = childSnapshot.val().destination;
    var time = childSnapshot.val().time;
    var frequency = childSnapshot.val().frequency;

    //let's create a train object and append to the schedule
    var newRow = $("<tr>");
    var nameDisplay = $("<td>");
    var destinationDisplay = $("<td>");
    var timeDisplay = $("<td>");
    var frequencyDisplay = $("<td>");
    var minutesDisplay = $("<td>");
    console.log(time);

    nameDisplay.attr("scope","col");
    destinationDisplay.attr("scope","col");
    timeDisplay.attr("scope","col");
    frequencyDisplay.attr("scope","col");
    minutesDisplay.attr("scope","col");

    //calculate difference of first train time minus current time modules the frequency between trains
    var minutes = frequency - Math.floor(((moment().unix("X")-moment(time, "hh:mm").unix("X"))/60)%frequency);
    console.log("Delta time; " + (moment().unix("X")-moment(time, "hh:mm").unix("X"))/60);
    console.log("until next train: "+ ((moment().unix("X")-moment(time, "hh:mm").unix("X"))/60)%frequency)

    //now time of next train is current time + minutes
    var timeNext = moment().add(minutes,'m').format('hh:mm A');

    

    nameDisplay.html(name);
    destinationDisplay.html(destination);
    timeDisplay.html(timeNext);
    frequencyDisplay.html(frequency);
    minutesDisplay.html(minutes);

    newRow.append(nameDisplay,destinationDisplay,frequencyDisplay,timeDisplay,minutesDisplay);
    $("tbody").append(newRow);
  },function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });