import React, {useState} from 'react';
import '../Password/Password.css';
import {ContentPaste} from '@mui/icons-material'

const Password = () => {
    const [textToCopy,setTextToCopy]= useState("");
    return (
        <section className="password-container">
            <div className="password-container-section">
                <h2 className='password-title'>Password Generator</h2>
                <div className='password-result'>
                    <span id="result">hola</span>
                    <button className="password-btn" id="clipboard" onClick={() => {navigator.clipboard.writeText(textToCopy)}} ><ContentPaste></ContentPaste></button>
                </div>
                <div className='password-inputs'>
                    <div className='password-input'>
                        <label htmlFor="password">
                            Password Length
                        </label>
                        <input type="number" id="length" min="4" max="20" value="20"></input>
                    </div>
                    <div className='password-input'>
                        <label htmlFor="uppercase">
                            Include uppercase letters
                        </label>
                        <input type="checkbox" id="uppercase"value="uppercase" checked></input>
                    </div>
                    <div className='password-input'>
                        <label htmlFor="lowercase">
                            Include lowercase letters
                        </label>
                        <input type="checkbox" id="lowercase"value="lowercase" checked></input>
                    </div>
                    <div className='password-input'>
                        <label htmlFor="numbers">
                            Include numbers
                        </label>
                        <input type="checkbox" id="numbers"value="numbers" checked></input>
                    </div>
                    <div className='password-input'>
                        <label htmlFor="symbols">
                            Include symbols
                        </label>
                        <input type="checkbox" id="symbols" value="symbols" checked></input>
                    </div>
                    <div>
                        <button className='password-button'>Generate Password</button>
                    </div>
                </div>
                
                

            </div>
        </section>
    )
}
export default Password;