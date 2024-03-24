function calculatedGrade(mark){
   
 //range of the student marks with the corresponding grades

    if(mark >= 79 && mark<= 100){
        return 'A'
    }

    else if(mark>=60){
       return 'B'
    }

    else if(mark>=50){
       return 'C'
    }
    
    else if(mark>=40){
        return 'D'
    }
    
    else if(mark <=39 && mark >=0){
    return 'E'
    }
}

//insert the students marks below


console.log(calculatedGrade(''))






