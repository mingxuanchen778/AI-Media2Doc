import React from "react";
import { Steps, Card, Radio, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const CreateTaskPage = () => {
  return (
    <div style={{ padding: "24px", backgroundColor: "#f5f5f5" }}>
      {/* 处理进度 */}
      <Card style={{ marginBottom: "24px" }}>
        <Steps current={1}>
          <Steps.Step title="初始化 FFmpeg" />
          <Steps.Step title="提取音频" />
          <Steps.Step title="上传文件" />
          <Steps.Step title="音频转文字" />
          <Steps.Step title="生成图文" />
        </Steps>
      </Card>

      {/* 选择图文风格 */}
      <Card style={{ marginBottom: "24px" }}>
        <h3>选择图文风格</h3>
        <Radio.Group
          defaultValue="note"
          style={{ display: "flex", gap: "16px" }}
        >
          <Radio.Button value="note">知识笔记</Radio.Button>
          <Radio.Button value="summary">内容总结</Radio.Button>
          <Radio.Button value="xiaohongshu">小红书风格</Radio.Button>
          <Radio.Button value="wechat">公众号风格</Radio.Button>
          <Radio.Button value="mind">思维导图</Radio.Button>
        </Radio.Group>
      </Card>

      {/* 上传区域 */}
      <Card>
        <h3>上传视频或 Mp3 音频</h3>
        <Upload.Dragger
          name="file"
          multiple={false}
          accept=".mp4,.mov,.avi,.mkv,.webm,.mp3"
          maxCount={1}
          style={{ padding: "24px 0" }}
        >
          <p className="ant-upload-drag-icon">
            <UploadOutlined style={{ fontSize: "32px" }} />
          </p>
          <p>支持拖拽或点击上传视频或 MP3 文件</p>
          <p>支持格式：MP4, MOV, AVI, MKV, WebM, MP3，最大 100MB</p>
        </Upload.Dragger>
      </Card>
    </div>
  );
};

export default CreateTaskPage;
