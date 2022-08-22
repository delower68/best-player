document.getElementById('totalPlayerCost').addEventListener('click', function(){
    const perPlayerCost = document.getElementById('perPlayerInputField');
    const totalperPlayerInputFieldString = perPlayerCost.value ;
    const  totalperPlayerInputField = parseFloat(totalperPlayerInputFieldString);

    // get selected player number 

    const playerNumber = document.getElementById('totalPlayerName');
    const playerNumberString = playerNumber.innerText ;
    const totalPlayerNumber = parseFloat(playerNumberString); 
    totalPlayerNumber.innerText = totalperPlayerInputField
    perPlayerCost.value = '' ;
    
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
    // get the mamager field value 
    const managerInputs = document.getElementById('managerInput');
    const managerInputFieldString = managerInputs.value ;
    const managerInputField = parseFloat(managerInputFieldString);
    managerInputs.value = '' ;
    // console.log(managerInputField);

    // get the coach field value 

    const coachInputs = document.getElementById('coachInput');
    const coachInputString = coachInputs.value ;
    const coachInput = parseFloat(coachInputString);
    coachInputs.value = '' ;
    // console.log(coachInput);

    // get the all cost of players

    const myAllCostPlayers = managerInputField + coachInput ;
    console.log(myAllCostPlayers);
})