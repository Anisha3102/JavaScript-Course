// The function getDayOfWeek() takes a day value as input and returns the corresponding day of the week based on the following table:

// Value	Message
// 1	Sunday
// 2	Monday
// 3	Tuesday
// 4	Wednesday
// 5	Thursday
// 6	Friday
// 7	Saturday
// If the provided value does not match any of the listed values, the function returns Invalid day!.

function getDayOfWeek(day) {

  switch (day) {
    case 1:
      return "Sunday";
      break;

    case 2:
      return "Monday";
      break;

    case 3:
      return "Tuesday";
      break;

    case 4:
      return "Wednesday";
      break;

    case 5:
      return "Thursday";
      break;

    case 6:
      return "Friday";
      break;

    case 7:
      return "Saturday";
      break;

    default:
      return "Invalid day!";
  }
}