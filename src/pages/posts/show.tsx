import { useShow, useOne } from "@pankod/refine-core";
import { Show, Typography, Tag } from "@pankod/refine-antd";

import { ICategory } from "interfaces";

const { Title, Text } = Typography;

export const PostShow = () => {
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;
    const record = data?.data;

    const { data: categoryData } = useOne<ICategory>({
        resource: "categories",
        id: record?.categoryId || "",
        queryOptions: {
            enabled: !!record?.categoryId,
        },
    });

    return (
        <Show title='Просмотр записи' isLoading={isLoading}>
            <Title level={5}>Сумма</Title>
            <Text>{record?.count}</Text>

            <Title level={5}>Вид</Title>
            <Text>
                <Tag>{record?.isIncome}</Tag>
            </Text>

            <Title level={5}>Категория</Title>
            <Tag>{categoryData?.data.title}</Tag>
        </Show>
    );
};