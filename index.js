const subscribe1= document.getElementById("subscribe");
const debit=document.getElementById("debit");
const wallet=document.getElementById("wallet");
const ebank=document.getElementById("ebank");
const line= document.getElementById("line");
const submit=document.getElementById("submit");
const subline= document.getElementById("subline");

submit.onclick=function(){
    if(subscribe1.checked){
        line.textContent=`you are subcribed`;
    }
    else{
    line.textContent="you are not subscribed";
}
if(debit.checked){
    subline.textContent=`you are paying with debit card`;}
   else if(wallet.checked){
        subline.textContent="you are paying with E-wallet";}
    else if(ebank.checked){
        subline.textContent="you are paying with your bank site";}
        else
        subline.textContent="you must have select a payment type";
}
