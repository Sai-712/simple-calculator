let input = document.getElementById('input box');
let button = document.querySelectorAll('button');
let count=1
let string="";
let arr = Array.from(button);
arr.forEach(button => {
 button.addEventListener('click',(e)=>{
  if(e.target.innerHTML== '='){
    string = eval(string);
    input.value = string;
  }

  else if(e.target.innerHTML=='AC'){
   string=" ";
   input.value = string;
  }
  else if(e.target.innerHTML=='DEL'){
   let length=string.length
   input.value ="";
   for(let i=1;i<=length-count;i++){
    console.log(count)
    input.value=input.value+string[i]
   }
   count++
   if(count==length+1){
    string="";
   input.value = string;
   }
   string=input.value
  }
  else{
   string += e.target.innerHTML;
  input.value = string;
  }
 })
})
