import Svg, { Path, SvgProps } from 'react-native-svg'

const PredictionIcon = (props: SvgProps) => (
    <Svg width={32} height={32} fill="none" {...props}>
        <Path
            fill={props.color}
            d="M16 7.75a7.562 7.562 0 1 0 0 15.125A7.562 7.562 0 0 0 16 7.75Zm0 4.125a3.438 3.438 0 0 0-3.438 3.438.687.687 0 1 1-1.374 0A4.813 4.813 0 0 1 16 10.5a.687.687 0 1 1 0 1.375Z"
        />
        <Path
            fill={props.color}
            d="M24.25 23.563a2.062 2.062 0 0 1-2.063 2.062H9.813a2.066 2.066 0 0 1-.24-4.125 9.293 9.293 0 0 0 1.67 1.375 8.937 8.937 0 0 0 9.515 0 9.292 9.292 0 0 0 1.671-1.375 2.062 2.062 0 0 1 1.822 2.063Z"
        />
    </Svg>
)
export default PredictionIcon
