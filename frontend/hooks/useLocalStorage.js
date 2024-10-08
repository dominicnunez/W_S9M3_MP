import { useState } from 'react'

export function useLocalStorage(key, value) {
    const [storedValue, setStoredValue] = useState(() => {
     const initial = localStorage.getItem(key)
     return initial ? JSON.parse(initial) : value
    })
    const setValueLocalStorage = value => {
        setStoredValue(value)
        localStorage.setItem(key, JSON.stringify(value))
    }
    return [storedValue, setValueLocalStorage]
}