 // gradeChacker function
    
    function gradeChacker(number){
        if(number<=100 && number>0){
            if(number<=100 && number>=80){
                return "A+";
            }if (number<80 && number>=70){
                return "A";
            }if (number <70 && number>=60){
                return "A-";
            }if(number <60 && number >=50){
                return "B";
            }if(number <50 && number>=40){
                return "C";
            }if(number <40 && number >=33){
                return "D";
            }else{
                return "Fail";
            }
        }else{
            return "plz, give correct value";
        }
    }
    //alert(gradeChacker(79));