import React, { useState } from "react";
function Calculator() {
  const [billamount, setBillAmount] = useState({
    bill: "0",
    tip1: "0",
    tip2: "0",
  });
  console.log(billamount);
  const handleChange = (e) => {
    const { value, name } = e.target;
    setBillAmount({ ...billamount, [name]: value });
    console.log(name, value);
  };
  const clear = () => {
    setBillAmount({
      bill: "",
      tip1: "0",
      tip2: "0",
    });
  };
  const average = (+billamount.tip1 + +billamount.tip2) / 2;
  const tips = (+billamount.bill * average) / 100;
  const total = (+billamount.bill + tips).toFixed(2);
  return (
    <div className="bg-slate-900 w-screen h-screen text-white ">
      <div className="flex justify-center ">
        <form className="container mx-auto mt-10 flex flex-col gap-6 justify-center">
          <div className="flex gap-4">
            <label>How much the bill ?</label>
            <input
              name="bill"
              value={billamount.bill}
              onChange={handleChange}
              type="number"
              className="rounded-md text-black"
            />
          </div>
          <div className="flex gap-4">
            <label>How do you like the service ?</label>
            <select
              name="tip1"
              value={billamount.tip1}
              onChange={handleChange}
              className="rounded-md text-black"
            >
              <option value="0">Dissatisfied 0 % </option>
              <option value="5">its okay 5 % </option>
              <option value="10">its was good 10 % </option>
              <option value="20">Amazing 20%</option>
            </select>
          </div>
          <div className="flex gap-4">
            <label>How did your friend like the service?</label>
            <select
              name="tip2"
              value={billamount.tip2}
              onChange={handleChange}
              className="rounded-md text-black"
            >
              <option value="0">Dissatisfied 0 % </option>
              <option value="5">its okay 5 % </option>
              <option value="10">its was good 10 % </option>
              <option value="20">Amazing 20%</option>
            </select>
          </div>
          <h3>
            {+billamount.bill
              ? `you pay ${total} billamount   ${billamount.bill} +  ${tips}`
              : ""}{" "}
          </h3>
          <div className="mx-auto">
            <button
              onClick={clear}
              className="px-6 py-2 rounded-md bg-green-500"
            >
              clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Calculator;
