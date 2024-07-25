
interface ISingleDepth {
    price: string;
    size: string;
    total: number;
    asks: boolean;
}

export const SingleDepth = ({ price, size, total, asks }: ISingleDepth) => {
    const style = { width: Math.ceil(((total/200) % 200) * 100) };

    return (
        <div className={`grid grid-cols-3 py-1 relative cursor-pointer hover:bg-zinc-900 px-3 transition-all duration-100`}>
            <div className={`absolute top-0.5 bottom-0.5 right-0 bg-red-500 transition-all bg-opacity-30 duration-400 ease-in-out`} 
                style={style}
            />

            <p className={`${asks ? "text-red-500": "text-green-500"} text-[12px] col-span-1 z-10`}> { price } </p>
            <p className="text-zinc-200 text-[12px] col-span-1 text-end z-10"> { size } </p>
            <p className="text-zinc-200 text-[12px] col-span-1 text-end z-10"> { total } </p>
        </div>
    )
}
