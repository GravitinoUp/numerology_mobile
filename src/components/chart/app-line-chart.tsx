import { ComponentProps } from 'react'
import { LineChart } from 'react-native-gifted-charts'
import { AppColors } from '@/constants/theme'

type LineChartProps = ComponentProps<typeof LineChart>
type AppLineChartProps = LineChartProps

const AppLineChart = ({ ...props }: AppLineChartProps) => (
    <LineChart
        isAnimated
        yAxisTextStyle={{ color: AppColors.primary }}
        dataPointsRadius={5}
        rulesType="solid"
        color="#165BAA"
        dataPointsColor="#165BAA"
        color1="#A155B9"
        dataPointsColor1="#A155B9"
        color2="#F765A3"
        dataPointsColor2="#F765A3"
        color3="#2D9CDB"
        dataPointsColor3="#2D9CDB"
        color4="#F9C74F"
        dataPointsColor4="#F9C74F"
        {...props}
    />
)

export default AppLineChart
