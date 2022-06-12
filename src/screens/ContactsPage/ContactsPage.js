// import React from "react"
import { useState } from "react";
import {
    YMaps,
    Map,
    Placemark,
    FullscreenControl,
    GeolocationControl,
    RouteButton,
    TrafficControl,
} from "react-yandex-maps";

import "./ContactsPage.css";
import arrowFaqIcon from "../../assets/images/arrow-faq.png";
import reversArrowFaqIcon from "../../assets/images/arrow-faq-revers.png";

const ContactsPage = () => {
    const [lubyankaInfo, setLubyankaInfo] = useState(true);
    const [trubnayaInfo, setTrubnayaInfo] = useState(false);
    const [CSKAInfo, setCSKAInfo] = useState(false);
    const [requisitesInfo, setRequisitesInfo] = useState(false);

    return (
        <div className="contacts-page-main-block">
            <YMaps>
                <div className="contacts-page-content">
                    <div className="contacts-header-text-block">
                        <h2 className="contacts-header-text">Контакты</h2>
                    </div>
                    <div className="contancts-info-block">
                        <div
                            className="contacts-info-header-block"
                            onClick={() => setLubyankaInfo(!lubyankaInfo)}
                        >
                            <span className="contacts-text">м. Лубянка</span>
                            <img
                                className="contacts-arrow-style"
                                src={
                                    lubyankaInfo
                                        ? reversArrowFaqIcon
                                        : arrowFaqIcon
                                }
                            />
                        </div>
                        {lubyankaInfo ? (
                            <div className="contacts-full-info-block">
                                <span className="contacts-text">
                                    Москва м. Лубянка ул. Никольская, 10/2 с.2Б
                                </span>

                                <div className="contacts-map-wrapper">
                                    <Map
                                        className="contacts-map-block"
                                        defaultState={{
                                            center: [55.760093, 37.624867],
                                            zoom: 15,
                                        }}
                                    >
                                        <Placemark
                                            geometry={[55.760093, 37.624867]}
                                        />
                                        <FullscreenControl />
                                        <GeolocationControl />
                                        <RouteButton />
                                        <TrafficControl />
                                    </Map>
                                </div>
                                <div className="contancts-store-info">
                                    <div className="contacts-opening-hours-block">
                                        <span className="contacts-opening-hours-text">
                                            {" "}
                                            Режим работы: 10:00 - 22:00
                                        </span>
                                        <span className="contacts-opening-hours-text">
                                            {" "}
                                            Без перерывов и выходных
                                        </span>
                                    </div>
                                    <div className="contacts-phone-number-block">
                                        <span> +7 (495) ***-**-**</span>
                                    </div>
                                </div>
                            </div>
                        ) : null}
                    </div>

                    <div className="contancts-info-block">
                        <div
                            className="contacts-info-header-block"
                            onClick={() => setTrubnayaInfo(!trubnayaInfo)}
                        >
                            <span className="contacts-text">м. Трубная</span>
                            <img
                                className="contacts-arrow-style"
                                src={
                                    trubnayaInfo
                                        ? reversArrowFaqIcon
                                        : arrowFaqIcon
                                }
                            />
                        </div>
                        {trubnayaInfo ? (
                            <div className="contacts-full-info-block">
                                <span className="contacts-text">
                                    Москва м. Трубная ул. Цветной бульвар, 2
                                </span>

                                <div className="contacts-map-wrapper">
                                    <Map
                                        className="contacts-map-block"
                                        defaultState={{
                                            center: [55.76821, 37.623496],
                                            zoom: 15,
                                        }}
                                    >
                                        <Placemark
                                            geometry={[55.76821, 37.623496]}
                                        />
                                        <FullscreenControl />
                                        <GeolocationControl />
                                        <RouteButton />
                                        <TrafficControl />
                                    </Map>
                                </div>
                                <div className="contancts-store-info">
                                    <div className="contacts-opening-hours-block">
                                        <span className="contacts-opening-hours-text">
                                            {" "}
                                            Режим работы: 10:00 - 22:00
                                        </span>
                                        <span className="contacts-opening-hours-text">
                                            {" "}
                                            Без перерывов и выходных
                                        </span>
                                    </div>
                                    <div className="contacts-phone-number-block">
                                        <span> +7 (495) ***-**-**</span>
                                    </div>
                                </div>
                            </div>
                        ) : null}
                    </div>

                    <div className="contancts-info-block">
                        <div
                            className="contacts-info-header-block"
                            onClick={() => setCSKAInfo(!CSKAInfo)}
                        >
                            <span className="contacts-text">м. ЦСКА</span>
                            <img
                                className="contacts-arrow-style"
                                src={
                                    CSKAInfo ? reversArrowFaqIcon : arrowFaqIcon
                                }
                            />
                        </div>
                        {CSKAInfo ? (
                            <div className="contacts-full-info-block">
                                <span className="contacts-text">
                                    Москва м. ЦСКА ул. Ходынский бульвар, 4
                                </span>

                                <div className="contacts-map-wrapper">
                                    <Map
                                        className="contacts-map-block"
                                        defaultState={{
                                            center: [55.790463, 37.531414],
                                            zoom: 15,
                                        }}
                                    >
                                        <Placemark
                                            geometry={[55.790463, 37.531414]}
                                        />
                                        <FullscreenControl />
                                        <GeolocationControl />
                                        <RouteButton />
                                        <TrafficControl />
                                    </Map>
                                </div>
                                <div className="contancts-store-info">
                                    <div className="contacts-opening-hours-block">
                                        <span className="contacts-opening-hours-text">
                                            {" "}
                                            Режим работы: 10:00 - 22:00
                                        </span>
                                        <span className="contacts-opening-hours-text">
                                            {" "}
                                            Без перерывов и выходных
                                        </span>
                                    </div>
                                    <div className="contacts-phone-number-block">
                                        <span> +7 (495) ***-**-**</span>
                                    </div>
                                </div>
                            </div>
                        ) : null}
                    </div>

                    <div className="contancts-info-block">
                        <div
                            className="contacts-info-header-block"
                            onClick={() => setRequisitesInfo(!requisitesInfo)}
                        >
                            <span className="contacts-text">
                                Реквизиты продавца
                            </span>
                            <img
                                className="contacts-arrow-style"
                                src={
                                    requisitesInfo
                                        ? reversArrowFaqIcon
                                        : arrowFaqIcon
                                }
                            />
                        </div>
                        {requisitesInfo ? (
                            <div className="contacts-full-info-block">
                                <div>
                                    <div className="contacts-requisites-block">
                                        <span className="contacts-requisites-name-text">
                                            ОГРН
                                        </span>
                                        <span className="contacts-requisites-text">
                                            ООО "Рога и Копыта"
                                        </span>
                                    </div>
                                    <div className="contacts-requisites-block">
                                        <span className="contacts-requisites-name-text">
                                            ИНН
                                        </span>
                                        <span className="contacts-requisites-text">
                                            1234567890
                                        </span>
                                    </div>
                                    <div className="contacts-requisites-block">
                                        <span className="contacts-requisites-name-text">
                                            Юредический адрес
                                        </span>
                                        <span className="contacts-requisites-text">
                                            г. Москва ул. Кремлевкая
                                        </span>
                                    </div>
                                    <div className="contacts-requisites-block">
                                        <span className="contacts-requisites-name-text">
                                            Расчетный счет
                                        </span>
                                        <span className="contacts-requisites-text">
                                            р/с 12345678901234567890
                                        </span>
                                    </div>
                                    <div className="contacts-requisites-block">
                                        <span className="contacts-requisites-name-text">
                                            Название Банка
                                        </span>
                                        <span className="contacts-requisites-text">
                                            Сбербанк
                                        </span>
                                    </div>
                                    <div className="contacts-requisites-block">
                                        <span className="contacts-requisites-name-text">
                                            БИК
                                        </span>
                                        <span className="contacts-requisites-text">
                                            1234567890
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            </YMaps>
        </div>
    );
};

export default ContactsPage;
