import "./CatalogPage.css";
import { useState, useEffect } from "react";
import { getItems } from "../../components/getIems";
import CatalogBlock from "../../components/CatalogBlock/CatalogBlock";

const CatalogPage = () => {
    // Страница "/catalog"
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems(setItems);
    }, []);

    return (
        <div className="catalog-page-main-block">
            <CatalogBlock />
        </div>
    );
};

export default CatalogPage;
