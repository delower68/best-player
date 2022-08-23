const playerArry = [];

// show on the player name function 

function displayName(){
    let totalName = 0 ;

    const topPlayerName = document.getElementById('eachPlayerName');
    topPlayerName.textContent = '' ;

    const tr = document.createElement('tr');
    tr.innerHTML = `
    <th></th>
    <td>Player Name</td>
    <td>${totalName}</td>
    `;

    topPlayerName.appendChild(tr);
    for( let i = 0; i < playerArry.length; i++ )
    {
        if( i > 4){
            alert('You cannot select more than 5') ;
            return ;
        }
        totalName += playerArry[i].playerName ;
        const tr = document.createElement("tr")
        topPlayerName.appendChild(tr);
        tr.innerHTML = `
        <th>${i+1}</th>
        <td>${playerArry[i].playerName}</td>
        `;
      
    }
    const totalNames = document.getElementById('totalPlayerName');
    totalNames.innerText = playerArry.length ;
    
}

    // select palyer part 

function addToSelection(element){
    const selectedBtn = element.setAttribute( 'disabled' , '' );
    // console.log(selectedBtn);
    const playerName = element.parentNode.parentNode.children[0].innerText ;
    const PlayerNameObj = {
        playerName: playerName
    }
    playerArry.push(PlayerNameObj) ;
    displayName();
}

// player name shows done 









