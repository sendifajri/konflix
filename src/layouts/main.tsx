import React, { useEffect, useState } from "react";
import { Layout, Typography } from "antd";
import SearchInput from "../components/SearchInput";
import { useDispatch } from "react-redux";
import { movieActions, movieActionsLoading } from "../actions/movieActions";
import DelayHandling from "../utils/delayHandling";

const { Content } = Layout;
const { Title } = Typography;
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
