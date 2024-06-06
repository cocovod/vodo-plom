/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import styles from '@/styles/footer/index.module.scss';

const FooterLogo = () => (
	<div className={styles.footer__top__item}>
		<Link href='/dashboard' passHref legacyBehavior>
			<a className={styles.footer__top__item__logo}>
				<img src='https://водполимер.рф/assets/img/logotype.png' alt='logo' />
				<br />
				<span className={styles.footer__top__item__logo__text}>
					Водополимер <br /> Магазины техники
				</span>
			</a>
		</Link>
	</div>
);

export default FooterLogo;
