# trainScheduler
A train scheduler app that uses Firebase to host arrival and departure data.

## Technologies used

HTML,CSS,JavaScript,Bootstrap,JQuery, and Firebase

## Description

This is a train scheduler that takes in the following inputs:

1) Name of the train
2) Location train is going
3) Time of first train
4) Interval of train

Once the user submits this data it gets appended to a trains schedule table. This data is also stored in an object located in a realtime Firebase DB instance. The schedule is therefore persistent between page refreshes/other systems.

The user also has the capability to remove a row entry. This will remove from the web page and also from the database.

## Todo

The schedule should refresh every minute. I am still working on a method to implement this.
