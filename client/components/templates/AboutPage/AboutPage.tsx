/* eslint-disable @next/next/no-img-element */
import { useStore } from 'effector-react';
import { $mode } from '@/context/mode';
import styles from '@/styles/about/index.module.scss';

const AboutPage = () => {
	const mode = useStore($mode);
	const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : '';

	return (
		<section className={styles.about}>
			<div className='container'>
				<h2 className={`${styles.about__title} ${darkModeClass}`}>О компании</h2>
				<div className={styles.about__inner}>
					<div className={`${styles.about__info} ${darkModeClass}`}>
						<p>
							Магазины сантехники "Водполимер" приглашают садоводов, строителей и
							сантехников за покупками
						</p>
						<h3 style={{ marginBottom: 15 }}>У нас Вы найдете:</h3>
						<p>
							Огромный ассортимент сантехники (бытовой и промышленной), товары для
							сада и огорода, отопление и мебель для ванных комнат.
						</p>
						<p>Все необходимое в одном месте</p>
						<p>
							У нас большой опыт по сантехническому оборудованию, водоснабжению,
							канализации и отоплению
						</p>
						<p>Гарантия и качество</p>
						<p>
							Наши профессиональные специалисты помогут сделать правильный выбор и
							ответят на все ваши вопросы
						</p>
						<p>Доступные цены</p>
					</div>
					<div className={`${styles.about__img} ${styles.about__img__top}`}>
						<img src='/img/about-img.png' alt='image-1' />
					</div>
					<div className={`${styles.about__img} ${styles.about__img__bottom}`}>
						<img src='/img/about-img-2.png' alt='image-2' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutPage;
