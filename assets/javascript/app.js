var panel = $("#quiz-container");

// Question Object

var questions = [{
  question: "In the movie The Terminator, who is the terminator sent back in time to kill?",
  answers: ["Sarah Connor", "Kyle Reese", "James Cameron", "John Connor"],
  correctAnswer: "John Connor"
}, {
  question: "Who is the sole survivor of crew vessel, Nostromo, in the 1979 film Alien?",
  answers: ["Ripley", "Dallas", "Ash", "Kane"],
  correctAnswer: "Ripley"
}, {
  question: "Who wrote the 1984 cyberpunk novel, Neuromancer?",
  answers: ["Robert Heinlein", "Stephen King", "William Gibson", "Isaac Asimov"],
  correctAnswer: "William Gibson"
}, {
  question: "What is the name of the popular, highly addictive drug in the Philip K Dick short story, A Scanner Darkly?",
  answers: ["Mentats", "Bufferin", "Substance D", "Substance K"],
  correctAnswer: "Substance D"
}, {
  question: "In which year was the Stanley Kubrick-directed sci fi film 2001: A Space Odyssey made?",
  answers: ["1965", "1968", "1971", "1973"],
  correctAnswer: "1968"
}, {
  question: "The 1996 comedy sci fi film Mars Attacks! was directed by which famous director?",
  answers: ["Tim Burton", "Michael Bay", "James Cameron", "Antoine Fuqua"],
  correctAnswer: "Tim Burton"
}, {
  question: "What is the name of the orange tabby cat aboard the crew vessel in the 1979 film Alien?",
  answers: ["Scooter", "Travis", "Rupert", "Jones"],
  correctAnswer: "Jones"
}, {
  question: "In the Terminator series, who is John Connor's father?",
  answers: ["The Terminator", "Kyle Reese", "Dr. Silberman", "The series is a paradoxical loop, John Connor does not have a father at all"],
  correctAnswer: "Kyle Reese"
}];


// Game Variables and Set Timer Variables
var timer;
// Game Object: Contains Counters, Timer Function, Start and Done

var game = {

  correct: 0,
  incorrect: 0,
  counter: 90,

  // Timer counts down from 90 seconds and writes the seconds to the DOM

  countdown: function () {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },
  // Start function begins game and timer, prepends to quiz wrap div

  start: function () {
    timer = setInterval(game.countdown, 1000);

    $("#quiz-wrap").prepend("<h2>T-Minus: <span id='counter-number'>90</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
          "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Done</button>");
  },

  // Checks for input selection and matching the correct answer

  done: function () {

    $.each($("input[name='question-0']:checked"), function () {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function () {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function () {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function () {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function () {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function () {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function () {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function () {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function () {

    clearInterval(timer);

    $("#quiz-wrap h2").remove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function () {
  game.start();
});


$(document).on("click", "#done", function () {
  game.done();
});
