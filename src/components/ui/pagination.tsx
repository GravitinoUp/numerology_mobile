import { HStack, View } from '@gluestack-ui/themed'
import { AppColors } from '@/constants/theme'

type PaginationProps = {
    currentPage: number
    pageCount: number
}

const Pagination = ({ currentPage, pageCount }: PaginationProps) => {
    const pages = Array.from({ length: pageCount }, (_, i) => i)

    return (
        <HStack justifyContent="center" gap="$2">
            {pages.map((page) => (
                <View
                    key={page}
                    w={currentPage === page ? '$7' : '$2'}
                    h="$2"
                    bgColor={
                        currentPage === page
                            ? AppColors.primary
                            : AppColors.border
                    }
                    borderRadius="$full"
                />
            ))}
        </HStack>
    )
}

export default Pagination
