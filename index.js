const intialPrize=document.querySelector("#intial-prize");
const quantityTaken=document.querySelector("#quantity");
const currentPrize=document.querySelector("#current-prize");
const checkBtn=document.querySelector("#btn");
const outputBox=document.querySelector("#output");


checkBtn.addEventListener("click",clickHandler)


function clickHandler(){
    var ip=Number(intialPrize.value);
    var qunty=Number(quantityTaken.value);
    var curtpriz=Number(currentPrize.value);

    calculateProfitAndLoss(ip,qunty,curtpriz);
}

function calculateProfitAndLoss(intiail,qunatity,current){
    if(current>intiail){
        var profit=(current-intiail)*qunatity;
        var profitPercentage= (profit/intiail)*100;
        outputBox.innerText=`hey ..your profit is ${profit} and you gain ${profitPercentage}%`
       
    }else if (intiail>current){
        var loss=(intiail-current)*qunatity;
        var lossPercentage=(loss/intiail)*100;
        outputBox.innerText=`ohhh.. NO ,your total loss is ${loss} and ${lossPercentage}%`
    }else{
        outputBox.innerText="NO PAIN NO GAIN , NO GAIN NO PAIN"
    }
   
}
