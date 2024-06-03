import Navigation from "../Components/Navigation/Navigation";
import Dashboard from "../Components/Dashboard/Dashboard";
import Incomes from "../Components/Incomes/Incomes";
import Expenses from "../Components/Expenses/Expenses";
import Transactions from "../Components/Transactions/Transactions";
import { useState } from "react";

const Homepage = () => {
  const [active, setActive] = useState(1);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Transactions />;
      case 3:
        return <Incomes />;
      case 4:
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <>
      <Navigation active={active} setActive={setActive} />
      <main>{displayData()}</main>
    </>
  );
};

export default Homepage;
