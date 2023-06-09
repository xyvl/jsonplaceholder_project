import axios from "axios"
import styles from './aboutUser.module.scss'
import { FC } from "react"
import Logo from "../UI/Logo/Logo"

interface IProps{
	id: string
}

interface IData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const AboutUser: FC<IProps> = async ({id}) => {
	const data: IData = (
    await axios.get(`${process.env.NEXT_PUBLIC_URL_ALL_USERS}?id=${id}`)
  ).data[0];

	return (
		<div className="wrapper">
      <div className={styles.header}>
        <Logo/>
				<p className={styles.name}>
				Вас зовут: {data.name} {data.username}
        </p>
      </div>
			<h1 className={styles.h1}>Ваши данные:</h1>
			<div className={styles.info_block}>
				<p>Почта: {data.email}</p>
				<p>Телефон: {data.phone}</p>
				<p>Сайт: {data.website}</p>
				<p>Вы живёте в городе {data.address.city} на улице {data.address.street}</p>
				<p>Вы работаете в компании {data.company.name}</p>
			</div>
      <h1 className={styles.h1}>Комменты:</h1>
    </div>
	)
}

export default AboutUser