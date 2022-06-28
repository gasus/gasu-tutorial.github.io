import {
  Create,
  Form,
  Input,
  Select,
  useForm,
  useSelect,
} from "@pankod/refine-antd";

import { IMoney } from "interfaces";

export const PostCreate = () => {
  const { formProps, saveButtonProps } = useForm<IMoney>();
  const { selectProps: categorySelectProps } = useSelect<IMoney>({
    resource: "categories",
  });

  return (
    <Create title='Создать' saveButtonProps={{ ...saveButtonProps, children: 'Создать' }}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Сумма"
          name="count"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          label="Вид"
          name="isIncome"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            options={[
              {
                label: "Доход",
                value: true,
              },
              {
                label: "Расход",
                value: false,
              },
            ]}
          />
        </Form.Item>
        <Form.Item
          label="Категория"
          name={["categoryId"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...categorySelectProps} />
        </Form.Item>
      </Form>
    </Create>
  );
};