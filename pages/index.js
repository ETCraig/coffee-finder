import Head from "next/head";
import styles from "../styles/Home.module.css";
import Banner from "../components/banner";

export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log("click");
  };

  return (
    <>
      <Head>
        <title>Coffee Finder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner
        buttonText="View store nearby"
        handleOnClick={handleOnBannerBtnClick}
      />
      <main className={styles.main}></main>
    </>
  );
}
