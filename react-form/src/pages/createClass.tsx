import { Controller, useForm } from "react-hook-form";
import IClass from "../interfaces/IClass";

import { Form, Input, Button, Typography, Layout } from "antd";
const { Content } = Layout;
const { Item } = Form;
const { Title } = Typography;

function CreateClass() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Partial<IClass>>();

  const onSubmit = (data: Partial<IClass>) => {
    console.log("Dados enviados: ", {
      ...data,
      capacity: Number(data.capacity),
      hour: String(data.hour),
    });
  };

  return (
    <Content>
      <Title level={2}>Criar nova turma</Title>
      <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
        <Item
          label="Nome do curso"
          name="name"
          validateStatus={errors.name ? "error" : ""}
          help={errors.name?.message}
        >
          <Controller
            name="name"
            control={control}
            rules={{ required: "Nome obrigatório" }}
            render={({ field }) => <Input {...field} />}
          />
        </Item>

        <Item
          label="Laboratório"
          name="room"
          validateStatus={errors.room ? "error" : ""}
          help={errors.room?.message}
        >
          <Controller
            name="room"
            control={control}
            rules={{ required: "Nome do laboratório obrigatório" }}
            render={({ field }) => <Input {...field} />}
          />
        </Item>

        <Item
          label="Capacidade máxima"
          name="capacity"
          validateStatus={errors.capacity ? "error" : ""}
          help={errors.capacity?.message}
        >
          <Controller
            name="capacity"
            control={control}
            rules={{ required: "Capacidade obrigatória" }}
            render={({ field }) => <Input type="number" {...field} />}
          />
        </Item>

        <Item
          label="Dia"
          name="day"
          validateStatus={errors.day ? "error" : ""}
          help={errors.day?.message}
        >
          <Controller
            name="day"
            control={control}
            rules={{ required: "Dia obrigatório" }}
            render={({ field }) => <Input {...field} />}
          />
        </Item>

        <Item
          label="Hora"
          name="hour"
          validateStatus={errors.hour ? "error" : ""}
          help={errors.hour?.message}
        >
          <Controller
            name="hour"
            control={control}
            rules={{ required: "Hora obrigatória" }}
            render={({ field }) => <Input type="time" {...field} />}
          />
        </Item>

        <Button type="primary" htmlType="submit">
          Criar
        </Button>
      </Form>
    </Content>
  );
}

export default CreateClass;
