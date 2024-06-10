import { ResultInterface } from './numbers'

export interface GraphResult {
    graphs: GraphLineInterface[]
    results: ResultInterface[]
}

export interface GraphLineInterface {
    x_coords: string[]
    y_coords: string[]
    graph_name: string
}
