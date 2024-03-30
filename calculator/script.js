const input = document.getElementById("inputBox")
const buttons = document.querySelectorAll("button")
// console.log(input);
const arr = (Array.from(buttons))

let string = ""

buttons.forEach(button=>{
    // console.log(button);
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML=="="){
            string = eval(string)
            input.value=string
        }

        else if(e.target.innerHTML=="AC"){
           string="";
            input.value=""
        }
        else if(e.target.innerHTML=="DEL"){
            string=string.substring(0,string.length-1);
             input.value=string
         }
         else if(e.target.innerHTML=="%"){
            string=string/100;
             input.value=string
         }
         else{
            string+=e.target.innerHTML;
             input.value=string
         }

    })
})

console.log(string);