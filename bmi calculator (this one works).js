function BmiCalculator(weight,height) {
    var bmi = weight/(Math.pow(hight,2));
    return bmi;
    
}

var finals = BmiCalculator(65,1.8);

console.log(finals);

