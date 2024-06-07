import Svg, { Path, SvgProps } from 'react-native-svg'

const ProfileIcon = (props: SvgProps) => (
    <Svg width={32} height={32} fill="none" {...props}>
        <Path
            fill={props.color}
            fillRule="evenodd"
            d="M11.188 10.958a4.812 4.812 0 1 1 9.624 0 4.812 4.812 0 0 1-9.625 0ZM8.896 22.024a4.878 4.878 0 0 1 4.878-4.878h4.452a4.878 4.878 0 0 1 4.878 4.878 3.83 3.83 0 0 1-3.83 3.83h-6.548a3.83 3.83 0 0 1-3.83-3.83Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default ProfileIcon
