
import MainBanner from "../../components/MainBanner/MainBanner";
import CatalogBlock from "../../components/CatalogBlock/CatalogBlock";

import "./MainPage.css";

const MainPage = () => {

    return (
        <div className="main-page-main-block">
            <MainBanner />
            <CatalogBlock />
        </div>
    );
};

export default MainPage;
