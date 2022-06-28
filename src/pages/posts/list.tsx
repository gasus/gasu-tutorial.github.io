import { useList } from "@pankod/refine-core";
import {
  List,
  TextField,
  TagField,
  DateField,
  Table,
  useTable,
  FilterDropdown,
  Select,
  ShowButton,
  useSelect,
  Space,
  EditButton,
  DeleteButton,
  Breadcrumb,
} from "@pankod/refine-antd";

import { IMoney, ICategory } from "../../interfaces";

export const PostList: React.FC = () => {
  const { tableProps } = useTable<IMoney>();

  const { data: categoriesData, isLoading } = useList<ICategory>({ resource: "categories" });

  const { selectProps: categorySelectProps } = useSelect<ICategory>({
    resource: "categories",
  });

  return (
    <List
      createButtonProps={{ children: 'Добавить' }}
    // pageHeaderProps={{
    //   breadcrumb: <Breadcrumb breadcrumbProps={{
    //     separator: "-", routes: [{
    //       path: 'money',
    //       breadcrumbName: '111111',
    //       children: [
    //         {
    //           path: '/create',
    //           breadcrumbName: 'General',
    //         },
    //       ],
    //     }]
    //   }} />,
    // }}
    >
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="count" title="Сумма" />
        <Table.Column
          dataIndex="isIncome"
          title="Вид"
          render={(value) => <TagField value={value ? 'Доход' : 'Расход'} color={value ? 'green' : 'red'} />}
        />
        <Table.Column
          dataIndex="createdAt"
          title="Дата"
          render={(value) => <DateField format="DD/MM/YYYY" value={value} />}
        />
        <Table.Column
          dataIndex="categoryId"
          title="Категория"
          render={(value) => {
            if (isLoading) {
              return <TextField value="Загрузка..." />;
            }

            return (
              <TagField
                value={
                  categoriesData?.data.find(
                    (item) => item.id === value,
                  )?.title
                }
              />
            );
          }}
          filterDropdown={(props) => (
            <FilterDropdown {...props} >
              <Select
                style={{ minWidth: 200 }}
                mode="multiple"
                placeholder="Выберите категорию"
                {...categorySelectProps}
              />
            </FilterDropdown>
          )}
        />
        <Table.Column<IMoney>
          title="Действия"
          dataIndex="actions"
          render={(_text, record): React.ReactNode => {
            return (
              <Space>
                <ShowButton
                  size="small"
                  recordItemId={record.id}
                  hideText
                />
                <EditButton
                  size="small"
                  recordItemId={record.id}
                  hideText
                />
                <DeleteButton
                  size="small"
                  recordItemId={record.id}
                  hideText
                />
              </Space>
            );
          }}
        />
      </Table>
    </List>
  );
};