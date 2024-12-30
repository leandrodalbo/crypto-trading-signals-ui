import {Signal} from "../../types/types";
import SignalCard from "../signal-card/SignalCard";

export interface MainGridProps {
    data: Signal[]
}

const MainGrid = ({data} : MainGridProps) => {
    return (
        <div className="overflow-x-auto">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {
                data.map(it => <SignalCard key={
                        it.symbol
                    }
                    data={it}/>)
            } </div>
        </div>
    )


}

export default MainGrid;
