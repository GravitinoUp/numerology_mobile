import { ComponentProps } from 'react'
import { HStack, Text, View } from '@gluestack-ui/themed'
import { Dimensions } from 'react-native'
import { LineChart } from 'react-native-gifted-charts'
import { lineColors } from './line-colors'
import { AppColors } from '@/constants/theme'
import { GraphLineInterface } from '@/types/interface/graph'

type LineChartProps = ComponentProps<typeof LineChart>
type AppLineChartProps = LineChartProps

export const AppLineChart = ({ ...props }: AppLineChartProps) => (
    <LineChart
        isAnimated
        yAxisTextStyle={{ color: AppColors.primary }}
        dataPointsRadius={5}
        rulesType="solid"
        color="#165BAA"
        dataPointsColor="#165BAA"
        color1="#165BAA"
        dataPointsColor1="#165BAA"
        color2="#A155B9"
        dataPointsColor2="#A155B9"
        color3="#F765A3"
        dataPointsColor3="#F765A3"
        color4="#2D9CDB"
        dataPointsColor4="#2D9CDB"
        color5="#F9C74F"
        dataPointsColor5="#F9C74F"
        spacing={Dimensions.get('window').width / 8}
        {...props}
    />
)

export const GraphLabel = ({
    value,
    index,
}: {
    value: GraphLineInterface
    index: number
}) => (
    <HStack alignItems="center" gap="$2">
        <View
            w="$2"
            h="$2"
            borderRadius="$full"
            backgroundColor={lineColors[index]}
        />
        <Text color={AppColors.text}>{value.graph_name}</Text>
    </HStack>
)
