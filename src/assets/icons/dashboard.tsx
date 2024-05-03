import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg'
const DashboardIcon = (props: SvgProps) => (
    <Svg width={32} height={32} fill="none" {...props}>
        <G clipPath="url(#a)">
            <Path
                fill={props.color}
                fillRule="evenodd"
                d="M6.833 5h4.584c1.012 0 1.833.82 1.833 1.833v4.584c0 1.012-.82 1.833-1.833 1.833H6.833A1.833 1.833 0 0 1 5 11.417V6.833C5 5.821 5.82 5 6.833 5Zm0 10.083h4.584c1.012 0 1.833.821 1.833 1.834v8.25c0 1.012-.82 1.833-1.833 1.833H6.833A1.833 1.833 0 0 1 5 25.167v-8.25c0-1.013.82-1.834 1.833-1.834ZM16.917 5h8.25C26.179 5 27 5.82 27 6.833v10.084c0 1.012-.82 1.833-1.833 1.833h-8.25a1.833 1.833 0 0 1-1.834-1.833V6.833c0-1.012.821-1.833 1.834-1.833Zm0 15.583h8.25c1.012 0 1.833.821 1.833 1.834v2.75C27 26.179 26.18 27 25.167 27h-8.25a1.833 1.833 0 0 1-1.834-1.833v-2.75c0-1.013.821-1.834 1.834-1.834Z"
                clipRule="evenodd"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M5 5h22v22H5z" />
            </ClipPath>
        </Defs>
    </Svg>
)
export default DashboardIcon
