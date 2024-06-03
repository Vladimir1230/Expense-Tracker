import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import { InnerLayout } from "../../styles/Layouts";
import { dollar } from "../../utils/Icons";
import Chart from "../Chart/Chart";
import History from "../History/History";
import { Card, DateRangePicker } from "@tremor/react";
import PieChart from "../Chart/PieChart";
import BarListChart from "../Chart/BarListChart";
import { dayGreeting, formattedCurrentDate } from "../../utils/dateFormat";

const Dashboard = () => {
  const {
    totalIncome,
    incomes,
    expenses,
    totalExpense,
    totalBalance,
    getIncome,
    getExpense,
  } = useGlobalContext();

  const greeting = dayGreeting();

  useEffect(() => {
    getIncome();
    getExpense();
  }, []);

  return (
    <DashboardSytled>
      <InnerLayout>
        <div className="flex justify-between items-center mb-5">
          <div>
            {" "}
            <p className="text-tremor-default text-tremor-content">
              {formattedCurrentDate}
            </p>
            <p className="text-tremor-title text-tremor-content-strong font-semibold">
              {greeting}! User
            </p>
          </div>
          <DateRangePicker />
        </div>

        <div className="amount-con">
          <Card
            className="mx-auto max-w-xs"
            decoration="top"
            decorationColor="indigo"
          >
            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              Total Income
            </p>
            <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
              $ {totalIncome()}
            </p>
          </Card>

          <Card
            className="mx-auto max-w-xs"
            decoration="top"
            decorationColor="indigo"
          >
            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              Total Expense
            </p>
            <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
              $ {totalExpense()}
            </p>
          </Card>

          <Card
            className="mx-auto max-w-xs"
            decoration="top"
            decorationColor="indigo"
          >
            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              Balance
            </p>
            <p
              className="text-3xl font-semibold"
              style={{
                color:
                  totalExpense() > totalIncome() ? "red" : "var(--color-green)",
              }}
            >
              $ {totalBalance()}
            </p>
          </Card>
        </div>

        <div className="stats-con">
          <div className="chart-con">
            <Chart />
          </div>
          <div className="flex justify-between flex-row items-center mt-2">
            <PieChart />

            <BarListChart />
          </div>
          {/* <div className="history-con">
            <h2>Recent History</h2>
            <History />
            <h2 className="income-title">
              Min <span>Income</span>Max
            </h2>
            <div className="income-item">
              <p>{Math.min(...incomes.map((item) => item.amount))}</p>
              <p>{Math.max(...incomes.map((item) => item.amount))}</p>
            </div>

            <h2 className="expense-title">
              Min <span>Expense</span>Max
            </h2>
            <div className="expense-item">
              <p>{Math.min(...expenses.map((item) => item.amount))}</p>
              <p>{Math.max(...expenses.map((item) => item.amount))}</p>
            </div>
          </div> */}
        </div>
      </InnerLayout>
    </DashboardSytled>
  );
};

const DashboardSytled = styled.div`
  h1 {
    margin-bottom: 1rem;
  }
  .amount-con {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0 1rem;
    margin: 2rem 0;
    .income,
    .expense {
      grid-column: span 2;
    }
    .income,
    .expense,
    .balance {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      background: #fcf6f9;
      border: 2px solid #ffffff;
      box-shadow: var(--shadow-style);
      border-radius: 10px;
      padding: 5px 10px;
      h2 {
        font-size: 1.2rem;
      }
      p {
        font-size: 0.75rem;
        font-weight: 700;
      }
    }
    .balance {
      p {
        opacity: 0.6;
        font-size: 1rem;
      }
    }
  }
  .stats-con {
    gap: 2rem;
    display: flex;
    flex-direction: column;

    .chart-con {
      ${"" /* grid-column: 1 / 4; */}
      height: 400px;
      ${'' /* margin-bottom: 3rem; */}
    }
    .history-con {
      ${"" /* grid-column: 4 / -1; */}
      h2 {
        margin: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .income-title,
      .expense-title {
        font-size: 1.2rem;
        span {
          font-size: 1.8rem;
        }
      }
      .income-item,
      .expense-item {
        background: #fcf6f9;
        border: 2px solid #ffffff;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          font-weight: 600;
          font-size: 1.6rem;
        }
      }
    }
  }
`;

export default Dashboard;
