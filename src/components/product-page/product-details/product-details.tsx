import styles from './product-details.module.scss';
import { cn } from '../../../utils/cn.ts';
import * as React from 'react';
import Counter from '../../shared/counter/counter.tsx';
import Button from '../../shared/button/button.tsx';

type ProductDetails = {
    id: string;
    name: string;
    brand: string;
    description: string;
    price: number;
    discount: number;
    images: string[];
};

interface ProductDetailsProps {
    data: ProductDetails;
    className?: string;
}

const ProductDetails = ({ data, className }: ProductDetailsProps) => {
    const [quantity, setQuantity] = React.useState(0);

    const getPriceWithDiscount = (price: number, discount: number) =>
        price * discount;

    const formatPrice = (price: number) => {
        return '$' + (price / 100).toFixed(2);
    };

    const formatDiscount = (discount: number) => {
        return discount * 100 + '%';
    };

    const addToCart = () => {
        console.log('quantity: ', quantity);
        setQuantity(0);
    };

    const cartIcon = (
        <img
            src={'/icons/icon-cart.svg'}
            alt={'Cart icon'}
            className={styles.cart__icon}
        />
    );

    return (
        <div className={cn(styles.productDetailsContainer, className)}>
            <p className={styles.productDetailsContainer__brand}>
                {data.brand}
            </p>
            <h1 className={styles.productDetailsContainer__title}>
                {data.name}
            </h1>
            <p className={styles.productDetailsContainer__description}>
                {data.description}
            </p>

            <div className={styles.priceContainer}>
                <div className={styles.priceContainer__priceWithDiscount}>
                    <span className={styles.priceContainer__price}>
                        {formatPrice(
                            getPriceWithDiscount(data.price, data.discount)
                        )}
                    </span>
                    <div className={styles.priceContainer__discount}>
                        {formatDiscount(data.discount)}
                    </div>
                </div>

                {data.discount && data.discount > 0 && (
                    <span className={styles.priceContainer__oldPrice}>
                        {formatPrice(data.price)}
                    </span>
                )}
            </div>

            <div className={styles.productDetailsContainer__actionBlock}>
                <Counter
                    value={quantity}
                    setValue={setQuantity}
                    className={styles.counterBlock}
                />
                <Button iconStart={cartIcon} onClick={addToCart}>
                    Add to cart
                </Button>
            </div>
        </div>
    );
};

export default ProductDetails;
