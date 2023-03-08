import { BellFilled, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Badge, Drawer, List, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import { getComments, getOrders } from "../../API";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

function AppHeader(e) {
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);

  useEffect(() => {
    getComments().then((res) => {
      setComments(res.comments);
    });
    getOrders().then((res) => {
      setOrders(res.products);
    });
  }, []);

  const logout = () => {
    localStorage.removeItem("token-info");
    setIsLoggedin(false);
  };

  return (
    <div className="AppHeader">
      {/* <Image
        width={40}
        src="https://yt3.ggpht.com/ytc/AMLnZu83ghQ28n1SqADR-RbI2BGYTrqqThAtJbfv9jcq=s176-c-k-c0x00ffffff-no-rj"
      ></Image> */}
      <Typography.Title>Dashboard</Typography.Title>
      <Space>
        <Badge count={comments.length} dot>
          <MailOutlined
            style={{ fontSize: 24 }}
            onClick={() => {
              setCommentsOpen(true);
            }}
          />
        </Badge>
        <Badge count={orders.length}>
          <BellFilled
            style={{ fontSize: 24 }}
            onClick={() => {
              setNotificationsOpen(true);
            }}
          />
        </Badge>
        {/* .............................profile................................*/}

        <Badge>
          <Dropdown>
            <Dropdown.Toggle
              style={{
                background: "transparent",
                border: "white",
                color: "black",
                marginBottom: "20px",
                marginLeft: "-8px",
              }}
              id="dropdown-basic"
            >
              <UserOutlined style={{ fontSize: 24 }} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link
                  style={{ color: "gray", textDecoration: "none" }}
                  to="/profile"
                >
                  Profile
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  onClick={logout}
                  style={{ color: "gray", textDecoration: "none" }}
                  to="/signin"
                >
                  SignOut
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Badge>
        {/* .............................profile................................*/}
      </Space>
      <Drawer
        title="Comments"
        open={commentsOpen}
        onClose={() => {
          setCommentsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={comments}
          renderItem={(item) => {
            return <List.Item>{item.body}</List.Item>;
          }}
        ></List>
      </Drawer>
      <Drawer
        title="Notifications"
        open={notificationsOpen}
        onClose={() => {
          setNotificationsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={orders}
          renderItem={(item) => {
            return (
              <List.Item>
                <Typography.Text strong>{item.title}</Typography.Text> has been
                ordered!
              </List.Item>
            );
          }}
        ></List>
      </Drawer>
    </div>
  );
}
export default AppHeader;
