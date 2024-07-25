import { Depth } from "@/components/molecules/Trade/Depth"
import { Header } from "@/components/molecules/Trade/Header"
import { TradeView } from "@/components/molecules/Trade/TradeView"

export const TradePage = () => {
    return (
        <div className="bg-black">
            <div className="grid grid-cols-5 border-t border-t-zinc-800 mt-2 py-[6px]">
                <div className="col-span-4">
                    <Header />
                    <div className="grid grid-cols-4 border-t border-t-zinc-800">
                        <div className="col-span-3 border-r border-r-zinc-800">
                            <TradeView />
                        </div>
                        
                        <div className="col-span-1">
                            <Depth />
                        </div>
                    </div>
                </div>

                <div className="col-span-1">

                </div>
            </div>
        </div>
    )
}
