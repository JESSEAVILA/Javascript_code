/*This Web Site wasa created only for test... And my plan that's improve...
 *  But I knowing that this helpfully many persons!*/

var dd, mm, yyyy, year; 
var birthday;
var age, currentYear;
var dontAllowed = 0, allowed = 0, right = 0, wrong = 0;
var indeed = false, pass = false;
var stats1, stats2;

year = parseInt(2019);

while (indeed === false){
    birthday = prompt ("What's your birthday date?");
    
    dd = parseInt(birthday / 1000000);
    mm = parseInt((birthday % 1000000) / 10000);
    yyyy = (birthday % 10000);    

    while (pass === false){
        currentYear = prompt ("Which year are you in?");
        
        
        if (currentYear != year){
            
            alert ("Current year incorrect");
        
        }else{
            wrong = (wrong + 1);
        }
        
        if (currentYear == year){
            alert("Correct year, go ahead!");
                       
            right = (right + 1);
            
            if (right === 1){
                
               pass = true;
            }
        } 
    }

    if (mm === 01){
        mm = ("January");
    }else if (mm === 02){
        mm = ("February");
    }else if (mm === 03){
        mm = ("March");
    }else if (mm === 04){
        mm = ("April");
    }else if (mm === 05){
        mm = ("May");
    }else if (mm === 06){
        mm = ("June");
    }else if (mm === 07){
        mm = ("July");
    }else if (mm === 08){
        mm = ("August");
    }else if (mm === 09){
        mm = ("September");
    }else if (mm === 10){
        mm = ("October");
    }else if (mm === 11){
        mm = ("November");
    }else if (mm === 12){
        mm = ("December");
    }
    
    age = (currentYear - yyyy);
    
    stats1 = ("Your birthday is: " + mm + "/ " + dd + "/ " + yyyy + " your age is: " + age + " old! With this, you aren't allowed to access this web page!");
    stats2 = ("Your birthday is: " + mm + "/ " + dd + "/ " + yyyy + " your age is: " + age + " old! With this, you're allowed to access this web page!");
    
    if (age < 18){
      alert ("You are less than age!");
      alert (stats1);
    }else {        
        dontAllowed = (dontAllowed + 1);
    }
    
    if (age >= 18){
        alert  ("You are of age, WELCOME HERE!!!");
        alert (stats2);
        
        allowed = (allowed + 1);
        
        if (allowed === 1){
            
         indeed = true;   
        }        
    }
}
