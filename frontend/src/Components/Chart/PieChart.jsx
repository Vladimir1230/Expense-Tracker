import { DonutChart, Legend } from "@tremor/react";
import { useGlobalContext } from "../../context/globalContext";

const valueFormatter = (number) =>
  `$ ${Intl.NumberFormat("us").format(number).toString()}`;

const PieChart = () => {
  const {
    totalIncome,
    incomes,
    expenses,
    totalExpense,
    totalBalance,
    getIncome,
    getExpense,
  } = useGlobalContext();

  const total = [
    {
      name: " Incomes",
      sales: totalIncome(),
    },
    {
      name: " Expenses",
      sales: totalExpense(),
    },
  ];

  return (
    <div className="flex items-center justify-center space-x-6">
      <DonutChart
        data={total}
        category="sales"
        index="name"
        valueFormatter={valueFormatter}
        colors={["blue", "red"]}
        className="w-40"
      />
      <Legend
        categories={[" Incomes", " Expenses"]}
        colors={["blue", "red"]}
        className="max-w-xs"
      />
    </div>
  );
};

export default PieChart;
