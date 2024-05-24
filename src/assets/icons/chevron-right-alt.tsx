import Svg, { Path, Rect, SvgProps } from 'react-native-svg'

const ChevronRightAlt = (props: SvgProps) => (
    <Svg width={24} height={24} fill="none" {...props}>
        <Rect
            width={23}
            height={23}
            x={23.5}
            y={23.5}
            fill="#fff"
            rx={11.5}
            transform="rotate(-180 23.5 23.5)"
        />
        <Rect
            width={23}
            height={23}
            x={23.5}
            y={23.5}
            stroke="#EFEFEF"
            rx={11.5}
            transform="rotate(-180 23.5 23.5)"
        />
        <Path
            fill="#000"
            fillRule="evenodd"
            d="M10.285 15.717a.961.961 0 0 1 0-1.366L12.652 12l-2.367-2.351a.961.961 0 0 1 0-1.366.977.977 0 0 1 1.375 0l3.055 3.034c.38.377.38.989 0 1.366l-3.055 3.034a.977.977 0 0 1-1.375 0Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default ChevronRightAlt
