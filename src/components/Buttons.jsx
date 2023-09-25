import '../styles/Buttons.css'
import {deleteSymbol, addSymbol, choiceOperation, calculate, changeSign, makeNonIntegerNumber, factorial}  from '../logic/calculator.js';

let calculation = {
    firstNumber: "",
    secondNumber: "",
    operation: ""
}

const Buttons = function ({data: number, setData: setNumber}) {
    return (
        <div className='container'>
                <table className="table-buttons">
                <tbody>
                    <tr>
                        <td className="td-button"><button className="button-in-table-invs"></button></td>
                        <td className="td-button"><button className="button-in-table" onClick={() => {factorial(calculation, setNumber)}}>Factorial</button></td>
                        <td className="td-button"><button className="button-in-table" onClick={() => {calculate(calculation, setNumber)}}>=</button></td>
                        <td className="td-button"><button className="button-in-table" onClick={ () => {deleteSymbol(calculation, setNumber)}}>×</button></td>
                    </tr>
                    <tr>
                        <td className="td-button"><button className="button-in-table" onClick={ () => {addSymbol(calculation, 7, setNumber)}}>7</button></td>
                        <td className="td-button"><button className="button-in-table" onClick={ () => {addSymbol(calculation, 8, setNumber)}}>8</button></td>
                        <td className="td-button"><button className="button-in-table" onClick={ () => {addSymbol(calculation, 9, setNumber)}}>9</button></td>
                        <td className="td-button"><button className="button-in-table" onClick={() => {choiceOperation(calculation, "/", setNumber)}}>/</button></td>
                    </tr>
                    <tr>
                        <td className="td-button"><button className="button-in-table" onClick={ () => {addSymbol(calculation, 4, setNumber)}}>4</button></td>
                        <td className="td-button"><button className="button-in-table" onClick={ () => {addSymbol(calculation, 5, setNumber)}}>5</button></td>
                        <td className="td-button"><button className="button-in-table" onClick={ () => {addSymbol(calculation, 6, setNumber)}}>6</button></td>
                        <td className="td-button"><button className="button-in-table" onClick={() => {choiceOperation(calculation, "*", setNumber)}}>*</button></td>
                    </tr>
                    <tr>
                        <td className="td-button"><button className="button-in-table" onClick={ () => {addSymbol(calculation, 1, setNumber)}}>1</button></td>
                        <td className="td-button"><button className="button-in-table" onClick={ () => {addSymbol(calculation, 2, setNumber)}}>2</button></td>
                        <td className="td-button"><button className="button-in-table" onClick={ () => {addSymbol(calculation, 3, setNumber)}}>3</button></td>
                        <td className="td-button"><button className="button-in-table" onClick={() => {choiceOperation(calculation, "-", setNumber)}}>-</button></td>
                    </tr>
                    <tr>
                        <td className="td-button"><button className="button-in-table" onClick={() => {changeSign(calculation, setNumber)}}>+/-</button></td>
                        <td className="td-button"><button className="button-in-table" onClick={ () => {addSymbol(calculation, 0, setNumber)}}>0</button></td>
                        <td className="td-button"><button className="button-in-table" onClick={ () => {makeNonIntegerNumber(calculation, setNumber)}}>,</button></td>
                        <td className="td-button"><button className="button-in-table" onClick={() => {choiceOperation(calculation, "+", setNumber)}}>+</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    )
}

export default Buttons;