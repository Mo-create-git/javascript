//Switch statement is used when you want to compare one value againts any possible value.

//switch("expression"){
    //case value1;
    //code block
   // break;
    //case value2;
    //code block
    //break;
    //deafult;
    //code block
//}

let day = 5;

switch (day) {
 case 1:
console.log("Monday");
 break;
 case 2:
console.log("Tuesday");
 break;
 case 3:
console.log("Wednesday");
 break;
 case 4:
    console.log("thursday");
    break;
    case 5:
    console.log("Friday");
    break;
    case 6:
    console.log("Saturday");
    break;
    case 7:
    console.log("Sunday");
    break;
default:
    
console.log("Another day");
}