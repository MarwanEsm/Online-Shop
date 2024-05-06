import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setData, setSelectedCountry } from "../../../redux/CovidDataSlice"
import Select from "react-select/async"

const CountrySelector = () => {

    const dispatch = useDispatch()

    const getData = async () => {
        const response = await fetch("https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true")
        const result = await response.json()
        dispatch(setData(result))
        return (result?.map((country, index) => ({ value: index, label: country.country })))
    }

    useEffect(() => {
        getData()
    }, [])


    return <Select
        loadOptions={getData}
        onChange={(value) => dispatch(setSelectedCountry(value))}
    />
}


export default CountrySelector