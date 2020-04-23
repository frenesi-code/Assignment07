/*eslint-env browser*/

//STEP 1 DONE
// Create an application that gets the number of days in a month.
// Display that result within the console window.

function Step1() {
  let anno = prompt("Step 1 - Enter a year ", "XXXX");
  let mesi = [
    "gen",
    "feb",
    "mar",
    "apr",
    "mai",
    "giu",
    "lug",
    "ago",
    "set",
    "ott",
    "nov",
    "dic",
  ];
  let giorni;

  for (let i = 0; i < 12; i++) {
    giorni = new Date(anno, [i + 1], 0).getDate();
    console.log(
      "In the year, " + anno + ", there are " + giorni + " days in " + mesi[i]
    );
  }
}

Step1();

//STEP 2 DONE
// Create an application that gets the month name from a particular date.
//Display that result within the console window.

function Step2() {
  let dateInput = prompt("Step 2 - enter a date");
  let date = new Date(dateInput);

  console.log(date);
  console.log(
    "Step 2 " + "Month name:",
    date.toLocaleString("it-IT", { month: "long" })
  );
}

Step2();

//STEP 3 DONE
// Create an application that tests whether a date is a weekend. Display that result within the console window.

function Step3() {
  let isDate = prompt("Step 3 - enter a date");
  let weekend = function (isDate) {
    let data = new Date(isDate);

    if (data.getDay() == 6 || data.getDay() == 0) {
      return "weekend";
    } else {
      return "weekday";
    }
  };

  console.log("Step 3 " + isDate + " is a " + weekend(isDate));
}

Step3();

//STEP 4 DONE
// Create an application that gets yesterday’s day of the week. For instance, if today is Tuesday, the console window should display Monday.

function Step4() {
  let ieri = function () {
    let dataIeri = new Date();
    dataIeri.setDate(dataIeri.getDate() - 1);
    return dataIeri.toLocaleString("default", { weekday: "long" });
  };

  console.log("Step 4 - yesterday's day of the week was " + ieri());
}

Step4();

//STEP 5 DONE
// Create an application that gets the current day of the week. The twist here is that I want only the first letter of the day. If today is Tuesday, the letter T should be displayed in the console window.

function Step5() {
  var dateObj = new Date();
  var weekday = dateObj.toLocaleString("default", { weekday: "long" });
  console.log(weekday);
  let first = weekday.slice(0, 1);
  console.log("Step 5: " + first);

  const dotw = new Date();
  userDate = prompt("Step 5(another way) enter a date", dotw);
  let dayofweek = new Date(userDate);
  console.log(
    "Step 5: " + dayofweek.toLocaleString("default", { weekday: "narrow" })
  );
}
