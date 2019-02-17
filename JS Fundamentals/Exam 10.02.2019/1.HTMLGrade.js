function solve(examPoints, homework, totalHomework) {

    let grade = 2;
    let bonus = 0;
    let maxExamPoints = 400;
    let maxPoints = 100;


    let points = examPoints/maxExamPoints*0.9*100;

    if (homework === totalHomework){
        bonus = 10;
    } else {
        bonus = 10*homework/totalHomework
    }
    let totalPoints = points + bonus;

    if (examPoints === maxExamPoints)
    {
        grade = 6;

    }
    else{
        grade = 3 + 2 * (totalPoints-maxPoints/5)/(maxPoints/2);
    }


    console.log(grade.toFixed(2));


}

solve(300, 10, 10);