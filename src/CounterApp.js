//rafcp importa react y propTypes, ademas de crear una funcion que retorna y traba con proptypes

import React, { useState} from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({value = 10}) => {

    const [counter, setCounter] = useState(value);  //Retorna un arreglo []

    //handleAdd
    const handleAdd = (e) => {
        setCounter (counter + 1);
        //setCounter((c)=> c + 1 ) // Ambas estan bien
    }

    const handleSubtract = () => setCounter (counter - 1);
    
    const handleReset = () => setCounter (value);

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>   

            <button onClick = { (e) => {handleAdd(e)} }>+1</button>  
            <button onClick = { (e) => {handleReset(e)} }>Reset</button>    
            <button onClick = { (e) => {handleSubtract(e)} }>-1</button>            
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;
