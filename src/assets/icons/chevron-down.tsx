import Svg, { Rect, Path, SvgProps } from 'react-native-svg'

const ChevronDown = (props: SvgProps) => (
    <Svg width={24} height={24} fill="none" {...props}>
        <Rect
            width={23}
            height={23}
            x={0.5}
            y={23.5}
            fill="#fff"
            rx={11.5}
            transform="rotate(-90 .5 23.5)"
        />
        <Rect
            width={23}
            height={23}
            x={0.5}
            y={23.5}
            stroke="#EFEFEF"
            rx={11.5}
            transform="rotate(-90 .5 23.5)"
        />
        <Path
            fill="#000"
            fillRule="evenodd"
            d="M8.283 10.285a.961.961 0 0 1 1.366 0L12 12.652l2.351-2.367a.961.961 0 0 1 1.366 0 .977.977 0 0 1 0 1.375l-3.034 3.055a.961.961 0 0 1-1.366 0L8.283 11.66a.977.977 0 0 1 0-1.375Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default ChevronDown
