# BusinessHub ERP Dashboard

A modern, responsive ERP dashboard built with React.js, Tailwind CSS, and Framer Motion. This dashboard provides role-based access control for different user types in an SME business environment.

## 🚀 Features

### 🎯 Core Functionality
- **Role-Based Access Control (RBAC)** - Different views for Admin, Manager, Sales, Inventory, HR, and Employee roles
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Theme** - Toggle between themes with system preference detection
- **Real-time Data** - Mock API integration with loading states
- **Interactive Charts** - Sales trends, inventory flow, attendance, and expense breakdowns

### 📊 Dashboard Modules
- **Inventory Management** - Stock levels, low-stock alerts, inventory flow
- **Sales & Purchases** - Revenue tracking, sales trends, pending invoices
- **HR & Payroll** - Employee management, attendance, payroll processing
- **Reports & Analytics** - Comprehensive reporting with visual charts
- **AI Insights** - Predictive analytics and business intelligence

### 🎨 UI/UX Features
- **Glassmorphism Design** - Modern glass-like UI elements
- **Smooth Animations** - Framer Motion powered transitions
- **Interactive Components** - Hover effects, loading states, micro-interactions
- **Accessibility** - WCAG compliant with keyboard navigation
- **Toast Notifications** - User feedback for actions and errors

## 🛠️ Tech Stack

- **Frontend**: React.js 19 + Vite
- **Styling**: Tailwind CSS 4.x
- **Charts**: Recharts
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **State Management**: React Context API
- **UI Components**: Radix UI primitives

## 📁 Project Structure

```
src/
├── components/
│   ├── Dashboard/
│   │   ├── KPI.jsx           # KPI card component
│   │   └── ChartSection.jsx  # Chart wrapper component
│   ├── Sidebar.jsx          # Navigation sidebar
│   ├── TopBar.jsx           # Top navigation bar
│   ├── Login.jsx            # Login component
│   └── Dashboard.jsx        # Main dashboard
├── contexts/
│   ├── ThemeContext.jsx     # Theme management
│   └── UserContext.jsx      # User & authentication
├── services/
│   └── mockData.js          # Mock API service
├── utils/
│   └── rbac.js              # Role-based access control
└── App.jsx                  # Main app component
```

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd BusinessHub/Frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 👥 User Roles & Permissions

### Admin
- Full access to all modules
- User management
- System settings
- All KPIs and charts

### Manager  
- Access to all business modules
- Sales, inventory, HR, reports
- AI insights and analytics

### Sales Representative
- Sales KPIs and trends
- Revenue charts
- Sales reports
- Limited to sales-related data

### Inventory Manager
- Stock level KPIs
- Inventory flow charts
- Low-stock alerts
- Inventory reports

### HR Manager
- Employee management
- Attendance tracking
- Payroll processing
- HR reports

### Employee
- Personal attendance
- Leave status
- Salary information
- Limited HR access

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#3B82F6)
- **Success**: Green (#10B981) 
- **Warning**: Yellow (#F59E0B)
- **Error**: Red (#EF4444)
- **Info**: Purple (#8B5CF6)

### Typography
- **Headings**: Inter font family
- **Body**: System font stack
- **Sizes**: Responsive scale (sm, base, lg, xl, 2xl, 3xl)

### Spacing
- **Grid**: 8px base unit
- **Padding**: 16px, 24px, 32px
- **Margins**: 8px, 16px, 24px, 32px

## 🔧 Customization

### Adding New KPIs
```jsx
// In Dashboard.jsx
const newKPI = {
  title: "Custom Metric",
  value: "$1,234",
  change: "+5.2%",
  trend: "up",
  icon: CustomIcon,
  color: "blue"
};
```

### Adding New Charts
```jsx
// In ChartSection.jsx
<ChartSection
  title="Custom Chart"
  data={customData}
  type="line" // line, bar, area, pie
  color="#3B82F6"
/>
```

### Role Permissions
```javascript
// In utils/rbac.js
export const ROLE_PERMISSIONS = {
  [ROLES.CUSTOM_ROLE]: [
    PERMISSIONS.VIEW_CUSTOM,
    PERMISSIONS.MANAGE_CUSTOM
  ]
};
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Built with ❤️ for BusinessHub ERP System**