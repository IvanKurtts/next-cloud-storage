import { Layout, Avatar, Menu, Popover, Button } from "antd";
import styles from "./Header.module.scss";
import { CloudOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import * as Api from "../../api";
import { useEffect, useState } from "react";

export const Header = () => {
  const router = useRouter();
  const selectedMenu = router.pathname;

  const [avatarName, setAvatarName] = useState("");

  const onClickLogout = () => {
    if (window.confirm("Do you really want to leave?")) {
      Api.auth.logout();
      location.href = "/";
    }
  };

  const fetchAvatar = async () => {
    const { fullname } = await Api.auth.getMe();
    setAvatarName(fullname[0] + fullname[fullname.indexOf(" ") + 1]);
  };

  useEffect(() => {
    fetchAvatar();
  }, []);

  return (
    <Layout.Header className={styles.root}>
      <div className={styles.headerInner}>
        <div className={styles.headerLeft}>
          <h2>
            <CloudOutlined />
            Cloud Storage
          </h2>

          <Menu
            className={styles.topMenu}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[selectedMenu]}
            onSelect={({ key }) => router.push(key)}
            items={[
              { key: "/dashboard", label: "Main" },
              { key: "/dashboard/profile", label: "Profile" },
            ]}
          />
        </div>

        <div className={styles.headerRight}>
          <Popover
            trigger="click"
            content={
              <Button onClick={onClickLogout} type="primary" danger>
                Logout
              </Button>
            }
          >
            <Avatar>{avatarName}</Avatar>
          </Popover>
        </div>
      </div>
    </Layout.Header>
  );
};
