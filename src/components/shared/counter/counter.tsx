import styles from './counter.module.scss';

interface CounterProps {
    value: number;
    setValue: (value: number) => void;
}

const Counter = ({ value, setValue }: CounterProps) => {
    const increment = () => setValue(value + 1);
    const decrement = () => setValue(value - 1);

    const disabled = value === 0;

    return (
        <div className={styles.container}>
            <button
                disabled={disabled}
                onClick={decrement}
                className={styles.decrement}
            >
                <img src='/icons/icon-minus.svg' alt='Minus' />
            </button>
            <span className={styles.value}>{value}</span>
            <button onClick={increment} className={styles.increment}>
                <img src='/icons/icon-plus.svg' alt='Plus' />
            </button>
        </div>
    );
};

export default Counter;
