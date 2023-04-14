export const useLocalStorage = () => {
    const get = (key: string) => {
        return localStorage.getItem(key)
    }

    const set = (key: string, value: unknown) => {
        try {
            localStorage.setItem(key, JSON.stringify(value))
            return true
        } catch (err) {
            return false
        }
    }

    const remove = (key: string) => {
        localStorage.removeItem(key)
    }

    return {
        get,
        set,
        remove,
    }
}