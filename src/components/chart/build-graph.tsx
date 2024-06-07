import { ComponentProps } from 'react'
import { lineDataItem } from 'react-native-gifted-charts'
import { AppLineChart } from './app-line-chart'
import { XLabel } from './x-label'
import { GraphLineInterface } from '@/types/interface/graph'

const buildGraph = (data: GraphLineInterface[]) => {
    const graphProps: ComponentProps<typeof AppLineChart> = {}

    for (let index = 0; index < data.length; index++) {
        const line = data[index]

        const graph: lineDataItem[] = line.x_coords.map((value, index) => ({
            value: Number(line.y_coords[index]),
            labelComponent: () => <XLabel value={value} />,
        }))

        switch (index) {
            case 1:
                graphProps.data2 = graph
                break
            case 2:
                graphProps.data3 = graph
                break
            case 3:
                graphProps.data4 = graph
                break
            case 4:
                graphProps.data5 = graph
                break
            default:
                graphProps.data = graph
                break
        }
    }

    return graphProps
}

export default buildGraph
