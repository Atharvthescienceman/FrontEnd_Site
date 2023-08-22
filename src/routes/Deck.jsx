import React, { useEffect } from 'react'
import Card from './Card'
import { useState } from 'react'

import '../App.css'



// function to determine the value of ace



// function to trigger dealer hidden card

function Deck() {
    var deck = []
    const  [dealerCard,setDealerCard] = useState([]);
    const  [playerCard, setPlayerCard] = useState([]);

    const  [dealerSum,setDealerSum] = useState(0);
    const  [playerSum, setPlayerSum] = useState(0);

    // const [dealerAce,setDealerAce] = useState(false)
    // const [playerAce,setPlayerAce] = useState(false)

   // const [dealerHidden,setDealerHidden] = useState(true)

    function createDeck (){ // call a image
        let values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
        let type=['C','D','H','S']
        for (let i=0;i<values.length;i++){
            for (let j=0;j<type.length;j++){
                deck.push(values[i]+"-"+type[j]) // 7-D
            }
        }
    }

    // function to give random card
    function assignCard(gamerCards){
        // by default should give 2 cardsfor each player
        // randomly genrate index of deck
        const randomIndex = Math.floor(Math.random()*(deck.length)) // random value 1 to 52
        if (gamerCards.length>=1){
            let val =gamerCards[0].split("-") //values 7-D
            console.log("$$$$$",val)

            while (val[0]==="J"| val[0] ==="K" |val[0] ==="Q" | gamerCards[0]===deck[randomIndex] ){
                console.log("*"*10)
                const randomIndex = Math.floor(Math.random()*(deck.length)) // random value 1 to 52
                val = deck[randomIndex].split("-") // 7-D
                // if a player has J Q K already we cant assign one more J Q K  
            }
        }
        setDealerCard(gamerCards.push(deck[randomIndex]))
        console.log("*****",gamerCards)
    }
    function addCard(){
        // update the list of player with new card
        let temp = Math.floor(Math.random()*52);
        playerCard.push()
    }

    // function to calculate the sum of cards
    function checkSum(gamersCards,setSum){
        let sum=0;
        let ace =false;
        for (let x=0;x<gamersCards.length;x++){
            let v =gamersCards[x].split("-")[0]
            if (v==="J" | v==="Q" |v==="K"){
                sum+=11
            }else if (v==="A"){
                ace=true;
            }
            else{
                let temp = parseInt(v) // [7-D 5-S 6-H]
                sum+=temp
            }
        }
        if (ace){ // need to update this 
            if (sum<10){
                sum+=11
            }else{
                sum+=1
            }
        }
        setSum(sum)
        console.log("#####",gamersCards,"=>",sum)
    }

    function checkWin(){
        // should be called when player hits take/stand
        // conditions
            // 1. should not exceed 21 ~ both
            // 2. whoever == 21 isthe winner
            // 3. if less then 21 
                    // Player,Dealer ... the greater one is the winner
        console.log("You reached here")
        console.log(dealerSum,playerSum)
        if (playerSum>21 | dealerSum===21 | playerSum<dealerSum){
            console.log("dealer won")
        }    
        else if (dealerSum>21 | playerSum===21 | playerSum>dealerSum){
            console.log("Player won")
        }
}
    
    useEffect(()=>{
        if (deck.length===0){
            createDeck()
        }
        if (dealerCard.length===0){
            assignCard(dealerCard)
            assignCard(dealerCard)
            checkSum(dealerCard,setDealerSum)
            
        }
        if (playerCard.length===0){
            assignCard(playerCard)
            assignCard(playerCard)
            checkSum(playerCard,setPlayerSum)
        }
    },[])

  return (
    <div className='container'>
        <div className="computer">
            {/* Step 2 */}
            <Card imgName ="2-C" />
            <Card imgName ="8-D"  />
            
            <SumName  sum={dealerSum} name={"Dealer"} />
        </div>
        <div>
            <div className='MidDiv'>
                <button onClick={()=>assignCard(playerCard)}>Take</button>

                 
                <button onClick={()=>checkWin()}>Stand</button>
            </div>
        </div>
        <div className="player">
            <Card imgName ="5-C"  />
            <Card imgName ="2-H"  />
            <SumName sum={playerSum} name={"player"} />
        </div>
    </div>
  )
}

function SumName(props){
    return(
        <div className='circle'>
            <h1>{props.sum}</h1>
            <h1>{props.name}</h1>
        </div>
    )
}
// if (sum>21){
//     document.write('sorry you have lost better luck next time')
// }

export default Deck