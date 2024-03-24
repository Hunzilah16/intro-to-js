var weight=prompt("your weight");
var height=prompt("your hight");
function BmiCalculator(weight,height) {
    var bmi = weight/(Math.pow(height,2));
    return bmi;
    
}

var finals = BmiCalculator(weight,height );

alert("your Bmi is"+ finals);

