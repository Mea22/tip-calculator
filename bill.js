
let billValue;
let peopleAmount;
let tipPercent;
let active = 0;
let customTip;
let realTip;
let bill = document.getElementById('value');
let people = document.getElementById('people');
let tipButton = document.querySelectorAll(".button");
let error1 = document.querySelector(".error1")
let error2 = document.querySelector(".error2")
let tipText = document.querySelector("#tip")
let totalPPerson = document.querySelector("#total")
let customValue = document.querySelector(".custom")
let reset = document.querySelector(".submit");


//this function gives you value of bill
function getBill(){
    billValue =  Number(bill.value);
    check();

   return billValue;
};
//this function gives you amount of people
function getPeople(){
    peopleAmount = Number(people.value)
    check()
   return peopleAmount;
};
//this function gives you custom tip
function custom(){
        customTip = Number(customValue.value);
        console.log(customTip)
        return customTip;
}
//this function checks if the value in the inputs are  zero or less and if if is it writes error and makes border red.if it is more than 0 it makes border green.
function check(){
    if(billValue > 0){
        bill.style.border = "2px solid #26C2AE"
        error1.style.display = "none"
    }else{
        bill.style.border = "2px solid #E17457"
        error1.style.display = "flex"
    }
    if(peopleAmount > 0){
        people.style.border = "2px solid #26C2AE";
        error2.style.display = "none";
    }else{
        people.style.border = "2px solid #E17457";
        error2.style.display = "flex";
    };
};   
//this gives buttons active class when clicked and takes value of active button.
    tipButton.forEach(button => {
        button.addEventListener("click", function(){
            tipButton.forEach(bttn => {bttn.classList.remove("active")});
            button.classList.add("active");
                if(button.classList == "custom button active"){
                        active = Number(customTip)
                    button.style.backgroundColor = "#F3F9FA"
                    button.style.color = "#547878"
                }else{
                    active = Number(button.value);
                }
            check();
            tipAmount()
            return active;
        }) 
    });
    //this is reset button which resets calculator
function resetTip(){
    location.reload() 
}
//this counts tip and gives it to innertext.
function tipAmount(){
    if(active > 100){
        active = 100
    } 
    if(billValue > 0 && peopleAmount > 0 && active >= 0 ){
        let tipCalc = billValue * (active / 100);
        let total = billValue + tipCalc;
        let totalP = total / peopleAmount;
        let tipP = tipCalc / peopleAmount;
        hover();
        totalPPerson.innerText = totalP.toFixed(2);
        tipText.innerText = tipP.toFixed(2)
    }
}
//this is hover of reset button
function hover(){
    reset.style.backgroundColor ="#26C2AE"

        reset.addEventListener("mouseenter", ()=>{
            reset.style.backgroundColor ="#9FE8DF"
        })
        reset.addEventListener("mouseleave", ()=>{
            reset.style.backgroundColor ="#26C2AE"
        })
}
