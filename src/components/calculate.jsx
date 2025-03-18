import React, { useEffect, useRef, useState } from "react";
import "./calculate.css";
import closeImg from "../img/close.svg";
import Total from "./total";

function PopUpWindow(props) {
  
  let inputRef = useRef()
  const [loanSum, setLoanSum] = useState(0)
  const [months, setMonths] = useState(12)
  const [monthlyPayment, setmonthlyPayment] = useState(0)
  const [period, setperiod] = useState("monthly")

  let closePopUp = (event) => {
    if (event.target.classList.contains("pop-up") || event.target.classList.contains("pop-up-close") || event.target.tagName=="IMG"){
      props.setPopUpState("closed");
    }
  };
  

  let calculateMonthlyPayment = () => {
      setmonthlyPayment(loanSum / months)
  
  }

  return (
    <div className={`pop-up ${props.popUpState}`} onClick={closePopUp}>
      <div className="pop-up-container">
        <button className="pop-up-close" onClick={closePopUp}>
          <img src={closeImg}></img>
        </button>
        <h1>Платежи по кредиту</h1>
        <p className="pop-up-text">
          Введите сумму кредита и выберите срок, на который вы хотите его
          оформить.
        </p>
        <p className="pop-up-text">
        
          Мы автоматически рассчитаем для вас ежемесячный платеж, чтобы вы могли
          лучше спланировать свои финансы. 
        </p>
        <h2>Ваша сумма кредита</h2>
        <input type="text" className="pop-up-input" ref={inputRef} onChange={()=>setLoanSum(inputRef.current.value)}/>
        <button className="pop-up-calculate" onClick={calculateMonthlyPayment}>Рассчитать</button>
        <div className="months-wrapper">
          <p>Количество месяцев?</p>
          <div className="month-buttons">
            <button onClick={()=>setMonths(12)} className={months==12?"button-active":""}>12</button>
            <button onClick={()=>setMonths(24)} className={months==24?"button-active":""}>24</button>
            <button onClick={()=>setMonths(36)} className={months==36?"button-active":""}>36</button>
            <button onClick={()=>setMonths(48)} className={months==48?"button-active":""}>48</button>
          </div>
        </div>
        {monthlyPayment>0? <Total monthly={monthlyPayment} period={period} setPeriod={setperiod} months={months} setmonthlyPayment={setmonthlyPayment} loanSum={loanSum}></Total>:""}

        <button className="pop-up-add">Добавить</button>
      </div>
    </div>
  );
}

export default PopUpWindow;
