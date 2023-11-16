import { useState, useEffect } from "react";
import {
  CreditCardOutlined,
  HomeFilled,
  QuestionCircleOutlined,
  CrownFilled,
} from "@ant-design/icons";
import { Menu, Button ,ConfigProvider } from "antd";
import "./Navbar.css";
import { SignOutButton } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import {  useUser } from "@clerk/clerk-react";
import userLogo from "../../Images/user.png";
import { useLocation } from "react-router-dom";


const items = [
  {
    label: "Home",
    key: "/",
    icon: <HomeFilled />,
  },
  {
    label: "Features",
    key: "Features",
    icon: <CrownFilled />,
    children: [
      {
        label: "Create a new Event",
        key: "/createpost",
      },
      {
        label: "Explore Events",
        key: "/showpost",
      },

    ]
  },
  {
    label: "Payment",
    key: "/payment",
    icon: <CreditCardOutlined />,
    disabled: false,
  },
  {
    label: "Help",
    key: "SubMenu",
    icon: <QuestionCircleOutlined />,
    children: [
      {
        type: "group",
        label: "Mission and Team",
        children: [
          {
            label: "Our Mission",
            key: "setting:1",
          },
          {
            label: "Our Team",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Impact",
        children: [
          {
            label: "Our Work",
            key: "setting:3",
          }
        ],
      },
    ],
  },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [current, setCurrent] = useState("/");


useEffect(()=>{
  if(location.pathname === "/createpost"){
    setCurrent("Features");
  }
  if(location.pathname === "/showpost"){
    setCurrent("Features");
  }

},[location.pathname]);

  const DisplayUserInfo = () => {
    const { user } = useUser();
  
    return (
      <div style={{fontWeight:'600', fontFamily:'Franklin Gothic Medium'}}>
       {user?.firstName} {user?.lastName}
      </div>
    );
  };
  


  return (
    <div className="head_nav" style={{backgroundColor:"white"}}>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: "#806503",
            borderRadius: 2,
            // Alias Token
            colorBgContainer: "white",
          },
        }}
      >
        <Menu
          style={{justifyContent:"flex-start" , minWidth:"40%"}}
          className="menu"
          onClick={({key})=>{
            if(key === "/createpost"){
              navigate(key)
              setCurrent("Features");
            }
            else if(key === "/showpost"){
              navigate(key)
              setCurrent("Features");
            }
            else if(key === "/"){
              navigate(key)
              setCurrent(key);
            }
            else if(key === "/payment"){
              navigate(key)
              setCurrent(key);
            }


          }}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </ConfigProvider>

      <div className="UserDisplay">
       <DisplayUserInfo/> 
       <img style={{width:27, paddingRight:10}} src={userLogo} alt="user"/>
      </div>

      <SignOutButton
        signOutCallback={() => {
          window.location.href = "/login";
        }}
      >
        <Button className="signout" type="primary">
          Log Out
        </Button>
      </SignOutButton>
    </div>
  );
};
export default Navbar;
