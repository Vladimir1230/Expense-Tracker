import React, { useMemo, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import bg from "./images/bg.png";
import { MainLayout } from "./styles/Layouts";
import Orb from "./Components/Orb/Orb";
import { useGlobalContext } from "./context/globalContext";
import LoginPage from "./Components/Signup/LoginPage";
import Homepage from "./Homepage/Homepage";
import { selectUsers } from "./store/usersSlice";
import { useSelector } from "react-redux";

function App() {
  const global = useGlobalContext();
  console.log(global);

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  const user = useSelector(selectUsers);

  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <MainLayout>
        {user.currentUser ? (
          <BrowserRouter>
            <Routes>
              <Route index element={<Homepage />} />
            </Routes>
          </BrowserRouter>
        ) : (
          <LoginPage />
        )}
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
