import ClassCard from "../components/classCard";
import turmas from "../mocks/turmas.json";
import IClass from "../interfaces/IClass";
import { Layout, Typography } from "antd";
const { Title } = Typography;
const { Content } = Layout;

function Home() {
  return (
    <Content>
      <Title level={2}>Turmas disponíveis</Title>

      {turmas.map((turma: IClass) => (
        <ClassCard key={turma.id} turma={turma} />
      ))}
    </Content>
  );
}

export default Home;
