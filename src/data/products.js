import { EXTRAS } from "./productExtras";

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

const baseProducts = [
  {
    id: "buildx",
    kind: "product",
    name: "BuildX ERP",
    domain: "construction",
    status: "development",
    tagline: "A complete, SAP-class ERP for construction and infrastructure companies.",
    problem:
      "Tenders, project plans, site stores, machinery and accounts run in separate tools, so management sees the real project cost only after the damage is done.",
    solution:
      "One integrated ERP on a single connected database, from tender to final bill. Every module talks to the others, and you switch on only the modules your company needs.",
    bestFor:
      "Contractors, builders, EPC and infrastructure companies of any size",
    modules: [
      "Tender management",
      "Planning & scheduling",
      "Estimation & BOQ",
      "Procurement & stores",
      "Machinery & equipment",
      "Subcontractors & billing",
      "Accounts & finance",
      "HR & payroll",
    ],
    workflow: [
      "Tender",
      "Estimate & BOQ",
      "Plan & schedule",
      "Procure & store",
      "Execute & measure",
      "Bill & collect",
    ],
    roles: [
      "Tender manager",
      "Project manager",
      "Planning engineer",
      "Site engineer",
      "Store keeper",
      "Accounts",
      "Management",
    ],
    reports: [
      "Tender win / loss",
      "Budget vs actual",
      "Plan vs progress",
      "Machinery utilization",
      "Project cash flow",
    ],
    screens: [
      {
        name: "Project dashboard",
        active: "Planning & scheduling",
        kpis: [
          { label: "Active projects", value: "6" },
          { label: "Overall progress", value: "68%" },
          { label: "Budget used", value: "64%" },
          { label: "Open tenders", value: "11" },
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
        name: "Tender management",
        active: "Tender management",
        kpis: [
          { label: "Tenders tracked", value: "38" },
          { label: "Submitted (FY)", value: "21" },
          { label: "Won (FY)", value: "7" },
          { label: "Win rate", value: "33%" },
        ],
        chart: {
          title: "Tenders submitted vs won",
          labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
          series: [
            { name: "Submitted", values: [3, 4, 2, 5, 3, 4] },
            { name: "Won", values: [1, 0, 1, 2, 1, 2] },
          ],
        },
        table: {
          title: "Tender pipeline",
          cols: ["Tender", "Package", "Value", "Status"],
          pillCol: 3,
          rows: [
            ["TND-118", "Highway package", "₹48 Cr", "Submitted"],
            ["TND-117", "Water pipeline", "₹21 Cr", "Evaluating"],
            ["TND-114", "Bridge works", "₹36 Cr", "Won"],
            ["TND-110", "Metro civil", "₹92 Cr", "Lost"],
          ],
        },
      },
      {
        name: "Planning & progress",
        active: "Planning & scheduling",
        kpis: [
          { label: "Milestones due", value: "9" },
          { label: "On schedule", value: "74%" },
          { label: "Delayed activities", value: "6" },
          { label: "Resource clashes", value: "2" },
        ],
        chart: {
          type: "progress",
          title: "Progress by work package",
          labels: ["Excavation", "Foundation", "Structure", "Masonry", "Finishing"],
          series: [{ name: "Progress", values: [100, 92, 74, 46, 18] }],
        },
        table: {
          title: "Milestones",
          cols: ["Milestone", "Planned", "Forecast", "Status"],
          pillCol: 3,
          rows: [
            ["Foundation complete", "15 Mar", "15 Mar", "On track"],
            ["Slab 3 casting", "28 Mar", "04 Apr", "Delayed"],
            ["MEP rough-in", "10 Apr", "10 Apr", "On track"],
            ["Handover block A", "30 Apr", "02 May", "Pending"],
          ],
        },
      },
      {
        name: "Procurement & stores",
        active: "Procurement & stores",
        kpis: [
          { label: "Open indents", value: "9" },
          { label: "POs this month", value: "27" },
          { label: "Low-stock items", value: "11" },
          { label: "Stock value", value: "₹18.2 L" },
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
        name: "Machinery",
        active: "Machinery & equipment",
        kpis: [
          { label: "Machines", value: "46" },
          { label: "Utilization", value: "71%" },
          { label: "In maintenance", value: "5" },
          { label: "Fuel cost (Mar)", value: "₹9.8 L" },
        ],
        chart: {
          type: "line",
          title: "Fleet utilization % (weekly)",
          labels: ["W1", "W2", "W3", "W4", "W5", "W6"],
          series: [{ name: "Utilization", values: [64, 68, 71, 69, 73, 71] }],
        },
        table: {
          title: "Equipment log",
          cols: ["Machine", "Site", "Hours", "Status"],
          pillCol: 3,
          rows: [
            ["Excavator EX-04", "Site A", "182 h", "Active"],
            ["Crane CR-02", "Site B", "120 h", "In maintenance"],
            ["Mixer MX-11", "Site A", "96 h", "Active"],
            ["Roller RL-03", "Site C", "14 h", "Idle"],
          ],
        },
      },
      {
        name: "Subcontractors & billing",
        active: "Subcontractors & billing",
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
    tagline: "A complete hospital management system for small, mid-size and large hospitals.",
    problem:
      "Registration, doctor notes, labs, pharmacy and billing run on separate systems and registers, so patients wait longer, charges get missed and management has no live picture.",
    solution:
      "One integrated HMS that follows the patient from registration to discharge. Start with a clinic set-up and add IPD, OT, lab, radiology, insurance and multi-branch as the hospital grows.",
    bestFor:
      "Small clinics, mid-size nursing homes and large multi-branch hospitals",
    modules: [
      "Patient registration",
      "OPD & EMR",
      "IPD & beds",
      "OT & nursing",
      "Lab & radiology",
      "Pharmacy & stores",
      "Billing & insurance",
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
      "Administrator",
    ],
    reports: [
      "Daily collection",
      "Doctor-wise revenue",
      "Bed occupancy",
      "Pharmacy stock & expiry",
      "Insurance claim status",
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
        name: "OPD & EMR",
        active: "OPD & EMR",
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
        active: "IPD & beds",
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
        name: "Lab & radiology",
        active: "Lab & radiology",
        kpis: [
          { label: "Tests today", value: "212" },
          { label: "Pending reports", value: "18" },
          { label: "Critical alerts", value: "2" },
          { label: "Imaging scans", value: "37" },
        ],
        chart: {
          title: "Tests by department (today)",
          labels: ["Pathology", "Biochem", "Radiology", "Cardiology"],
          series: [{ name: "Tests", values: [86, 64, 37, 25] }],
        },
        table: {
          title: "Test orders",
          cols: ["Order", "Test", "Patient", "Status"],
          pillCol: 3,
          rows: [
            ["LB-5521", "CBC", "Patient A", "Done"],
            ["LB-5522", "Lipid profile", "Patient B", "Pending"],
            ["RD-2210", "Chest X-ray", "Patient C", "Done"],
            ["LB-5524", "Troponin", "Patient D", "Critical"],
          ],
        },
      },
      {
        name: "Pharmacy",
        active: "Pharmacy & stores",
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
    id: "org-operations",
    kind: "product",
    name: "Org Operations Suite",
    domain: "operations",
    status: "ready",
    tagline: "Tasks, approvals, attendance and assets in one workspace.",
    problem:
      "Tasks, approvals, leave and asset requests move through chats and spreadsheets, so work stalls and nobody can see what is pending or who owns it.",
    solution:
      "One workspace for tasks, approvals, attendance, assets and tickets, with role-based dashboards that show what is pending, who owns it and how long it has waited.",
    bestFor: "Growing companies, agencies and multi-branch teams",
    modules: [
      "Task management",
      "Approvals & workflows",
      "Attendance & leave",
      "Asset tracking",
      "Helpdesk tickets",
      "Documents & policies",
      "Role dashboards",
      "Reports & audit log",
    ],
    workflow: ["Request", "Review", "Approve", "Execute", "Close"],
    roles: ["Employee", "Team lead", "Manager", "HR", "Admin"],
    reports: [
      "Pending approvals ageing",
      "Attendance summary",
      "Asset allocation",
      "Ticket turnaround",
    ],
    screens: [
      {
        name: "Operations dashboard",
        active: "Role dashboards",
        kpis: [
          { label: "Open tasks", value: "86" },
          { label: "Pending approvals", value: "12" },
          { label: "On leave today", value: "5" },
          { label: "Open tickets", value: "9" },
        ],
        chart: {
          title: "Tasks created vs completed",
          labels: ["W1", "W2", "W3", "W4", "W5", "W6"],
          series: [
            { name: "Created", values: [52, 61, 58, 70, 66, 74] },
            { name: "Completed", values: [47, 58, 60, 63, 64, 71] },
          ],
        },
        table: {
          title: "Pending approvals",
          cols: ["Request", "Type", "Raised by", "Status"],
          pillCol: 3,
          rows: [
            ["REQ-318", "Purchase", "Team member A", "Pending"],
            ["REQ-317", "Leave", "Team member B", "Approved"],
            ["REQ-316", "Asset", "Team member C", "Pending"],
            ["REQ-312", "Expense", "Team member D", "Escalated"],
          ],
        },
      },
      {
        name: "Tasks",
        active: "Task management",
        kpis: [
          { label: "Assigned", value: "42" },
          { label: "In progress", value: "27" },
          { label: "Overdue", value: "6" },
          { label: "Done this week", value: "31" },
        ],
        chart: {
          type: "progress",
          title: "Completion by team",
          labels: ["Sales", "Operations", "Finance", "Support"],
          series: [{ name: "Completion", values: [82, 64, 91, 58] }],
        },
        table: {
          title: "Task board",
          cols: ["Task", "Owner", "Due", "Status"],
          pillCol: 3,
          rows: [
            ["Vendor onboarding", "Team A", "14 Mar", "In progress"],
            ["Monthly close", "Team C", "10 Mar", "Overdue"],
            ["Client report", "Team B", "12 Mar", "Done"],
            ["Policy update", "Team D", "18 Mar", "In progress"],
          ],
        },
      },
      {
        name: "Attendance & leave",
        active: "Attendance & leave",
        kpis: [
          { label: "Present", value: "48" },
          { label: "On leave", value: "5" },
          { label: "Late today", value: "3" },
          { label: "Pending leave", value: "4" },
        ],
        chart: {
          type: "line",
          title: "Attendance % (last 7 days)",
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          series: [{ name: "Attendance", values: [94, 96, 95, 92, 97, 93, 95] }],
        },
        table: {
          title: "Leave requests",
          cols: ["Employee", "Type", "Days", "Status"],
          pillCol: 3,
          rows: [
            ["Employee 01", "Casual", "2", "Pending"],
            ["Employee 02", "Sick", "1", "Approved"],
            ["Employee 03", "Earned", "5", "Pending"],
            ["Employee 04", "Casual", "1", "Approved"],
          ],
        },
      },
      {
        name: "Assets & tickets",
        active: "Helpdesk tickets",
        kpis: [
          { label: "Assets", value: "214" },
          { label: "Allocated", value: "187" },
          { label: "In repair", value: "6" },
          { label: "Open tickets", value: "9" },
        ],
        chart: {
          title: "Tickets by category",
          labels: ["IT", "Facilities", "HR", "Finance"],
          series: [{ name: "Tickets", values: [24, 11, 7, 5] }],
        },
        table: {
          title: "Recent tickets",
          cols: ["Ticket", "Category", "Raised by", "Status"],
          pillCol: 3,
          rows: [
            ["TKT-204", "IT", "Employee 05", "In progress"],
            ["TKT-203", "Facilities", "Employee 06", "Pending"],
            ["TKT-201", "HR", "Employee 07", "Done"],
            ["TKT-199", "IT", "Employee 08", "Done"],
          ],
        },
      },
    ],
  },
  {
    id: "production-reconciliation",
    kind: "product",
    name: "Production Reconciliation",
    domain: "operations",
    status: "ready",
    tagline: "Match planned production with what was actually made.",
    problem:
      "Output, material issued and wastage are recorded separately, so gaps between plan and reality show up only at month-end, if at all.",
    solution:
      "A reconciliation system that compares planned and actual output and material use for every shift and batch, flags variances automatically and routes them for review.",
    bestFor: "Small and mid-size manufacturers, food and packaging units",
    modules: [
      "Production plans",
      "Shift & batch entry",
      "Material consumption",
      "Wastage & scrap",
      "Variance review",
      "Yield analysis",
      "Shift reports",
      "Audit trail",
    ],
    workflow: [
      "Plan",
      "Issue material",
      "Record output",
      "Reconcile",
      "Review variance",
      "Close batch",
    ],
    roles: ["Planner", "Supervisor", "Store keeper", "Quality", "Plant manager"],
    reports: [
      "Plan vs actual output",
      "Yield by product",
      "Wastage trend",
      "Variance by shift",
    ],
    screens: [
      {
        name: "Reconciliation dashboard",
        active: "Production plans",
        kpis: [
          { label: "Planned output", value: "12,400" },
          { label: "Actual output", value: "11,870" },
          { label: "Yield", value: "95.7%" },
          { label: "Open variances", value: "8" },
        ],
        chart: {
          title: "Planned vs actual (units / day)",
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          series: [
            { name: "Planned", values: [2100, 2050, 2200, 2100, 2000, 1950] },
            { name: "Actual", values: [2010, 1980, 2120, 1990, 1890, 1880] },
          ],
        },
        table: {
          title: "Batch reconciliation",
          cols: ["Batch", "Planned", "Actual", "Variance", "Status"],
          pillCol: 4,
          rows: [
            ["BX-1042", "1,000", "1,000", "0", "Matched"],
            ["BX-1043", "1,200", "1,140", "-60", "Variance"],
            ["BX-1044", "900", "905", "+5", "Matched"],
            ["BX-1045", "1,100", "1,010", "-90", "Variance"],
          ],
        },
      },
      {
        name: "Material consumption",
        active: "Material consumption",
        kpis: [
          { label: "Materials tracked", value: "24" },
          { label: "Issued vs used", value: "98.2%" },
          { label: "Excess usage", value: "3" },
          { label: "Short issue", value: "2" },
        ],
        chart: {
          type: "variance",
          title: "Usage variance vs standard (kg)",
          labels: ["Flour", "Sugar", "Oil", "Packing", "Additive"],
          series: [{ name: "Variance", values: [-12, 8, -5, 22, -3] }],
        },
        table: {
          title: "Material reconciliation",
          cols: ["Material", "Standard", "Actual", "Status"],
          pillCol: 3,
          rows: [
            ["Flour (kg)", "1,200", "1,188", "Matched"],
            ["Sugar (kg)", "400", "408", "Variance"],
            ["Oil (l)", "260", "255", "Matched"],
            ["Packing (nos.)", "9,000", "9,022", "Variance"],
          ],
        },
      },
      {
        name: "Wastage & scrap",
        active: "Wastage & scrap",
        kpis: [
          { label: "Wastage today", value: "142 kg" },
          { label: "Wastage %", value: "1.9%" },
          { label: "Rework units", value: "64" },
          { label: "Scrap value", value: "₹8,400" },
        ],
        chart: {
          type: "line",
          title: "Wastage % (last 7 days)",
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          series: [{ name: "Wastage", values: [2.4, 2.1, 1.8, 2.2, 1.9, 1.7, 1.9] }],
        },
        table: {
          title: "Wastage log",
          cols: ["Batch", "Cause", "Qty", "Status"],
          pillCol: 3,
          rows: [
            ["BX-1043", "Sealing defect", "38 kg", "Pending"],
            ["BX-1044", "Spillage", "12 kg", "Approved"],
            ["BX-1045", "Quality reject", "55 kg", "Pending"],
            ["BX-1041", "Trimming", "21 kg", "Approved"],
          ],
        },
      },
      {
        name: "Variance review",
        active: "Variance review",
        kpis: [
          { label: "Open", value: "8" },
          { label: "Resolved this week", value: "21" },
          { label: "Avg. resolution", value: "6 h" },
          { label: "Escalated", value: "2" },
        ],
        chart: {
          type: "progress",
          title: "Variances resolved by line",
          labels: ["Line A", "Line B", "Line C", "Line D"],
          series: [{ name: "Resolved", values: [90, 74, 82, 61] }],
        },
        table: {
          title: "Review queue",
          cols: ["Batch", "Variance", "Reviewer", "Status"],
          pillCol: 3,
          rows: [
            ["BX-1043", "-60 units", "Supervisor", "Pending"],
            ["BX-1045", "-90 units", "Quality", "Escalated"],
            ["BX-1039", "+22 kg", "Store", "Resolved"],
            ["BX-1036", "-14 units", "Supervisor", "Resolved"],
          ],
        },
      },
    ],
  },
  {
    id: "store-reconciliation",
    kind: "product",
    name: "Store Reconciliation",
    domain: "retail",
    status: "ready",
    tagline: "Make the shelf, the system and the till agree.",
    problem:
      "Physical stock, system stock and daily cash rarely match, and stores learn about shrinkage and cash gaps long after they happen.",
    solution:
      "A store reconciliation system that compares physical counts with system stock and till cash with POS sales every day, highlights mismatches by store and item, and tracks each one to resolution.",
    bestFor: "Retail chains, supermarkets, pharmacies and multi-outlet businesses",
    modules: [
      "Stock counts",
      "Cash & POS reconciliation",
      "Shrinkage tracking",
      "Inter-store transfers",
      "Receiving & GRN",
      "Discrepancy resolution",
      "Store scorecards",
      "Audit trail",
    ],
    workflow: [
      "Count",
      "Compare",
      "Flag mismatch",
      "Investigate",
      "Adjust",
      "Close",
    ],
    roles: [
      "Store manager",
      "Cashier",
      "Auditor",
      "Area manager",
      "Head office",
    ],
    reports: [
      "Stock variance by store",
      "Cash short / over",
      "Shrinkage trend",
      "Transfers in transit",
    ],
    screens: [
      {
        name: "Store dashboard",
        active: "Store scorecards",
        kpis: [
          { label: "Stores", value: "12" },
          { label: "Matched today", value: "9" },
          { label: "Open mismatches", value: "14" },
          { label: "Cash short", value: "₹3,250" },
        ],
        chart: {
          type: "variance",
          title: "Cash short / over by store (₹)",
          labels: ["S1", "S2", "S3", "S4", "S5", "S6"],
          series: [{ name: "Variance", values: [0, -450, 120, -980, 60, -310] }],
        },
        table: {
          title: "Daily reconciliation",
          cols: ["Store", "POS sales", "Counted", "Status"],
          pillCol: 3,
          rows: [
            ["Store 01", "₹48,200", "₹48,200", "Matched"],
            ["Store 02", "₹39,600", "₹39,150", "Short"],
            ["Store 03", "₹52,800", "₹52,920", "Excess"],
            ["Store 04", "₹44,100", "₹43,120", "Short"],
          ],
        },
      },
      {
        name: "Stock count",
        active: "Stock counts",
        kpis: [
          { label: "Items counted", value: "1,860" },
          { label: "Match rate", value: "96.4%" },
          { label: "Shortages", value: "48" },
          { label: "Excess", value: "19" },
        ],
        chart: {
          type: "progress",
          title: "Count accuracy by category",
          labels: ["Grocery", "Dairy", "Personal", "Beverages", "Household"],
          series: [{ name: "Accuracy", values: [97, 94, 98, 95, 96] }],
        },
        table: {
          title: "Count variances",
          cols: ["Item", "System", "Counted", "Status"],
          pillCol: 3,
          rows: [
            ["Item 1042", "120", "118", "Short"],
            ["Item 2210", "64", "64", "Matched"],
            ["Item 3087", "40", "43", "Excess"],
            ["Item 1190", "210", "202", "Short"],
          ],
        },
      },
      {
        name: "Cash & POS",
        active: "Cash & POS reconciliation",
        kpis: [
          { label: "POS sales", value: "₹4.82 L" },
          { label: "Cash counted", value: "₹1.64 L" },
          { label: "UPI / card", value: "₹3.15 L" },
          { label: "Net variance", value: "-₹3,250" },
        ],
        chart: {
          title: "POS sales vs settled (₹ thousand)",
          labels: ["S1", "S2", "S3", "S4", "S5"],
          series: [
            { name: "POS sales", values: [48, 40, 53, 44, 36] },
            { name: "Settled", values: [48, 39, 53, 43, 36] },
          ],
        },
        table: {
          title: "Till reconciliation",
          cols: ["Till", "Expected", "Counted", "Status"],
          pillCol: 3,
          rows: [
            ["Till 01", "₹21,400", "₹21,400", "Matched"],
            ["Till 02", "₹18,250", "₹17,800", "Short"],
            ["Till 03", "₹24,100", "₹24,220", "Excess"],
            ["Till 04", "₹16,900", "₹16,900", "Matched"],
          ],
        },
      },
      {
        name: "Shrinkage & transfers",
        active: "Inter-store transfers",
        kpis: [
          { label: "Shrinkage (MTD)", value: "₹42,300" },
          { label: "In transit", value: "7" },
          { label: "Received today", value: "11" },
          { label: "Open investigations", value: "5" },
        ],
        chart: {
          type: "line",
          title: "Shrinkage % (weekly)",
          labels: ["W1", "W2", "W3", "W4", "W5", "W6"],
          series: [{ name: "Shrinkage", values: [1.4, 1.2, 1.3, 0.9, 1.0, 0.8] }],
        },
        table: {
          title: "Inter-store transfers",
          cols: ["Transfer", "Route", "Items", "Status"],
          pillCol: 3,
          rows: [
            ["TR-0412", "S1 → S3", "42", "Delivered"],
            ["TR-0413", "S2 → S4", "18", "Pending"],
            ["TR-0414", "S3 → S1", "65", "Delayed"],
            ["TR-0415", "S5 → S2", "30", "Delivered"],
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
      {
        name: "Ledgers",
        active: "Ledgers & trial balance",
        kpis: [
          { label: "Ledger accounts", value: "86" },
          { label: "Total debit", value: "₹1.42 Cr" },
          { label: "Total credit", value: "₹1.42 Cr" },
          { label: "Difference", value: "₹0" },
        ],
        chart: {
          title: "Debit vs credit (₹ lakh)",
          labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
          series: [
            { name: "Debit", values: [21, 23, 25, 22, 26, 25] },
            { name: "Credit", values: [21, 23, 25, 22, 26, 25] },
          ],
        },
        table: {
          title: "Trial balance",
          cols: ["Account", "Debit", "Credit"],
          rows: [
            ["Sales", "–", "₹68.4 L"],
            ["Trade receivables", "₹4.8 L", "–"],
            ["Salaries", "₹23.5 L", "–"],
            ["Rent", "₹9.2 L", "–"],
          ],
        },
      },
      {
        name: "Expenses",
        active: "Expense tracking",
        kpis: [
          { label: "Expenses (Mar)", value: "₹8.6 L" },
          { label: "Pending approval", value: "9" },
          { label: "Reimbursed", value: "₹86,000" },
          { label: "Largest head", value: "Salaries" },
        ],
        chart: {
          type: "progress",
          title: "Share of spend by category",
          labels: ["Salaries", "Rent", "Marketing", "Utilities", "Other"],
          series: [{ name: "Share", values: [46, 18, 14, 9, 13] }],
        },
        table: {
          title: "Expense claims",
          cols: ["Claim", "Category", "Amount", "Status"],
          pillCol: 3,
          rows: [
            ["EXP-221", "Travel", "₹12,400", "Approved"],
            ["EXP-222", "Marketing", "₹38,000", "Pending"],
            ["EXP-223", "Utilities", "₹9,650", "Paid"],
            ["EXP-224", "Office", "₹4,200", "Pending"],
          ],
        },
      },
      {
        name: "Financial reports",
        active: "Financial reports",
        kpis: [
          { label: "Revenue (YTD)", value: "₹68.4 L" },
          { label: "Expenses (YTD)", value: "₹51.2 L" },
          { label: "Net profit", value: "₹17.2 L" },
          { label: "Margin", value: "25.1%" },
        ],
        chart: {
          title: "Revenue vs expenses (₹ lakh)",
          labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
          series: [
            { name: "Revenue", values: [9.8, 10.6, 11.2, 12.1, 12.5, 12.2] },
            { name: "Expenses", values: [7.9, 8.2, 8.8, 8.6, 9.1, 8.6] },
          ],
        },
        table: {
          title: "Profit & loss summary",
          cols: ["Line item", "Amount", "vs last year"],
          rows: [
            ["Sales", "₹68.4 L", "+12%"],
            ["Cost of services", "₹38.6 L", "+9%"],
            ["Operating expenses", "₹12.6 L", "+6%"],
            ["Net profit", "₹17.2 L", "+21%"],
          ],
        },
      },
    ],
  },

  {
    id: "shepherduite",
    kind: "product",
    name: "Shepherduite",
    domain: "community",
    status: "development",
    tagline: "Church and community management, from members to giving.",
    problem:
      "Member records, attendance, giving and follow-ups are kept in registers and spreadsheets, so visitors are missed and leaders lack a clear picture of the community.",
    solution:
      "A community management system that keeps families, attendance, giving, groups and pastoral follow-ups in one place, with simple dashboards for leaders and treasurers.",
    bestFor: "Churches, ministries, trusts and community organizations",
    modules: [
      "Members & families",
      "Attendance",
      "Giving & tithes",
      "Events & calendar",
      "Cell groups",
      "Pastoral care",
      "Announcements",
      "Reports",
    ],
    workflow: [
      "Welcome visitor",
      "Register",
      "Join a group",
      "Follow up",
      "Engage & serve",
      "Report",
    ],
    roles: ["Pastor", "Administrator", "Group leader", "Treasurer", "Volunteer"],
    reports: [
      "Attendance trends",
      "Giving summary",
      "Member growth",
      "Follow-up list",
    ],
    screens: [
      {
        name: "Community dashboard",
        active: "Reports",
        kpis: [
          { label: "Members", value: "1,240" },
          { label: "Sunday attendance", value: "612" },
          { label: "Giving (Mar)", value: "₹4.8 L" },
          { label: "New visitors", value: "14" },
        ],
        chart: {
          type: "line",
          title: "Weekly attendance (last 8 weeks)",
          labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
          series: [{ name: "Attendance", values: [540, 565, 552, 590, 574, 601, 598, 612] }],
        },
        table: {
          title: "New visitors",
          cols: ["Visitor", "Visited", "Follow-up", "Status"],
          pillCol: 3,
          rows: [
            ["Visitor A", "10 Mar", "Call", "Pending"],
            ["Visitor B", "10 Mar", "Visit", "Done"],
            ["Visitor C", "03 Mar", "Call", "Done"],
            ["Visitor D", "03 Mar", "Visit", "Pending"],
          ],
        },
      },
      {
        name: "Members & families",
        active: "Members & families",
        kpis: [
          { label: "Families", value: "412" },
          { label: "Active members", value: "1,090" },
          { label: "Inactive (3 mo+)", value: "86" },
          { label: "Joined this year", value: "64" },
        ],
        chart: {
          type: "progress",
          title: "Members by age group",
          labels: ["Children", "Youth", "Adults", "Seniors"],
          series: [{ name: "Share", values: [18, 24, 44, 14] }],
        },
        table: {
          title: "Member directory",
          cols: ["ID", "Member", "Group", "Status"],
          pillCol: 3,
          rows: [
            ["M-0231", "Member A", "Group 3", "Active"],
            ["M-0232", "Member B", "Group 1", "Active"],
            ["M-0233", "Member C", "Group 5", "Pending"],
            ["M-0234", "Member D", "Group 2", "Active"],
          ],
        },
      },
      {
        name: "Giving",
        active: "Giving & tithes",
        kpis: [
          { label: "Total (Mar)", value: "₹4.8 L" },
          { label: "Tithes", value: "₹3.1 L" },
          { label: "Offerings", value: "₹1.2 L" },
          { label: "Pledges due", value: "₹0.5 L" },
        ],
        chart: {
          title: "Monthly giving (₹ lakh)",
          labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
          series: [{ name: "Giving", values: [3.9, 4.1, 5.6, 4.2, 4.5, 4.8] }],
        },
        table: {
          title: "Recent receipts",
          cols: ["Receipt", "Type", "Amount", "Status"],
          pillCol: 3,
          rows: [
            ["R-5120", "Tithe", "₹12,000", "Done"],
            ["R-5121", "Offering", "₹2,500", "Done"],
            ["R-5122", "Pledge", "₹20,000", "Pending"],
            ["R-5123", "Tithe", "₹8,000", "Done"],
          ],
        },
      },
      {
        name: "Groups & care",
        active: "Pastoral care",
        kpis: [
          { label: "Cell groups", value: "28" },
          { label: "Avg. group size", value: "11" },
          { label: "Follow-ups due", value: "9" },
          { label: "Visits this week", value: "17" },
        ],
        chart: {
          type: "progress",
          title: "Attendance by group (%)",
          labels: ["Group 1", "Group 2", "Group 3", "Group 4", "Group 5"],
          series: [{ name: "Attendance", values: [88, 76, 92, 64, 81] }],
        },
        table: {
          title: "Care follow-ups",
          cols: ["Member", "Reason", "Assigned", "Status"],
          pillCol: 3,
          rows: [
            ["Member E", "Hospital visit", "Leader 1", "Pending"],
            ["Member F", "Absent 3 weeks", "Leader 2", "Pending"],
            ["Member G", "New baby", "Leader 3", "Done"],
            ["Member H", "Bereavement", "Pastor", "Done"],
          ],
        },
      },
    ],
  },
  {
    id: "school-management",
    kind: "product",
    name: "School Management System",
    domain: "education",
    status: "blueprint",
    tagline: "Admissions, fees, attendance and exams in one system.",
    problem:
      "Admissions, fee collection, attendance and marks live in separate registers, so office staff re-enter data and parents get information late.",
    solution:
      "A school management system that keeps student records, fees, attendance and exams together, with parent notifications and ready report cards.",
    bestFor: "Schools, colleges and coaching institutes",
    modules: [
      "Admissions",
      "Student records",
      "Attendance",
      "Fees & receipts",
      "Exams & report cards",
      "Timetable",
      "Parent communication",
      "Reports",
    ],
    workflow: [
      "Enquiry",
      "Admission",
      "Fee set-up",
      "Attendance",
      "Exams",
      "Report card",
    ],
    roles: ["Principal", "Office staff", "Teacher", "Accountant", "Parent"],
    reports: [
      "Fee collection & dues",
      "Attendance by class",
      "Exam results",
      "Admissions funnel",
    ],
    screens: [
      {
        name: "School dashboard",
        active: "Admissions",
        kpis: [
          { label: "Students", value: "1,180" },
          { label: "Present today", value: "1,094" },
          { label: "Fees (Mar)", value: "₹9.6 L" },
          { label: "Dues", value: "₹3.1 L" },
        ],
        chart: {
          title: "Fees collected vs due (₹ lakh)",
          labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
          series: [
            { name: "Collected", values: [8.2, 7.6, 8.9, 9.4, 9.1, 9.6] },
            { name: "Due", values: [2.1, 2.8, 2.4, 2.9, 3.3, 3.1] },
          ],
        },
        table: {
          title: "Admission enquiries",
          cols: ["Enquiry", "Class", "Source", "Status"],
          pillCol: 3,
          rows: [
            ["ENQ-410", "Class 1", "Walk-in", "New"],
            ["ENQ-409", "Class 6", "Referral", "Approved"],
            ["ENQ-408", "Class 9", "Website", "Pending"],
            ["ENQ-407", "Class 3", "Walk-in", "Approved"],
          ],
        },
      },
      {
        name: "Fees",
        active: "Fees & receipts",
        kpis: [
          { label: "Invoices raised", value: "1,180" },
          { label: "Paid", value: "912" },
          { label: "Overdue", value: "86" },
          { label: "Collected (Mar)", value: "₹9.6 L" },
        ],
        chart: {
          type: "progress",
          title: "Fee collection by class",
          labels: ["Class 1-3", "Class 4-6", "Class 7-8", "Class 9-10"],
          series: [{ name: "Collected", values: [91, 84, 79, 72] }],
        },
        table: {
          title: "Fee receipts",
          cols: ["Receipt", "Student", "Amount", "Status"],
          pillCol: 3,
          rows: [
            ["FR-3301", "Student 0142", "₹12,500", "Paid"],
            ["FR-3302", "Student 0377", "₹12,500", "Due"],
            ["FR-3303", "Student 0518", "₹15,000", "Overdue"],
            ["FR-3304", "Student 0206", "₹12,500", "Paid"],
          ],
        },
      },
    ],
  },
  {
    id: "fleet-trips",
    kind: "product",
    name: "Fleet & Trip Management",
    domain: "logistics",
    status: "blueprint",
    tagline: "Trips, drivers, fuel and freight billing in one system.",
    problem:
      "Trip sheets, fuel slips and driver payments are tracked on paper, so delays, fuel leakage and unbilled trips go unnoticed.",
    solution:
      "A fleet system that tracks every trip from dispatch to proof of delivery, ties in fuel and maintenance, and generates freight bills automatically.",
    bestFor: "Transporters, fleet owners and distribution businesses",
    modules: [
      "Trips & dispatch",
      "Driver management",
      "Vehicles & maintenance",
      "Fuel tracking",
      "POD & documents",
      "Freight billing",
      "Route costing",
      "Reports",
    ],
    workflow: [
      "Dispatch",
      "In transit",
      "Delivered",
      "POD upload",
      "Freight bill",
      "Payment",
    ],
    roles: ["Dispatcher", "Driver", "Fleet manager", "Accounts", "Customer"],
    reports: [
      "Trip profitability",
      "Fuel efficiency",
      "Maintenance due",
      "Driver performance",
    ],
    screens: [
      {
        name: "Fleet dashboard",
        active: "Trips & dispatch",
        kpis: [
          { label: "Active trips", value: "24" },
          { label: "Delivered today", value: "18" },
          { label: "Delayed", value: "3" },
          { label: "Fuel cost (Mar)", value: "₹6.4 L" },
        ],
        chart: {
          title: "Trips planned vs completed",
          labels: ["W1", "W2", "W3", "W4", "W5", "W6"],
          series: [
            { name: "Planned", values: [96, 102, 110, 108, 115, 120] },
            { name: "Completed", values: [90, 99, 104, 104, 111, 116] },
          ],
        },
        table: {
          title: "Live trips",
          cols: ["Trip", "Route", "Vehicle", "Status"],
          pillCol: 3,
          rows: [
            ["TRP-882", "City A → City B", "V-04", "In progress"],
            ["TRP-883", "City C → City A", "V-11", "Delayed"],
            ["TRP-880", "City B → City D", "V-07", "Delivered"],
            ["TRP-879", "City A → City E", "V-02", "Delivered"],
          ],
        },
      },
      {
        name: "Vehicles & fuel",
        active: "Vehicles & maintenance",
        kpis: [
          { label: "Vehicles", value: "32" },
          { label: "Service due", value: "4" },
          { label: "Avg. mileage", value: "4.6 km/l" },
          { label: "Fuel cost / km", value: "₹18" },
        ],
        chart: {
          type: "line",
          title: "Fleet mileage (km/l, weekly)",
          labels: ["W1", "W2", "W3", "W4", "W5", "W6"],
          series: [{ name: "Mileage", values: [4.3, 4.4, 4.6, 4.5, 4.7, 4.6] }],
        },
        table: {
          title: "Maintenance schedule",
          cols: ["Vehicle", "Last service", "Next due", "Status"],
          pillCol: 3,
          rows: [
            ["V-02", "12 Jan", "12 Apr", "OK"],
            ["V-04", "02 Dec", "02 Mar", "Overdue"],
            ["V-07", "20 Feb", "20 May", "OK"],
            ["V-11", "05 Dec", "05 Mar", "Due"],
          ],
        },
      },
    ],
  },
  {
    id: "property-crm",
    kind: "product",
    name: "Property & Lead Management",
    domain: "realEstate",
    status: "blueprint",
    tagline: "Leads, bookings, payment schedules and rent in one place.",
    problem:
      "Enquiries, site visits, bookings and instalment follow-ups live in notebooks and chats, so hot leads go cold and payments slip.",
    solution:
      "A property CRM that follows each lead to booking, manages unit availability and payment schedules, and automates rent and instalment reminders.",
    bestFor: "Builders, brokers, property managers and rental owners",
    modules: [
      "Lead CRM",
      "Unit inventory",
      "Bookings",
      "Payment schedules",
      "Rent collection",
      "Maintenance tickets",
      "Documents",
      "Reports",
    ],
    workflow: [
      "Enquiry",
      "Site visit",
      "Booking",
      "Payment plan",
      "Agreement",
      "Handover",
    ],
    roles: [
      "Sales executive",
      "Sales manager",
      "Accounts",
      "Property manager",
      "Owner",
    ],
    reports: [
      "Lead funnel",
      "Inventory availability",
      "Collections due",
      "Rent ageing",
    ],
    screens: [
      {
        name: "Sales dashboard",
        active: "Lead CRM",
        kpis: [
          { label: "New leads", value: "46" },
          { label: "Site visits", value: "18" },
          { label: "Bookings (Mar)", value: "7" },
          { label: "Collections due", value: "₹22.4 L" },
        ],
        chart: {
          title: "Leads vs site visits",
          labels: ["W1", "W2", "W3", "W4", "W5", "W6"],
          series: [
            { name: "Leads", values: [34, 41, 38, 47, 44, 46] },
            { name: "Site visits", values: [12, 15, 14, 19, 16, 18] },
          ],
        },
        table: {
          title: "Lead pipeline",
          cols: ["Lead", "Project", "Source", "Stage"],
          pillCol: 3,
          rows: [
            ["Lead 2041", "Tower A", "Website", "New"],
            ["Lead 2040", "Villa Plots", "Referral", "Visited"],
            ["Lead 2037", "Tower B", "Walk-in", "Booked"],
            ["Lead 2035", "Tower A", "Ad campaign", "Visited"],
          ],
        },
      },
      {
        name: "Inventory",
        active: "Unit inventory",
        kpis: [
          { label: "Total units", value: "120" },
          { label: "Available", value: "46" },
          { label: "Booked", value: "58" },
          { label: "On hold", value: "16" },
        ],
        chart: {
          type: "progress",
          title: "Units sold by tower",
          labels: ["Tower A", "Tower B", "Villas", "Plots"],
          series: [{ name: "Sold", values: [82, 61, 45, 38] }],
        },
        table: {
          title: "Unit availability",
          cols: ["Unit", "Type", "Price", "Status"],
          pillCol: 3,
          rows: [
            ["A-1204", "3 BHK", "₹92 L", "Available"],
            ["A-1205", "2 BHK", "₹68 L", "Held"],
            ["B-0802", "2 BHK", "₹66 L", "Booked"],
            ["B-0903", "3 BHK", "₹89 L", "Available"],
          ],
        },
      },
    ],
  },
  {
    id: "restaurant-pos",
    kind: "product",
    name: "Restaurant POS & Inventory",
    domain: "hospitality",
    status: "blueprint",
    tagline: "Billing, kitchen orders and stock for restaurants and cafes.",
    problem:
      "Orders reach the kitchen on paper, stock is guessed, and nobody knows the true cost of each dish, so margins quietly leak.",
    solution:
      "A restaurant system that connects table orders, kitchen tickets, GST billing and inventory, and costs every recipe so you see the margin on each dish.",
    bestFor: "Restaurants, cafes, cloud kitchens and small hotels",
    modules: [
      "Table & KOT",
      "Billing & GST",
      "Menu & pricing",
      "Recipe costing",
      "Inventory & purchase",
      "Kitchen display",
      "Staff & shifts",
      "Reports",
    ],
    workflow: [
      "Order",
      "KOT to kitchen",
      "Prepare",
      "Serve",
      "Bill",
      "Stock deduction",
    ],
    roles: ["Cashier", "Waiter", "Chef", "Manager", "Owner"],
    reports: [
      "Item-wise sales",
      "Recipe cost & margin",
      "Stock usage",
      "Daily sales summary",
    ],
    screens: [
      {
        name: "Restaurant dashboard",
        active: "Table & KOT",
        kpis: [
          { label: "Orders today", value: "214" },
          { label: "Sales", value: "₹68,400" },
          { label: "Avg. bill", value: "₹320" },
          { label: "Open tables", value: "9" },
        ],
        chart: {
          type: "line",
          title: "Sales by hour (₹ thousand)",
          labels: ["11", "12", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
          series: [{ name: "Sales", values: [3, 7, 12, 9, 4, 3, 5, 9, 14, 11, 6] }],
        },
        table: {
          title: "Open orders",
          cols: ["Table", "Items", "Amount", "Status"],
          pillCol: 3,
          rows: [
            ["T-04", "5", "₹1,240", "In progress"],
            ["T-07", "3", "₹690", "Served"],
            ["T-02", "6", "₹1,810", "In progress"],
            ["T-09", "2", "₹420", "Pending"],
          ],
        },
      },
      {
        name: "Recipe costing",
        active: "Recipe costing",
        kpis: [
          { label: "Menu items", value: "86" },
          { label: "Avg. food cost", value: "31%" },
          { label: "Low-stock items", value: "7" },
          { label: "Wastage today", value: "₹1,240" },
        ],
        chart: {
          type: "progress",
          title: "Food cost % by category",
          labels: ["Starters", "Mains", "Breads", "Desserts", "Drinks"],
          series: [{ name: "Food cost", values: [28, 34, 22, 36, 18] }],
        },
        table: {
          title: "Dish margins",
          cols: ["Dish", "Cost", "Price", "Margin"],
          pillCol: 3,
          rows: [
            ["Dish 01", "₹92", "₹260", "OK"],
            ["Dish 02", "₹140", "₹280", "Low"],
            ["Dish 03", "₹38", "₹120", "OK"],
            ["Dish 04", "₹66", "₹150", "OK"],
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

export const products = baseProducts.map((p) => ({
  ...p,
  ...(EXTRAS[p.id] || {}),
}));

export const getDomainsInUse = () =>
  Object.keys(DOMAINS).filter((key) => products.some((p) => p.domain === key));

export const productWhatsappText = (product) =>
  product.kind === "dashboard"
    ? `Hi, I saw the ${product.name} dashboard and want something similar for my business.`
    : `Hi, I am interested in a solution like ${product.name}. I would like to discuss my requirement.`;
