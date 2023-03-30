import { useCallback, useState } from 'react'

export type TUseDisclosureProps = {
    initialState?: boolean;
    onOpen?(): void;
    onClose?(): void;
}

export const useDisclosure = (props: TUseDisclosureProps) => {
    const { initialState = false, onOpen, onClose } = props;
    const [isOpen, setIsOpen] = useState<boolean>(initialState)

    const open = useCallback(() => {
        setIsOpen((isOpened: boolean) => {
            if (!isOpened) {
                onOpen?.()
                return true
            }
            return isOpened
        })
    }, [onOpen])

    const close = useCallback(() => {
        setIsOpen((isOpened: boolean) => {
            if (isOpened) {
                onClose?.()
                return false
            }
            return isOpened
        })
    }, [onClose])

    const toggle = useCallback(() => isOpen ? open() : close(), [isOpen, open, close])

    return {
        isOpen,
        open,
        close,
        toggle,
    }
}