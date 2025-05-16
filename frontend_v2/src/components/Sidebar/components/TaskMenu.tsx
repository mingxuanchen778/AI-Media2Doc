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
import { FileTextOutlined, FolderOutlined } from "@ant-design/icons";

const TaskMenu = ({ tasks, onMenuClick }) => {
  const getTagProps = (contentStyle) => {
    switch (contentStyle) {
      case "mind":
        return { color: "purple", text: "思维导图" };
      case "xiaohongshu":
        return { color: "red", text: "小红书风格" };
      case "note":
        return { color: "blue", text: "知识笔记" };
      default:
        return { color: "default", text: contentStyle };
    }
  };

  // 直接将 tasks 映射为 items，移除 group 分组
  const items = tasks.map((task) => {
    const { color, text } = getTagProps(task.contentStyle);
    return {
      key: `/task/${task.id}`,
      label: (
        <div style={{ height: "60px" }}>
          <div style={{ fontSize: 12, lineHeight: "24px" }}>
            <FileTextOutlined /> {task.fileName}
          </div>
          <Tag color={color}>{text}</Tag>
        </div>
      ),
      style: {
        padding: 10,
        height: "auto",
        border: "1px solid #f0f0f0",
        backgroundColor: "#fafafa",
      },
    };
  });

  return (
    <Menu
      mode="inline"
      onClick={onMenuClick}
      style={{ border: "none", overflowY: "scroll" }}
      items={items}
    />
  );
};
export default TaskMenu;
