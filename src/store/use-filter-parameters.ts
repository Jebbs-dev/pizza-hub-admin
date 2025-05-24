import { create } from "zustand";
import { addDays } from "date-fns";

interface FIlterParamsProps {
  querykey: string;
  dateFilter: {
    startDate: string;
    endDate: string;
  };
  date: Date | undefined;
  dateRange: {
    from: Date;
    to: Date;
  };
  selectedFilter: string;
  setQueryKey: (query: string) => void;
  setDateFilter: (dates: { startDate: string; endDate: string }) => void;
  setSelectedFilter: (filter: string) => void;
  setDate: (date: Date | undefined) => void;
  setDateRange: (range: { from: Date; to: Date }) => void;
}

export const useFilterParamaters = create<FIlterParamsProps>((set) => ({
  querykey: "",
  dateFilter: {
    startDate: "",
    endDate: "",
  },
  date: undefined,
  dateRange: {
    from: typeof window !== 'undefined' ? new Date() : new Date(0),
    to: typeof window !== 'undefined' ? addDays(new Date(), 20) : new Date(0),
  },
  selectedFilter: "",
  setQueryKey: (query) => set({ querykey: query }),
  setDateFilter: (dates) => set({ dateFilter: dates }),
  setSelectedFilter: (filter) => set({ selectedFilter: filter }),
  setDate: (date) => set({ date }),
  setDateRange: (range) => set({ dateRange: range }),
}));