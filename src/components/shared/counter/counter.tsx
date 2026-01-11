import { useEffect, useState } from 'react';
import styles from './counter.module.scss';

interface CounterProps {
    setValue: (value: number) => void;
}

const Counter = ({ setValue }: CounterProps) => {
    const [counter, setCounter] = useState<number>(0);

    useEffect(() => {
        setValue(counter);
    }, [counter, setValue]);

    const increment = () => setCounter(counter + 1);
    const decrement = () => setCounter(counter - 1);

    const disabled = counter === 0;

    return (
        <div className={styles.container}>
            <button
                disabled={disabled}
                onClick={decrement}
                className={styles.decrement}
            >
                <img src='/icons/icon-minus.svg' alt='Minus' />
            </button>
            <span className={styles.value}>{counter}</span>
            <button onClick={increment} className={styles.increment}>
                <img src='/icons/icon-plus.svg' alt='Plus' />
            </button>
        </div>
    );
};

export default Counter;
