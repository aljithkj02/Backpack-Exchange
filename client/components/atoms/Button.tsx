import { ReactNode } from "react"

interface IButton {
    children: ReactNode;
    className?: string;
}

export const Button = ({ children, className }: IButton) => {
    return (
        <button
            className={`px-2 py-1 rounded-md text-white bg-blue-500 ${className}`}
        >
            { children }
        </button>
    )
}
