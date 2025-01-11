import { Signal } from "../../types/types";
import { unixToDate } from "../../utils/utils";

export interface SignalCardProps {
    data: Signal
}

const SignalCard = ({ data }: SignalCardProps) => {
    return (


        <div className="bg-[var(--color-secondary)] text-[var(--primary-text)] rounded-xl p-4 shadow-lg transition hover:bg-[var(--hover-bg)] hover:text-[var(--hover-text)] hover:shadow-lg hover:shadow-[var(--hover-text)]">
            <h2 data-testid="cardsymbol" className="font-bold text-2xl mb-4 text-[var(--highlight)]">
                {
                    data.symbol
                } </h2>
            <p data-testid="cardtime" className="text-lg mb-2">
                <strong className="text-[var(--secondary-text)]">Time</strong>
                {" "}
                {
                    unixToDate(data.signalTime)
                } </p>
        </div>
    )
}

export default SignalCard;
