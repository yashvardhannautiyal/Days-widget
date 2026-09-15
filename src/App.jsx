import React from "react";
import ThemeToggle from "./ThemeToggle";

function App() {
  const currentDate = new Date();

  const currentYear = currentDate.getFullYear();

  const startOfYear = new Date(currentYear, 0, 1); // (year, month, date) - in js month start with 0
  const startOfNextYear = new Date(currentYear + 1, 0, 1);

  //js "Date" object are stored in milliseconds internally. It does not give number of days directly
  //1 second = 1000 ms
  //1 minute = 60 s
  //1 hour = 60 min
  //1 day = 24 hr

  //1000 * 60 * 60 * 24 = 86,400,000
  const totalDays = Math.round(
    (startOfNextYear - startOfYear) / (1000 * 60 * 60 * 24),
  );

  const daysPassed = Math.floor(
    (currentDate - startOfYear) / (1000 * 60 * 60 * 24),
  );

  const daysRemaining = totalDays - daysPassed;

  const progressPercent = (daysPassed / totalDays) * 100;

  return (
    <div className="border border-gray-700 flex flex-col w-xs p-6 rounded-3xl bg-gray-900">
      {/* year + theme container  */}
      <div className="flex items-center justify-between w-full">
        <div>
          <p className="text-gray-400 font-medium text-xs">YEAR</p>
          <h1 className="text-white text-4xl font-semibold">{currentYear}</h1>
        </div>

        <div>
          <ThemeToggle />
        </div>
      </div>

      {/* days left + passed container  */}
      <div className="flex items-center gap-18 w-full mt-5">
        <div>
          <p className="text-gray-400 font-medium text-xs">DAYS PASSED</p>
          <p className="text-gray-50 text-4xl font-semibold">{daysPassed}</p>
        </div>

        <div>
          <p className="text-gray-400 font-medium text-xs">DAYS LEFT</p>
          <p className="text-gray-50 text-4xl font-semibold">{daysRemaining}</p>
        </div>
      </div>

      {/* percentage  */}
      <div className=" mt-5">
        <div>
          <p className="text-gray-400 font-medium text-sm">
            {progressPercent.toFixed(1)}% completed{" "}
          </p>
        </div>
        <div className="w-full h-2 bg-blue-950 rounded-full overflow-hidden mt-2">
          <div
            className="h-full bg-white rounded-full"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
