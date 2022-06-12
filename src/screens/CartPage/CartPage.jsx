import "./CartPage.css";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useSelector, useDispatch } from "react-redux";
import { delFromCart } from "../../redux/actions/cart";
import delFromCartIcon from "../../assets/images/del-from-cart-icon.svg";
import blackHole from '../../assets/images/black-hole.jpg'

const CartPage = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    const totalItemsSum = () => {
        return cartItems
            .reduce(
                (previousValue, currentValue) =>
                    previousValue + currentValue.price,
                0
            )
            .toLocaleString("ru-RU");
    };

    return (
        <div className="cart-page-main-block">
            {cartItems.length !== 0 ? 
                <div className="cart-page-content">
                    <div className="cart-header-text-block">
                        <h3 className="cart-header-text">Корзина</h3>
                    </div>

                    <div className="cart-all-items-block">
                        {cartItems.map((item, index) => (
                            <div key={index} className="cart-item-block">
                                <img
                                    className="cart-item-image"
                                    src={item.imageUrl}
                                />
                                <div className="cart-item-title-block">
                                    <span className="cart-item-title-text">
                                        {item.title}
                                    </span>
                                </div>
                                <div className="cart-item-price-block">
                                    <span className="cart-item-price-text">
                                        {item.price.toLocaleString("ru-RU")}{" "}
                                        руб.
                                    </span>
                                </div>
                                <button
                                    onClick={() => dispatch(delFromCart(item))}
                                    className="cart-delete-button"
                                >
                                    <img src={delFromCartIcon} alt="delete" />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="cart-final-sum-block">
                        <div>
                            <b className="cart-total-text">Итого: </b>
                            <span>{totalItemsSum()} руб.</span>
                        </div>

                        <CustomButton
                            title="Оформить заказ"
                            onClick={() => {}}
                        />
                    </div>
                </div>
             : 
                <div className="cart-empty-main-block">
                    <div className="cart-empty-content-block">
                        <img style={{ width: 300, margin: 'auto'}}src={blackHole} alt="black-hole" />
                        <h1 className="cart-empty-header-text">В корзине пусто!</h1>
                        <span>или Ваши покупки попали за горизонт событий</span>
                    </div>
                </div>
            }
        </div>
    );
};

export default CartPage;
