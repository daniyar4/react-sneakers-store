import "./CartPage.css";
import { useState } from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useSelector, useDispatch } from "react-redux";
import { delFromCart, clearCart } from "../../redux/actions/cart";
import Modal from "../../components/Modal/Modal";
import delFromCartIcon from "../../assets/images/del-from-cart-icon.svg";
import blackHole from "../../assets/images/black-hole.jpg";
import orderCompleteImg from "../../assets/images/order-complete.png";
import goBackArrowIcon from "../../assets/images/go-back-arrow.svg";
import { totalCartItemsSum } from "../../components/totalCartItemsSum";

const CartPage = () => {
    // Страница корзины, получает данные через redux
    // При оформлении отправляет данные на сервер
    
    const [modalActive, setModalActive] = useState(false);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    const sendOrder = async () => {
        try {
            let response = await fetch(
                "https://628e365da339dfef87a9d163.mockapi.io/order",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json;charset=utf-8",
                    },
                    body: JSON.stringify({ orderInfo: cartItems }),
                }
            );
            if (response.ok) {
                dispatch(clearCart());
                setModalActive(true);
            } else {
                alert("Произошла ошибка отправки заказа");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="cart-page-main-block">
            <Modal active={modalActive} setActive={setModalActive}>
                <div className="cart-page-order-block">
                    <img src={orderCompleteImg} alt="order_complete" />
                    <h2 className="cart-page-order-header">Заказ оформлен!</h2>
                    <p>
                        Ваш заказ уже в работе. Скоро будет передан курьерской
                        доставке.
                    </p>
                    <CustomButton
                        style={{ marginTop: 20 }}
                        onClick={() => setModalActive(false)}
                    >
                        <img
                            style={{ marginRight: 7 }}
                            src={goBackArrowIcon}
                            alt="goBackArrow"
                        />
                        Вернутся назад!
                    </CustomButton>
                </div>
            </Modal>
            {cartItems.length !== 0 ? (
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
                                    alt="sneakers"
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
                            <span>{totalCartItemsSum(cartItems).toLocaleString("ru-RU")} руб.</span>
                        </div>

                        <CustomButton onClick={() => sendOrder()}>
                            Оформить заказ
                        </CustomButton>
                    </div>
                </div>
            ) : (
                <div className="cart-empty-main-block">
                    <div className="cart-empty-content-block">
                        <img
                            style={{ width: 300, margin: "auto" }}
                            src={blackHole}
                            alt="black-hole"
                        />
                        <h1 className="cart-empty-header-text">
                            В корзине пусто!
                        </h1>
                        <span>или Ваши покупки попали за горизонт событий</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
