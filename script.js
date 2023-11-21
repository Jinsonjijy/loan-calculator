function calc(){

    amount=document.getElementById("amount").value
    inter=document.getElementById('interest').value
    tenur=document.getElementById('tenure').value 
    
    let emi = ((amount / tenur) + inter);


    document.getElementById("output").innerHTML=emi;


}