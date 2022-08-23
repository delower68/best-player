let count = 0 ;
let selectorBtn = document.getElementsByClassName('btn');
for( btn of selectorBtn ){
    btn.addEventListener('click' , function(event){
        count ++ ;
        let select = event.target.parentNode.parentNode.childNodes[1].innerText ;
        let btnSelected = event.target.setAttribute('disabled', '');

        if (count > 5) {
            let btnSelected = event.target.removeAttribute('disabled');
            alert("You can't add more than 5 player. ")
            return ;
        }
        let selectedPlayer = document.getElementById('totalPlayerName');
        let totalSelectedPlayer = parseFloat(selectedPlayer.innerText);
        totalSelectedPlayer.innerText = count ;

        const perPlayerCostContainer = document.getElementById('eachPlayerName');

        const tableContainer = document.createElement("tr");
        tableContainer.value = 
        `
        <th >${count}</th>
        <td>${select}</td>
        `
        perPlayerCostContainer.appendChild(tableContainer);
        console.log(tableContainer);
    })
}