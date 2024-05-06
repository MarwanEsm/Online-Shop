import { useEffect, useState } from "react"
import Async from "react-select/async"

const CountrySelector = () => {

    const [data, setData] = useState(null)


    const getData = async () => {
        const response = await fetch("https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true")
        const result = await response.json()
        setData(result)
        return (result?.map((country, index) => ({ value: index, label: country.country })))
    }

    useEffect(() => {
        getData()
    }, [])


    return <Async
        loadOptions={getData}
    />
}


export default CountrySelector