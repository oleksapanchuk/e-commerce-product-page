import ProductDetails from './product-details/product-details.tsx';
import Carousel from './carousel/carousel.tsx';
import styles from './product-page.module.scss';

const ProductPage = () => {
    const data = {
        id: 'sneakers-1',
        name: 'Fall Limited Edition Sneakers',
        brand: 'Sneaker Company',
        description:
            'These low-profile sneakers are your perfect casual wear ' +
            'companion. Featuring a durable rubber outer sole, they’ll ' +
            'withstand everything the weather can offer',
        price: 25000,
        discount: 0.5,
        images: [],
    };

    return (
        <main className={styles.container}>
            <Carousel />

            <ProductDetails data={data} />
        </main>
    );
};

export default ProductPage;
