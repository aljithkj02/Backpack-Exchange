"use client"
import { kLineData as data } from "@/constants";
import { ChartManager } from "@/utils/ChartManager";
import { KLine } from "@/utils/types";
import { useEffect, useRef } from "react"

const generateNumber = () => {
    return Math.floor(Math.random() * (3) + 170); 
}
let i = 1;

export const TradeView = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartManagerRef = useRef<ChartManager | null>(null);
  const intervalId = useRef<null | NodeJS.Timeout>(null);

    useEffect(() => {
        init();

        return () => {
            intervalId.current && clearInterval(intervalId.current);
        }
    }, [chartRef])

    const init = () => {
        const kLineData: KLine[] = data;

        if (!chartRef.current) return;

        if (chartManagerRef.current) {
            chartManagerRef.current.destroy();
        }

        const chartManager = new ChartManager(chartRef.current, [...kLineData.map((x) => ({
                close: parseFloat(x.close),
                high: parseFloat(x.high),
                low: parseFloat(x.low),
                open: parseFloat(x.open),
                timestamp: new Date(x.end), 
            }))].sort((x, y) => (x.timestamp < y.timestamp ? -1 : 1)),
            {
              background: "#0e0f14",
              color: "white",
            }
        )

        chartManagerRef.current = chartManager;

        start();
    }

    const start = () => {
        let c = generateNumber();
        let l = c;
        let h = c;
        let o = c;
        intervalId.current = setInterval(() => {
            c = generateNumber();
            l = Math.min(l, c);
            h = Math.max(h, c);

            chartManagerRef.current?.update({
                close: c,
                low: l,
                high: h,
                open: o,
                newCandleInitiated: i%30 === 0,
            });

            if (i%30 === 0) {
                l = c;
                h = c;
                o = c;
            }

            i++;
        }, 1000);
    }

    return (
        <div>
            <p className="p-3 text-zinc-400 text-sm font-semibold">Chart</p>
            <div ref={chartRef} style={{ height: "520px", width: "100%", marginTop: 4 }} />
        </div>
    )
}
