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
        setResult(randomNumber);
    }

    const getSymbol = (number) => {
         //if only are symbols
        const symb = ",.-;:-¨´ç}{+`[]^*¡¿'?=)(/&%$#@|!ºª";
        let resultSymb = '';
        for (let i=0; i<number; i++) {
            resultSymb += symb.charAt(Math.floor(Math.random() * number));
        }
        setResult(resultSymb);
    }   

    const getLowercase = (number) => {
        //if only are lowercase letters
        const abc = "abcdefghijklmnñopqrstuwxyz"
        let resultAbc = '';
        for (let i=0; i<number; i++) {
            resultAbc += abc.charAt(Math.floor(Math.random() * number));
        }
        setResult(resultAbc);
    }

    const getUppercase = (number) => {
        //if only are uppercase letters
        const ABC = "ABCDEJGHIJKLMNÑOPQRSTUVWXYZ";
        let resultABC = '';
        for (let i=0; i<number; i++) {
            resultABC += ABC.charAt(Math.floor(Math.random() * number));
        }
        setResult(resultABC);
    }

    const getNumericUppercase = (number) => {
        //numeric and uppercase
        const numberChars = "1234567890";
        const ABC = "ABCDEJGHIJKLMNÑOPQRSTUVWXYZ";
        const allCharts = numberChars + ABC
        let password = '';
        if (number >= 1) {
            password += ABC.charAt(Math.floor(Math.random() * ABC.length));
        }

        if (number >= 2) {
            password += numberChars.charAt(Math.floor(Math.random() * numberChars.length));
        }

        for ( let i=2; i<number; i++) {
            password += allCharts.charAt(Math.floor(Math.random() * allCharts.length))
        }
        setResult(password);
    }

    const getNumericLowercaseUppercase = (number) => {
        //numeric, lowercase, uppercase
        const numberChars = "1234567890";
        const ABC = "ABCDEJGHIJKLMNÑOPQRSTUVWXYZ";
        const abc = "abcdefghijklmnñopqrstuwxyz"
        const allCharts = numberChars + ABC + abc;
        let password ='';

        if (number >= 1) {
            password += ABC.charAt(Math.floor(Math.random() * ABC.length));
        }

        if (number >= 2) {
            password += numberChars.charAt(Math.floor(Math.random() * numberChars.length));
        }

        if (number >= 3) {
            password += abc.charAt(Math.floor(Math.random() * abc.length));
        }

        for (let i=3; i<number; i++) {
            password += allCharts.charAt(Math.floor(Math.random() * allCharts.length))
        }

        setResult(password);
    }

    const getNumericSymbol = (number) => {
        //numeric and symbols
        const numberChars = "1234567890";
        const symb = ",.-;:-¨´ç}{+`[]^*¡¿'?=)(/&%$#@|!ºª";
        const allCharts = numberChars + symb;
        let password = '';

        if (number >= 1) {
            password += symb.charAt(Math.floor(Math.random() * symb.length));
        }

        if (number >= 2) {
            password += numberChars.charAt(Math.floor(Math.random() * numberChars.length));
        }

        for ( let i=2; i<number; i++) {
            password += allCharts.charAt(Math.floor(Math.random() * allCharts.length))
        }
        setResult(password)
    }

    const getNumericLowercase = (number) => {
        //numeric and lowercase
        const numberChars = "1234567890";
        const abc = "abcdefghijklmnñopqrstuwxyz"
        const allCharts = numberChars + abc
        let password = '';

        if (number >= 1) {
            password += abc.charAt(Math.floor(Math.random() * abc.length));
        }

        if (number >= 2) {
            password += numberChars.charAt(Math.floor(Math.random() * numberChars.length));
        }

        for ( let i=2; i<number; i++) {
            password += allCharts.charAt(Math.floor(Math.random() * allCharts.length))
        }
        setResult(password)
    }

    const getNumericLowercaseUppercaseSymbol = (number) => {
        //numeric, lowercase, uppercase, symbol
        const numberChars = "1234567890";
        const ABC = "ABCDEJGHIJKLMNÑOPQRSTUVWXYZ";
        const abc = "abcdefghijklmnñopqrstuwxyz";
        const symb = ",.-;:-¨´ç}{+`[]^*¡¿'?=)(/&%$#@|!ºª";
        const allCharts = numberChars + ABC + abc + symb;
        let password ='';

        if (number >= 1) {
            password += ABC.charAt(Math.floor(Math.random() * ABC.length));
        }

        if (number >= 2) {
            password += numberChars.charAt(Math.floor(Math.random() * numberChars.length));
        }

        if (number >= 3) {
            password += abc.charAt(Math.floor(Math.random() * abc.length));
        }

        if (number >= 4) {
            password += symb.charAt(Math.floor(Math.random() * symb.length));
        }

        for (let i=4; i<number; i++) {
            password += allCharts.charAt(Math.floor(Math.random() * allCharts.length))
        }

        setResult(password);
    }

    const getLowercaseUppercase = (number) => {
        //lowercase, uppercase
        const ABC = "ABCDEJGHIJKLMNÑOPQRSTUVWXYZ";
        const abc = "abcdefghijklmnñopqrstuwxyz";
        const allCharts = abc + ABC;
        let password = '';

        if ( number >= 1 ) {
            password +=abc.charAt(Math.floor(Math.random() * abc.length));
        }

        if (number >= 2) {
            password +=ABC.charAt(Math.floor(Math.random() * ABC.length));
        }

        for ( let i=2;i<number; i++) {
            password += allCharts.charAt(Math.floor(Math.random() * allCharts.length));
        }

        setResult(password);
    }

    const getUppercaseSymbol = (number) => {
        // uppercase, symbol
        const ABC = "ABCDEJGHIJKLMNÑOPQRSTUVWXYZ";
        const symb = ",.-;:-¨´ç}{+`[]^*¡¿'?=)(/&%$#@|!ºª";
        const allCharts = ABC + symb;
        let password = '';

        if (number >= 1) {
            password += ABC.charAt(Math.floor(Math.random() * ABC.length));
        }

        if (number >= 2) {
            password += symb.charAt(Math.floor(Math.random() * symb.length));
        }

        for ( let i=2;i<number; i++) {
            password += allCharts.charAt(Math.floor(Math.random() *allCharts.length));
        }

        setResult(password);
    }

    const getLowercaseSymbol = (number) =>{
        //lowercase, symbol
        const abc = "abcdefghijklmnñopqrstuwxyz";
        const symb = ",.-;:-¨´ç}{+`[]^*¡¿'?=)(/&%$#@|!ºª";
        const allCharts = abc +symb;
        let password = '';
        
        if (number >= 1) {
            password += abc.charAt(Math.floor(Math.random() * abc.length));
        }

        if (number >= 2) {
            password += symb.charAt(Math.floor(Math.random() * symb.length));
        }

        for ( let i=2;i<number; i++) {
            password += allCharts.charAt(Math.floor(Math.random() *allCharts.length));
        }
        setResult(password);
    }

    const getLowercaseNumberSymbol = (number) => {
        //lowercase, number y symbol
        const abc = "abcdefghijklmnñopqrstuwxyz";
        const symb = ",.-;:-¨´ç}{+`[]^*¡¿'?=)(/&%$#@|!ºª";
        const numberChars = "1234567890";
        const allCharts = abc +symb + numberChars;
        let password = '';
        if (number >= 1) {
            password += abc.charAt(Math.floor(Math.random() * abc.length));
        }

        if (number >= 2) {
            password += symb.charAt(Math.floor(Math.random() * symb.length));
        }

        if (number >= 3) {
            password += numberChars.charAt(Math.floor(Math.random() * numberChars.length));
        }

        for ( let i=3;i<number; i++) {
            password += allCharts.charAt(Math.floor(Math.random() *allCharts.length));
        }
        setResult(password);
    }

    const getUppercaseNumberSymbol = (number) => {
        //number, symbol
        const ABC = "ABCDEJGHIJKLMNÑOPQRSTUVWXYZ";
        const symb = ",.-;:-¨´ç}{+`[]^*¡¿'?=)(/&%$#@|!ºª";
        const numberChars = "1234567890";
        const allCharts = ABC + symb + numberChars
        let password ='';

        if (number >= 1) {
            password += ABC.charAt(Math.floor(Math.random() * ABC.length));
        }

        if (number >= 2) {
            password += symb.charAt(Math.floor(Math.random() * symb.length));
        }

        if (number >= 3) {
            password += numberChars.charAt(Math.floor(Math.random() * numberChars.length));
        }

        for ( let i=3;i<number; i++) {
            password += allCharts.charAt(Math.floor(Math.random() *allCharts.length));
        }

        setResult(password);
    }

    const getLowercaseUppercaseSymbol = (number) => {
        //lowercase, uppercase, symbol
        const ABC = "ABCDEJGHIJKLMNÑOPQRSTUVWXYZ";
        const abc = "abcdefghijklmnñopqrstuwxyz";
        const symb = ",.-;:-¨´ç}{+`[]^*¡¿'?=)(/&%$#@|!ºª";
        const allCharts = abc + ABC +symb;
        let password = '';

        if ( number >= 1 ) {
            password +=abc.charAt(Math.floor(Math.random() * abc.length));
        }

        if (number >= 2) {
            password +=ABC.charAt(Math.floor(Math.random() * ABC.length));
        }

        if (number >= 3) {
            password += symb.charAt(Math.floor(Math.random() * allCharts.length));
        }

        for ( let i=3;i<number; i++) {
            password += allCharts.charAt(Math.floor(Math.random() * allCharts.length));
        }

        setResult(password);
    }

    const handleClick = () => {
        //generate password with the results
        console.log("Número ",number)
        console.log("Uppercase ",isUppercase)
        console.log("Lowercase" ,isLowercase)
        console.log("Numeric ",isNumeric)
        console.log("Symbol ",isSymbol)
        
        if (isNumeric && !isUppercase && !isLowercase && !isSymbol) {
            getNumeric(number);
        } else if (isNumeric && isUppercase && !isLowercase && !isSymbol) {
            getNumericUppercase(number);
        } else if (isNumeric && isLowercase && !isUppercase && !isSymbol) {
            getNumericLowercase(number);
        } else if ( isNumeric && isLowercase && isUppercase && !isSymbol ) {
            getNumericLowercaseUppercase(number);
        } else if ( isNumeric && isLowercase && isUppercase && isSymbol ) {
            getNumericLowercaseUppercaseSymbol(number);
        } else if (isNumeric && isSymbol && !isLowercase && !isUppercase) {
            getNumericSymbol(number);
        } else if (isSymbol && !isNumeric && !isUppercase && !isLowercase) {
            getSymbol(number);
        } else if (isLowercase && !isSymbol && !isUppercase && !isNumeric) {
            getLowercase(number);
        } else if (isUppercase && !isLowercase && !isNumeric && !isSymbol) {
            getUppercase(number);
        } else if (isUppercase && isLowercase && !isNumeric && !isSymbol) {
            getLowercaseUppercase(number);
        } else if ( isUppercase && isLowercase && isSymbol && !isNumeric) {
            getLowercaseUppercaseSymbol(number);
        } else if (isUppercase && isSymbol && !isLowercase && !isNumeric) {
            getUppercaseSymbol(number);
        } else if (isLowercase && isSymbol && !isUppercase && !isNumeric){
            getLowercaseSymbol(number);
        } else if (isLowercase && isNumeric && isSymbol && !isUppercase) {
            getLowercaseNumberSymbol(number);
        } else if (isUppercase && isNumeric && isSymbol && !isLowercase) {
            getUppercaseNumberSymbol(number);
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