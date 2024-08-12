"use client"

import React, { useEffect, useState } from "react";
import "./styles/page.css";

const Page = () => {

  const [clock, setClock] = useState("");

  useEffect(() => {
    setInterval(getCurrentTime, 1000);
  }, [])

  const getCurrentTime = () => {
    let time: Date = new Date();
    let hours: any = time.getHours();
    let minutes: any = time.getMinutes();
    let seconds: any = time.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    const currentTime = `${hours} : ${minutes} : ${seconds}`;
    setClock(currentTime);
  }

  return (
    <div className="clock">
      <p>
        {clock}
      </p>
    </div>
  )
}

export default Page