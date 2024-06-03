
var answers = {};

var question_one = document.getElementById('question-1');
var question_two = document.getElementById('question-2');
var question_three = document.getElementById('question-3');
var question_four = document.getElementById('question-4');
var question_five = document.getElementById('question-5');
let question_six = document.getElementById('question-6');
let question_seven = document.getElementById('question-7');
let question_eight = document.getElementById('question-8');
let question_nine = document.getElementById('question-9');
let question_ten = document.getElementById('question-10');

function storeAnswer(question_number, event) {
  if (event.target.type === 'radio') {
    console.log(event.target.value);
    answers['question' + question_number] = parseInt(event.target.value);
    console.log(answers);
  }
}

// Evento de clique que instancia ela de acordo com a questão escolhida

question_one.addEventListener('click', (event) => {
  storeAnswer(1, event)
})

question_two.addEventListener('click', (event) => {
  storeAnswer(2, event)
})
question_three.addEventListener('click', (event) => {
  storeAnswer(3, event)
})
question_four.addEventListener('click', (event) => {
  storeAnswer(4, event)
})
question_five.addEventListener('click', (event) => {
  storeAnswer(5, event)
})
question_six.addEventListener('click', (event) => {
  storeAnswer(6, event)
})
question_seven.addEventListener('click', (event) => {
  storeAnswer(7, event)
})
question_eight.addEventListener('click', (event) => {
  storeAnswer(8, event)
})
question_nine.addEventListener('click', (event) => {
  storeAnswer(9, event)
})
question_ten.addEventListener('click', (event) => {
  storeAnswer(10, event)
})

function totalScore() {
  var total_score =
    answers.question1 +
    answers.question2 +
    answers.question3 +
    answers.question4 +
    answers.question5 +
    answers.question6 +
    answers.question7 +
    answers.question8 +
    answers.question9 +
    answers.question10;

  return total_score;
}


// declarando as submits e guardando so valores de cada questão
let submit1 = document.getElementById('submit1');
let submit2 = document.getElementById('submit2');
let submit3 = document.getElementById('submit3');
let submit4 = document.getElementById('submit4');
let submit5 = document.getElementById('submit5');
let submit6 = document.getElementById('submit6');
let submit7 = document.getElementById('submit7');
let submit8 = document.getElementById('submit8');
let submit9 = document.getElementById('submit9');
let submit10 = document.getElementById('submit10');

function nextQuestion(question_number) {
  var current_question_number = question_number - 1;
  var question_number = question_number.toString();
  var current_question_number = current_question_number.toString();

  var el = document.getElementById('question-' + question_number);
  var el2 = document.getElementById('question-' + current_question_number);

  el.style.display = "block";
  el2.style.display = "none";
}

// efeito de progressão de barra

submit1.addEventListener('click', () => {
  nextQuestion(2);
  growProgressBar('19%');
})
submit2.addEventListener('click', () => {
  nextQuestion(3);
  growProgressBar('25%');
})
submit3.addEventListener('click', () => {
  nextQuestion(4);
  growProgressBar('43%');
})
submit4.addEventListener('click', () => {
  nextQuestion(5);
  growProgressBar('65%');
})
submit5.addEventListener('click', () => {
  nextQuestion(6);
  growProgressBar('85%');
})
submit6.addEventListener('click', () => {
  nextQuestion(7);
  growProgressBar('100%');
})
submit7.addEventListener('click', () => {
  nextQuestion(8);
  growProgressBar('115%');
})
submit8.addEventListener('click', () => {
  nextQuestion(9);
  growProgressBar('126%');
})
submit9.addEventListener('click', () => {
  nextQuestion(10);
  growProgressBar('138%');
})
submit10.addEventListener('click', () => {
  nextQuestion(11);
  growProgressBar('153%');
})


function growProgressBar(percentage_width) {
  var bar = document.getElementById("progress_bar");
  bar.style.width = percentage_width;
}


submit5.addEventListener('click', function () {

  let estiloMusical = 'Rock' ;

  if (totalScore() < 4) {

    estiloMusical = 'Lo-fi';
    document.getElementById("printtotalscore").innerHTML = `<br>Lo-fi:<br><br> Lo-fi oferece uma batida suave e cosntante que ajuda a manter o foco sem ser muito intrusivo.<br><a href="<a href="https://youtube.com/playlist?list=PLi-IKclGj18xxBzJt5XUBKl0W8RwWyZOr&si=DokD_xLbIcl6vOW7">">Aproveite as playlists designadas a lo-fi<br> <a/> `;

  }else if(totalScore == 4){

    estiloMusical = 'New Age';
    document.getElementById("printtotalscore").innerHTML = `<br>New Age:<br><br> este estilo oferece uma melodia contínua e envolvente, ideal para relaxamento e meditação.<br><a href="https://youtube.com/playlist?list=PLi-IKclGj18xxBzJt5XUBKl0W8RwWyZOr&si=DokD_xLbIcl6vOW7"> Aproveite as playlists designadas a New Age<br> </a> `;

  }else{
    document.getElementById("printtotalscore").innerHTML = `<br>Rock:<br><br>  O Rock com ritmo rápido e batidas fortes é  para dar um impulso de energia durante atividades energizantes.<br><a href="https://www.youtube.com/results?search_query=playlist+rock"> Aproveite as playlists designadas a Rock</a> `;
  }



})


