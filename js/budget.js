// here is common function 
function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId)
    const inputFieldValueStr = inputField.value
    const inputFieldValue = parseFloat(inputFieldValueStr)
    inputField.value = ''
    return inputFieldValue
}

function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId)
    const textElementValue = textElement.innerText
    return textElementValue
}

// common function end 


document.getElementById('totalPlayerCost').addEventListener('click', function(){
    const totalperPlayerInputField = getInputFieldValueById('perPlayerInputField');

    // get selected player number 

    let totalPlayerNumber = getTextElementValueById('totalPlayerName')
    

    // get the value of total player cost calculate 
    const myTotalPlayerCost = totalPlayerNumber * totalperPlayerInputField ;

    const myTotalPlayervalues = document.getElementById('totalPlayervalue');
    const myTotalPlayervaluesString = myTotalPlayervalues.innerText ;
    const myTotalPlayervalue = parseFloat(myTotalPlayervaluesString);
    
    myTotalPlayervalues.innerText = myTotalPlayerCost ;


})



    // get the total cost of all players 
document.getElementById('totalCostCalculate').addEventListener('click', function()
{
    // get the all cost of players 


    // get the manager field value 
    const mamagerInputField = getInputFieldValueById('managerInput');


    // get the coach field value 
    const coachInputField = getInputFieldValueById('coachInput');

    // manager & coach total cost 
    const mamagerCoachTotalFee = mamagerInputField + coachInputField  ;


    const myTotalPlayervalues = document.getElementById('totalPlayervalue');
    const myTotalPlayervaluesString = myTotalPlayervalues.innerText ;
    const myTotalPlayervalue = parseFloat(myTotalPlayervaluesString);
    myTotalPlayervalue.innerText = mamagerCoachTotalFee ;

    // get the all cost of match 
    const totalCalculate = mamagerCoachTotalFee + myTotalPlayervalue;

    // before  total calculate value add  
    const calculateInitialValue = document.getElementById('totalValue');
    const calculateInitialValueString = calculateInitialValue.innerText ;
    const calculateTotalInitial = parseFloat(calculateInitialValueString);
    
    // main value set here 
    calculateInitialValue.innerText = totalCalculate ;
    

})
