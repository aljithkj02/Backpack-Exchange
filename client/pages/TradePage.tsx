import { Header } from "@/components/molecules/Trade/Header"

export const TradePage = () => {
    return (
        <div className="bg-black">
            <div className="grid grid-cols-5 border-t border-t-zinc-700 mt-2 py-[6px]">
                <div className="col-span-4">
                    <Header />
                </div>

                <div className="col-span-1">

                </div>
            </div>
        </div>
    )
}
