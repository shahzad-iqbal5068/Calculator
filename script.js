let inputBox=document.getElementById('input-box');
let numbers=document.getElementsByClassName('inot');
const array = Array.from(numbers);// convert nodelist into array


array.forEach((number)=>{
  // console.log(number);
  number.addEventListener('click', checkno);

});


let answer=0;
function checkno(e){
  let value = e.target.innerHTML;
  console.log(value);
  switch(e.target.innerHTML){
  case ('DEL'):
       if (value.length > 0){
        value = inputBox.value.slice(0, -1);
       };
       inputBox.value = value;
       break;
       case ('AC'):
        inputBox.value = '';
        break;
        case ('='):
           try {
              // console.log(value);
              value = eval(inputBox.value);
              inputBox.value =value;
              answer = value;
              // console.log(answer);
              
           } catch (error) {
              inputBox.value="In correct input value";
           }            
           break;
           case ('Ans'):               
              inputBox.value += answer;
              // value += answer;               
              break;
           default:
              console.log(e.target.innerHTML)
              inputBox.value += value;
  }
      

}







