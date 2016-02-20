$(document).ready(function() {
  // create stats object
  var stats = {
    win: "YOU WIN!",
    loss: "YOU LOSE!",
    tie: "TIE GAME!",
    wins: 0,
    losses: 0,
    ties: 0
  };

  // update counter, show game images and game text
  function winningRock() {
    $("#whoWon").html(stats.win);
    stats.wins++;
    $("#numWins").html(stats.wins);
    $('#humDisplay').html('<img class="displays" src="assets/images/paper.png" width="150" height="150"/>');
    $('#compDisplay').html('<img class="displays" src="assets/images/rock.png" width="150" height="150"/>');
  }

  function losingRock() {
    $("#whoWon").html( stats.loss);
    stats.losses++;
    $("#numLosses").html(stats.losses);
    $('#humDisplay').html('<img class="displays" src="assets/images/rock.png" width="150" height="150" />');
    $('#compDisplay').html('<img class="displays" src="assets/images/paper.png" width="150" height="150" />');
  }

  function winningPaper() {
    $("#whoWon").html(stats.win);
    stats.wins++;
    $("#numWins").html(stats.wins);
    $('#humDisplay').html('<img class="displays" src="assets/images/scissors.png" width="150" height="150" />');
    $('#compDisplay').html('<img class="displays" src="assets/images/paper.png" width="150" height="150" />');
  }

  function losingPaper() {
    $("#whoWon").html(stats.loss);
    stats.losses++;
    $("#numLosses").html(stats.losses);
    $('#humDisplay').html('<img class="displays" src="assets/images/paper.png" width="150" height="150" />');
    $('#compDisplay').html('<img class="displays" src="assets/images/scissors.png" width="150" height="150" />');
  }

  function winningScissors() {
    $("#whoWon").html(stats.win);
    stats.wins++;
    $("#numWins").html(stats.wins);
    $('#humDisplay').html('<img class="displays" src="assets/images/rock.png" width="150" height="150" />');
    $('#compDisplay').html('<img class="displays" src="assets/images/scissors.png" width="150" height="150" />');
  }

  function losingScissors() {
    $("#whoWon").html(stats.loss);
    stats.losses++;
    $("#numLosses").html(stats.losses);
    $('#humDisplay').html('<img class="displays" src="assets/images/scissors.png" width="150" height="150" />');
    $('#compDisplay').html('<img class="displays" src="assets/images/rock.png" width="150" height="150" />');
  }

  function tieGame() {
    $("#whoWon").html(stats.tie);
    stats.ties++;
    $("#numTies").html(stats.ties);
    $('#humDisplay').html("SAME WEAPON");
    $('#compDisplay').html("SAME WEAPON");
  }

  // rock = 0, paper = 1, scissors = 2;
  function game(choice1, choice2) {

    if (choice1 == 0 && choice2 == 1 || choice1 == 1 && choice2 == 0) {
      return (choice1 < choice2) ? losingRock() : winningRock();
    } else if (choice1 == 1 && choice2 == 2 || choice1 == 2 && choice2 == 1) {
      return (choice1 < choice2) ? losingPaper() : winningPaper();
    } else if (choice1 == 0 && choice2 == 2 || choice1 == 2 && choice2 == 0) {
      return (choice1 < choice2) ? winningScissors() : losingScissors();
    }
    tieGame();
  }

  // call our game function when user clicks and selects
  $("#rock").on("click", function() {
    game(0, Math.floor(Math.random() * 3));
    var div = $(".displays");
    div.animate({
      fontSize: '2.2em'
    }, "medium");
    div.animate({
      fontSize: '2.0em'
    }, "medium");
  });
  $("#paper").on("click", function() {
    game(1, Math.floor(Math.random() * 3));
    var div = $(".displays");
    div.animate({
      fontSize: '2.2em'
    }, "medium");
    div.animate({
      fontSize: '2.0em'
    }, "medium");
  });
  $("#scissors").on("click", function() {
    game(2, Math.floor(Math.random() * 3));
    var div = $(".displays");
    div.animate({
      fontSize: '2.2em'
    }, "medium");
    div.animate({
      fontSize: '2.0em'
    }, "medium");
  });

});

//    *****SIMPLIFIED******
//    Using Modulus
//    d = (3 + a - b) % 3. Then:
//    d = 1 => a wins
//    d = 2 => b wins
//    d = 0 => tie
