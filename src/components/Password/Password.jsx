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
            </div>
        </section>
    )
}
export default Password;