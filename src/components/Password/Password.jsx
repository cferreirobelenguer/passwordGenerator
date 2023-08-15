import React, {useState} from 'react';
import '../Password/Password.css';
import {ContentPaste} from '@mui/icons-material'

const Password = () => {
    //input states
    const [number, setNumber] = useState(20);
    const [isUppercase, setIsUppercase] = useState(true);
    const [isLowercase, setIsLowercase] = useState(true);
    const [isNumeric, setIsNumeric] =useState(true);
    const [isSymbol, setIsSymbol] = useState(true);

    //Result
    const [result, setResult] = useState(''); 

    const handleNumber = (event) => {
        const inputValue = event.target.value;
        //If the password length exceeds the limit which is 20; the length will default to 20
        if (inputValue <= 20) {
            setNumber(inputValue)
        }
    }

    const handleClipboard = () => {
        //copy password to clipboard
        const valueSpan = document.getElementById('result').textContent;
        navigator.clipboard.writeText(valueSpan);
    }

    const getNumeric = (number) => {
        //if only is numeric
        let randomNumber='';
            for( let i=0; i<number; i++) {
                randomNumber = randomNumber + Math.floor(Math.random() * 10);
            }
        setResult(randomNumber)
    }

    const handleClick = () => {
        //generate password with the results
        console.log("Número ",number)
        console.log("Uppercase ",isUppercase)
        console.log("Lowercase" ,isLowercase)
        console.log("Numeric ",isNumeric)
        console.log("Symbol ",isSymbol)
        
        if (isNumeric && !isUppercase && !isLowercase && !isSymbol) {
            getNumeric(number)
        }
    }   

    
    return (
        <section className="password-container">
            <div className="password-container-section">
                <h2 className='password-title'>Password Generator</h2>
                <div className='password-result'>
                    <span id="result">{result}</span>
                    <button className="password-btn" id="clipboard" onClick={handleClipboard} ><ContentPaste></ContentPaste></button>
                </div>
                <div className='password-inputs'>
                    <div className='password-input'>
                        <label htmlFor="password">
                            Password Length
                        </label>
                        <input type="number" id="length" min="4" max="20" value={number} onChange={handleNumber}></input>
                    </div>
                    <div className='password-input'>
                        <label htmlFor="uppercase">
                            Include uppercase letters
                        </label>
                        <input type="checkbox" id="uppercase" value="uppercase" checked={isUppercase} onChange={(event) => {setIsUppercase(event.target.checked)}}></input>
                    </div>
                    <div className='password-input'>
                        <label htmlFor="lowercase">
                            Include lowercase letters
                        </label>
                        <input type="checkbox" id="lowercase"value="lowercase" checked={isLowercase} onChange={(event) => {setIsLowercase(event.target.checked)}}></input>
                    </div>
                    <div className='password-input'>
                        <label htmlFor="numbers">
                            Include numbers
                        </label>
                        <input type="checkbox" id="numbers"value="numbers"checked={isNumeric} onChange={(event) => {setIsNumeric(event.target.checked)}}></input>
                    </div>
                    <div className='password-input'>
                        <label htmlFor="symbols">
                            Include symbols
                        </label>
                        <input type="checkbox" id="symbols" value="symbols" checked={isSymbol} onChange={(event) => {setIsSymbol(event.target.checked)}}></input>
                    </div>
                    <div>
                        <button className='password-button' onClick={handleClick}>Generate Password</button>
                    </div>
                </div>
                
                

            </div>
        </section>
    )
}
export default Password;