import { CalendarIcon, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { formatDate } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface TableFilterProps {
  title: string;
  buttonTitle?: string;
  formLink?: string;
  canAddNew: boolean;
  selectedFilter: string;
  onFilterChange: (value: string) => void;
  dateFilter: {
    startDate: string;
    endDate: string;
  };
  onDateFilterChange: (dates: { startDate: string; endDate: string }) => void;
}

const TableFilters = ({
  title,
  selectedFilter,
  onFilterChange,
  onDateFilterChange,
}: TableFilterProps) => {
  const [date, setDate] = useState<Date>();
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(),
  });
  const { toast } = useToast();

  const handleFilterChange = async (value: string) => {
    try {
      onFilterChange(value);

      const now = new Date();

      let startDate: string;
      const endDate = formatDate(now).toString(); // Today's date

      // Map the selected filter to date ranges
      switch (value) {
        case "today":
          startDate = formatDate(
            new Date(now.getFullYear(), now.getMonth(), now.getDate())
          ).toString();
          break;
        case "last_24_hours":
          startDate = formatDate(
            new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1)
          ).toString();
          break;
        case "this_week":
          startDate = formatDate(
            new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7)
          ).toString();
          break;
        case "this_month":
          startDate = formatDate(
            new Date(now.getFullYear(), now.getMonth() - 1, now.getDate())
          ).toString();
          break;
        case "this_year":
          startDate = formatDate(
            new Date(now.getFullYear() - 1, now.getMonth(), now.getDate())
          ).toString();
          break;
        default:
          startDate = "";
      }

      // If the value is "custom", don't make the API call here
      if (value === "custom") return;

      if (value === "single") return;

      onDateFilterChange({
        startDate,
        endDate,
      });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to apply date filter. Please try again.",
      });
    }
  };

  return (
    <div className="flex flex-col xl:flex-row justify-between xl:items-center">
      <h1 className="text-xl font-semibold mb-2 xl:mb-0 text-orange-400">{title}</h1>
      <div className="flex flex-row gap-3">
        <div className="flex xl:flex-row flex-col gap-2 xl:gap-0 w-full xl:w-auto">
          <div className="flex flex-row gap-2 w-full xl:w-auto">
            <Select
              onValueChange={(value: string) => {
                handleFilterChange(value);
              }}
              defaultValue=""
              value={selectedFilter}
            >
              <SelectTrigger className="w-auto xl:w-[180px] flex-grow">
                <SelectValue placeholder="Select Date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="last_24_hours">Last 24 hours</SelectItem>
                <SelectItem value="this_week">This week</SelectItem>
                <SelectItem value="this_month">This month</SelectItem>
                <SelectItem value="this_year">This year</SelectItem>
                <SelectItem value="custom">Custom</SelectItem>
                <SelectItem value="single">Single</SelectItem>
              </SelectContent>
            </Select>

            {selectedFilter !== "" && (
              <Button
              className="bg-orange-400"
                size="icon"
                onClick={() => {
                  onDateFilterChange({
                    startDate: "",
                    endDate: "",
                  });
                  onFilterChange("");
                  setDate(undefined);
                  setDateRange(undefined);
                }}
              >
                <Trash2 size={18} />
              </Button>
            )}
          </div>

          {selectedFilter === "single" && (
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "xl:w-[280px] justify-start text-left font-normal xl:ml-2",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(date) => {
                    setDate(date);
                    if (date) {
                      const selectedDate = new Date(
                        date.getFullYear(),
                        date.getMonth(),
                        date.getDate()
                      );
                      onDateFilterChange({
                        startDate: formatDate(selectedDate).toString(),
                        endDate: formatDate(selectedDate).toString(),
                      });
                    }
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          )}

          {selectedFilter === "custom" && (
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "xl:w-[280px] justify-start text-left font-normal xl:ml-2",
                    !dateRange?.from && "text-muted-foreground"
                  )}
                  data-testid="date-range-picker"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateRange?.from ? (
                    dateRange.to ? (
                      <>
                        {format(dateRange.from, "LLL dd, y")} -{" "}
                        {format(dateRange.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(dateRange.from, "LLL dd, y")
                    )
                  ) : (
                    <span>Pick a date range</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  initialFocus
                  mode="range"
                  numberOfMonths={2}
                  defaultMonth={dateRange?.from}
                  selected={dateRange}
                  onSelect={(range) => {
                    setDateRange(range);
                    if (range?.from && range?.to) {
                      const selectedFrom = new Date(
                        range.from.getFullYear(),
                        range.from.getMonth(),
                        range.from.getDate()
                      );
                      const selectedTo = new Date(
                        range.to.getFullYear(),
                        range.to.getMonth(),
                        range.to.getDate()
                      );
                      onDateFilterChange({
                        startDate: formatDate(selectedFrom).toString(),
                        endDate: formatDate(selectedTo).toString(),
                      });
                    }
                  }}
                />
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default TableFilters;