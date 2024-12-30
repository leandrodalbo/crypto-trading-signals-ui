import { useLocation } from "react-router-dom";
import { Signal } from "../../types/types";
import { BuySellItem } from "../buyselltem/BuySellItem";
import { unixToDate } from "../../utils/utils";

export const SignalDetail = () => {
    const location = useLocation();
    const signal: Signal = location.state.signal;

    const isDisplayable = (key: string) => (key !== 'symbol' && key !== 'signalTime' && key !== 'buyStrength' && key !== 'sellStrength' && key !== 'version' && key !== 'turtleSignal' && key !== 'hammerAndShootingCandle')
    return (

        <div className="min-h-screen text-primary-text p-8">

            <div className="bg-[var(--color-secondary)] p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
                <h2 data-testid="symbol-detail" className="text-[var(--highlight)] text-3xl font-semibold mb-4">{signal.symbol} Signal Details</h2>

                <div data-testid="time-detail" className="grid grid-cols-1 md:grid-cols-1 gap-4  ">
                    <div>
                        <h3 className="text-[var(--highlight)] text-lg font-semibold text-primary-text">Signal Time</h3>
                        <p className="text-[var(--control-text)]">{unixToDate(signal.signalTime)}</p>
                    </div>

                </div>


                <div data-testid="indicators" className="mt-8">
                    <h3 className="text-[var(--highlight)] text-xl font-semibold text-primary-text mb-4">Indicators</h3>
                    <div data-testid="indicators-grid" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {Object.entries(signal).map(([key, value]) => {
                            if (isDisplayable(key)) {
                                return (
                                    <div key={key} className="text-[var(--control-text)] p-4 rounded-lg shadow-lg shadow-[var(--hover-text)]">
                                        <h4 className="text-[var(--primary-text)]">{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</h4>
                                        <BuySellItem value={value} />
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
