import {Signal} from "../../types/types";

export interface SignalCardProps {
    data: Signal
}

const SignalCard = ({data} : SignalCardProps) => {
    return (


        <div className="bg-[var(--color-secondary)] text-[var(--primary-text)] rounded-xl p-4 shadow-lg hover:shadow-xl transition hover:bg-[var(--hover-bg)] hover:text-[var(--hover-text)]">
            <h2 className="font-bold text-2xl mb-4 text-[var(--highlight)]">
                {
                data.symbol
            } </h2>
            <p className="text-lg mb-2">
                <strong className="text-[var(--secondary-text)]">Time:</strong>
                {" "}
                {
                data.signalTime
            } </p>
        </div>
    )
}

export default SignalCard;
