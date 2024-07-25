"use client"
import { depthData } from "@/constants";
import { useState } from "react"
import { SingleDepth } from "./SingleDepth";

export const Depth = () => {
    const [selectedTab, setSelectedTab] = useState<'book' | 'trades'>('book');

    let askTotal = 0;
    let bidTotal = 0;

    return (
        <div className="py-3">
            <div className="flex gap-5 px-3">
                <div>
                    <p className={`pb-[2px] cursor-pointer transition-all duration-100 text-[15px] ${selectedTab === 'book' ? 'text-white border-b-2 border-blue-500': 'text-gray-400 hover:border-b-2 border-white'}`} 
                        onClick={() => setSelectedTab('book')}
                    >
                        Book
                    </p>
                </div>

                <div>
                    <p className={`pb-[2px] cursor-pointer transition-all duration-100 text-[15px] ${selectedTab === 'trades' ? 'text-white border-b-2 border-blue-500': 'text-gray-400 hover:border-b-2 border-white hover:text-white'}`}
                        onClick={() => setSelectedTab('trades')}
                    >
                        Trades
                    </p>
                </div>
            </div>

            <div className="py-2">
                <div className="grid grid-cols-3 px-3">
                    <p className="text-white text-[12px] col-span-1">Price (USDC)</p>
                    <p className="text-zinc-400 text-[12px] col-span-1 text-end">Size (SOL)</p>
                    <p className="text-zinc-400 text-[12px] col-span-1 text-end">Total (SOL)</p>
                </div>

                <div className="mt-2">
                    <div className="flex flex-col-reverse">
                        {
                            depthData.asks.sort((a, b) => Number(a.price) - Number(b.price)).map((item) => {
                                askTotal += Number(item.size);
                                return <SingleDepth key={item.id}
                                    asks
                                    price={item.price}
                                    size={item.size}
                                    total={Number(askTotal.toFixed(2))}
                                />
                            })
                        }
                    </div>

                    <p className="text-lg text-white px-3 py-1">170.47</p>

                    {
                        depthData.bids.sort((a, b) => Number(b.price) - Number(a.price)).map((item) => {
                            bidTotal += Number(item.size);
                            return <SingleDepth key={item.id}
                                asks={false}
                                price={item.price}
                                size={item.size}
                                total={Number(bidTotal.toFixed(2))}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    )
}