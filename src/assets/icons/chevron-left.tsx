import Svg, { Path, SvgProps } from 'react-native-svg'

const ChevronLeft = (props: SvgProps) => (
    <Svg width={8} height={13} fill="none" {...props}>
        <Path
            fill="#000"
            fillRule="evenodd"
            d="M7.11 1.14a1.393 1.393 0 0 1 0 1.97L3.72 6.5l3.39 3.39a1.393 1.393 0 1 1-1.97 1.97L.765 7.485a1.393 1.393 0 0 1 0-1.97L5.14 1.14a1.393 1.393 0 0 1 1.97 0Z"
            clipRule="evenodd"
        />
    </Svg>
)

export default ChevronLeft
