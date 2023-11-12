import React from "react";
import "./postCard.css";
import donateBtnlogo from "../../Images/donate.png";
import { HeartFilled } from "@ant-design/icons";
import { Button, Tooltip, ConfigProvider, Space } from "antd";

import educationIcon from "./icons/scholarship.png";

export default function PostCard(props: any) {
  return (
    <>
      <div className="postCard">
        <div className="mainHeaderAll">
          <div className="imageContain">
            <img className="icon" src={educationIcon} alt="educationIcon" />
          </div>

          <div className="makeSomthing">
            <div className="titleAnddate">
              <p className="title">{props.title}</p>
              <p className="date">{props.createDate}</p>
            </div>
            <p className="type">{props.type}</p>
            <p className="writter">{props.writter_name}</p>
          </div>
        </div>

        <p className="discription">{props.discription}</p>
        

        {/*         
        <div className="donatebtn">
          <button className="button-33" role="button">Donate</button>
        </div> */}

        <div className="DonationBtnContainer">
          <ConfigProvider
            theme={{
              token: {
                // Seed Token
                colorPrimary: "#800040",
                borderRadius: 27,

                // Alias Token
                colorBgContainer: "#f6ffed",
              },
            }}
          >
            <Space>
              <Button
                className="CustomDonateBtn"
                type="primary"
                icon={<HeartFilled />}
              >
                Donate
              </Button>
            </Space>
          </ConfigProvider>
        </div>
      </div>
    </>
  );
}
