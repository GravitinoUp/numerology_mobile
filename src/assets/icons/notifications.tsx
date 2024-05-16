import Svg, { SvgProps, Path } from 'react-native-svg'

const NotificationsIcon = (props: SvgProps) => (
    <Svg width={32} height={32} fill="none" {...props}>
        <Path
            fill={'#CE5A51'}
            d="M25.167 9.583a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0Z"
        />
        <Path
            fill={props.color}
            d="M18.965 7.323A9.167 9.167 0 0 0 7.79 20.081c.163.327.217.7.122 1.053l-.546 2.04a1.192 1.192 0 0 0 1.46 1.46l2.04-.546c.353-.095.726-.04 1.053.122a9.167 9.167 0 0 0 12.758-11.175 4.125 4.125 0 0 1-5.711-5.711Z"
        />
    </Svg>
)

export default NotificationsIcon
