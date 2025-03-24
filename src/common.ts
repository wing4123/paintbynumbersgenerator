
export type RGB = number[];

export interface IMap<T> {
    [key: string]: T;
}

export async function delay(ms: number) {
    if (typeof window !== "undefined") {
        return new Promise((exec) => window.setTimeout(exec, ms));
    } else {
        return new Promise<void>((exec) => exec()); // 确保传入 void
    }
}

export class CancellationToken {
    public isCancelled: boolean = false;
}
