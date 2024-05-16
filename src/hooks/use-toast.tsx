import {
    Pressable,
    Toast,
    ToastDescription,
    useToast,
} from '@gluestack-ui/themed'
import { Check, CircleX, InfoIcon, TriangleAlert } from 'lucide-react-native'
import { AppColors } from '@/constants/theme'

interface ToastProps {
    label: string
    icon?: React.ReactNode
    duration?: number | null | undefined
    placement?:
        | 'top'
        | 'bottom'
        | 'top right'
        | 'top left'
        | 'bottom left'
        | 'bottom right'
        | undefined
}

function useAppToast() {
    const toast = useToast()

    const showToast = ({
        label,
        icon = <InfoIcon color={AppColors.background} />,
        duration = 3000,
        placement = 'top',
    }: ToastProps) => {
        toast.closeAll()
        toast.show({
            duration,
            placement,
            render: ({ id }) => {
                const toastId = 'toast-' + id
                return (
                    <Toast
                        nativeID={toastId}
                        bgColor={AppColors.card}
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="$xl"
                    >
                        {icon}
                        <ToastDescription mx="$2">{label}</ToastDescription>
                        <Pressable onPress={() => toast.close(id)}>
                            <CircleX color={AppColors.background} />
                        </Pressable>
                    </Toast>
                )
            },
        })
    }

    const showSuccessToast = ({
        label,
        icon = <Check color={AppColors.background} />,
        duration = 3000,
        placement = 'top',
    }: ToastProps) => {
        toast.closeAll()
        toast.show({
            duration,
            placement,
            render: ({ id }) => {
                const toastId = 'toast-' + id
                return (
                    <Toast
                        nativeID={toastId}
                        bgColor={AppColors.success}
                        alignItems="center"
                        borderRadius="$xl"
                    >
                        {icon}
                        <ToastDescription mx="$2" color="$white">
                            {label}
                        </ToastDescription>
                        <Pressable onPress={() => toast.close(id)}>
                            <CircleX color={AppColors.background} />
                        </Pressable>
                    </Toast>
                )
            },
        })
    }

    const showErrorToast = ({
        label,
        icon = <TriangleAlert color={AppColors.background} />,
        duration = 3000,
        placement = 'top',
    }: ToastProps) => {
        toast.closeAll()
        toast.show({
            duration,
            placement,
            render: ({ id }) => {
                const toastId = 'toast-' + id
                return (
                    <Toast
                        nativeID={toastId}
                        bgColor={AppColors.error}
                        alignItems="center"
                        borderRadius="$xl"
                    >
                        {icon}
                        <ToastDescription mx="$2" color="$white">
                            {label}
                        </ToastDescription>
                        <Pressable onPress={() => toast.close(id)}>
                            <CircleX color={AppColors.background} />
                        </Pressable>
                    </Toast>
                )
            },
        })
    }

    return { showToast, showSuccessToast, showErrorToast }
}

export { useAppToast }
