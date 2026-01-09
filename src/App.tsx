import Header from './components/layout/header/header.tsx';
import ProductPage from './components/product-page/product-page.tsx';
import Footer from './components/layout/footer/footer.tsx';
import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.container}>
            <Header />

            <ProductPage />

            <Footer />
        </div>
    );
}

export default App;
