import React from "react";
import { Layout } from "antd";

const { Content } = Layout;
interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Layout>
      <Content className="site-layout container">
        <div className="site-layout-background">{children}</div>
      </Content>
    </Layout>
  );
};

export default MainLayout;
