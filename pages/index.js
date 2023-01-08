import Head from "next/head";
import styles from "../styles/Home.module.css";
import Banner from "../components/banner/banner";
import Image from "next/image";
import Card from "../components/card/card";
import coffeeStoresData from "../data/coffee-stores.json";

export async function getStaticProps(context) {
  return {
    props: {
      coffeeStores: coffeeStoresData,
    }, // will be passed to the page component as props
  };
}

export default function Home(props) {
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
        {props.coffeeStores.length > 0 && (
          <>
            <h2 className={styles.heading2}>Phoenix</h2>
            <div className={styles.cardLayout}>
              {props.coffeeStores.map((store) => {
                return (
                  <Card
                    key={store.id}
                    name={store.name}
                    imgUrl={store.imgUrl}
                    href={`/coffee-store/${store.id}`}
                    className={styles.card}
                  />
                );
              })}
            </div>
          </>
        )}
      </main>
    </>
  );
}
