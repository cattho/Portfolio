import { useState } from "react"

export const useForm = (initialState={}) =>{
    const [data, setData] = useState(initialState)

    const reset = () =>{
        setData(initialState)
    }

    const handleInputChange= ({target}) =>{
        setData({...data,
        [target.name]:target.value
        })
    }

    return[data,handleInputChange,reset]
}