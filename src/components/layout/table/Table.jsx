import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Table.module.scss";

const ITEMS_PER_PAGE = 10; // Number of items per page

const Table = () => {
    const data = useSelector((state) => state.data);
    const selectedCountry = useSelector(state => state.selectedCountry)

    const [currentPage, setCurrentPage] = useState(1);

    const getTotal = (value, country) => {

        const val = country[value];

        if (typeof val === "string" && val !== "NA" && !isNaN(val)) {
            return parseInt(val.replace(/,/g, ""), 10);

        } else if (!isNaN(val)) {
            return val;

        } else {
            return 0;
        }
    };

    const getFormattedNumber = (number) => {
        if (number === null || number === undefined) {
            return "N/A";
        }
        const numString = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return numString;
    };

    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Recovered</th>
                        <th>Deceased</th>
                        <th>Tested</th>
                        <th>Infected</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.filter(country => {
                        if (selectedCountry !== null) {
                            return country.country === selectedCountry?.label
                        } else {
                            return country
                        }
                    }).map((country) => (
                        <tr key={country.country}>
                            <td>{country.country}</td>
                            <td>{getFormattedNumber(getTotal("recovered", country))}</td>
                            <td>{getFormattedNumber(getTotal("deceased", country))}</td>
                            <td>{getFormattedNumber(getTotal("tested", country))}</td>
                            <td>{getFormattedNumber(getTotal("infected", country))}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination
                itemsPerPage={ITEMS_PER_PAGE}
                totalItems={data.length}
                currentPage={currentPage}
                paginate={paginate}
            />
        </div>
    );
};


const Pagination = ({ itemsPerPage, totalItems, currentPage, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className={styles.pagination}>
                {pageNumbers.map((number) => (
                    <li
                        key={number}
                        className={currentPage === number ? styles.active : ""}
                    >
                        <button
                            onClick={() => paginate(number)}
                            className={styles.pageLink}
                        >
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Table;
