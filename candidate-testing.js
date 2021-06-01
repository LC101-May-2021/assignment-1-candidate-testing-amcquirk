const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName=" ";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //

let questions=["1)Who was the first American woman in space?", "2)True or false: 5 kilomater == 5000 meters?", "3)(5+3)/2*10","4)Given the array [8,'Orbit','Trajectory',45], what entry is at index 2?", "5)What is the minimum crew size for the ISS?"
]

let correctAnswers=["Sally Ride","true","40","Trajectory","3"];

let candidateAnswers=[];

function askForName() {let candidateName=input.question("Candidate Name: ");

console.log("Hello, "+candidateName+"!");
  // TODO 1.1b: Ask for candidate's name //

};

function askQuestion() {/*{let candidateAnswer=input.question("1) Who was the first American woman in space? ");
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

if (candidateAnswer==correctAnswer) {
  console.log("your answer is correct");
} else {console.log("your answer is incorrect");

}}
*/
}
for (let i=0; i<questions.length; i++){
  let answer=input.question(questions[i]);
  candidateAnswers.push(answer);

  console.log(`Your answer: ${candidateAnswers[i]}; Correct answer: ${correctAnswers[i]}`);
}


/*

for (let i=0; i<questions.length-4; i++) {

  candidateAnswers[0]=input.question(questions[0])


 console.log(`Your answer: ${candidateAnswers[0]};
Correct answer: ${correctAnswers[0]}`);


console.log(" ");

 candidateAnswers[1]=input.question(questions[1])

 console.log(`Your answer: ${candidateAnswers[1]};
Correct answer: ${correctAnswers[1]}`);

console.log(" ");

 candidateAnswers[2]=input.question(questions[2])

 console.log(`Your answer: ${candidateAnswers[2]};
Correct answer: ${correctAnswers[2]}`);

console.log(" ");

 candidateAnswers[3]=input.question(questions[3])

 console.log(`Your answer: ${candidateAnswers[3]};
Correct answer: ${correctAnswers[3]}`);

console.log(" ");

 candidateAnswers[4]=input.question(questions[4])

 console.log(`Your answer: ${candidateAnswers[4]}
Correct answer: ${correctAnswers[4]}`);

}
*/
function gradeQuiz(candidateAnswers){

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  let grade;
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion() 
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};