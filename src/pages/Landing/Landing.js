import { useState, useEffect } from "react";
import "./Landing.css";
import logo from "../../assets/propforce-white.png";
import wave from "../../assets/wave.png";
import { Layout, Modal, Popover } from "antd";
import "antd/dist/antd.css";
import { PlusOutlined, CloseCircleOutlined } from "@ant-design/icons";
import SetPort from "../SetPort/SetPort";
import { config } from "../../constants";

const { Header, Footer, Content } = Layout;

function Landing() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [ports, setPorts] = useState([]);
  const [activePort, setActivePort] = useState(null);
  const [activeUser, setActiveUser] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    fetchPorts();
  }, []);

  const fetchPorts = () => {
    fetch(`${config.url}/api/port`)
      .then((res) => res.json())
      .then(
        (result) => {
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

  const updatePort = (port) => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(port),
    };

    fetch(`${config.url}/api/port`, requestOptions)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          fetchPorts();
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  const removePortUser = (portId) => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id: portId, user: null }),
    };
    fetch(`${config.url}/api/port`, requestOptions)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          fetchPorts();
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    updatePort({ _id: activePort, name: activeUser });
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
          <SetPort
            ports={ports}
            setActivePort={setActivePort}
            setActiveUser={setActiveUser}
          ></SetPort>
        </Modal>
      </Header>
      <Content>
        <div className="port-container">
          <div className="port-inner-container">
            <ul className="port-list">
              {ports.map((item) =>
                item.user && item.user.name ? (
                  <Popover content={item.user.name}>
                    <li
                      className={`port ${item.user ? "occupied" : "free"}`}
                      key={item._id}
                    >
                      {item.name}
                      <CloseCircleOutlined
                        onClick={() => removePortUser(item._id)}
                        className="remove-icon"
                      />
                    </li>
                  </Popover>
                ) : (
                  <li
                    className={`port ${
                      item.user && item.user.name ? "occupied" : "free"
                    }`}
                    key={item._id}
                  >
                    {item.name}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className="wave"></div>
        <div className="wave"></div>
      </Content>
      <Footer>
        <div className="footerTitle">Propforce © 2021</div>
      </Footer>
    </Layout>
  );
}

export default Landing;
