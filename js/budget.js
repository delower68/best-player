document.getElementById('totalPlayerCost').addEventListener('click', function(){
    const perPlayerCost = document.getElementById('perPlayerInputField');
    const totalperPlayerInputFieldString = perPlayerCost.value ;
    const  totalperPlayerInputField = parseFloat(totalperPlayerInputFieldString);
    // console.log(totalperPlayerInputField);

    // get selected player number 

    const playerNumber = document.getElementById('totalPlayerName');
    const playerNumberString = playerNumber.innerText ;
    const totalPlayerNumber = parseFloat(playerNumberString); 
    totalPlayerNumber.innerText = totalperPlayerInputField
    // console.log(totalPlayerNumber);
    perPlayerCost.value = '' ;

    const myTotalPlayerCost = totalPlayerNumber * totalperPlayerInputField ;
    // console.log(myTotalPlayerCost);

    const myTotalPlayervalues = document.getElementById('totalPlayervalue');
    const myTotalPlayervaluesString = myTotalPlayervalues.innerText ;
    const myTotalPlayervalue = parseFloat(myTotalPlayervaluesString);
    
    myTotalPlayervalues.innerText = myTotalPlayerCost ;
})