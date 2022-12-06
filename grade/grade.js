// A> 79, B-60-79, C- 59-49, D-40-49, E- less 49.........

function promptMarks(){
    marks = prompt ("please enter student marks");

    if ((marks>=80 )&& (marks<=100)){
        console.log("Student' grade A");
    }
    else if((marks>=69) && (marks<=79)){
        console.log("Student' grade is B");
    }
    else if((marks>=59) && (marks<=49)){
        console.log("Student' grade is C");
    }
    else if((marks>49) && (marks<=40)){
        console.log("Student' grade is D");
    }
    else if ((marks>=0) && (marks<=39)){
        console.log("Student' grade is E");
    }
}