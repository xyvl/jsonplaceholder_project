"use client";
import Link from "next/link";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <div className={`${styles.PC} burger_block`}>
          <Link className={styles.link_PC} href="/">
            Главная
          </Link>
          <Link className={styles.link_PC} href="/about/me">
            Обо мне
          </Link>
          <div
            onClick={() => {
              (
                document.querySelector(".burger_menu") as HTMLDivElement
              ).classList.toggle(`${styles.active}`);
              (
                document.querySelector(".burger_block") as HTMLDivElement
              ).classList.toggle(`${styles.active_block}`);
            }}
            className={styles.close}
          ></div>
        </div>
        <div
          onClick={(e) => {
            (
              document.querySelector(".burger_block") as HTMLDivElement
            ).classList.toggle(`${styles.active_block}`);
            e.currentTarget.classList.toggle(`${styles.active}`);
          }}
          className={`${styles.burder_menu} burger_menu`}
        >
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
