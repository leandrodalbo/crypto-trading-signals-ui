import {Signal} from "../../types/types";
import SignalCard from "../signal-card/SignalCard";

export interface MainGridProps {
    data: Signal[]
}

const MainGrid = ({data} : MainGridProps) => {
    return (
        <div className="overflow-x-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
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
