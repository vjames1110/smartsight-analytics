// Look and feel, mobile app screens and (for the flagship suites) the module
// catalogue and plan presets. Merged into the product list in products.js.

export const EXTRAS = {
  buildx: {
    variant: "darkside",
    theme: { accent: "#c2410c", dark: "#1c1917", tint: "#ffedd5", accent2: "#f59e0b" },
    platforms: "Web + Mobile",
    editionNote:
      "BuildX is modular. Every company picks the modules it needs, and the plan follows those choices, along with the number of users and sites.",
    mobile: {
      app: "BuildX Site",
      screens: [
        {
          name: "Daily progress",
          title: "Site: Tower A",
          kpis: [
            { label: "Progress", value: "72%" },
            { label: "Labour today", value: "148" },
          ],
          items: [
            { title: "Slab 3 casting", sub: "Planned 28 Mar", tag: "Delayed" },
            { title: "Brickwork L2", sub: "86% complete", tag: "On track" },
            { title: "Plumbing rough-in", sub: "Starts 02 Apr", tag: "Pending" },
          ],
          tabs: ["Home", "DPR", "Stores", "Approvals"],
          activeTab: 1,
          action: "+ New DPR",
        },
        {
          name: "Material request",
          title: "Stores",
          kpis: [
            { label: "Open indents", value: "9" },
            { label: "Low stock", value: "11" },
          ],
          items: [
            { title: "Cement (bags)", sub: "In stock 820", tag: "OK" },
            { title: "TMT 12 mm", sub: "In stock 1,150 kg", tag: "Low" },
            { title: "Bricks", sub: "In stock 4,200", tag: "Low" },
          ],
          tabs: ["Home", "DPR", "Stores", "Approvals"],
          activeTab: 2,
          action: "+ Indent",
        },
        {
          name: "Approvals",
          title: "Approvals",
          kpis: [
            { label: "Pending", value: "6" },
            { label: "Approved today", value: "14" },
          ],
          items: [
            { title: "PO-0233 Aggregates", sub: "₹2.1 L", tag: "Pending" },
            { title: "RA-016 Plumbing", sub: "₹2.2 L", tag: "Pending" },
            { title: "Leave: Site engineer", sub: "2 days", tag: "Approved" },
          ],
          tabs: ["Home", "DPR", "Stores", "Approvals"],
          activeTab: 3,
        },
      ],
    },
    moduleGroups: [
      {
        title: "Core platform",
        core: true,
        modules: [
          { name: "Users, roles & permissions", desc: "Who can see and do what" },
          { name: "Approvals & workflow", desc: "Multi-level approval chains" },
          { name: "Reports & MIS dashboards", desc: "Live management reports" },
          { name: "Mobile site app", desc: "DPR, requests and approvals on site" },
        ],
      },
      {
        title: "Pre-construction",
        modules: [
          { name: "Tender management", desc: "Pipeline, bid prep, EMD / BG, win-loss" },
          { name: "Estimation & BOQ", desc: "Rate analysis, BOQ and cost estimates" },
          { name: "Contracts & client management", desc: "Work orders, variations, agreements" },
        ],
      },
      {
        title: "Planning & control",
        modules: [
          { name: "Planning & scheduling", desc: "WBS, Gantt, milestones, resources" },
          { name: "Budget & cost control", desc: "Budget vs actual per project" },
          { name: "Site progress & DPR", desc: "Daily reports and measurements" },
        ],
      },
      {
        title: "Supply chain",
        modules: [
          { name: "Procurement", desc: "Indent, quotes, PO, GRN, vendors" },
          { name: "Stores & inventory", desc: "Multi-site stock, issues, transfers" },
          { name: "Subcontractor management", desc: "Work orders, RA bills, retention" },
        ],
      },
      {
        title: "Resources",
        modules: [
          { name: "Machinery & equipment", desc: "Fleet, usage, fuel, maintenance" },
          { name: "Labour & workforce", desc: "Attendance, contractors, wages" },
          { name: "HR & payroll", desc: "Employees, leave, salary, statutory" },
        ],
      },
      {
        title: "Finance",
        modules: [
          { name: "Client billing", desc: "RA bills, escalation, certification" },
          { name: "Accounts & finance", desc: "GL, payables, receivables, banking" },
          { name: "Statutory compliance", desc: "GST, TDS, PF / ESI support" },
        ],
      },
      {
        title: "Quality & safety",
        modules: [
          { name: "QA / QC", desc: "Inspections, checklists, NCRs" },
          { name: "Safety & HSE", desc: "Incidents, audits, toolbox talks" },
          { name: "Document management", desc: "Drawings, revisions, transmittals" },
        ],
      },
    ],
    presets: [
      {
        name: "Small contractor",
        modules: [
          "Estimation & BOQ",
          "Site progress & DPR",
          "Procurement",
          "Stores & inventory",
          "Client billing",
        ],
      },
      {
        name: "Mid-size company",
        modules: [
          "Tender management",
          "Estimation & BOQ",
          "Planning & scheduling",
          "Budget & cost control",
          "Site progress & DPR",
          "Procurement",
          "Stores & inventory",
          "Subcontractor management",
          "Machinery & equipment",
          "Labour & workforce",
          "Client billing",
          "Accounts & finance",
        ],
      },
      {
        name: "Large / EPC",
        modules: "all",
      },
    ],
  },

  medicore: {
    variant: "topnav",
    theme: { accent: "#0e7490", dark: "#164e63", tint: "#cffafe", accent2: "#22c55e" },
    platforms: "Web + Mobile",
    editionNote:
      "MediCore scales with the hospital. Start with a clinic set-up and add modules, beds, doctors and branches as you grow. The plan follows the modules you opt for.",
    mobile: {
      app: "MediCore",
      screens: [
        {
          name: "Doctor app",
          title: "Today's OPD",
          kpis: [
            { label: "Appointments", value: "24" },
            { label: "Waiting", value: "5" },
          ],
          items: [
            { title: "Patient A · T-041", sub: "Fever, 3 days", tag: "In consult" },
            { title: "Patient B · T-042", sub: "Follow-up", tag: "Waiting" },
            { title: "Patient C · T-043", sub: "New visit", tag: "Waiting" },
          ],
          tabs: ["OPD", "IPD", "Reports", "Profile"],
          activeTab: 0,
        },
        {
          name: "Patient app",
          title: "My health",
          kpis: [
            { label: "Next visit", value: "14 Mar" },
            { label: "Reports", value: "3 new" },
          ],
          items: [
            { title: "Dr. Rao · General", sub: "Book appointment", tag: "Available" },
            { title: "Lipid profile", sub: "Report ready", tag: "Done" },
            { title: "Bill B-7731", sub: "₹1,850", tag: "Paid" },
          ],
          tabs: ["Home", "Book", "Reports", "Bills"],
          activeTab: 0,
          action: "+ Book",
        },
        {
          name: "Ward nurse app",
          title: "Ward round",
          kpis: [
            { label: "Beds", value: "18" },
            { label: "Meds due", value: "7" },
          ],
          items: [
            { title: "ICU / 3", sub: "Vitals due 10:30", tag: "Critical" },
            { title: "Private / 12", sub: "Medication 11:00", tag: "Pending" },
            { title: "General / 7", sub: "Discharge today", tag: "Due" },
          ],
          tabs: ["Ward", "Vitals", "Meds", "Notes"],
          activeTab: 0,
        },
      ],
    },
    moduleGroups: [
      {
        title: "Core platform",
        core: true,
        modules: [
          { name: "Users, roles & audit log", desc: "Role-based access and a full audit trail" },
          { name: "Reports & MIS dashboards", desc: "Live management reports" },
          { name: "Doctor & patient mobile apps", desc: "Appointments, reports and bills on mobile" },
        ],
      },
      {
        title: "Front office",
        modules: [
          { name: "Patient registration (UHID)", desc: "Unique patient ID and demographics" },
          { name: "Appointments & tokens", desc: "Booking, queue and display boards" },
        ],
      },
      {
        title: "Clinical",
        modules: [
          { name: "OPD & EMR", desc: "Consultations, prescriptions, records" },
          { name: "IPD & bed management", desc: "Admission, wards, transfers, discharge" },
          { name: "Nursing station", desc: "Vitals, medication rounds, notes" },
          { name: "OT management", desc: "Theatre scheduling and surgery notes" },
          { name: "Emergency & casualty", desc: "Triage and rapid registration" },
          { name: "Telemedicine", desc: "Video consults and e-prescriptions" },
        ],
      },
      {
        title: "Diagnostics",
        modules: [
          { name: "Laboratory (LIS)", desc: "Orders, samples, results, reports" },
          { name: "Radiology", desc: "Imaging orders and reports" },
          { name: "Blood bank", desc: "Donors, stock and issue" },
        ],
      },
      {
        title: "Pharmacy & stores",
        modules: [
          { name: "Pharmacy", desc: "Dispensing, batches, expiry alerts" },
          { name: "Inventory & purchase", desc: "Hospital stores and vendor orders" },
        ],
      },
      {
        title: "Billing & finance",
        modules: [
          { name: "Billing", desc: "OPD / IPD billing, packages, deposits" },
          { name: "Insurance & TPA claims", desc: "Pre-auth, claims and settlements" },
          { name: "Accounts", desc: "Ledgers, payables, receivables" },
          { name: "Doctor payouts", desc: "Fee share and commission" },
        ],
      },
      {
        title: "Administration",
        modules: [
          { name: "Staff, rosters & HR", desc: "Duty rosters and attendance" },
          { name: "Payroll", desc: "Salary and statutory deductions" },
          { name: "Multi-branch management", desc: "Many sites on one system" },
        ],
      },
    ],
    presets: [
      {
        name: "Clinic / small hospital",
        modules: [
          "Patient registration (UHID)",
          "Appointments & tokens",
          "OPD & EMR",
          "Pharmacy",
          "Laboratory (LIS)",
          "Billing",
        ],
      },
      {
        name: "Nursing home / mid-size",
        modules: [
          "Patient registration (UHID)",
          "Appointments & tokens",
          "OPD & EMR",
          "IPD & bed management",
          "Nursing station",
          "OT management",
          "Laboratory (LIS)",
          "Radiology",
          "Pharmacy",
          "Inventory & purchase",
          "Billing",
          "Insurance & TPA claims",
          "Accounts",
        ],
      },
      {
        name: "Large / multi-branch",
        modules: "all",
      },
    ],
  },

  "org-operations": {
    variant: "sidebar",
    theme: { accent: "#4f46e5", dark: "#1e1b4b", tint: "#e0e7ff", accent2: "#f59e0b" },
    platforms: "Web + Mobile",
    mobile: {
      app: "Team Hub",
      screens: [
        {
          name: "My tasks",
          title: "My tasks",
          kpis: [
            { label: "Due today", value: "5" },
            { label: "Overdue", value: "1" },
          ],
          items: [
            { title: "Vendor onboarding", sub: "Due 14 Mar", tag: "In progress" },
            { title: "Monthly close", sub: "Due 10 Mar", tag: "Overdue" },
            { title: "Client report", sub: "Due 12 Mar", tag: "Done" },
          ],
          tabs: ["Tasks", "Approvals", "Leave", "Profile"],
          activeTab: 0,
          action: "+ Task",
        },
        {
          name: "Approvals",
          title: "Approvals",
          kpis: [
            { label: "Pending", value: "4" },
            { label: "Approved", value: "18" },
          ],
          items: [
            { title: "REQ-318 Purchase", sub: "Team member A", tag: "Pending" },
            { title: "REQ-317 Leave", sub: "Team member B", tag: "Approved" },
            { title: "REQ-312 Expense", sub: "Team member D", tag: "Escalated" },
          ],
          tabs: ["Tasks", "Approvals", "Leave", "Profile"],
          activeTab: 1,
        },
      ],
    },
  },

  "production-reconciliation": {
    variant: "darkside",
    theme: { accent: "#475569", dark: "#0f172a", tint: "#e2e8f0", accent2: "#f59e0b" },
    platforms: "Web + Mobile",
    mobile: {
      app: "Shift Floor",
      screens: [
        {
          name: "Shift entry",
          title: "Shift B · Line 2",
          kpis: [
            { label: "Planned", value: "2,100" },
            { label: "Actual", value: "1,980" },
          ],
          items: [
            { title: "BX-1043 Batch", sub: "Variance -60", tag: "Variance" },
            { title: "BX-1044 Batch", sub: "Variance +5", tag: "Matched" },
            { title: "Wastage: sealing", sub: "38 kg", tag: "Pending" },
          ],
          tabs: ["Shift", "Material", "Wastage", "Alerts"],
          activeTab: 0,
          action: "+ Output",
        },
        {
          name: "Variance alerts",
          title: "Alerts",
          kpis: [
            { label: "Open", value: "8" },
            { label: "Escalated", value: "2" },
          ],
          items: [
            { title: "BX-1045 -90 units", sub: "Quality review", tag: "Escalated" },
            { title: "BX-1043 -60 units", sub: "Supervisor", tag: "Pending" },
            { title: "BX-1039 +22 kg", sub: "Store", tag: "Resolved" },
          ],
          tabs: ["Shift", "Material", "Wastage", "Alerts"],
          activeTab: 3,
        },
      ],
    },
  },

  "store-reconciliation": {
    variant: "topnav",
    theme: { accent: "#be185d", dark: "#500724", tint: "#fce7f3", accent2: "#f59e0b" },
    platforms: "Web + Mobile",
    mobile: {
      app: "Store Audit",
      screens: [
        {
          name: "Stock count",
          title: "Count: Aisle 4",
          kpis: [
            { label: "Counted", value: "124" },
            { label: "Mismatch", value: "6" },
          ],
          items: [
            { title: "Item 1042", sub: "System 120 · Counted 118", tag: "Short" },
            { title: "Item 2210", sub: "System 64 · Counted 64", tag: "Matched" },
            { title: "Item 3087", sub: "System 40 · Counted 43", tag: "Excess" },
          ],
          tabs: ["Count", "Cash", "Transfers", "Report"],
          activeTab: 0,
          action: "Scan item",
        },
        {
          name: "Cash close",
          title: "Day-end cash",
          kpis: [
            { label: "Expected", value: "₹21,400" },
            { label: "Counted", value: "₹21,400" },
          ],
          items: [
            { title: "Till 01", sub: "Cashier A", tag: "Matched" },
            { title: "Till 02", sub: "Cashier B · -₹450", tag: "Short" },
            { title: "Till 03", sub: "Cashier C · +₹120", tag: "Excess" },
          ],
          tabs: ["Count", "Cash", "Transfers", "Report"],
          activeTab: 1,
        },
      ],
    },
  },

  "accounts-billing": {
    variant: "sidebar",
    theme: { accent: "#1f7663", dark: "#0f172a", tint: "#e7f5ef", accent2: "#f8c14a" },
    platforms: "Web + Mobile",
    mobile: {
      app: "Bill Book",
      screens: [
        {
          name: "Receivables",
          title: "Receivables",
          kpis: [
            { label: "Outstanding", value: "₹4.82 L" },
            { label: "Overdue", value: "7" },
          ],
          items: [
            { title: "INV-0412 Northwind", sub: "₹48,200", tag: "Paid" },
            { title: "INV-0411 Acme", sub: "₹1,12,500", tag: "Due" },
            { title: "INV-0410 Greenfield", sub: "₹27,800", tag: "Overdue" },
          ],
          tabs: ["Home", "Invoices", "Expenses", "Reports"],
          activeTab: 0,
          action: "+ Invoice",
        },
        {
          name: "Create invoice",
          title: "New invoice",
          kpis: [
            { label: "Subtotal", value: "₹42,000" },
            { label: "GST 18%", value: "₹7,560" },
          ],
          items: [
            { title: "Consulting, 12 h", sub: "₹30,000", tag: "" },
            { title: "Support plan", sub: "₹12,000", tag: "" },
            { title: "Send via WhatsApp", sub: "Customer: Acme", tag: "Draft" },
          ],
          tabs: ["Home", "Invoices", "Expenses", "Reports"],
          activeTab: 1,
        },
      ],
    },
  },

  shepherduite: {
    variant: "topnav",
    theme: { accent: "#7c3aed", dark: "#2e1065", tint: "#ede9fe", accent2: "#f59e0b" },
    platforms: "Web + Mobile",
    mobile: {
      app: "Shepherd",
      screens: [
        {
          name: "Leader app",
          title: "My cell group",
          kpis: [
            { label: "Members", value: "12" },
            { label: "Present", value: "9" },
          ],
          items: [
            { title: "Member A", sub: "Present", tag: "Done" },
            { title: "Member E", sub: "Hospital visit due", tag: "Pending" },
            { title: "Member F", sub: "Absent 3 weeks", tag: "Pending" },
          ],
          tabs: ["Group", "Check-in", "Care", "Events"],
          activeTab: 0,
        },
        {
          name: "Member app",
          title: "Welcome",
          kpis: [
            { label: "Next event", value: "Sun 9 am" },
            { label: "My giving", value: "₹12,000" },
          ],
          items: [
            { title: "Sunday service", sub: "Check in", tag: "Available" },
            { title: "Youth retreat", sub: "Register", tag: "Pending" },
            { title: "Receipt R-5120", sub: "Tithe", tag: "Done" },
          ],
          tabs: ["Home", "Events", "Give", "Profile"],
          activeTab: 0,
          action: "Give",
        },
      ],
    },
  },

  "school-management": {
    variant: "sidebar",
    theme: { accent: "#2563eb", dark: "#1e3a8a", tint: "#dbeafe", accent2: "#f59e0b" },
    platforms: "Web + Mobile",
    mobile: {
      app: "School Connect",
      screens: [
        {
          name: "Parent app",
          title: "Student 0142",
          kpis: [
            { label: "Attendance", value: "96%" },
            { label: "Fees due", value: "₹0" },
          ],
          items: [
            { title: "Attendance", sub: "Present today", tag: "Done" },
            { title: "Term fee", sub: "Paid 02 Mar", tag: "Paid" },
            { title: "Maths test", sub: "Result: 42 / 50", tag: "Done" },
          ],
          tabs: ["Home", "Fees", "Results", "Notices"],
          activeTab: 0,
        },
        {
          name: "Teacher app",
          title: "Class 6 · Today",
          kpis: [
            { label: "Present", value: "38" },
            { label: "Absent", value: "2" },
          ],
          items: [
            { title: "Mark attendance", sub: "Period 1", tag: "Done" },
            { title: "Homework: Science", sub: "Assign", tag: "Pending" },
            { title: "Unit test marks", sub: "Enter", tag: "Pending" },
          ],
          tabs: ["Class", "Marks", "Homework", "Notices"],
          activeTab: 0,
          action: "+ Notice",
        },
      ],
    },
  },

  "fleet-trips": {
    variant: "darkside",
    theme: { accent: "#a16207", dark: "#422006", tint: "#fef9c3", accent2: "#0f172a" },
    platforms: "Web + Mobile",
    mobile: {
      app: "Driver",
      screens: [
        {
          name: "Driver app",
          title: "Trip TRP-882",
          kpis: [
            { label: "Distance left", value: "212 km" },
            { label: "ETA", value: "16:40" },
          ],
          items: [
            { title: "City A → City B", sub: "Vehicle V-04", tag: "In progress" },
            { title: "Fuel stop", sub: "Add fuel slip", tag: "Pending" },
            { title: "Proof of delivery", sub: "Photo + signature", tag: "Pending" },
          ],
          tabs: ["Trip", "Fuel", "Docs", "Help"],
          activeTab: 0,
          action: "Upload POD",
        },
        {
          name: "Dispatcher",
          title: "Live trips",
          kpis: [
            { label: "Active", value: "24" },
            { label: "Delayed", value: "3" },
          ],
          items: [
            { title: "TRP-883", sub: "City C → City A", tag: "Delayed" },
            { title: "TRP-882", sub: "City A → City B", tag: "In progress" },
            { title: "TRP-880", sub: "City B → City D", tag: "Delivered" },
          ],
          tabs: ["Trips", "Vehicles", "Drivers", "Bills"],
          activeTab: 0,
        },
      ],
    },
  },

  "property-crm": {
    variant: "sidebar",
    theme: { accent: "#0f766e", dark: "#134e4a", tint: "#ccfbf1", accent2: "#f97316" },
    platforms: "Web + Mobile",
    mobile: {
      app: "Sales Desk",
      screens: [
        {
          name: "Sales app",
          title: "My leads",
          kpis: [
            { label: "New today", value: "6" },
            { label: "Visits", value: "3" },
          ],
          items: [
            { title: "Lead 2041 · Tower A", sub: "Call today", tag: "New" },
            { title: "Lead 2040 · Plots", sub: "Visit 11 am", tag: "Visited" },
            { title: "Lead 2037 · Tower B", sub: "Agreement", tag: "Booked" },
          ],
          tabs: ["Leads", "Visits", "Units", "Profile"],
          activeTab: 0,
          action: "+ Lead",
        },
        {
          name: "Unit availability",
          title: "Tower A",
          kpis: [
            { label: "Available", value: "46" },
            { label: "On hold", value: "16" },
          ],
          items: [
            { title: "A-1204 · 3 BHK", sub: "₹92 L", tag: "Available" },
            { title: "A-1205 · 2 BHK", sub: "₹68 L", tag: "Held" },
            { title: "A-1206 · 2 BHK", sub: "₹66 L", tag: "Booked" },
          ],
          tabs: ["Leads", "Visits", "Units", "Profile"],
          activeTab: 2,
        },
      ],
    },
  },

  "restaurant-pos": {
    variant: "topnav",
    theme: { accent: "#dc2626", dark: "#450a0a", tint: "#fee2e2", accent2: "#f59e0b" },
    platforms: "Web + Mobile",
    mobile: {
      app: "Waiter",
      screens: [
        {
          name: "Waiter app",
          title: "Table T-04",
          kpis: [
            { label: "Items", value: "5" },
            { label: "Bill", value: "₹1,240" },
          ],
          items: [
            { title: "Paneer Tikka x2", sub: "Sent to kitchen", tag: "In progress" },
            { title: "Butter Naan x4", sub: "Ready", tag: "Served" },
            { title: "Fresh Lime x2", sub: "Add note", tag: "Pending" },
          ],
          tabs: ["Tables", "Menu", "KOT", "Bill"],
          activeTab: 1,
          action: "Send KOT",
        },
        {
          name: "Owner app",
          title: "Today",
          kpis: [
            { label: "Sales", value: "₹68,400" },
            { label: "Orders", value: "214" },
          ],
          items: [
            { title: "Top dish", sub: "Paneer Tikka · 38", tag: "" },
            { title: "Low stock", sub: "Paneer 4 kg", tag: "Low" },
            { title: "Wastage", sub: "₹1,240", tag: "Pending" },
          ],
          tabs: ["Today", "Menu", "Stock", "Reports"],
          activeTab: 0,
        },
      ],
    },
  },
};
