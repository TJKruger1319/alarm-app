import { useState } from 'react'

function useOption(initialValue) {
    const [value, setValue] = useState(initialValue)

    const data = {
        value,
        onChange: e => {
            setValue(e.target.value)
        }
    }

    return [value, data]
}

export default useOption