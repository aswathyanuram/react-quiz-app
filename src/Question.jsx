import React, { useState } from "react";
import styles from "./Questions.module.css";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { Switch } from "antd";

export default function Question({
  question,
  options,
  optionClick,
  isLastQuestion,
}) {
  const [open, setOpen] = useState(true);
  const [theme, setTheme] = useState("dark");

  const onChange = (checked) => {
    setOpen(checked);
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div
      className={
        theme === "dark" ? styles.containerdark : styles.containerlight
      }
    >
      <div>
        <MdLightMode className={styles.lightmode} />
        <Switch onChange={onChange} checked={open} className={styles.switch} />
        <MdDarkMode className={styles.darkmode} />
      </div>
      <div className={styles.question}>{question}</div>

      <div className={styles.options}>
        {options.map((option, index) => {
          return (
            <div
              className={
                theme === "dark" ? styles.optiondark : styles.optionlight
              }
              onClick={() => {
                optionClick(index);
              }}
            >
              {option}
            </div>
          );
        })}
      </div>
      {isLastQuestion && (
        <button className={styles.button}>Submit Answers</button>
      )}
    </div>
  );
}
