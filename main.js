const display = document.querySelector("#display");
const loading = document.querySelector('#loading')
let result=0;
let variable=0;
let j;
let sep_value=0;
let operator = 0;


function input(value) {
    if (value >= 0 && value <= 9 || value == '.') {
    display.innerHTML = display.innerHTML + value;
    if (operator != 0) {
      operator = 0;
    }
  } else if (value == "ac") {
    display.innerHTML = "";
    operator = 0;
  } else if (value === "dc") {
      if(display.innerHTML.charAt(display.innerHTML.length - 1) == '+' ||display.innerHTML.charAt(display.innerHTML.length - 1) == '-' ||display.innerHTML.charAt(display.innerHTML.length - 1) == 'x' ||display.innerHTML.charAt(display.innerHTML.length - 1) == '/'){
          operator = 0
          console.log(display.innerHTML.charAt(display.innerHTML.length - 1))
        }
        display.innerHTML = display.innerHTML.slice(0, -1);
  } else if (value != "=") {
    if (operator == 0) {
        display.innerHTML = display.innerHTML + value;
      operator++
    }
  }else{
    for(let i=0;i<display.innerHTML.length;i++){
        if (display.innerHTML.charAt(i) >= 0 && display.innerHTML.charAt(i) <= 9 || display.innerHTML.charAt(i)=='.'){
            sep_value = sep_value + display.innerHTML.charAt(i)
        }else{
            switch(display.innerHTML.charAt(i)){
                case '+':
                    console.log(i)
                    for(j=i+1;display.innerHTML.charAt(j)>= 0 && display.innerHTML.charAt(j) <= 9 && j<display.innerHTML.length || display.innerHTML.charAt(i)=='.'; j++){
                        variable = variable + display.innerHTML.charAt(j)
                    }
                    i = j-1;
                    result += parseFloat(variable) + parseFloat(sep_value) ;
                    variable = 0;
                    console.log('This is sum')
                    console.log(result)
                    break;
                    case '-':
                    for(j=i+1;display.innerHTML.charAt(j)>= 0 && display.innerHTML.charAt(j) <= 9 && j<display.innerHTML.length || display.innerHTML.charAt(i)=='.'; j++){
                        variable = variable + display.innerHTML.charAt(j)
                    }
                    i = j-1;
                    result += parseFloat(sep_value) - parseFloat(variable);
                    variable = 0;
                    console.log(result)
                    break;
                    case 'x':
                    for(j=i+1;display.innerHTML.charAt(j)>= 0 && display.innerHTML.charAt(j) <= 9 && j<display.innerHTML.length || display.innerHTML.charAt(i)=='.'; j++){
                        variable = variable + display.innerHTML.charAt(j)
                    }
                    i = j-1;
                    if(sep_value!=0){
                        result += parseFloat(variable) * parseFloat(sep_value) ;
                    }else{
                        result*= parseFloat(variable)
                    }
                    variable = 0;
                    console.log(result)
                    break;
                case '/':
                    for(j=i+1;display.innerHTML.charAt(j)>= 0 && display.innerHTML.charAt(j) <= 9 && j<display.innerHTML.length || display.innerHTML.charAt(i)=='.'; j++){
                    variable = variable + display.innerHTML.charAt(j)
                }
                i = j-1;
                if(sep_value!=0){
                    result += parseFloat(sep_value) / parseFloat(variable) ;
                }else{
                    result/=parseFloat(variable)
                }
                variable = 0;
                console.log(result)
                break;
            }
            sep_value=0
        }
    }

    display.innerHTML = result;
    result = 0
}
}

loading.addEventListener('click',function(){
    loading.style = 'transform: translate(100%)';
})