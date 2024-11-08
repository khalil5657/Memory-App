import { useState, useEffect, useMemo, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// require("dotenv").config();

const imagesRaw = await fetch(import.meta.env.VITE_VALUE_OF_FETCH)
const imagesDataLista = await imagesRaw.json();
function Card({title, url, func}){
  return (<div id={title} className='card' onClick={()=>func(title)} >
  <img src={url} />
</div>)
}

let current1 = 0;
let highest1 = 0;
let selectedList = [];
function App(){
  const [current, setCurrent] = useState(0);
  const [highest, setHighest] = useState(0);
  const [re, setRe] = useState(0);
  
  
  

  const [data, setData] = useState('')
  
  let nums = [];
  let cards = [];

  
  function roro(title){
    selectedList.push(title)
    const uniqueElements = new Set();
    const duplicates = [];

  selectedList.forEach(item => {
    if (uniqueElements.has(item)) {
    duplicates.push(item);
  } else {
    uniqueElements.add(item);
  }
  });
  if (duplicates.length > 0){
    
    if (current1 > highest1){
      highest1 = current1
    }
    current1 = 0
    selectedList = [];
  }else if (duplicates.length == 0){
    current1 = current1 + 1
  }
    console.log(title)
    setRe(re + 1)
  }

  for (let i = 0; i<12;i++){

    let num = Number(Math.floor(Math.random() * 12))
    while (nums.includes(Number(num))){
      num = Number(Math.floor(Math.random() * 12))
    }
    nums[nums.length] = num;
    cards[cards.length] = <Card 
    title={imagesDataLista.data[num].title}
     url={imagesDataLista.data[num].images.original.url}
     func={roro}/>
    
  }
  return <>
  <h3>Highest Score: {highest1}</h3>
  <h3>Current Score: {current1}</h3>
  <div className='all'>

{cards}
      </div></> 
}

export default App
