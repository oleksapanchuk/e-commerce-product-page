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

    const addToCart = () => {
        console.log('quantity: ', quantity);
    };

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
            <div>
                <p>{getPriceWithDiscount(data.price, data.discount)}</p>
                <span>{data.discount}</span>
            </div>
            <div>{data.price}</div>

            <div className={styles.productDetailsContainer__actionBlock}>
                <Counter setValue={setQuantity} />
                <Button
                    iconStart={
                        <img
                            src={'/icons/icon-cart.svg'}
                            alt={'Cart icon'}
                            className={styles.cart__icon}
                        />
                    }
                    onClick={addToCart}
                >
                    Add to cart
                </Button>
            </div>
        </div>
    );
};

export default ProductDetails;
