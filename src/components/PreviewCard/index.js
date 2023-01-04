import styles from './PreviewCard.module.scss';
import shoppingCardImg from '../../images/icon-cart.svg';

const PreviewCard = ({data: {image, category, title, description, currentPrice, oldPrice}}) => (
    <div className={styles.card}>
        <img className={styles.img} src={image} alt={category} />
        <div className={styles.informationBox}>
            <p className={styles.category}>{category}</p>
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
            <div className={styles.price}>
                <p className={styles.price__regular}>{currentPrice}</p>
                { oldPrice && <p className={styles.price__discount}>{oldPrice}</p> }
            </div>
            <button className={styles.btn}><img className={styles.btn__img} src={shoppingCardImg} alt='cart img'/><p>Add to Cart</p></button>
        </div>
    </div>
)

export default PreviewCard;