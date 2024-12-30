import { Link } from "react-router-dom";
import { Signal } from "../../types/types";
import SignalCard from "../signal-card/SignalCard";

export interface MainGridProps {
    data: Signal[]
}

const MainGrid = ({ data }: MainGridProps) => {
    return (
        <div className="overflow-x-auto">
            <div data-testid="cards-grid" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-4">
                {
                    data.map(it => <Link to={`/signal/${it.symbol}`} state={{ signal: it }} key={it.symbol}><SignalCard
                        data={it} /></Link>)
                } </div>
        </div>
    )


}

export default MainGrid;
