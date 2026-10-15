// Single source of truth for the portfolio hub, product modals and the PDF.
// To add a product: add one object to `products`. Domain chips appear
// automatically once a domain has at least one product.

export const STATUS = {
  ready: { label: "Production-ready", tone: "ready" },
  development: { label: "In development", tone: "development" },
  blueprint: { label: "Buildable on request", tone: "blueprint" },
  live: { label: "Live dashboard", tone: "ready" },
};

// Order here is the order of the filter chips and PDF sections.
export const DOMAINS = {
  construction: { label: "Construction", accent: "#b45309" },
  healthcare: { label: "Healthcare", accent: "#0e7490" },
  operations: { label: "Operations", accent: "#4f46e5" },
  retail: { label: "Retail & Stores", accent: "#be185d" },
  finance: { label: "Finance & Accounts", accent: "#1f7663" },
  community: { label: "Community & Faith", accent: "#7c3aed" },
  education: { label: "Education", accent: "#2563eb" },
  logistics: { label: "Logistics & Fleet", accent: "#c2410c" },
  realEstate: { label: "Real Estate", accent: "#0f766e" },
  hospitality: { label: "Hospitality & Food", accent: "#b91c1c" },
  analytics: { label: "Analytics", accent: "#334155" },
};

export const products = [
  {
    id: "buildx",
    kind: "product",
    name: "BuildX ERP",
    domain: "construction",
    status: "development",
    tagline: "One ERP for projects, procurement, site stores and billing.",
    problem:
      "Site expenses, material movement and subcontractor bills sit in separate sheets, so cost overruns surface only after a project is already over budget.",
    solution:
      "A single ERP that connects the BOQ to purchasing, site stores, labour and running bills, so every rupee is tracked against the project budget as work happens.",
    bestFor: "Contractors, builders and EPC firms",
    modules: [
      "Projects & BOQ",
      "Estimates & budgets",
      "Procurement & POs",
      "Site stores & inventory",
      "Subcontractor & RA bills",
      "Labour & attendance",
      "Equipment & fuel",
      "Project reports",
    ],
    workflow: [
      "BOQ & budget",
      "Material indent",
      "Purchase order",
      "GRN at site",
      "Running bill",
      "Payment",
    ],
    roles: [
      "Project manager",
      "Site engineer",
      "Store keeper",
      "Accounts",
      "Management",
    ],
    reports: [
      "Budget vs actual",
      "Material consumption",
      "Subcontractor ledger",
      "Project cash flow",
    ],
    screens: [
      {
        name: "Project dashboard",
        active: "Projects & BOQ",
        kpis: [
          { label: "Active projects", value: "6" },
          { label: "Budget used", value: "68%" },
          { label: "Pending POs", value: "14" },
          { label: "Bills due", value: "₹38.4 L" },
        ],
        chart: {
          title: "Budget vs actual (₹ crore)",
          labels: ["Tower A", "Villa 12", "NH-4 Road", "Mall Fit-out"],
          series: [
            { name: "Budget", values: [4.8, 2.6, 6.2, 3.1] },
            { name: "Actual", values: [3.9, 2.2, 4.1, 2.8] },
          ],
        },
        table: {
          title: "Project status",
          cols: ["Project", "Progress", "Status"],
          pillCol: 2,
          rows: [
            ["Tower A", "72%", "In progress"],
            ["Villa 12", "88%", "On track"],
            ["NH-4 Road", "41%", "Delayed"],
            ["Mall Fit-out", "95%", "On track"],
          ],
        },
      },
      {
        name: "BOQ & budget",
        active: "Estimates & budgets",
        kpis: [
          { label: "BOQ items", value: "248" },
          { label: "Estimated", value: "₹4.80 Cr" },
          { label: "Committed", value: "₹3.62 Cr" },
          { label: "Variance", value: "+2.4%" },
        ],
        chart: {
          type: "progress",
          title: "Progress by work package",
          labels: ["Excavation", "Foundation", "Structure", "Masonry", "Finishing"],
          series: [{ name: "Progress", values: [100, 92, 74, 46, 18] }],
        },
        table: {
          title: "BOQ items",
          cols: ["Item", "Qty", "Amount", "Status"],
          pillCol: 3,
          rows: [
            ["RCC M25", "420 m³", "₹31.5 L", "Approved"],
            ["Brickwork", "1,800 m²", "₹14.2 L", "Approved"],
            ["Plastering", "3,600 m²", "₹9.7 L", "Pending"],
            ["Flooring", "2,200 m²", "₹18.9 L", "Draft"],
          ],
        },
      },
      {
        name: "Procurement",
        active: "Procurement & POs",
        kpis: [
          { label: "Open indents", value: "9" },
          { label: "POs this month", value: "27" },
          { label: "GRN pending", value: "5" },
          { label: "Supplier dues", value: "₹12.7 L" },
        ],
        chart: {
          title: "PO value by month (₹ lakh)",
          labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
          series: [{ name: "PO value", values: [22, 31, 27, 38, 34, 41] }],
        },
        table: {
          title: "Purchase orders",
          cols: ["PO", "Supplier", "Amount", "Status"],
          pillCol: 3,
          rows: [
            ["PO-0231", "Apex Cement Co.", "₹4.2 L", "Delivered"],
            ["PO-0232", "Steel Mart", "₹7.8 L", "Approved"],
            ["PO-0233", "Metro Aggregates", "₹2.1 L", "Pending"],
            ["PO-0234", "Sunrise Hardware", "₹0.9 L", "Draft"],
          ],
        },
      },
      {
        name: "Site stores",
        active: "Site stores & inventory",
        kpis: [
          { label: "Items tracked", value: "312" },
          { label: "Low stock", value: "11" },
          { label: "Issued today", value: "46" },
          { label: "Stock value", value: "₹18.2 L" },
        ],
        chart: {
          type: "line",
          title: "Cement consumption (bags / week)",
          labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7"],
          series: [{ name: "Bags", values: [420, 510, 480, 640, 590, 710, 680] }],
        },
        table: {
          title: "Stock levels",
          cols: ["Material", "In stock", "Reorder", "Status"],
          pillCol: 3,
          rows: [
            ["Cement (bags)", "820", "500", "OK"],
            ["TMT 12 mm (kg)", "1,150", "2,000", "Low"],
            ["Sand (m³)", "64", "40", "OK"],
            ["Bricks (nos.)", "4,200", "5,000", "Low"],
          ],
        },
      },
      {
        name: "Subcontractor bills",
        active: "Subcontractor & RA bills",
        kpis: [
          { label: "RA bills", value: "18" },
          { label: "Certified", value: "₹62.5 L" },
          { label: "Retention held", value: "₹6.2 L" },
          { label: "Pending approval", value: "4" },
        ],
        chart: {
          title: "Certified vs paid (₹ lakh)",
          labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
          series: [
            { name: "Certified", values: [8, 11, 9, 14, 12, 16] },
            { name: "Paid", values: [7, 9, 9, 11, 12, 13] },
          ],
        },
        table: {
          title: "RA bills",
          cols: ["Bill", "Subcontractor", "Amount", "Status"],
          pillCol: 3,
          rows: [
            ["RA-014", "Shree Civil Works", "₹6.4 L", "Paid"],
            ["RA-015", "Omkar Electricals", "₹3.1 L", "Approved"],
            ["RA-016", "Prime Plumbing", "₹2.2 L", "Pending"],
            ["RA-017", "Shree Civil Works", "₹7.5 L", "Draft"],
          ],
        },
      },
    ],
  },
  {
    id: "medicore",
    kind: "product",
    name: "MediCore HMS",
    domain: "healthcare",
    status: "development",
    tagline: "Patient care, billing and hospital operations in one system.",
    problem:
      "Registration, doctor notes, pharmacy and billing run on separate registers, so patients wait longer and charges get missed.",
    solution:
      "A hospital management system that follows the patient from registration to discharge, linking OPD, IPD, pharmacy, lab and billing so nothing is missed or entered twice.",
    bestFor: "Clinics, nursing homes and small to mid-size hospitals",
    modules: [
      "Patient registration",
      "OPD & appointments",
      "IPD & bed management",
      "Pharmacy & inventory",
      "Lab & diagnostics",
      "Billing & insurance",
      "Doctors & staff",
      "Reports & MIS",
    ],
    workflow: [
      "Register",
      "Consult",
      "Investigate",
      "Treat / admit",
      "Bill",
      "Discharge",
    ],
    roles: [
      "Receptionist",
      "Doctor",
      "Nurse",
      "Pharmacist",
      "Lab technician",
      "Billing",
      "Admin",
    ],
    reports: [
      "Daily collection",
      "Doctor-wise revenue",
      "Bed occupancy",
      "Pharmacy stock & expiry",
    ],
    screens: [
      {
        name: "Hospital dashboard",
        active: "Reports & MIS",
        kpis: [
          { label: "OPD today", value: "148" },
          { label: "Admitted", value: "62" },
          { label: "Bed occupancy", value: "78%" },
          { label: "Revenue today", value: "₹3.2 L" },
        ],
        chart: {
          title: "OPD visits vs lab tests (this week)",
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          series: [
            { name: "OPD visits", values: [120, 135, 150, 142, 160, 98, 148] },
            { name: "Lab tests", values: [64, 72, 80, 75, 88, 50, 79] },
          ],
        },
        table: {
          title: "Today's appointments",
          cols: ["Token", "Patient", "Doctor", "Status"],
          pillCol: 3,
          rows: [
            ["T-041", "Patient A", "Dr. Rao", "In consult"],
            ["T-042", "Patient B", "Dr. Mehta", "Waiting"],
            ["T-043", "Patient C", "Dr. Rao", "Waiting"],
            ["T-040", "Patient D", "Dr. Iyer", "Done"],
          ],
        },
      },
      {
        name: "OPD & appointments",
        active: "OPD & appointments",
        kpis: [
          { label: "Tokens issued", value: "148" },
          { label: "Waiting", value: "17" },
          { label: "Avg. wait", value: "14 min" },
          { label: "Follow-ups", value: "32" },
        ],
        chart: {
          type: "line",
          title: "Hourly footfall",
          labels: ["9", "10", "11", "12", "1", "2", "3", "4", "5"],
          series: [{ name: "Patients", values: [14, 26, 31, 24, 12, 18, 22, 16, 9] }],
        },
        table: {
          title: "Live queue",
          cols: ["Token", "Department", "Doctor", "Status"],
          pillCol: 3,
          rows: [
            ["T-044", "General Medicine", "Dr. Rao", "Waiting"],
            ["T-045", "Orthopaedics", "Dr. Iyer", "Waiting"],
            ["T-041", "General Medicine", "Dr. Rao", "In consult"],
            ["T-039", "Paediatrics", "Dr. Mehta", "Done"],
          ],
        },
      },
      {
        name: "IPD & beds",
        active: "IPD & bed management",
        kpis: [
          { label: "Total beds", value: "80" },
          { label: "Occupied", value: "62" },
          { label: "Available", value: "18" },
          { label: "Discharges today", value: "7" },
        ],
        chart: {
          type: "progress",
          title: "Occupancy by ward",
          labels: ["ICU", "General", "Private", "Maternity", "Paediatrics"],
          series: [{ name: "Occupancy", values: [90, 76, 68, 82, 55] }],
        },
        table: {
          title: "Admissions",
          cols: ["Patient ID", "Ward / bed", "Doctor", "Status"],
          pillCol: 3,
          rows: [
            ["P-10482", "ICU / 3", "Dr. Rao", "Critical"],
            ["P-10477", "Private / 12", "Dr. Iyer", "Admitted"],
            ["P-10463", "General / 7", "Dr. Mehta", "Admitted"],
            ["P-10451", "Maternity / 2", "Dr. Nair", "Discharged"],
          ],
        },
      },
      {
        name: "Pharmacy",
        active: "Pharmacy & inventory",
        kpis: [
          { label: "Items", value: "1,240" },
          { label: "Low stock", value: "23" },
          { label: "Expiring (30 d)", value: "14" },
          { label: "Sales today", value: "₹58,400" },
        ],
        chart: {
          title: "Pharmacy sales (₹ thousand)",
          labels: ["W1", "W2", "W3", "W4", "W5", "W6"],
          series: [{ name: "Sales", values: [310, 345, 330, 390, 372, 418] }],
        },
        table: {
          title: "Stock alerts",
          cols: ["Medicine", "Batch", "Qty", "Status"],
          pillCol: 3,
          rows: [
            ["Paracetamol 500", "B-2231", "120", "Low"],
            ["Amoxicillin 250", "B-1987", "340", "Expiring"],
            ["Insulin 10 ml", "B-2310", "56", "OK"],
            ["ORS sachet", "B-2288", "40", "Low"],
          ],
        },
      },
      {
        name: "Billing & insurance",
        active: "Billing & insurance",
        kpis: [
          { label: "Bills today", value: "96" },
          { label: "Collected", value: "₹3.2 L" },
          { label: "Insurance pending", value: "₹4.9 L" },
          { label: "Discounts", value: "₹6,200" },
        ],
        chart: {
          title: "Collection by mode (₹ thousand)",
          labels: ["Cash", "UPI", "Card", "Insurance"],
          series: [{ name: "Collected", values: [118, 96, 64, 42] }],
        },
        table: {
          title: "Recent bills",
          cols: ["Bill", "Patient", "Amount", "Status"],
          pillCol: 3,
          rows: [
            ["B-7731", "Patient A", "₹1,850", "Paid"],
            ["B-7732", "Patient E", "₹24,600", "Pending"],
            ["B-7733", "Patient F", "₹640", "Paid"],
            ["B-7734", "Patient G", "₹58,200", "Pending"],
          ],
        },
      },
    ],
  },
  {
    id: "accounts-billing",
    kind: "product",
    name: "Accounts & Billing",
    domain: "finance",
    status: "ready",
    tagline: "GST invoicing, payments and ledgers in one place.",
    problem:
      "Invoices live in Excel, payments are chased over WhatsApp, and nobody has a clear view of who owes what.",
    solution:
      "One system for quotes, GST invoices, payment tracking and ledgers, with automatic reminders and month-end reports ready for your accountant.",
    bestFor: "Service businesses, traders and small manufacturers",
    modules: [
      "GST invoicing & quotes",
      "Customers & vendors",
      "Receivables & payables",
      "Payments & reminders",
      "Expense tracking",
      "Ledgers & trial balance",
      "Financial reports",
    ],
    workflow: ["Quote", "GST invoice", "Payment", "Reminder", "Ledger", "Report"],
    roles: ["Owner", "Accountant", "Billing staff", "Auditor (view only)"],
    reports: [
      "Receivables ageing",
      "GST summary",
      "Profit & loss",
      "Expense by category",
    ],
    screens: [
      {
        name: "Dashboard",
        active: "Receivables & payables",
        kpis: [
          { label: "Invoiced (Mar)", value: "₹12.64 L" },
          { label: "Collected", value: "₹9.41 L" },
          { label: "Outstanding", value: "₹4.82 L" },
          { label: "Overdue invoices", value: "7" },
        ],
        chart: {
          title: "Invoiced vs collected (₹ lakh)",
          labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
          series: [
            { name: "Invoiced", values: [8.2, 9.1, 10.4, 9.8, 11.7, 12.6] },
            { name: "Collected", values: [7.5, 8.4, 9.2, 9.1, 10.3, 9.4] },
          ],
        },
        table: {
          title: "Recent invoices",
          cols: ["Invoice", "Customer", "Amount", "Status"],
          pillCol: 3,
          rows: [
            ["INV-0412", "Northwind Traders", "₹48,200", "Paid"],
            ["INV-0411", "Acme Fabrication", "₹1,12,500", "Due"],
            ["INV-0410", "Greenfield Stores", "₹27,800", "Overdue"],
            ["INV-0409", "Blue Orbit Services", "₹64,000", "Paid"],
          ],
        },
      },
      {
        name: "GST invoices",
        active: "GST invoicing & quotes",
        kpis: [
          { label: "Draft", value: "4" },
          { label: "Sent", value: "23" },
          { label: "Paid", value: "61" },
          { label: "GST payable", value: "₹1.12 L" },
        ],
        chart: {
          title: "GST collected (₹ thousand)",
          labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
          series: [{ name: "GST", values: [74, 82, 95, 88, 104, 112] }],
        },
        table: {
          title: "Invoice register",
          cols: ["No.", "Date", "Customer", "Total", "Status"],
          pillCol: 4,
          rows: [
            ["INV-0412", "12 Mar", "Northwind Traders", "₹48,200", "Paid"],
            ["INV-0411", "10 Mar", "Acme Fabrication", "₹1,12,500", "Due"],
            ["INV-0408", "07 Mar", "Greenfield Stores", "₹27,800", "Draft"],
          ],
        },
      },
    ],
  },

  // Tableau dashboards (live embeds, loaded only when opened)
  {
    id: "dash-retail",
    kind: "dashboard",
    name: "Retail Sales Analytics",
    domain: "analytics",
    status: "live",
    tagline: "Sales, category and store performance at a glance.",
    problem: "Sales data sits in spreadsheets and nobody sees trends in time.",
    solution:
      "An interactive dashboard that tracks revenue, profit, categories and regions, built on your own data.",
    bestFor: "Retail chains, distributors and multi-store businesses",
    modules: [
      "Revenue & profit KPIs",
      "Category analysis",
      "Regional view",
      "Filters & drill-down",
    ],
    image: "/images/performance-dashboard.webp",
    embedUrl:
      "https://public.tableau.com/views/RetailsSalesAnalytics/RetailsDashboard?:showVizHome=no&:embed=true",
  },
  {
    id: "dash-restaurant",
    kind: "dashboard",
    name: "Restaurant Sales Analysis",
    domain: "analytics",
    status: "live",
    tagline: "Menu, outlet and order trends for food businesses.",
    problem:
      "Owners cannot tell which dishes, hours and outlets actually make money.",
    solution:
      "A dashboard that ranks menu items, tracks peak hours and compares outlets so you can price and staff smarter.",
    bestFor: "Restaurants, cafes and cloud kitchens",
    modules: [
      "Menu performance",
      "Peak-hour analysis",
      "Outlet comparison",
      "Order trends",
    ],
    image: "/images/insights-report.webp",
    embedUrl:
      "https://public.tableau.com/views/RestaurantSalesAnalysis_17670989933760/RestaurantDB?:showVizHome=no&:embed=true",
  },
  {
    id: "dash-logistics",
    kind: "dashboard",
    name: "Logistics Performance",
    domain: "analytics",
    status: "live",
    tagline: "Delivery, route and cost visibility for fleets.",
    problem:
      "Delays and rising costs are noticed only after the month closes.",
    solution:
      "A dashboard that follows deliveries, delays, routes and cost per trip so issues surface while they can still be fixed.",
    bestFor: "Transporters, fleet owners and distribution teams",
    modules: [
      "Delivery status",
      "Delay analysis",
      "Route & cost view",
      "Driver and vehicle KPIs",
    ],
    image: "/images/interactive-dashboard.webp",
    embedUrl:
      "https://public.tableau.com/views/Logistics_17671662754140/LogisticsDB?:showVizHome=no&:embed=true",
  },
];

export const getDomainsInUse = () =>
  Object.keys(DOMAINS).filter((key) => products.some((p) => p.domain === key));

export const productWhatsappText = (product) =>
  product.kind === "dashboard"
    ? `Hi, I saw the ${product.name} dashboard and want something similar for my business.`
    : `Hi, I am interested in a solution like ${product.name}. I would like to discuss my requirement.`;
