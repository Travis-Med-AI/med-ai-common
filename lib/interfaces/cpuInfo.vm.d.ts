import { RamInfoViewModel } from "./ramInfo.vm";
export interface CpuInfoViewModel {
    threads: number;
    temp: number;
    usage: number;
    ram: RamInfoViewModel;
}
