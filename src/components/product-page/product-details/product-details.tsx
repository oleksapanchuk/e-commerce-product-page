import styles from './product-details.module.scss';
import { cn } from '../../../utils/cn.ts';

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
    const getPriceWithDiscount = (price: number, discount: number) =>
        price * discount;

    return (
        <div className={cn(styles.container, className)}>
            <p>{data.brand}</p>
            <h1>{data.name}</h1>
            <p>{data.name}</p>
            <div>
                <p>{getPriceWithDiscount(data.price, data.discount)}</p>
                <span>{data.discount}</span>
            </div>
            <div>{data.price}</div>

            <div>
                <div>0</div>
                <button>Add to cart</button>
            </div>
        </div>
    );
};

export default ProductDetails;
