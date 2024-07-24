import { Menu } from "@/assets"

export const Header = () => {
    return (
        <div className="flex gap-2 items-center">
            <Menu className="text-gray-500" />

            <div className="flex">
                <img src="https://backpack.exchange/_next/image?url=%2Fcoins%2Fsol.png&w=96&q=95" alt="Solana"
                    className="w-6 h-6 rounded-[50%] z-10"
                />
                <img src="https://backpack.exchange/_next/image?url=%2Fcoins%2Fusdc.png&w=48&q=75" alt="Dollar"
                    className="w-6 h-6 rounded-[50%] -ml-2 z-0"
                />
            </div>

            <div>
                <p className="text-white font-medium">SOL/USDC</p>
            </div>

            <div className="ml-7 flex items-center gap-10">
                <div>
                    <p className="text-green-500 text-lg">179.87</p>
                    <p className="text-white text-[14px]">$179.87</p>
                </div>

                <div>
                    <p className="text-zinc-400 font-medium text-[12px]">24H High</p>
                    <p className="text-green-500 text-[14px]">+3.49 + 1.97%</p>
                </div>

                <div>
                    <p className="text-zinc-400 font-medium text-[12px]">24H Change</p>
                    <p className="text-white text-[14px]">181.90</p>
                </div>

                <div>
                    <p className="text-zinc-400 font-medium text-[12px]">24H Change</p>
                    <p className="text-white text-[14px]">170.68</p>
                </div>

                <div>
                    <p className="text-zinc-400 font-medium text-[12px]">24H Volume (USDC)</p>
                    <p className="text-white text-[14px]">4,672,969.92</p>
                </div>
            </div>
        </div>
    )
}
