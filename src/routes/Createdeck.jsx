import React from 'react'

function Createdeck() {
    let values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
    let type=['C','D','H','S']
    for (let i=0;i<values.length;i++){
        for (let j=0;j<type.length;j++){
            deck.push(values[i]+"-"+type[j]) // 7-D
        }
    }
}

export default Createdeck