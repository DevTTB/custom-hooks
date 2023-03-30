import { useState } from 'react';

export const useClipBoard = () => {
    const [error, setError] = useState<Error>(null)
    const [coppied, setCoppied] = useState<boolean>(false)
    const copy = (value: string) => {
        navigator.clipboard.writeText(value)
        .then(() => {})
        .catch((err) => setError(err))
    }

    const reset = () => {
        setCoppied(false)
        setError(null)
    }

    return {
        copy,
        error,
        coppied,
        reset,
    }
}
