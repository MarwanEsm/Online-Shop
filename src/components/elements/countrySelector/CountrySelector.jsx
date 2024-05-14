import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setData, setSelectedCountry } from "../../../redux/CovidDataSlice";
import Async from "react-select/async";

const CountrySelector = () => {

    const dispatch = useDispatch();

    const fetchData = async () => {
        const response = await fetch("https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true");
        const result = await response.json();

        dispatch(setData(result));
        return result;
    };

    const getData = async (inputValue) => {
        const data = await fetchData();
        if (!inputValue) {
            return [];
        }

        else if (inputValue.length < 3) {
            return data.map((country, index) => ({ value: index, label: country.country }));
        }

        else {
            const filteredData = data.filter(country =>
                country.country.toLowerCase().startsWith(inputValue.toLowerCase())
            );
            return filteredData.map((country, index) => ({ value: index, label: country.country }));
        }
    };


    useEffect(() => {
        fetchData();
    });


    return (
        <Async
            loadOptions={getData}
            onChange={(value) => dispatch(setSelectedCountry(value))}
            placeholder="Search by country"
            isClearable
        />
    );
};

export default CountrySelector;
