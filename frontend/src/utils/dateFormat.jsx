import moment from "moment";

// getting the format of the date
export const dateFormat = (date) => {
  return moment(date).format("DD/MM/YYYY");
};

// getting the format of the date
export const chartDate = (date) => {
  return moment(date).format("MMM YY");
};

// getting the current date
const currentDate = new Date();
const options = { weekday: "long", month: "long", day: "numeric" };
export const formattedCurrentDate = currentDate.toLocaleDateString(
  "en-US",
  options
);

// day's greetings depending on current time
export const dayGreeting = () => {
  const currentHour = new Date().getHours();
  if (currentHour < 12) {
    return "Good Morning";
  } else if (currentHour < 18) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
};
