// import Calculator from "./components/Calculator";

import { useState } from "react";
import Calculator from "./components/Calculator";

function App() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentag2] = useState(0);
  const tip = bill * ((percentage1 + percentage2) / 2 / 100);
  const total = tip + bill;
  const handleReset = () => {
    setBill("");
    setPercentage1(0);
    setPercentag2(0);
  };
  return (
    <>
      <Calculator />
      <div className="flex flex-col bg-slate-600 gap-8">
        <BillInput bill={bill} setBill={setBill} />
        <SelectPercentage percentage={percentage1} onSet={setPercentage1}>
          How should you pay
        </SelectPercentage>
        <SelectPercentage percentage={percentage2} onSet={setPercentag2}>
          How should your frined pay
        </SelectPercentage>
        {bill ? (
          <>
            <Output bill={bill} tip={tip} total={total} />
            <Reset handleReset={handleReset} />
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default App;
function BillInput({ bill, setBill }) {
  return (
    <div className="mt-10">
      <div className="flex gap-4">
        <label>How much the bill</label>
        <input
          value={bill}
          className="border border-gray-400"
          type="text"
          onChange={(e) => setBill(+e.target.value)}
        />
      </div>
    </div>
  );
}
function SelectPercentage({ children, percentage, onSet }) {
  return (
    <div className="flex gap-4">
      {children}
      <select
        value={percentage}
        onChange={(e) => onSet(+e.target.value)}
        className="text-black w-[250px]"
      >
        <option value="0">0</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="100">100</option>
      </select>
    </div>
  );
}
function Output({ bill, tip, total }) {
  return (
    <h3>
      you pay {total}$ ({bill}$ + {tip}$)
    </h3>
  );
}
function Reset({ handleReset }) {
  return (
    <div>
      <button
        className="bg-sky-600 px-4 py-1.5 rounded-lg mb-7"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
}
