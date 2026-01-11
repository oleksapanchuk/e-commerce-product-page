import styles from './footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerContainer__content}>
                Challenge by{' '}
                <a
                    href='https://www.frontendmentor.io?ref=challenge'
                    target='_blank'
                    className={styles.footerContainer__link}
                >
                    Frontend Mentor
                </a>
                . Coded by{' '}
                <a
                    href='https://www.frontendmentor.io/profile/oleksapanchuk'
                    target='_blank'
                    className={styles.footerContainer__link}
                >
                    Oleksandr Panchuk
                </a>
                .
            </div>
        </footer>
    );
};

export default Footer;
