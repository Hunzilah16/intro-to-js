var weight = prompt ("your weight");
var hight = prompt( "your hight ");

function BMI(weight,hight) {

    var result = (weight*weight)/(hight*hight);
    return result;
    
    
}

alert (BMI);

//this function prints out its own sourse code as an alert