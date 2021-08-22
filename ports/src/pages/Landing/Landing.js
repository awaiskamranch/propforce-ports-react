import { useState, useEffect } from "react";
import "./Landing.css";
import logo from "../../assets/propforce-white.png";
import { Layout, Modal, Select } from "antd";
import "antd/dist/antd.css";
import { PlusOutlined } from "@ant-design/icons";

const { Header, Footer, Content } = Layout;
const { Option } = Select;

function Landing() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [ports, setPorts] = useState([]);
  const [users, setUsers] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    fetchUsers();
    fetchPorts();
  }, []);

  const fetchUsers = () => {
    fetch("http://localhost:2000/api/user")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setIsLoaded(true);
          setUsers(result);
        },
        (error) => {
          console.log(error.message);
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  const fetchPorts = () => {
    fetch("http://localhost:2000/api/port")
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

  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val) {
    console.log("search:", val);
  }

  return (
    <Layout>
      <Header>
        <img className="logo" src={logo} alt="Propforce" />
        <PlusOutlined className="add-icon" onClick={showModal} />
        <Modal
          title="Set Port"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select Your Name"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            className="port-dropdown"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {users.map((user) => (
              <Option key={user._id} value={user._id}>
                {user.name}
              </Option>
            ))}
          </Select>

          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select the port"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            className="port-dropdown"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {ports.map((port) => (
              <Option key={port._id} value={port._id}>
                {port.name}
              </Option>
            ))}
          </Select>
        </Modal>
      </Header>
      <Content>
        <ul className="port-list">
          {ports.map((item) => (
            <li className="port" key={item.id}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      </Content>
      <Footer></Footer>
    </Layout>
  );
}

export default Landing;
