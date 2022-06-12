import "./App.css";
import MainPage from "./screens/MainPage/MainPage";
import CatalogPage from "./screens/CatalogPage/CatalogPage";
import DeliveryAndPaymentPage from "./screens/DeliveryAndPaymentPage/DeliveryAndPaymentPage";
import ContactsPage from "./screens/ContactsPage/ContactsPage";
import ReturnPage from "./screens/ReturnPage/ReturnPage";
import CartPage from "./screens/CartPage/CartPage"
import Layout from "./components/Layout";

import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<MainPage />} />
                <Route path="catalog" element={<CatalogPage />} />
                <Route path="delivery-payment-info" element={<DeliveryAndPaymentPage />} />
                <Route path="product-return" element={<ReturnPage />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="contacts" element={<ContactsPage />} />
                <Route path="*" element={<MainPage />} />
            </Route>
        </Routes>
    );
}

export default App;
