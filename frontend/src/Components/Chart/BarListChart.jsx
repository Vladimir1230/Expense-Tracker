import { BarList, Card, Button } from "@tremor/react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { useState } from "react";
import { useGlobalContext } from "../../context/globalContext";



const BarListChart = () => {
  const { totalExpense, totalIncome, incomes, expenses } = useGlobalContext();
  const [order, setOrder] = useState("ascending");
  const handleOrder = (order) => {
    setOrder(order);
  };

  // getting most recent expenses
  const history = [...expenses].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  // Get the 4 most recent expenses and transform them into the required format
  const barData = history.slice(0, 4).map((transaction) => ({
    name: transaction.title, // Assuming the transactions have a 'title' field
    value: transaction.amount, // Assuming the transactions have an 'amount' field
  }));

  return (
    <Card className="mx-auto max-w-2xl">
      <div>
        <h3 className="text-tremor-title text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
          Recent Expenses
        </h3>
        <div className="flex flex-row gap-1">
          <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
            {totalExpense()}
          </p>
          <p className="text-tremor-label">USD</p>
        </div>
      </div>
      <div className="mt-2 flex flex-row gap-4">
        <Button
          variant="light"
          icon={TrendingUp}
          onClick={() => handleOrder("ascending")}
          active={order === "ascending"}
          className={`text-neutral-600 ${
            order === "ascending"
              ? "text-blue-500 border-b-2 border-blue-500"
              : ""
          }`}
        >
          Ascending
        </Button>
        <Button
          variant="light"
          icon={TrendingDown}
          onClick={() => handleOrder("descending")}
          active={order === "descending"}
          className={`text-neutral-600 ${
            order === "descending"
              ? "text-blue-500 border-b-2 border-blue-500"
              : ""
          }`}
        >
          Descending
        </Button>
      </div>
      <p className="mt-4 text-tremor-default flex items-center justify-between text-tremor-content dark:text-dark-tremor-content">
        <span>Expense</span>
        <span>Amount</span>
      </p>
      <BarList data={barData} className="mt-2" sortOrder={order} />
    </Card>
  );
};

export default BarListChart;
