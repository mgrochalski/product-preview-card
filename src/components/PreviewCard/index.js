import styles from './PreviewCard.module.scss';
import productImg from '../../images/image-product-desktop.jpg';
import shoppingCardImg from '../../images/icon-cart.svg'

const PreviewCard = () => (
    <div className={styles.card}>
        <img className={styles.img} src={productImg} alt="product"/>
        <div className={styles.informationBox}>
            <p className={styles.category}>Perfume</p>
            <p className={styles.title}>Gabrielle Essence Eau De Parfum</p>
            <p className={styles.description}>A floral, solar and voluptuous interpretation composed by Olivier Polge,
                Perfumer-Creator for the House of CHANEL. </p>
            <div className={styles.price}>
                <p className={styles.price__regular}>$149.99</p>
                <p className={styles.price__discount}>$169.99</p>
            </div>
            <button className={styles.btn}><img className={styles.btn__img} src={shoppingCardImg} alt='cart img'/><p>Add to Cart</p></button>
        </div>
    </div>
)

export default PreviewCard;