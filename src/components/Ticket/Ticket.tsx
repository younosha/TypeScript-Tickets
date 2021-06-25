import React from "react";
import Styles from "./Ticket.module.css";
import { TicketProps } from "../../App";
interface ElProps {
  element: TicketProps;
  currency: string;
}
export const Ticket = ({ element, currency }: ElProps) => {
  const changeMoney = () => {
    switch (currency) {
      case "₽":
        return element.price;
      case "$":
        return Math.round(element.price / 70);
      case "€":
        return Math.round(element.price / 80);
    }
  };

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.leftPart}>
        <h4>Turkish Airlines</h4>
        <button className={Styles.buttonBuy}>
          Купить за {changeMoney()}
          {currency}
        </button>
      </div>
      <div className={Styles.rightPart}>
        <div>
          <p className={Styles.time}>{element.departure_time}</p>
          <p>
            {element.origin}, {element.origin_name}
          </p>
          <p className={Styles.date}>{element.departure_date}</p>
        </div>
        <div className={Styles.lines}>
          <p>
            {element.stops !== 0
              ? element.stops +
                `${element.stops === 1 ? " пересадка" : " пересадки"}`
              : "Без пересадок"}
          </p>
          <p className={Styles.arrow}>-----------------{">"}</p>
        </div>
        <div>
          <p className={Styles.time}>{element.arrival_time}</p>
          <p>
            {element.destination_name}, {element.destination}
          </p>
          <p className={Styles.date}>{element.arrival_date}</p>
        </div>
      </div>
    </div>
  );
};
