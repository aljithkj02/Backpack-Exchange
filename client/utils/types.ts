
export interface KLine {
    close: string;
    end: string;
    high: string;
    low: string;
    open: string;
    quoteVolume: string;
    start: string;
    trades: string;
    volume: string;
}

export interface ChartInput {
    close: number;
    high: number;
    low:number;
    open: number;
    timestamp: Date;
}