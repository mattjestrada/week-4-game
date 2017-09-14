//Global variables

var album = {
    one: {
        name: "One",
        value: 0
    },
    two: {
        name: "Two",
        value: 0
    },
    three: {
        name: "Three",
        value: 0
    },
    four: {
        name: "Four",
        value: 0
    },
};

var currentScore = 0;
var targetScore = 0;
var winCount = 0;
var lossCount = 0;

//Functions

//function to choose a random number
var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//function for refreshed game play
var startGame = function() {
    currentScore = 0;
    //getting random value for albums
    targetScore = Math.floor(Math.random() * (100 - 9 + 1)) + 9;
    album.one.value = getRandom(1, 10);
    album.two.value = getRandom(1, 10);
    album.three.value = getRandom(1, 10);
    album.four.value = getRandom(1, 10);
    //add the values to the score and target
    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);
}
//add function for album clicks
var addValues = function(album) {
    currentScore = currentScore + album.value;
    $("#yourScore").html(currentScore);
    checkWin();

    console.log("Score" + currentScore);
}
//variable to check if player is a winner or loser
var checkWin = function() {
    if (currentScore > targetScore) {
        lossCount++;
        $("#lossCount").html(lossCount);
        console.log("you lost");
        startGame();
    } else if (currentScore == targetScore) {
        winCount++;
        $("#winCount").html(winCount);
        console.log("You win");
        startGame();
    }
}
//Main Process
startGame();

$("#one").click(function() {
    addValues(album.one);
});
$("#two").click(function() {
    addValues(album.two);
});
$("#three").click(function() {
    addValues(album.three);
});
$("#four").click(function() {
    addValues(album.four);
});