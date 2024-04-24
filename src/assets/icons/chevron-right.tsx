import Svg, { Path } from 'react-native-svg'

const ChevronRight = (props: any) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={21}
        height={21}
        fill="none"
        {...props}
    >
        <Path
            fill="#000"
            fillRule="evenodd"
            d="M6.89 15.86a1.393 1.393 0 0 1 0-1.97l3.39-3.39-3.39-3.39a1.393 1.393 0 1 1 1.97-1.97l4.375 4.375a1.393 1.393 0 0 1 0 1.97L8.86 15.86a1.393 1.393 0 0 1-1.97 0Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default ChevronRight
