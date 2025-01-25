// If the score is 100, then grade is A+.
// If the score is more than 80 and less than 100, then grade is A.
// If the score is more than 60 and less than 81, then grade is B.
// If the score is 60 or less than 60, then grade is C.
// Based on the above conditions create a function getGrade that accepts two parameters score and name The function should log [name] got X grade. accordingly to the console.

const getGrade = (score,name) => {
  let grade=0;
  
  if(score <= 60){
    grade = "C";
  }
  else if(score <= 80){
    grade = "B";
  }
  else if(score <= 99){
    grade = "A";
  }
  else{
    grade = "A+";
  }
  console.log(`${name} got ${grade} grade.`);
}