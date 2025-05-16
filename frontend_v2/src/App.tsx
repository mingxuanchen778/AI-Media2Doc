import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";

import CreateTaskPage from "./Pages/CreateTaskPage";
import Sidebar from "./components/Sidebar";
const { Content } = Layout;

const Task = () => <div>任务详情页面: </div>;

function App() {
  return (
    <Router>
      <Layout
        style={{
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Sidebar />
        <Content style={{ padding: "16px", backgroundColor: "#f5f5f5" }}>
          <Routes>
            <Route path="/" element={<CreateTaskPage />} />
            <Route path="/task/:id" element={<Task />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
