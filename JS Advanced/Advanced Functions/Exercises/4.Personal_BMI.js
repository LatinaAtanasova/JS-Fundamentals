function solve(name, age, weightKg, heightCm) {

    function calculateBmi(weightKg, heightM){
        return Math.round(weightKg/heightM ** 2)
    }

    let bmi = calculateBmi(weightKg, heightCm / 100)

    function defineStatus (bmi){
        if (bmi < 18.5){
            return 'underweight'
        }else if (bmi < 25 && bmi >= 18.5){
            return 'normal'
        }else if (bmi <30 && bmi >= 25){
            return 'overweight'
        }else{
            return 'obese'
        }
    }

    let person = {
        name: name,
        personalInfo: {
            age: age,
            weight: weightKg,
            height: heightCm
        },
        BMI: bmi,
        status: defineStatus(bmi)
    };

    if (person.status === 'obese'){
        person.recommendation = 'admission required'
    }

    return person;
}

console.log(solve("Peter", 29, 75, 182));