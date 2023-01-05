import { type NextPage } from "next";
import { useWindowInnerSize } from "../hooks/useWindowInnerSize";
import logo from "../../public/logo.svg";
import Image from "next/image";
import React, { useState } from "react";
import jsonData from "../data/data.json";
import { v4 as uuidv4 } from "uuid";

const Home: NextPage = () => {
  const { width = 0 } = useWindowInnerSize();
  const [finances, setFinances] =
    useState<{ day: string; amount: number }[]>(jsonData);
  // console.log(finances);
  const [currentDay, setCurrentDay] = useState("");
  const [isBarClicked, setIsBarClicked] = useState(false);
  const [isBarMousedOver, setIsBarMousedOver] = useState(false);

  const largestExpense = Math.max(...finances.map(({ amount }) => amount));

  const barHeightsFinances = finances.map(({ day, amount }) => {
    return {
      height: Math.round(200 * (amount / largestExpense)),
      day,
      amount,
    };
  });
  // console.log(barHeightsFinances);

  function handleBarOnClick(evt: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const day = evt.currentTarget.dataset.day ?? "";

    setCurrentDay(day);
    setIsBarClicked((prev) => !prev);
  }

  function handleBarMouseEnter(
    evt: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    const day = evt.currentTarget.dataset.day ?? "";

    setCurrentDay(day);
    setIsBarMousedOver(true);
  }

  function handleBarMouseLeave(
    evt: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    const day = evt.currentTarget.dataset.day ?? "";

    setCurrentDay(day);
    setIsBarMousedOver(false);
  }

  return (
    <div className="grid h-full w-full grid-cols-1 grid-rows-5 place-content-center gap-y-4 font-sans outline-dashed">
      {/* my balance */}
      <div className="col-span-1 row-span-1 flex flex-row items-center justify-between rounded-lg bg-softRed p-4">
        {/* amount */}
        <div className="flex flex-col gap-y-1">
          <p className="font-sans text-paleOrange">My balance</p>
          <p className="font-sans text-2xl font-bold text-paleOrange">
            $921.48
          </p>
        </div>

        {/* icon */}
        <Image src={logo} alt="logo" className="mr-2" />
      </div>

      {/* chart */}
      <div className="grid-rows-7 col-span-1 row-span-4 grid grid-cols-1 rounded-lg bg-paleOrange p-4">
        {/* chart title */}
        <h2 className="col-span-1 row-span-1 text-3xl font-bold text-darkBrown">
          Spending - Last 7 days
        </h2>

        {/* bar chart */}
        <div className="grid h-[500px] w-full grid-cols-7 items-center justify-center outline-double">
          {barHeightsFinances.map(({ day, height, amount }) => (
            <div
              key={uuidv4()}
              className="col-span-1 flex h-[400px] flex-col items-center justify-end gap-y-4 outline-dotted"
            >
              {isBarClicked && day === currentDay && (
                <p className="grid h-[30px] w-5/6 place-content-center rounded-md bg-darkBrown text-sm text-paleOrange shadow-lg shadow-darkBrown">
                  ${amount}
                </p>
              )}
              {isBarMousedOver && day === currentDay && !isBarClicked && (
                <p className="grid h-[30px] w-5/6 place-content-center rounded-md bg-darkBrown text-sm text-paleOrange shadow-lg shadow-darkBrown">
                  ${amount}
                </p>
              )}
              <div
                className={`h-[${height}px] w-5/6 rounded-md bg-softRed ${
                  !isBarClicked && day === currentDay && " hover:bg-lightRed"
                } ${
                  isBarClicked &&
                  day === currentDay &&
                  "bg-myCyan shadow-lg shadow-myCyan"
                }`}
                data-day={day}
                onClick={handleBarOnClick}
                onMouseEnter={handleBarMouseEnter}
                onMouseLeave={handleBarMouseLeave}
              ></div>
              <p className="text-darkBrown">{day}</p>
            </div>
          ))}
        </div>

        {/* totals */}
        <div className="col-span-1 row-span-2 flex flex-row items-center justify-between border-t-2 border-medBrown">
          {/* left */}
          <div className="flex flex-col items-start justify-center">
            <p className="text-medBrown">Total this month</p>
            <h2 className="text-2xl font-bold text-darkBrown">$478.33</h2>
          </div>

          {/* right */}
          <div className="flex flex-col items-end justify-center">
            <p className="font-bold text-darkBrown">+2.4%</p>
            <p className="text-medBrown">from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
