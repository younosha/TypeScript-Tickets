import React from "react";
import Styles from "./FilterBlock.module.css";
import { Buttons } from "../../App";

interface FilterBlockProps {
  buttons: Buttons[];
  changeActiveButton: (name: string) => void;
  stop0: boolean;
  stop1: boolean;
  stop2: boolean;
  stop3: boolean;
  setStop0: () => void;
  setStop1: () => void;
  setStop2: () => void;
  setStop3: () => void;
}
export const FilterBlock = ({
  buttons,
  changeActiveButton,
  stop0,
  stop1,
  stop2,
  stop3,
  setStop0,
  setStop1,
  setStop2,
  setStop3,
}: FilterBlockProps) => {
  return (
    <div className={Styles.container}>
      <h5>ВАЛЮТА</h5>
      <div className={Styles.buttonsWrapper}>
        {buttons.map((el, i) => (
          <button
            key={i}
            className={el.class}
            onClick={() => changeActiveButton(el.name)}
          >
            {el.name}
          </button>
        ))}
      </div>
      <h5>КОЛИЧЕСТВО ПЕРЕСАДОК</h5>
      <div>
        <div className={Styles.selectItem}>
          <input type="checkbox" checked={stop0} onChange={setStop0} />
          <p className={Styles.stop}>Без пересадок</p>
        </div>
        <div className={Styles.selectItem}>
          <input type="checkbox" checked={stop1} onChange={setStop1} />
          <p className={Styles.stop}>1 пересадка</p>
        </div>
        <div className={Styles.selectItem}>
          <input type="checkbox" checked={stop2} onChange={setStop2} />
          <p className={Styles.stop}>2 пересадки</p>
        </div>
        <div className={Styles.selectItem}>
          <input type="checkbox" checked={stop3} onChange={setStop3} />
          <p className={Styles.stop}>3 пересадки</p>
        </div>
      </div>
    </div>
  );
};
