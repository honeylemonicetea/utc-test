import React, { useState } from "react";

function Total(props) {
    const [totalPayment, settotalPayment] = useState(props.monthly)
  let buttonClick = (period) => {
    props.setPeriod(period);
    if (period=="monthly"){
        settotalPayment(props.loanSum/props.months)
    } else if (period=="yearly"){
        settotalPayment((props.loanSum/props.months)*12)
    }
  };
  return (
    <div className="total">
      <p>Итого ваш платеж по кредиту:</p>
      <div className="total-buttons">
        <button
          onClick={()=>buttonClick("yearly")}
          className={props.period == "yearly" ? "button-active" : ""}
        >
          в год
        </button>
        <button
          onClick={()=>buttonClick("monthly")}
          className={props.period == "monthly" ? "button-active" : ""}
        >
          в месяц
        </button>
      </div>
      <p className="total-sum">{totalPayment} рублей</p>
    </div>
  );
}

export default Total;
