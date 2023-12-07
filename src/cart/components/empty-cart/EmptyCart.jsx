import emptyCartStyles from './empty-cart.module.css';
import empryCartImg from '/images/empty-cart.png';

export const EmptyCart = () => {
  return (
    <div className={emptyCartStyles.container}>
      <div className={emptyCartStyles.desc}>
        <img src={empryCartImg} alt="xd" />
        <h3>Tu Carro está vacío</h3>
      </div>
    </div>
  )
}
