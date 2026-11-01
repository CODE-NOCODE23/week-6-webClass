//STUDENT GRADING SYSTEM 
let firstName = "Millicent";
let lastName = "Amasiobi";
let mathematics = 85;
let english = 90;
let biology = 95;
let totalScore = mathematics + english + biology;
let remark;

if (totalScore >= 70) {
    remark = "Excellent";
} else if (totalScore >= 50 && totalScore <= 69) {
    remark = "Good";
} else if (totalScore >= 35 && totalScore <= 49) {
    remark = "You can do better";
} else {
    remark = "Fail";
}


console.log("STUDENT EXAMINATION RESULT");
console.log("Full Name: " + firstName + " " + lastName);
console.log("Mathematics: " + mathematics);
console.log("English: " + english);
console.log("Biology: " + biology);
console.log("Total Score: " + totalScore);
console.log("Remark: " + remark);


//FIZZBUZZ CHALLENGE 
for(let i=1; i<=100; i++){
    if(i % 3===0 && i % 5===0 ){
        console.log("FizzBuzz");
    }else if(i % 3 === 0){
        console.log("Fizz");
    }else if(i % 5 === 0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}

