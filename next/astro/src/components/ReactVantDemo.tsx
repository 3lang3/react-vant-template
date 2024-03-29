import { Arrow, Like } from "@react-vant/icons";
import { Space, Typography, Tag, Card, Toast, Image, Button } from "react-vant";

export default function ReactVantDemo() {
  return (
    <Space
      direction="vertical"
      style={{
        padding: 20,
        width: "100%",
        backgroundColor: "#f2f2f2",
        boxSizing: "border-box",
      }}
    >
      <Typography.Title level={1}>
        Hello React Vant <Tag type="primary">v3</Tag>
      </Typography.Title>
      <Typography.Text>
        参照 Vant 打造的 React 框架移动端组件库。
      </Typography.Text>
      <Card round>
        <Card.Cover onClick={() => Toast.info("点击了Cover区域")}>
          <Image src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/baa20698931623.5ee79b6a8ec2b.jpg" />
        </Card.Cover>
        <Card.Header
          extra={<Arrow />}
          onClick={() => Toast.info("点击了Header区域")}
        >
          封面展示
        </Card.Header>
        <Card.Body onClick={() => Toast.info("点击了Body区域")}>
          卡片内容区域
        </Card.Body>
        <Card.Footer>
          <Space>
            <Button round size="small">
              更多
            </Button>
            <Button
              icon={<Like />}
              round
              color="linear-gradient(to right, #ff6034, #ee0a24)"
              size="small"
            >
              Like
            </Button>
          </Space>
        </Card.Footer>
      </Card>
      <Card round>
        <Card.Header
          extra={<Arrow />}
          onClick={() => Toast.info("点击了Header区域")}
        >
          封面展示
        </Card.Header>
        <Card.Body onClick={() => Toast.info("点击了Body区域")}>
          卡片内容区域
        </Card.Body>
        <Card.Cover onClick={() => Toast.info("点击了Cover区域")}>
          <Image src="https://mir-s3-cdn-cf.behance.net/project_modules/max_632/274faa127009547.61390144590a7.png" />
        </Card.Cover>
      </Card>
    </Space>
  );
}
