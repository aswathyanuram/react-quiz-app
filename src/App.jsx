import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./App.module.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { Switch } from "antd";

export default function App() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [theme, setTheme] = useState("dark");

  const onChange = (checked) => {
    setOpen(checked);
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const links = [
    {
      icon: <FaHtml5 />,
      path: "/htmlquiz",
      title: "HTML",
    },
    {
      icon: <FaCss3Alt />,
      path: "/cssquiz",
      title: "CSS",
    },
    {
      icon: <FaJsSquare />,
      path: "/jsquiz",
      title: "Javascript",
    },
  ];

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
      <div className={styles.title}>
        <div className={styles.title1}>Welcome to the</div>
        <div className={styles.title2}>Frontend Quiz!</div>
        <div className={styles.subtitle}>Pick a subject to get started</div>
      </div>
      <div className={styles.links}>
        {links.map((link) => {
          return (
            <div
              className={theme === "dark" ? styles.linkdark : styles.linklight}
              onClick={() => {
                navigate(link.path);
              }}
            >
              <div
                className={
                  theme === "dark" ? styles.icondark : styles.iconlight
                }
              >
                {link.icon}
              </div>
              <div className={styles.quiztitle}>{link.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
