import { PoweroffOutlined } from "@ant-design/icons";
import { Button, Image } from "antd";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/navigation";
import styles from "../../styles/Home.module.scss";

const StartPage: NextPage = () => {
  const router = useRouter();
  const onStartClick = () => {
    router.push("/dashboard/auth");
  };
  return (
    <>
      <Head>
        <title>Cloud Storage</title>
      </Head>
      <main className={styles.startPage}>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          onClick={onStartClick}
          block
          style={{ width: "20%" }}
        >
          Click to Start
        </Button>
      </main>
    </>
  );
};

export default StartPage;
