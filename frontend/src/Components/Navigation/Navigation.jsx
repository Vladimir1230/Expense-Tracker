import React, { useState } from "react";
import styled from "styled-components";
import avatar from "../../images/avatar.png";
import { menuItems } from "../../utils/menuItems";
import { signout } from "../../utils/Icons";
import { auth } from "../../Firebase/config";
import { setUser } from "../../store/usersSlice";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { Dialog, DialogPanel, Button } from "@tremor/react";

const Navigation = ({ active, setActive }) => {
  const dispatch = useDispatch();

  const [openDialog, setOpenDialog] = useState(false);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.

        dispatch(setUser(null));
      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
        alert("An error occurred. Please try again!");
      });
  };

  return (
    <NavStyled>
      <div className="user-con">
        <img src={avatar} alt="user-avatar" />
        <div className="text">
          <h2 className="text-lg">User</h2>
          <p className="text-[#22226099] text-sm">user@gmail.com</p>
        </div>
      </div>

      <ul className="menu-items">
        {menuItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setActive(item.id)}
              className={active === item.id ? "active" : ""}
            >
              {item.icon}
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>

      <div className="bottom-nav">
        <li>
          <button onClick={() => setOpenDialog(true)}>
            {signout} Sign Out
          </button>
          <Dialog
            open={openDialog}
            onClose={(val) => setOpenDialog(val)}
            static={true}
          >
            <DialogPanel>
              <h3 className="text-lg font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Your are about to Sign Out
              </h3>
              <p className="mt-2 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                Are you sure you want to log out of the app? This action will
                send you back to the login page
              </p>
              <div className=" w-full flex flex-row gap-2">
                <Button
                  className="mt-8 w-1/2"
                  variant="secondary"
                  onClick={() => setOpenDialog(false)}
                >
                  Cancel
                </Button>

                <Button className="mt-8 w-1/2" onClick={handleSignOut}>
                  Log Out
                </Button>
              </div>
            </DialogPanel>
          </Dialog>
        </li>
      </div>
    </NavStyled>
  );
};

const NavStyled = styled.nav`
  padding: 2rem 1.5rem;
  width: 374px;
  height: 100%;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #ffffff;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;

  .user-con {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      background: #fcf6f9;
      border: 2px solid #ffffff;
      padding: 0.2rem;
      box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
    }
    h2 {
      color: rgba(34, 34, 96, 1);
    }
    ${
      "" /* p {
      color: rgba(34, 34, 96, 0.6);
    } */
    }
  }

  .menu-items {
    flex: 1;
    display: flex;
    flex-direction: column;
    li {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: 0.6rem 0;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      color: rgba(34, 34, 96, 0.6);
      padding-left: 1rem;
      position: relative;
      i {
        color: rgba(34, 34, 96, 0.6);
        font-size: 1.4rem;
        transition: all 0.4s ease-in-out;
      }
    }
  }

  .active {
    color: rgba(34, 34, 96, 1) !important;
    i {
      color: rgba(34, 34, 96, 1) !important;
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background: #222260;
      border-radius: 0 10px 10px 0;
    }
  }

  .bottom-nav {
    li {
      cursor: pointer;
    }
  }
`;

export default Navigation;
