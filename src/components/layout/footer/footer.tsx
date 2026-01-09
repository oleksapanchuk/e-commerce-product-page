import styles from './footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className='attribution'>
                Challenge by{' '}
                <a
                    href='https://www.frontendmentor.io?ref=challenge'
                    target='_blank'
                >
                    Frontend Mentor
                </a>
                . Coded by <a href='#'>Oleksandr Panchuk</a>.
            </div>
        </footer>
    );
};

export default Footer;
