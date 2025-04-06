import {useEffect, useState} from "react";

const AddLocalStorage = (key, data) => {
    const [value, setValue] = useState(() => {
        const savedData = JSON.parse(localStorage.getItem(key))
        return  savedData || data
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value, key]);

    return [value, setValue]
};

export default AddLocalStorage;