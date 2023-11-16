import "./postCard.css";
import { HeartFilled } from "@ant-design/icons";
import { Button,ConfigProvider, Space } from "antd";
import { useNavigate } from "react-router-dom";
import educationIcon from "./icons/scholarship.png";
import foodIcon from "./icons/cutlery.png";
import undefinedType from './icons/empty.png'
import Scholarship from './icons/fund.png';
import Infanstructure from './icons/infrastructure.png';
import specialied from './icons/self-control.png';
import tech from './icons/robotic-hand.png';



export default function PostCard(props: any) {
 const navigate = useNavigate();


  let IconType = undefinedType;

 if(props.type === "Food and Equipment"){
    IconType = foodIcon;
 }
 else if (props.type === "Scholarships and Financial Aid"){
    IconType = Scholarship;
 }
 else if (props.type === "Educational Materials"){
    IconType = educationIcon;
  }
  else if(props.type === 'Infrastructure Development'){
    IconType = Infanstructure;
  }
  else if(props.type === 'Specialized Programs'){
    IconType = specialied;
  }
  else if (props.type === 'Tech For Education'){
    IconType = tech;
  }



  return (
    <>
      <div className="postCard">
        <div className="mainHeaderAll">
          <div className="imageContain">
            <img className="icon" src={IconType} alt="TypeIocn" />
          </div>

          <div className="makeSomthing">
            <div className="titleAnddate">
              <p className="title">{props.title}</p>
              <p className="date">{props.createDate}</p>
            </div>

            <div className="maketypeandId">
              <p className="Eventid">Event ID - {props.id}</p>
              <p className="type">{props.type}</p>
            </div>
            
            
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
                onClick={()=>{navigate('/payment')}}
                icon={<HeartFilled />}
              >
                Donate
              </Button>
            </Space>
          </ConfigProvider>

          <div className="location">
          <p>{props.location}</p>
          </div>
          
        
        </div>
      </div>
    </>
  );
}
