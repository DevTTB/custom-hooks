import { useEffect, useState } from 'react'
import { useForceUpdate } from '../use-force-update'

export const useTextSelection = () => {
    const [selection, setSelection] = useState<Selection | null>(null)
    const forceUpdate = useForceUpdate()

    const handleSelectionChange = () => {
        setSelection(document.getSelection())
        forceUpdate()
    }

    useEffect(() => {
        setSelection(document.getSelection());
        document.addEventListener("selectionchange", handleSelectionChange)
        return document.removeEventListener("selectionchange", handleSelectionChange)
    }, [])

    return selection
}