export const MOCK_DATA = {
  sales: {
    chart: [
      { name: "Jan", value: 4000 }, { name: "Feb", value: 3000 },
      { name: "Mar", value: 5000 }, { name: "Apr", value: 4500 },
      { name: "May", value: 6000 }, { name: "Jun", value: 7500 },
    ],
    table: [
      { id: 1, date: "2023-10-01", orderId: "ORD-001", customer: "Acme Corp", revenue: "$1,200", profit: "$300" },
      { id: 2, date: "2023-10-02", orderId: "ORD-002", customer: "Global Inc", revenue: "$3,450", profit: "$850" },
      { id: 3, date: "2023-10-03", orderId: "ORD-003", customer: "Stark Ind", revenue: "$800", profit: "$150" },
      { id: 4, date: "2023-10-04", orderId: "ORD-004", customer: "Wayne Ent", revenue: "$5,000", profit: "$1,200" },
    ]
  },
  inventory: {
    chart: [
      { name: "Electronics", value: 400 }, { name: "Furniture", value: 300 },
      { name: "Clothing", value: 300 }, { name: "Groceries", value: 200 },
    ],
    table: [
      { id: 1, item: "MacBook Pro", category: "Electronics", stock: 45, status: "In Stock", value: "$45,000" },
      { id: 2, item: "Office Chair", category: "Furniture", stock: 12, status: "Low Stock", value: "$2,400" },
      { id: 3, item: "T-Shirt Basic", category: "Clothing", stock: 150, status: "In Stock", value: "$1,500" },
      { id: 4, item: "Monitor 4K", category: "Electronics", stock: 0, status: "Out of Stock", value: "$0" },
    ]
  },
  payroll: {
    chart: [
      { name: "Engineering", value: 45000 }, { name: "Sales", value: 32000 },
      { name: "HR", value: 15000 }, { name: "Marketing", value: 28000 },
    ],
    table: [
      { id: 1, employee: "John Doe", dept: "Engineering", role: "Dev", salary: "$5,500", status: "Paid" },
      { id: 2, employee: "Jane Smith", dept: "Sales", role: "Manager", salary: "$6,200", status: "Pending" },
      { id: 3, employee: "Bob Brown", dept: "HR", role: "Recruiter", salary: "$4,000", status: "Paid" },
    ]
  },
  finance: {
    chart: [
      { name: "Q1", profit: 2400, expense: 1398 },
      { name: "Q2", profit: 1398, expense: 2800 },
      { name: "Q3", profit: 9800, expense: 2000 },
      { name: "Q4", profit: 3908, expense: 2780 },
    ],
    table: [
      { id: 1, category: "Operations", type: "Expense", amount: "$12,000", date: "2023-10-01", status: "Cleared" },
      { id: 2, category: "Consulting", type: "Income", amount: "$25,000", date: "2023-10-05", status: "Cleared" },
      { id: 3, category: "Marketing", type: "Expense", amount: "$5,000", date: "2023-10-10", status: "Pending" },
    ]
  }
};