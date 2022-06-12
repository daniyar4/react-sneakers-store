import "./Card.css";
import addToCartIcon from "../../assets/images/add-to-cart-icon.svg";
import addedItemIcon from "../../assets/images/added-to-cart-icon.svg";
import { addToCart, delFromCart } from "../../redux/actions/cart";
import { useDispatch, useSelector } from "react-redux";
import ContentLoader from "react-content-loader";

const Card = ({ item, isLoading = false }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);

    return (
        <div className="card-block">
            {!isLoading ? (
                <>
                    <div className="card-image-block">
                        <img className="card-image" src={item.imageUrl} />
                    </div>
                    <div className="card-name-block">
                        <span className="card-name-text">{item.title}</span>
                    </div>
                    <div className="card-price-and-buy-block">
                        <div className="card-price-block">
                            <span className="card-price-text">ЦЕНА:</span>
                            <span className="card-cost-text">
                                {item.price.toLocaleString("ru-RU")} руб.
                            </span>
                        </div>
                        <div className="card-add-to-cart-block">
                            {cartItems.some((i) => i.id === item.id) ? (
                                <button
                                    className="card-added-item-button"
                                    onClick={() => dispatch(delFromCart(item))}
                                >
                                    <img src={addedItemIcon} />
                                </button>
                            ) : (
                                <button
                                    className="card-add-to-cart-button"
                                    onClick={() => {
                                        dispatch(addToCart(item));
                                    }}
                                >
                                    <img src={addToCartIcon} />
                                </button>
                            )}
                        </div>
                    </div>
                </>
            ) : (
                <ContentLoader
                    // className="card-block"
                    speed={2}
                    width={220}
                    height={280}
                    viewBox="0 0 220 280"
                    backgroundColor="#c9c9c9"
                    foregroundColor="#e6e6e6"
                >
                    <rect
                        x="0"
                        y="30"
                        rx="8"
                        ry="8"
                        width="220"
                        height="140"
                    />

                    <rect x="0" y="180" rx="4" ry="4" width="220" height="20" />
                    <rect x="0" y="210" rx="4" ry="4" width="93" height="20" />
                    <rect
                        x="180"
                        y="230"
                        rx="8"
                        ry="8"
                        width="37"
                        height="32"
                    />
                    <rect x="0" y="240" rx="4" ry="4" width="80" height="24" />
                </ContentLoader>
            )}
        </div>
    );
};

export default Card;
