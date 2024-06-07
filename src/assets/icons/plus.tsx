import Svg, { SvgProps, Path } from 'react-native-svg'

const PlusIcon = (props: SvgProps) => (
    <Svg width={21} height={21} fill="none" {...props}>
        <Path
            fill="#0085FF"
            fillRule="evenodd"
            d="M10.5 0A1.5 1.5 0 0 1 12 1.5V9h7.5a1.5 1.5 0 0 1 0 3H12v7.5a1.5 1.5 0 0 1-3 0V12H1.5a1.5 1.5 0 0 1 0-3H9V1.5A1.5 1.5 0 0 1 10.5 0Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default PlusIcon
