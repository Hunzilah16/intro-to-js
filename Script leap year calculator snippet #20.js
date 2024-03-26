var year =prompt("enter the year");
if (year%4===0) { 
    alert("its a leap year ");  
}

    if (year%100===0) {
        alert("not a leap year");
    }
        if (year%100!==0 && year%400===0) {
        alert("it's a leap year  ");
    }

            if (year%400===0) {
                alert("it's a leap year ")
            }
else{alert("it's not a leap year");
    }
