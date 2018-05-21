import './styles.css';

var userArray = [];
var simonArray = [];
var winStatus = true;

function runNextSimonDisplay() {
  var simonSays = (Math.random() * 4);
  if (simonSays <= 1){
    simonArray.push("red");
  } else if (simonSays <= 2){
    simonArray.push("yellow");
  } else if (simonSays <= 3){
    simonArray.push("green");
  } else if (simonSays <= 4){
    simonArray.push("blue");
  }
  for (var i=0; i<simonArray.length; i++){
    $('#simon-output').text(simonArray[i].toString());
  }
}

function checkIfCorrect() {

  for (var i=0; i<simonArray.length; i++){
    if (userArray[i]!=simonArray[i]){
      winStatus = false;
    }
  }
  if (winStatus == true) {
    console.log(userArray);
    console.log(simonArray);
    userArray = [];
    runNextSimonDisplay();
  } else {
    console.log(userArray);
    console.log(simonArray);
    userArray = [];
    simonArray = [];
    alert("You Lose!");
    winStatus = true;
  }


}

$(document).ready(function() {

  $('#simon-red').click(function(event) {
    event.preventDefault();
    userArray.push("red");
    if (userArray.length >= simonArray.length){
      checkIfCorrect();
    }
  });
  $('#simon-yellow').click(function(event) {
    event.preventDefault();
    userArray.push("yellow");
    if (userArray.length >= simonArray.length){
      checkIfCorrect();
    }
  });
  $('#simon-green').click(function(event) {
    event.preventDefault();
    userArray.push("green");
    if (userArray.length >= simonArray.length){
      checkIfCorrect();
    }
  });
  $('#simon-blue').click(function(event) {
    event.preventDefault();
    userArray.push("blue");
    if (userArray.length >= simonArray.length){
      checkIfCorrect();
    }
  });

  $('#play-simon-says').click(function(event) {
    event.preventDefault();
    userArray = [];
    simonArray = [];
    runNextSimonDisplay();
  });


});
