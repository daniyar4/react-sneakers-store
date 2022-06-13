import { useEffect, useState } from "react";

import Card from "../Card/Card";
import Select from "../Select/Select";
import { getItems } from "../getIems";
import "./CatalogBlock.css";
import CustomButton from "../CustomButton/CustomButton";
import { useSelector } from "react-redux";

const CatalogBlock = () => {
    const [items, setItems] = useState([]);
    const [selectedSort, setSelectedSort] = useState("");
    const [filter, setFilter] = useState("all");

    const searchValue = useSelector((state) => state.search.searchValue);

    useEffect(() => {
        getItems(setItems);
    }, []);

    const sortByFunc = (sort) => {
        setSelectedSort(sort);
        if (sort === "sortAscendingPrice") {
            setItems([...items].sort((a, b) => a.price - b.price));
        } else if (sort === "sortDescendingPrice") {
            setItems([...items].sort((a, b) => b.price - a.price));
        } else if (sort === "sortTitle") {
            setItems(
                [...items].sort((a, b) =>
                    a.title.toLowerCase().localeCompare(b.title)
                )
            );
        }
    };

    const filterButtons = [
        { title: "Все", filter: "all" },
        { title: "Для бега", filter: "forRun" },
        { title: "Белые", filter: "white" },
        { title: "Черные", filter: "black" },
        { title: "Зеленые", filter: "green" },
        { title: "Желтые", filter: "yellow" },
    ];

    const sortOptions = [
        {
            value: "sortTitle",
            title: "По названию",
        },
        {
            value: "sortAscendingPrice",
            title: "По возрастанию цены",
        },
        {
            value: "sortDescendingPrice",
            title: "По убыванию цены",
        },
    ];

    const SearcFilterItems = () =>
        searchValue === ""
            ? items
                  .filter((obj) => obj.type.find((i) => i === filter))
                  .map((item) => <Card key={item.id} item={item} />)
            : items
                  .filter((obj) =>
                      obj.title
                          .toLowerCase()
                          .includes(searchValue.toLowerCase())
                  )
                  .filter((obj) => obj.type.find((i) => i === filter))
                  .map((item) => <Card key={item.id} item={item} />);

    return (
        <div className="catalog-block-content">
            <div className="catalog-block-headers-block">
                <h3 className="catalog-block-header-text">Все кросовки</h3>
                <div className="catalog-block-filters">
                    {filterButtons.map((button) => (
                        <CustomButton
                            key={button.filter}
                            style={{ margin: "0px 6px" }}
                            onClick={() => setFilter(button.filter)}
                            active={filter === button.filter ? true : false}
                        >
                            {button.title}
                        </CustomButton>
                    ))}
                </div>

                <Select
                    value={selectedSort}
                    onChange={sortByFunc}
                    defaultValue="Сортировка по"
                    options={sortOptions}
                />
            </div>
            <div className="catalog-blog-cards-wrap">
                <div className="catalog-block-all-cards-block">
                    {items.length !== 0 ? (
                        <SearcFilterItems />
                    ) : (
                        [...Array(8)].map((i, ind) => (
                            <Card key={ind} isLoading />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default CatalogBlock;
