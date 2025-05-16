import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import {
  Layout,
  Button,
  Menu,
  Tag,
  Space,
  Flex,
  Typography,
  Avatar,
  Divider,
} from "antd";
import "antd/dist/reset.css";
import { mockTaskList } from "../../mock";

import TaskMenu from "./components/TaskMenu";

const { Sider, Content } = Layout;

function Sidebar() {
  const navigate = useNavigate();

  const handleMenuClick = (e) => {
    navigate(e.key);
  };

  return (
    <Sider
      width={260}
      style={{
        backgroundColor: "white",
        padding: "16px",
        height: "100%",
        overflow: "scroll",
      }}
    >
      <Space>
        <Avatar src="/src/assets/logo.jpeg" />
        <h2 style={{ fontSize: "18px", fontWeight: "bold", margin: 0 }}>
          AI 视频图文创作助手
        </h2>
      </Space>
      <Button
        style={{ width: "100%", marginTop: "16px" }}
        type="primary"
        onClick={() => navigate("/")}
      >
        新建任务
      </Button>
      <Divider style={{ margin: "16px 0" }} />
      <TaskMenu tasks={mockTaskList} onMenuClick={handleMenuClick} />
    </Sider>
  );
}

export default Sidebar;
