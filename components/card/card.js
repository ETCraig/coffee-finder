import Image from "next/image";
import Link from "next/link";
import cls from "classnames";

import styles from "./card.module.css";

const Card = (props) => {
  return (
    <Link href={props.href} className={styles.cardLink}>
      <div className={cls("glass", styles.container)}>
        <div className={styles.cardHeaderWrapper}>
          <h2 className={styles.cardHeader}>{props.name}</h2>
        </div>
        <div className={styles.cardImageWrapper}>
          <Image
            src={props.imgUrl}
            width={260}
            height={260}
            className={styles.cardImage}
            alt="Shop Image"
          />
        </div>
      </div>
    </Link>
  );
};

export default Card;
