import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import TotalHistory from "../History/TotalHistory";

const Transactions = () => {
  return (
    <IncomeStyled>
      <InnerLayout>
        <h3 className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Transactions
        </h3>
        <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
          Overview of all transactions recorded.
        </p>

        <TotalHistory />
      </InnerLayout>
    </IncomeStyled>
  );
};

const IncomeStyled = styled.div`
  h1 {
    margin-bottom: 2rem;
  }
`;

export default Transactions;
