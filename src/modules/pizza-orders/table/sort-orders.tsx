import { PizzaOrders } from "../order-data";

interface SortOrdersStatusProps {
  data: PizzaOrders;
}

const SortOrdersStatus = ({ data }: SortOrdersStatusProps) => {
  return (
    <span
      className={`
      px-3 py-1 flex flex-row shrink-0 space-x-3 items-center rounded-sm 
      ${
        data.status === "Pending"
          ? "bg-yellow-100 text-yellow-700 text-opacity-90"
          : data.status === "Preparing"
          ? "bg-yellow-200 text-yellow-800 text-opacity-90"
          : data.status === "Out for Delivery"
          ? "bg-blue-100 text-blue-700 text-opacity-90"
          : data.status === "Delivered"
          ? "bg-green-100 text-green-700 text-opacity-90"
          : data.status === "Cancelled"
          ? "bg-red-200 text-red-700 text-opacity-90"
          : ""
      }
    `}
    >
      <span
        className={`w-2 h-2 rounded-full ${
          data.status === "Pending"
            ? " bg-yellow-500"
            : data.status === "Preparing"
            ? "bg-yellow-700 "
            : data.status === "Out for Delivery"
            ? "bg-blue-500"
            : data.status === "Delivered"
            ? "bg-green-500"
            : data.status === "Cancelled"
            ? "bg-red-500"
            : ""
        }`}
      ></span>
      <span className="text-sm">{data.status}</span>
    </span>
  );
};

export default SortOrdersStatus;
