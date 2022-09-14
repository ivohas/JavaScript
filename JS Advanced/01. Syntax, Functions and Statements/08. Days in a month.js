
function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }
  
  //const date = new Date();
//  const currentYear = date.getFullYear();
  //const currentMonth = date.getMonth() + 1; // 👈️ months are 0-based
  
  // 👇️ Current Month
 // const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth);
 // console.log(daysInCurrentMonth);
  
  // 👇️ Other Months
 // const daysInJanuary = getDaysInMonth(2025, 1);
 // console.log(daysInJanuary);👉️ 31
  
 // const daysInSeptember = getDaysInMonth(2025, 9);
 // console.log(daysInSeptember); 👉️ 30
 