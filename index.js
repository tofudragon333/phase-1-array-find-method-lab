// code your solution here

  function superbowlWin(record) {
      let winYear = record.find(record => record.result === "W");
     if (winYear === undefined) {
         return winYear;
     } else {
         return winYear.year;
     }
  }


