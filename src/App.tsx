import React, { useState, useEffect } from "react";
import { FilterBlock } from "./components/FilterBlock/FilterBlock";
import "./App.css";
import Styles from "./components/FilterBlock/FilterBlock.module.css";
import { Ticket } from "./components/Ticket/Ticket";
export interface Buttons {
  name: string;
  class: string;
}
export interface TicketProps {
  arrival_date: string;
  arrival_time: string;
  carrier: string;
  departure_date: string;
  departure_time: string;
  destination: string;
  destination_name: string;
  origin: string;
  origin_name: string;
  price: number;
  stops: number;
}
function App() {
  const [currency, setCurrence] = useState<string>("₽");
  const [buttons, setButtons] = useState<Buttons[]>([
    { name: "RU", class: Styles.moneyActive },
    { name: "USD", class: Styles.money },
    { name: "EUR", class: Styles.money },
  ]);
  const [stop0, setStop0] = useState<boolean>(false);
  const [stop1, setStop1] = useState<boolean>(false);
  const [stop2, setStop2] = useState<boolean>(false);
  const [stop3, setStop3] = useState<boolean>(false);

  const [filteredJson, setFilteredJson] = useState<TicketProps[]>([]);
  const jsonData = require("./Data/tickets.json");

  const changeActiveButton = (name: string) => {
    const newArr = buttons.map((el) => {
      if (el.name === name) {
        return { ...el, class: Styles.moneyActive };
      } else {
        return { ...el, class: Styles.money };
      }
    });
    setButtons(newArr);
  };

  const filterFunc = () => {
    const newArr: TicketProps[] = [];
    if (stop0) {
      jsonData.tickets.forEach((el: TicketProps) => {
        if (el.stops === 0) {
          newArr.push(el);
        }
      });
    }
    if (stop1) {
      jsonData.tickets.forEach((el: TicketProps) => {
        if (el.stops === 1) {
          newArr.push(el);
        }
      });
    }
    if (stop2) {
      jsonData.tickets.forEach((el: TicketProps) => {
        if (el.stops === 2) {
          newArr.push(el);
        }
      });
    }
    if (stop3) {
      jsonData.tickets.forEach((el: TicketProps) => {
        if (el.stops === 3) {
          newArr.push(el);
        }
      });
    }
    setFilteredJson(newArr);
  };

  useEffect(() => {
    buttons.forEach((el) => {
      if (el.class === Styles.moneyActive) {
        switch (el.name) {
          case "RU":
            setCurrence("₽");
            break;
          case "USD":
            setCurrence("$");
            break;
          case "EUR":
            setCurrence("€");
            break;
        }
      }
    });
  }, [buttons]);

  useEffect(() => {
    filterFunc();
  }, [stop0, stop1, stop2, stop3]);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#e7f6ff",
        paddingTop: "50px",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex" }}>
        <FilterBlock
          buttons={buttons}
          changeActiveButton={changeActiveButton}
          stop0={stop0}
          stop1={stop1}
          stop2={stop2}
          stop3={stop3}
          setStop0={() => setStop0((prevState) => !prevState)}
          setStop1={() => setStop1((prevState) => !prevState)}
          setStop2={() => setStop2((prevState) => !prevState)}
          setStop3={() => setStop3((prevState) => !prevState)}
        />
        <div
          style={{
            width: "600px",
            marginTop: "-40px",
            padding: "20px",
            marginLeft: "250px",
          }}
        >
          {(filteredJson.length > 0 ? filteredJson : jsonData.tickets).map(
            (el: TicketProps) => (
              <Ticket element={el} currency={currency} />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
