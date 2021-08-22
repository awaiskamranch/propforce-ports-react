import { useState, useEffect } from "react";
import "./Landing.css";
import logo from "../../assets/propforce-white.png";
import wave from "../../assets/wave.png";
import { Layout, Modal } from "antd";
import "antd/dist/antd.css";
import { PlusOutlined } from "@ant-design/icons";
import SetPort from "../SetPort/SetPort";
import { config } from "../../constants";

const { Header, Footer, Content } = Layout;

function Landing() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [ports, setPorts] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    fetchPorts();
  }, []);

  const fetchPorts = () => {
    fetch(`${config.url}/api/port`)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setIsLoaded(true);
          setPorts(result);
        },
        (error) => {
          console.log(error.message);
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Layout>
      <Header>
        <div className="title">
          <img className="logo" src={logo} alt="Propforce" />
          <div>PORTS</div>
        </div>
        <PlusOutlined className="add-icon" onClick={showModal} />

        <Modal
          title="Set Port"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <SetPort ports={ports}></SetPort>
        </Modal>
      </Header>
      <Content>
        <div className="port-container">
          <div className="port-inner-container">
            <ul className="port-list">
              {ports.map((item) => (
                <li
                  className={`port ${item.user ? "occupied" : "free"}`}
                  key={item.id}
                >
                  {item.name} {item.price}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div class="wave"></div>
        <div class="wave"></div>
      </Content>
      <Footer>
        <div className="footerTitle">Propforce © 2021</div>
      </Footer>
    </Layout>
  );
}

export default Landing;
