import { Link } from "react-router-dom";

import { Typography, Layout, Space } from "antd";
const { Header } = Layout;
const { Title } = Typography;

function AppHeader() {
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Title level={1} style={{ color: "#fff", margin: 0 }}>
        Turmas
      </Title>
      <Space>
        <Link style={{ fontSize: 18 }} to="/">
          Turmas disponíveis
        </Link>
        <Link style={{ fontSize: 18 }} to="/criar-turma">
          Cria turma
        </Link>
      </Space>
    </Header>
  );
}
export default AppHeader;
