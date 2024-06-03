import React, { useState } from "react";
import { useGlobalContext } from "../../context/globalContext";
import styled from "styled-components";
import { dateFormat } from "../../utils/dateFormat";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DateRangePicker } from "@tremor/react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";

const data = [
  {
    workspace: "sales_by_day_api",
    owner: "John Doe",
    status: "live",
    costs: "$3,509.00",
    region: "US-West 1",
    capacity: "99%",
    lastEdited: "23/09/2023 13:00",
  },
  {
    workspace: "marketing_campaign",
    owner: "Jane Smith",
    status: "live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "sales_campaign",
    owner: "Jane Smith",
    status: "live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "development_env",
    owner: "Mike Johnson",
    status: "live",
    costs: "$4,200.00",
    region: "EU-West 1",
    capacity: "60%",
    lastEdited: "21/09/2023 14:30",
  },
  {
    workspace: "new_workspace_1",
    owner: "Alice Brown",
    status: "live",
    costs: "$2,100.00",
    region: "US-West 2",
    capacity: "75%",
    lastEdited: "24/09/2023 09:15",
  },
  {
    workspace: "test_environment",
    owner: "David Clark",
    status: "inactive",
    costs: "$800.00",
    region: "EU-Central 1",
    capacity: "40%",
    lastEdited: "25/09/2023 16:20",
  },
];

const mockData = [
  {
    type: "Income",
    title: "Frontend Website",
    category: "Freelance",
    amount: "$4,500",
    date: "12/05/24",
    description: "Upwork Freelance client",
  },
  {
    type: "Income",
    title: "Bitcoin Dividend",
    category: "Bitocin",
    amount: "$1,900",
    date: "15/05/24",
    description: "Crypto return",
  },
  {
    type: "Expense",
    title: "Fruits restock",
    category: "Groceries",
    amount: "$450",
    date: "16/05/24",
    description: "Grocery shopping",
  },
];

const TotalHistory = () => {
  const { totalTransactionHistory } = useGlobalContext();

  const [selectedOption, setSelectedOption] = useState("all");

  const [selectedDate, setSelectedDate] = useState(null);

  const [...history] = totalTransactionHistory();

  const tableData = history.map((transaction) => ({
    type: transaction.type,
    title: transaction.title,
    category: transaction.category,
    amount: transaction.amount,
    date: dateFormat(transaction.date),
    description: transaction.description,
  }));

  // dropdown menu to switch between all transactions and the date picker
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    if (e.target.value === "all") {
      setSelectedDate(null);
    }
  };

  // using date-picker to filter out dates and only show transactions for selected date
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const filteredHistory = selectedDate
    ? history.filter((item) => {
        return dateFormat(item.date) === dateFormat(selectedDate);
      })
    : history;
  return (
    <>
      <div
        className="selects"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "1rem",
          gap: "0 10px",
          color: "rgba(34,34,96,0.4)",
        }}
      >
        <DateRangePicker />
        {/* <select
          value={selectedOption}
          onChange={handleOptionChange}
          style={{
            outline: "none",
            border: "2px solid #fff",
            padding: "0.5rem 1rem",
            borderRadius: "5px",
            background: "transparent",
            resize: "none",
            boxShadow: "var(--shadow-style)",
            color: "rgba(34,34,96,0.9)",
          }}
        >
          <option value="all">All Transactions</option>
          <option value="date">Pick A Date</option>
        </select>

        {selectedOption === "date" && (
          <DatePicker
            placeholderText="Enter/Pick A Date"
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
          />
        )} */}
      </div>
      <div className="sm:flex sm:items-center sm:justify-between sm:space-x-10">
        {/* <button
          type="button"
          className="mt-4 w-full whitespace-nowrap rounded-tremor-small bg-tremor-brand px-4 py-2.5 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis sm:mt-0 sm:w-fit"
        >
          Add workspace
        </button> */}
      </div>
      <Table className="mt-8">
        <TableHead>
          <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Transaction Type
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Title
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Category
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Amount
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Date
            </TableHeaderCell>
            <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Description
            </TableHeaderCell>
            {/* <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Last edited
            </TableHeaderCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((item) => (
            <TableRow key={item.type}>
              <TableCell
                className={`font-medium ${
                  item.type === "expense"
                    ? "text-red-500"
                    : "text-tremor-content-strong dark:text-dark-tremor-content-strong"
                }`}
              >
                {/* will make green for income type and red for expense type */}
                {item.type}
              </TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.amount}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell className="text-right">{item.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <HistoryStyled>
        {filteredHistory.length === 0 ? (
          <h1 className="noDataTitle">No data available</h1>
        ) : (
          filteredHistory.map((item) => {
            const { _id, title, amount, type, date } = item;
            return (
              <div key={_id} className="history-item">
                <p
                  style={{
                    color: type === "expense" ? "red" : "var(--color-green)",
                  }}
                >
                  {title}
                </p>
                <p
                  style={{
                    color: type === "expense" ? "red" : "var(--color-green)",
                  }}
                >
                  {type === "expense" ? `-${amount}` : `+${amount}`}
                </p>
                <p>{dateFormat(date)}</p>
              </div>
            );
          })
        )}
      </HistoryStyled> */}
    </>
  );
};

const HistoryStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  select {
    margin-bottom: 0.5rem;
    outline: none;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 2px solid #fff;
    background: transparent;
    resize: none;
    box-shadow: var(--shadow-style);
    color: rgba(34, 34, 96, 0.9);
    &::placeholder {
      color: rgba(34, 34, 96, 0.4);
    }
  }

  .noDataTitle {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 70vh;
    font-size: 60px;
    text-transform: uppercase;
    opacity: 0.3;
    letter-spacing: 0.3rem;
  }
  .history-item {
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
  }
`;
export default TotalHistory;
