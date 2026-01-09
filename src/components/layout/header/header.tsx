import styles from './header.module.scss';

type NavbarItem = {
    title: string;
    url: string;
};

const Header = () => {
    const navbar: NavbarItem[] = [
        {
            title: 'Collections',
            url: '#',
        },
        {
            title: 'Men',
            url: '#',
        },
        {
            title: 'Women',
            url: '#',
        },
        {
            title: 'About',
            url: '#',
        },
        {
            title: 'Contact',
            url: '#',
        },
    ];

    return (
        <header className={styles.header}>
            <div>
                <span className={styles.logo}>sneakers</span>

                <nav className={styles.nav__container}>
                    {navbar.map(({ title, url }) => (
                        <a key={`${title}-${url}`} href={url}>
                            {title}
                        </a>
                    ))}
                </nav>
            </div>

            <div>
                <div className={styles.cart}>
                    <img src='/icons/icon-cart.svg' alt='Cart' />
                    <span>1</span>
                </div>

                <div className={styles.avatar}>
                    <img src='/assets/image-avatar.png' alt='User avatar' />
                </div>
            </div>
        </header>
    );
};

export default Header;
