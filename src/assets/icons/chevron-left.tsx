import Svg, { Path } from 'react-native-svg'

const ChevronLeft = (props: any) => (
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
            d="M14.11 5.14a1.393 1.393 0 0 1 0 1.97l-3.39 3.39 3.39 3.39a1.393 1.393 0 0 1-1.97 1.97l-4.375-4.375a1.393 1.393 0 0 1 0-1.97L12.14 5.14a1.393 1.393 0 0 1 1.97 0Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default ChevronLeft
