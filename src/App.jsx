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
    <div className="border border-white flex flex-col items-center p-4">
      {/* year + theme container  */}
      <div>
        <div>
          <p className="text-gray-50">YEAR</p>
          <h1 className="text-red-400">{currentYear}</h1>
        </div>

        <div>
          <ThemeToggle />
        </div>
      </div>

      {/* days left + passed container  */}
      <div>
        <div>
          <p className="text-gray-50">DAYS PASSED</p>
          <p className="text-gray-50">{daysPassed}</p>
        </div>

        <div>
          <p className="text-gray-50">DAYS LEFT</p>
          <p className="text-gray-50">{daysRemaining}</p>
        </div>
      </div>


      {/* percentage  */}
      <div>
        <div>
          <p className="text-gray-50">
            {progressPercent.toFixed(1)}% completed{" "}
          </p>
        </div>
        <div>slider</div>
      </div>
    </div>
  );
}

export default App;
