import Header from "@/components/Header/Header";
import styles from "./page.module.scss";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <h1 className={styles.header}>Обо мне:</h1>
        <div className={styles.block}>
          <p className={styles.header_slaves}>Контактная информация:</p>
          <ul>
            <li>Почта: 23091980luba@gmail.com</li>
            <li>Телефон: +79177672041</li>
          </ul>
        </div>
        <div className={styles.block}>
          <p className={styles.header_slaves}>Стэк технологий:</p>
          <ul>
            <li>React, Next</li>
            <li>TypeScript, JavaScript</li>
            <li>Redux-toolkit</li>
            <li>Git</li>
            <li>HTML, CSS, SCSS, LESS, Tailwind</li>
            <li>PostgreSQL</li>
            <li>Node, Express</li>
          </ul>
        </div>
        <div className={styles.block}>
          <p className={styles.header_slaves}>Мои проекты:</p>
          <ul>
            <li>
              Создал свое приложение на основе todo, где есть авторизация,
              регистрация, todo сохраняется на локальную базу данных на
              postgresql.{" "}
              <Link href="https://github.com/xyvl/todo_fullstack">ссылка</Link>{" "}
              . Стэк: React, SCSS, PostgreSQl, Express, React-router-dom,
              Redux-toolkit, TypeScript
            </li>
            <li>
              Второй проект это моя коллекция слайдеров.{" "}
              <Link href="https://github.com/xyvl/todo_fullstack">ссылка</Link>{" "}
              . Стэк: React, SCSS, TypeScript
            </li>
            <li>
              Третий это тз, где надо было построить приложение на RestAPI
              "Green Api", где можно было бы переписоваться с одним контактом.
              Все было построено на Api WhatsApp.{" "}
              <Link href="https://github.com/xyvl/collection_slider">
                ссылка
              </Link>{" "}
              . Стэк: React, SCSS, React-router-dom, Redux-toolkit, TypeScript
            </li>
          </ul>
        </div>
        <div className={styles.block}>
				<p className={styles.header_slaves}>Обо мне:</p>
        <ul>
          <li>
            Готов работать full-time, изучать технологии, выполнять все задания
            по максимуму. Технически эрудирован, ответственен, имею высокий
            уровень организованности. Претендую на должность Стажёр/Junior.
          </li>
        </ul>
				</div>
      </div>
    </>
  );
};

export default page;
