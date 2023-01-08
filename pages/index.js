import Head from "next/head";
import styles from "../styles/Home.module.css";
import Banner from "../components/banner/banner";
import Image from "next/image";
import Card from "../components/card/card";
import coffeeStores from "../data/coffee-stores.json";

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
      <main className={styles.main}>
        <Banner
          buttonText="View stores nearby"
          handleOnClick={handleOnBannerBtnClick}
        />
        <div className={styles.heroImage}>
          <Image
            src="/static/hero-image.png"
            height={400}
            width={700}
            alt="Hero Image"
          />
        </div>
        <div className={styles.cardLayout}>
          {coffeeStores.map((store) => {
            return (
              <Card
                name={store.name}
                imgUrl={store.imgUrl}
                href={`/coffee-store/${store.id}`}
                className={styles.card}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
