import React from 'react'

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
  const totalDays = Math.round((startOfNextYear -  startOfYear) / (1000 * 60 * 60 * 24));

  const daysPassed = Math.floor((currentDate - startOfYear) / (1000 * 60 * 60 * 24));

  const daysRemaining = totalDays - daysPassed;

  const progressPercent = (daysPassed / totalDays) * 100;

  return (
    <div>
      <h1>{currentYear}</h1>

      <div>
        <p>{daysPassed} Days passed</p>
      </div>

      <div>
        <p>{daysRemaining} Days remaining</p>
      </div>

      <div>
        <div>
        <p>{progressPercent.toFixed(1)}% of the year completed </p>
        </div>
      </div>
    </div>
  )
}

export default App
