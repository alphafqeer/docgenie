import { DocTemplate } from "./types";

export const invoicingTemplates: DocTemplate[] = [
  {
    id: "invoice",
    title: "Invoice",
    description: "Itemized invoice for goods or services with payment terms.",
    isPremium: false,
    content:
      "Invoice\n\nFrom: [Your Company Name]\nTo: [Client Name]\nInvoice No: [INV-0001]\nDate: [YYYY-MM-DD]\n\nItems:\n1. [Service/Product] — [Qty] x [Unit Price] = [Line Total]\n2. [Service/Product] — [Qty] x [Unit Price] = [Line Total]\n\nSubtotal: [Subtotal]\nTax ([Rate]%): [Tax Amount]\nTotal: [Total Amount]\n\nPayment Terms: Please pay within 30 days via bank transfer to [Bank Details]. Late payments may incur a [Late Fee]% fee.\n\nNotes: Thank you for your business. If you have questions about this invoice, contact [Contact Info].",
  },
  {
    id: "quotation",
    title: "Quotation",
    description: "Professional quotation/estimate outlining proposed services and pricing.",
    isPremium: false,
    content:
      "Quotation\n\nTo: [Client Name]\nDate: [YYYY-MM-DD]\nQuotation No: [Q-0001]\n\nScope of Work:\n- [Brief description of service or deliverable]\n- [Deliverable 2]\n\nEstimated Pricing:\n- [Service/Product] — [Qty] x [Unit Price] = [Line Total]\n\nSubtotal: [Subtotal]\nEstimated Taxes: [Tax Amount]\nEstimated Total: [Estimated Total]\n\nValidity: This quotation is valid for 30 days from the date above. Acceptance of this quotation constitutes agreement to the scope and payment terms.\n\nContact: [Contact Info]",
  },
  {
    id: "proforma-invoice",
    title: "Proforma Invoice",
    description: "Advance proforma invoice for pre-payment or customs purposes.",
    isPremium: false,
    content:
      "Proforma Invoice\n\nFrom: [Your Company Name]\nTo: [Client Name]\nProforma No: [PF-0001]\nDate: [YYYY-MM-DD]\n\nDescription of Goods/Services:\n- [Item] — [Qty] — Unit Price — [Line Total]\n\nTotal Amount Due: [Total Amount]\nCurrency: [Currency]\n\nTerms: This is a proforma invoice issued as a preliminary billing document. Payment received will be applied to the final invoice.\n\nBank Details: [Bank Name], [IBAN/Account], [SWIFT/BIC]\n",
  },
  {
    id: "payment-receipt",
    title: "Payment Receipt",
    description: "Official receipt confirming payment has been received.",
    isPremium: false,
    content:
      "Payment Receipt\n\nReceipt No: [RCPT-0001]\nDate: [YYYY-MM-DD]\nReceived From: [Client Name]\nAmount Received: [Amount] ([Currency])\nPayment Method: [Bank Transfer / Card / Cash]\nReference / Invoice No: [INV-0001]\n\nThank you. This receipt acknowledges that payment has been received in full for the goods/services described.\n\nContact: [Contact Info]",
  },
  {
    id: "credit-note",
    title: "Credit Note",
    description: "Issuance of a credit for returned goods or adjustments.",
    isPremium: false,
    content:
      "Credit Note\n\nCredit Note No: [CN-0001]\nDate: [Date]\n\nTo: [Client Name]\nReference Invoice: [Invoice No]\n\nReason for Credit: [Description]\nAmount Credited: [Amount]\n\nNotes: This credit may be applied against future invoices or refunded as agreed.\n\nAuthorized By: [Name]",
  },
  {
    id: "debit-note",
    title: "Debit Note",
    description: "Notification for additional charges or corrections to prior invoices.",
    isPremium: false,
    content:
      "Debit Note\n\nDebit Note No: [DN-0001]\nDate: [Date]\n\nTo: [Client Name]\nReference Invoice: [Invoice No]\n\nDetails of Adjustment:\n- [Description of charge] — Amount: [Amount]\n\nTotal Due: [Amount]\n\nPlease remit the additional amount within [Terms].",
  },
  {
    id: "statement-of-account",
    title: "Statement of Account",
    description: "Summary of transactions, invoices, payments, and outstanding balance.",
    isPremium: false,
    content:
      "Statement of Account\n\nAccount: [Client Name]\nPeriod: [From Date] to [To Date]\n\nSummary:\nOpening Balance: [Amount]\nInvoice(s): [List and amounts]\nPayment(s): [List and amounts]\nClosing Balance: [Amount]\n\nIf you have questions regarding this statement, please contact [Contact Info].",
  },
  {
    id: "recurring-invoice",
    title: "Recurring Invoice Template",
    description: "Template for subscription-based recurring billing.",
    isPremium: true,
    content:
      "Recurring Invoice\n\nFrom: [Your Company Name]\nTo: [Client Name]\nInvoice No: [INV-SUB-0001]\nBilling Period: [Start Date] to [End Date]\nDate: [YYYY-MM-DD]\n\nSubscription Details:\n- [Service Name] — [Monthly/Annual] — [Amount]\n- [Add-on Service] — [Amount]\n\nSubtotal: [Subtotal]\nTax ([Rate]%): [Tax Amount]\nTotal: [Total Amount]\n\nPayment Method: [Card ending in XXXX / Auto-debit]\nNext Billing Date: [Date]\n\nTo update payment method or cancel, visit [Portal URL] or contact [Support Email].",
  },
  {
    id: "purchase-order",
    title: "Purchase Order",
    description: "Formal order document for purchasing goods or services.",
    isPremium: true,
    content:
      "Purchase Order\n\nPO Number: [PO-0001]\nDate: [Date]\n\nFrom (Buyer):\n[Company Name]\n[Address]\n\nTo (Vendor):\n[Vendor Name]\n[Address]\n\nShip To:\n[Shipping Address]\n\nItems Ordered:\nDescription      | Qty | Unit $  | Total\n[Item 1]         | [X] | [Price] | [Total]\n[Item 2]         | [X] | [Price] | [Total]\n\nSubtotal: [Amount]\nShipping: [Amount]\nTax: [Amount]\nTotal: [Amount]\n\nPayment Terms: [Net 30 / Upon delivery]\nDelivery Date: [Expected Date]\n\nAuthorized By: ____________\nDate: ____________",
  },
  {
    id: "expense-report",
    title: "Expense Report",
    description: "Template for submitting and tracking business expenses.",
    isPremium: true,
    content:
      "Expense Report\n\nEmployee: [Name]\nDepartment: [Department]\nReporting Period: [Start] to [End]\nSubmission Date: [Date]\n\nExpenses:\nDate       | Description     | Category | Amount\n[Date]     | [Description]   | [Travel] | $[Amt]\n[Date]     | [Description]   | [Meals]  | $[Amt]\n[Date]     | [Description]   | [Other]  | $[Amt]\n\nTotal Expenses: $[Total]\nAdvances Received: $[Amount]\nAmount Due to Employee: $[Net Amount]\n\nAttachments: [X] receipts attached\n\nEmployee Signature: ____________\nDate: ____________\n\nManager Approval: ____________\nDate: ____________",
  },
  {
    id: "late-payment-notice",
    title: "Late Payment Notice",
    description: "Formal notice for overdue invoice payment.",
    isPremium: true,
    content:
      "Late Payment Notice\n\nDate: [Date]\n\nTo: [Client Name]\n[Client Address]\n\nRe: Overdue Invoice [Invoice No]\n\nDear [Client Name],\n\nThis notice is to inform you that payment for Invoice [Number] dated [Date] in the amount of $[Amount] is now [X] days overdue.\n\nOriginal Due Date: [Date]\nAmount Due: $[Amount]\nLate Fee: $[Amount]\nTotal Now Due: $[Total]\n\nPlease remit payment immediately to avoid further action. If payment has already been sent, please disregard this notice and accept our thanks.\n\nPayment can be made to:\n[Bank Details / Payment Link]\n\nQuestions? Contact [Name] at [Email/Phone].\n\nSincerely,\n[Your Name]\n[Your Company]",
  },
  {
    id: "payment-plan-agreement",
    title: "Payment Plan Agreement",
    description: "Agreement for structured payment of outstanding balances.",
    isPremium: true,
    content:
      "Payment Plan Agreement\n\nDate: [Date]\n\nCreditor: [Company Name]\nDebtor: [Client Name]\n\nTotal Amount Owed: $[Amount]\nFor: Invoice(s) [Numbers]\n\nPayment Schedule:\n1. $[Amount] due on [Date]\n2. $[Amount] due on [Date]\n3. $[Amount] due on [Date]\n\nTerms:\n1. Payments must be received by the due date\n2. Missed payment will result in [consequences]\n3. Interest rate on remaining balance: [X]%\n4. Full balance may be paid early without penalty\n\nDebtor Acknowledgment:\nI agree to the above payment schedule.\n\nDebtor Signature: ____________\nDate: ____________\n\nCreditor Signature: ____________\nDate: ____________",
  },
  {
    id: "budget-template",
    title: "Project Budget Template",
    description: "Comprehensive budget planning template for projects.",
    isPremium: true,
    content:
      "Project Budget\n\nProject Name: [Name]\nPrepared By: [Name]\nDate: [Date]\nBudget Period: [Start] to [End]\n\nRevenue/Funding:\n- [Source 1]: $[Amount]\n- [Source 2]: $[Amount]\nTotal Revenue: $[Total]\n\nExpenses:\n\nPersonnel:\n- Salaries: $[Amount]\n- Benefits: $[Amount]\n- Contractors: $[Amount]\nSubtotal: $[Amount]\n\nOperations:\n- Office/Rent: $[Amount]\n- Utilities: $[Amount]\n- Supplies: $[Amount]\nSubtotal: $[Amount]\n\nMarketing:\n- Advertising: $[Amount]\n- Events: $[Amount]\nSubtotal: $[Amount]\n\nTechnology:\n- Software: $[Amount]\n- Hardware: $[Amount]\nSubtotal: $[Amount]\n\nContingency (10%): $[Amount]\n\nTotal Expenses: $[Total]\n\nNet Budget: $[Revenue - Expenses]",
  },
  {
    id: "freelance-invoice",
    title: "Freelance Invoice",
    description: "Simple invoice template for freelancers and consultants.",
    isPremium: false,
    content:
      "Freelance Invoice\n\n[Your Name]\n[Your Address]\n[Email] | [Phone]\n\nBill To:\n[Client Name]\n[Client Company]\n[Client Address]\n\nInvoice #: [Number]\nDate: [Date]\nDue Date: [Date]\n\nProject: [Project Name]\n\nServices:\nDescription               | Hours | Rate    | Amount\n[Service description]     | [X]   | $[Rate] | $[Total]\n[Service description]     | [X]   | $[Rate] | $[Total]\n\nSubtotal: $[Amount]\nDiscount: -$[Amount]\nTotal Due: $[Amount]\n\nPayment Methods:\n- PayPal: [email]\n- Bank: [details]\n- Venmo: [handle]\n\nThank you for your business!",
  },
  {
    id: "refund-request",
    title: "Refund Request Form",
    description: "Customer form for requesting a refund.",
    isPremium: false,
    content:
      "Refund Request Form\n\nDate: [Date]\n\nCustomer Information:\nName: [Name]\nEmail: [Email]\nPhone: [Phone]\nOrder/Invoice Number: [Number]\n\nPurchase Details:\nDate of Purchase: [Date]\nProduct/Service: [Description]\nAmount Paid: $[Amount]\n\nReason for Refund:\n[ ] Product defective\n[ ] Wrong item received\n[ ] Service not as described\n[ ] Changed my mind\n[ ] Other: _______________\n\nDetailed Explanation:\n[Provide details about why you are requesting a refund]\n\nPreferred Refund Method:\n[ ] Original payment method\n[ ] Store credit\n[ ] Check\n\nCustomer Signature: ____________\nDate: ____________",
  },
  {
    id: "donation-receipt",
    title: "Donation Receipt",
    description: "Receipt for charitable donations for tax purposes.",
    isPremium: true,
    content:
      "Donation Receipt\n\n[Organization Name]\n[Address]\nTax ID: [EIN Number]\n\nReceipt #: [Number]\nDate: [Date]\n\nDonor Information:\nName: [Donor Name]\nAddress: [Donor Address]\n\nDonation Details:\nDate of Donation: [Date]\nAmount: $[Amount]\nPayment Method: [Cash/Check/Card/Other]\n\nDescription of Donation:\n[ ] Cash contribution\n[ ] Non-cash contribution: [Description]\n    Estimated Value: $[Amount]\n\nNo goods or services were provided in exchange for this contribution.\n\nThis receipt may be used for tax purposes. Please consult your tax advisor.\n\nAuthorized Signature: ____________\n[Organization Name]",
  },
];
