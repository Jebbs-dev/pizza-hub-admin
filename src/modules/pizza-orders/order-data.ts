import Margherita from "../../../public/images/orders/margherita.jpg"
import Pepperoni from "../../../public/images/orders/pepperoni.jpg"
import VeggieSupreme from "../../../public/images/orders/veggie-supreme.png"
import BbqChicken from "../../../public/images/orders/bbq-chicken.png"
import MeatFeast from "../../../public/images/orders/meat-feast.jpg"
import CheeseLovers from "../../../public/images/orders/cheese-lovers.jpg"
import BuffaloChicken from "../../../public/images/orders/Buffalo-Chicken-Pizza.jpg"
import SpinachFeta from "../../../public/images/orders/spinach-feta.jpg"
import HawaiianPizza from "../../../public/images/orders/hawaiian-pizza.jpg"
import WhitePizza from "../../../public/images/orders/white-pizza.jpg"
import { StaticImageData } from "next/image"

export type PizzaOrders = {
  id: string
  orderId: string
  customerName: string
  pizzaType: string
  quantity: number
  price: number
  createdAt: string
  image: StaticImageData
  status: "Pending" | "Preparing" | "Out for Delivery" | "Delivered" | "Cancelled"
}

export const pizzaOrdersData: PizzaOrders[] = [
  {
    id: "aa3cdd3b-3f4f-4b64-9cb7-bcd88d77a7d1",
    orderId: "PZA001",
    customerName: "John Doe",
    pizzaType: "Margherita",
    quantity: 2,
    price: 18.45,
    createdAt: "2024-12-15T10:00:00Z",
    image: Margherita,
    status: "Pending"
  },
  {
    id: "bb4dee4c-4f5e-5b75-8dc8-cde99e88b8e2",
    orderId: "PZA002",
    customerName: "Jane Smith",
    pizzaType: "Pepperoni",
    quantity: 1,
    price: 15.20,
    createdAt: "2024-12-20T10:15:00Z",
    image: Pepperoni,
    status: "Preparing"
  },
  {
    id: "cc5eff5d-5f6d-6c86-9ed9-def00f99c9f3",
    orderId: "PZA003",
    customerName: "Emma Johnson",
    pizzaType: "Veggie Supreme",
    quantity: 3,
    price: 22.80,
    createdAt: "2025-01-05T10:30:00Z",
    image: VeggieSupreme,
    status: "Out for Delivery"
  },
  {
    id: "dd6f007e-6f7c-7d97-a0ea-ef0110aada04",
    orderId: "PZA004",
    customerName: "Liam Brown",
    pizzaType: "BBQ Chicken",
    quantity: 1,
    price: 19.75,
    createdAt: "2025-01-12T10:45:00Z",
    image: BbqChicken,
    status: "Delivered"
  },
  {
    id: "ee70118f-7f8b-8ea8-b1fb-f01221bbeb15",
    orderId: "PZA005",
    customerName: "Olivia Davis",
    pizzaType: "Meat Feast",
    quantity: 2,
    price: 24.30,
    createdAt: "2025-01-18T11:00:00Z",
    image: MeatFeast,
    status: "Cancelled"
  },
  {
    id: "ff8122a0-808a-9fb9-c2fc-012332ccfc26",
    orderId: "PZA006",
    customerName: "Noah Wilson",
    pizzaType: "Cheese Lovers",
    quantity: 2,
    price: 17.90,
    createdAt: "2025-01-25T11:15:00Z",
    image: CheeseLovers,
    status: "Pending"
  },
  {
    id: "108233b1-9199-afca-d30d-123443dde037",
    orderId: "PZA007",
    customerName: "Ava Martinez",
    pizzaType: "Buffalo Chicken",
    quantity: 1,
    price: 20.15,
    createdAt: "2025-02-02T11:30:00Z",
    image: BuffaloChicken,
    status: "Preparing"
  },
  {
    id: "219344c2-a2a8-b0db-e41e-234554eef148",
    orderId: "PZA008",
    customerName: "Isabella Anderson",
    pizzaType: "Spinach & Feta",
    quantity: 2,
    price: 21.60,
    createdAt: "2025-02-10T11:45:00Z",
    image: SpinachFeta,
    status: "Out for Delivery"
  },
  {
    id: "32a455d3-b3b7-c1ec-f52f-345665fff259",
    orderId: "PZA009",
    customerName: "Lucas Thomas",
    pizzaType: "Hawaiian",
    quantity: 1,
    price: 16.25,
    createdAt: "2025-02-15T12:00:00Z",
    image: HawaiianPizza,
    status: "Delivered"
  },
  {
    id: "43b566e4-c4c6-d2fd-0630-45677600036a",
    orderId: "PZA010",
    customerName: "Mia White",
    pizzaType: "Margherita",
    quantity: 3,
    price: 25.10,
    createdAt: "2025-02-20T12:15:00Z",
    image: Margherita,
    status: "Cancelled"
  },
  {
    id: "54997fe9-cb48-4870-bb58-0fdd44fc9865",
    orderId: "PZA011",
    customerName: "Ethan Garcia",
    pizzaType: "Pepperoni",
    quantity: 2,
    price: 18.75,
    createdAt: "2025-03-01T12:30:00Z",
    image: Pepperoni,
    status: "Pending"
  },
  {
    id: "e22fdc3d-1e7e-4f2f-9c84-cb17140802cb",
    orderId: "PZA012",
    customerName: "Sophia Lee",
    pizzaType: "BBQ Chicken",
    quantity: 1,
    price: 19.95,
    createdAt: "2025-03-08T12:45:00Z",
    image: BbqChicken,
    status: "Preparing"
  },
  {
    id: "728c573c-d826-464f-b0f7-30b3e66099fa",
    orderId: "PZA013",
    customerName: "James King",
    pizzaType: "Hawaiian",
    quantity: 2,
    price: 23.40,
    createdAt: "2025-03-15T13:00:00Z",
    image: HawaiianPizza,
    status: "Out for Delivery"
  },
  {
    id: "f6f8b8d7-3f83-40bc-abe8-4ec03d5dfbfc",
    orderId: "PZA014",
    customerName: "Charlotte Scott",
    pizzaType: "Veggie Supreme",
    quantity: 1,
    price: 14.80,
    createdAt: "2025-03-22T13:15:00Z",
    image: VeggieSupreme,
    status: "Delivered"
  },
  {
    id: "a2f47a69-7c38-45a5-9432-c617eb3d7288",
    orderId: "PZA015",
    customerName: "Benjamin Turner",
    pizzaType: "Cheese Lovers",
    quantity: 2,
    price: 17.20,
    createdAt: "2025-04-05T13:30:00Z",
    image: CheeseLovers,
    status: "Cancelled"
  },
  {
    id: "3f4d8d42-e8f5-465c-8235-4dc579b49a61",
    orderId: "PZA016",
    customerName: "Grace Young",
    pizzaType: "Buffalo Chicken",
    quantity: 1,
    price: 20.45,
    createdAt: "2025-04-12T13:45:00Z",
    image: BuffaloChicken,
    status: "Pending"
  },
  {
    id: "3f1c5c61-bc5e-4d62-891a-8b4a4a12d1a2",
    orderId: "PZA017",
    customerName: "Henry Nelson",
    pizzaType: "Spinach & Feta",
    quantity: 3,
    price: 26.25,
    createdAt: "2025-04-18T14:00:00Z",
    image: SpinachFeta,
    status: "Preparing"
  },
  {
    id: "d9fdf8f1-962c-4971-90ec-378b3a8377a4",
    orderId: "PZA018",
    customerName: "Amelia Green",
    pizzaType: "Margherita",
    quantity: 2,
    price: 18.30,
    createdAt: "2025-04-25T14:15:00Z",
    image: Margherita,
    status: "Out for Delivery"
  },
  {
    id: "6a8a3ee4-e4f2-4e94-a2e5-6e7557d1f292",
    orderId: "PZA019",
    customerName: "Logan Baker",
    pizzaType: "Meat Feast",
    quantity: 1,
    price: 22.10,
    createdAt: "2025-05-02T14:30:00Z",
    image: MeatFeast,
    status: "Delivered"
  },
  {
    id: "03888822-f841-4ae0-9b2e-5a40e17d33a6",
    orderId: "PZA020",
    customerName: "Ella Campbell",
    pizzaType: "Pepperoni",
    quantity: 2,
    price: 19.15,
    createdAt: "2025-05-10T14:45:00Z",
    image: Pepperoni,
    status: "Cancelled"
  },
  {
    id: "6f47e60c-3f91-4a82-bb9c-9ed9f0aee92a",
    orderId: "PZA021",
    customerName: "Alice Freeman",
    pizzaType: "Hawaiian",
    quantity: 2,
    price: 23.70,
    createdAt: "2025-05-12T14:00:00Z",
    image: HawaiianPizza,
    status: "Pending"
  },
  {
    id: "12a1de47-6750-48c7-bd37-f01a84c5687e",
    orderId: "PZA022",
    customerName: "Mark Fisher",
    pizzaType: "BBQ Chicken",
    quantity: 1,
    price: 19.25,
    createdAt: "2025-05-15T14:10:00Z",
    image: BbqChicken,
    status: "Preparing"
  },
  {
    id: "cf8f4a42-08a0-437d-a80b-53e92d9cc15b",
    orderId: "PZA023",
    customerName: "Olivia Gonzalez",
    pizzaType: "Meat Feast",
    quantity: 3,
    price: 26.94,
    createdAt: "2025-05-18T14:20:00Z",
    image: MeatFeast,
    status: "Out for Delivery"
  },
  {
    id: "3064a2e4-6f31-441e-9f72-7dbd50fa7e3b",
    orderId: "PZA024",
    customerName: "Ethan Hernandez",
    pizzaType: "Chicken Alfredo",
    quantity: 2,
    price: 21.80,
    createdAt: "2025-05-20T14:30:00Z",
    image: BbqChicken,
    status: "Delivered"
  },
  {
    id: "de8ea33e-0f1d-45f9-9d63-67bb7811bf7f",
    orderId: "PZA025",
    customerName: "Sophia Reed",
    pizzaType: "Spinach & Feta",
    quantity: 1,
    price: 15.50,
    createdAt: "2025-05-22T14:40:00Z",
    image: SpinachFeta,
    status: "Cancelled"
  },
  {
    id: "8a4670de-2ff8-4f3e-b9bb-748e1369dce6",
    orderId: "PZA026",
    customerName: "Jackson Stewart",
    pizzaType: "Margherita",
    quantity: 2,
    price: 17.65,
    createdAt: "2025-05-24T14:50:00Z",
    image: Margherita,
    status: "Pending"
  },
  {
    id: "2b3a9fc6-fcf6-4b6d-87c3-5e33f5d26a55",
    orderId: "PZA027",
    customerName: "Grace Patterson",
    pizzaType: "Pepperoni",
    quantity: 1,
    price: 14.90,
    createdAt: "2024-12-10T15:00:00Z",
    image: Pepperoni,
    status: "Preparing"
  },
  {
    id: "428ef110-c6d6-4b49-b401-5abfcafc2648",
    orderId: "PZA028",
    customerName: "Mason Sanchez",
    pizzaType: "Veggie Supreme",
    quantity: 3,
    price: 24.60,
    createdAt: "2024-12-18T15:10:00Z",
    image: VeggieSupreme,
    status: "Out for Delivery"
  },
  {
    id: "2bb47f45-68f2-4df3-9dff-3d20a5118bfa",
    orderId: "PZA029",
    customerName: "Lily Simmons",
    pizzaType: "Cheese Lovers",
    quantity: 2,
    price: 16.75,
    createdAt: "2025-01-08T15:20:00Z",
    image: CheeseLovers,
    status: "Delivered"
  },
  {
    id: "463d4e46-16d3-41b2-b741-fd631f18ff13",
    orderId: "PZA030",
    customerName: "Wyatt Coleman",
    pizzaType: "Buffalo Chicken",
    quantity: 1,
    price: 20.30,
    createdAt: "2025-01-15T15:30:00Z",
    image: BuffaloChicken,
    status: "Cancelled"
  },
  {
    id: "9e1a0d2b-5ff3-4f0b-bf3c-8b4d269e5531",
    orderId: "PZA031",
    customerName: "Ellie Barnes",
    pizzaType: "White Pizza",
    quantity: 1,
    price: 18.20,
    createdAt: "2025-02-05T15:40:00Z",
    image: WhitePizza,
    status: "Delivered"
  },
  {
    id: "3a7a2377-2fa7-49a4-949a-3c6ac868c960",
    orderId: "PZA032",
    customerName: "Luke Ross",
    pizzaType: "Margherita",
    quantity: 2,
    price: 17.95,
    createdAt: "2025-02-12T15:50:00Z",
    image: Margherita,
    status: "Pending"
  },
  {
    id: "e2b8d55f-c5a7-4c0a-bb11-1ff7c7801485",
    orderId: "PZA033",
    customerName: "Zoe Wells",
    pizzaType: "Pepperoni",
    quantity: 1,
    price: 15.10,
    createdAt: "2025-03-05T16:00:00Z",
    image: Pepperoni,
    status: "Preparing"
  },
  {
    id: "b7a0a5f3-b4ca-4664-8f66-7c6a458a8d1f",
    orderId: "PZA034",
    customerName: "Leo Perry",
    pizzaType: "Cheese Lovers",
    quantity: 2,
    price: 16.40,
    createdAt: "2025-03-12T16:10:00Z",
    image: CheeseLovers,
    status: "Out for Delivery"
  },
  {
    id: "9509a0d1-903b-44af-8f4e-21ccaa2aa547",
    orderId: "PZA035",
    customerName: "Aria Powell",
    pizzaType: "BBQ Chicken",
    quantity: 3,
    price: 25.80,
    createdAt: "2025-04-08T16:20:00Z",
    image: BbqChicken,
    status: "Preparing"
  },
  {
    id: "1e50b6e7-8e33-43ad-9784-ea4d7b47772a",
    orderId: "PZA036",
    customerName: "Caleb Long",
    pizzaType: "Meat Feast",
    quantity: 1,
    price: 22.50,
    createdAt: "2025-04-15T16:30:00Z",
    image: MeatFeast,
    status: "Delivered"
  },
  {
    id: "4fa33c9c-7e62-4c0a-8f3f-08f3a5f39333",
    orderId: "PZA037",
    customerName: "Stella Hart",
    pizzaType: "Veggie Supreme",
    quantity: 1,
    price: 14.20,
    createdAt: "2025-05-05T16:40:00Z",
    image: VeggieSupreme,
    status: "Cancelled"
  },
  {
    id: "e1d9948c-7a45-417c-a24e-29e39e9c5c22",
    orderId: "PZA038",
    customerName: "David Monroe",
    pizzaType: "Spinach & Feta",
    quantity: 2,
    price: 21.25,
    createdAt: "2025-05-12T16:50:00Z",
    image: SpinachFeta,
    status: "Pending"
  },
  {
    id: "fa0fce6a-6d1a-4b6e-8c8a-24e5dfc25eb1",
    orderId: "PZA039",
    customerName: "Mia Lawson",
    pizzaType: "Buffalo Chicken",
    quantity: 1,
    price: 19.85,
    createdAt: "2025-05-18T17:00:00Z",
    image: BuffaloChicken,
    status: "Out for Delivery"
  },
  {
    id: "23c44df4-6e6f-4d98-a7f3-ecb7484d8b38",
    orderId: "PZA040",
    customerName: "Noah Bennett",
    pizzaType: "White Pizza",
    quantity: 3,
    price: 26.15,
    createdAt: "2025-05-22T17:10:00Z",
    image: WhitePizza,
    status: "Delivered"
  }
];