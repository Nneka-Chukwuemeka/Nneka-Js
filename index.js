  // declare a function with one parameter
  function checkYuGiOh(parameter) {
    let paraData = [];
    let iData = "";
    for (let i=1; i<=parameter; i++){

        // declare conditions for numbers divisible by 2, 3, 5
         if ( [i] % 2 == 0 && [i] % 3 == 0 && [i] % 5 == 0){
          iData = 'yu-gi-oh';
        }
        else if (
        [i] % 2 ==0 && [i] % 3 == 0) {
          iData ='yu-gi';  
        }
        else if (
        [i] % 2 == 0 && [i] % 5 == 0){
         iData = 'yu-oh';
        }
        else if (
        [i] % 3 == 0 && [i] % 5  == 0){
          iData = 'gi-oh';
        }

        else if (
        [i] % 5 == 0) {
          iData = 'oh';
        }  
        
        else if (
        [i] % 3 == 0){
           iData = 'gi';
        }

        else if (
        [i] % 2 == 0){
           iData = 'yu'; 

        }
        else if ((isNaN(i))){
            iData = "invalid parameter:" + parameter;
        }
        
           else {
             iData = i; 
           }
           paraData.push(iData);
    }
    console.log(paraData);
    return paraData;
}

checkYuGiOh(100);
checkYuGiOh(30);
checkYuGiOh(10);
checkYuGiOh("Nneka");







// function that convert Fahrenheit to Celsuis

function convertFahrToCelsuis(Faren) {
    const Celsuis = ((Faren - 32)*5)/9;

    if (isNaN(Faren)){
        console.log(Faren + " " + "is not a number but a/an" + " " + typeof Faren );
          }
    else if (Array.isArray(Faren)) {
        console.log(Faren.values + " " + "is not a number but a/an" + " " + typeof Faren );
    }

    else {
    console.log(Celsuis.toFixed(4),"deg C");
    }
     return Celsuis;
     
}

convertFahrToCelsuis(0);
convertFahrToCelsuis("30");
convertFahrToCelsuis({temp:0});
convertFahrToCelsuis("Nneka");
convertFahrToCelsuis([1,2]);
convertFahrToCelsuis({temp:0});