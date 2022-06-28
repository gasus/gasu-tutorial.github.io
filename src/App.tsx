import { Refine } from "@pankod/refine-core";
import { Layout, ReadyPage, notificationProvider, ErrorComponent } from "@pankod/refine-antd";
import routerProvider from "@pankod/refine-react-router-v6";
import { dataProvider } from "@pankod/refine-supabase";
import "@pankod/refine-antd/dist/styles.min.css";
import { PostList } from "pages/posts/list";
import { PostShow } from "pages/posts/show";
import { PostEdit } from "pages/posts/edit";
import { PostCreate } from "pages/posts/create";
import { supabaseClient } from "utils/supabase";

// const CustomTitle = ({ collapsed }: { collapsed: boolean }) => (
//   <div>{collapsed ? "Collapsed Title" : "Full Title"}</div>
// );


const App: React.FC = () => {
  return (
    <Refine
      routerProvider={routerProvider}
      dataProvider={dataProvider(supabaseClient)}
      Layout={Layout}
      ReadyPage={ReadyPage}
      // Title={CustomTitle}
      notificationProvider={notificationProvider}
      catchAll={<ErrorComponent />}
      resources={[
        {
          name: "money",
          list: PostList,
          show: PostShow,
          edit: PostEdit,
          create: PostCreate,
          canDelete: true,
          options: { label: "Бюджет" },
        },
      ]}
    />
  );
};

export default App;