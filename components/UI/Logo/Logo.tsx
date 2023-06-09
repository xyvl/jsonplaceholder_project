import Link from "next/link";
import styles from "./logo.module.scss";
import logo from "@/img/Mommsen_p266.jpg";
import { FC } from "react"

const Logo = () => {
  return (
    <Link href={`/about/user/${Math.ceil(Math.random() * 10)}`} className={styles.logo}>
      <img src={logo.src} alt="" />
    </Link>
  );
};

export default Logo;
