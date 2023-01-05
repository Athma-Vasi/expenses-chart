import { type NextPage } from "next";
import { useWindowInnerSize } from "../hooks/useWindowInnerSize";
import logo from "../../public/logo.svg";
import Image from "next/image";
import fsPromises from "fs/promises";
import path from "path";

const Home: NextPage = () => {
  const { width = 0 } = useWindowInnerSize();

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
