function printMM(num) {
    
    let firstsString = "*";
    let secondString = "-";

    n1 = num;
    n2 = num;
    n3 = num;

  if(num > 2 && num < 10000 && num % 2 === 1) {
 
        for(let i = 0; i < num / 2; i++){
            line = secondString.repeat(n1) + firstsString.repeat(n2) + secondString.repeat(n3) + firstsString.repeat(n2) + secondString.repeat(n1);
            console.log(line.repeat(2));

            n1--;
            n2 += 2;
            n3 -= 2;
        }
        for(let i = 0; i < num / 2; i++){
            n2 -= 2;
            n3 += 2;
            
            line = secondString.repeat(n1) + firstsString.repeat(num) + secondString.repeat(n3) + firstsString.repeat(n2) + secondString.repeat(n3) + firstsString.repeat(num) + secondString.repeat(n1);
            console.log(line.repeat(2));
            n1--;
        }
    } else {

    console.log("The number is not odd!");
  
    }
}

printMM(7);