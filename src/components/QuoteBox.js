import React  from 'react'
import quotes from './quotes.json';
import { useState , useEffect } from 'react';
import  * as Util from './Utils.js';

import './Quote.css';



const QuoteBox = () => {


    const [attribute , setAttributte] = useState({phrase :  null})
    const [style,setStyle] = useState({style: null});
    
    
    useEffect(() => {
        
        
        setAttributte({phrase: Util.getNewQuote(quotes.quotes)});
        setStyle({style: {backgroundColor : Util.colorHEX()}});

    },[]);


    const handleChange = () => {

        setAttributte({...attribute,phrase: Util.getNewQuote(quotes.quotes)})
        setStyle({style: {backgroundColor : Util.colorHEX()}});

    }
        

    return (
    <>
        <div className="Container" style={style.style}>
            <div className="Quote-Container">
                <p className="lbl-quote" ><q>{attribute?.phrase?.quote}</q></p>
                <div>
                    <label className="lbl-author" style={style.style}>{attribute?.phrase?.author}</label>
                     <div className="container-button">
                        <button className='btn-new-quote' onTocu onClick={handleChange}>New Quote</button>
                        <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" 
                            className="twitter-share-button" data-show-count="false" 
                            target="_blank"
                            rel="noopener noreferrer"
                        >Tweet</a>    
                     </div>   
                </div>
                
                
            </div> 
        </div>
    </>
  )
}

export default QuoteBox