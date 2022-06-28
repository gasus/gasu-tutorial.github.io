import { useForm, Form, Input, Select, Edit, useSelect } from "@pankod/refine-antd";
import { IMoney } from "interfaces";

export const PostEdit: React.FC = () => {
  const { formProps, saveButtonProps, queryResult } = useForm<IMoney>();

  const { selectProps: categorySelectProps } = useSelect<IMoney>({
    resource: "categories",
    defaultValue: queryResult?.data?.data?.categoryId,
  });

  return (
    <Edit title='Редактирование' saveButtonProps={{ ...saveButtonProps, children: 'Создать' }} deleteButtonProps={{ children: 'Удалить' }}>
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
          <Input />
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
    </Edit>
  );
};