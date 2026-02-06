import { DocTemplate } from "./types";

const DISCLAIMER = "\n\nDisclaimer: This template is for general informational purposes and may require legal review.";

export const legalTemplates: DocTemplate[] = [
  {
    id: "legal-notice-payment",
    title: "Legal Notice for Payment",
    description: "Formal legal notice demanding payment for overdue invoices.",
    isPremium: false,
    content:
      "Legal Notice for Payment\n\nDate: [Date]\n\nTo: [Debtor Name]\n\nSubject: Demand for Payment — Invoice [Invoice No]" +
      "\n\nDear [Debtor Name],\n\nThis serves as a formal demand for payment of the outstanding amount of [Amount] under Invoice [Invoice No], dated [Invoice Date]. Despite prior reminders on [Reminder Dates], the amount remains unpaid. Please remit the full outstanding amount within 7 days from the date of this notice to avoid further legal action.\n\nIf payment has already been made, please provide proof of payment to [Contact Info]." +
      DISCLAIMER,
  },
  {
    id: "legal-notice-breach-of-contract",
    title: "Legal Notice — Breach of Contract",
    description: "Notice alleging breach of contractual obligations and requesting remedy.",
    isPremium: false,
    content:
      "Notice of Breach of Contract\n\nDate: [Date]\n\nTo: [Counterparty Name]\n\nSubject: Breach of Contract — [Contract Reference]" +
      "\n\nDear [Name],\n\nWe refer to the Agreement dated [Date]. It has come to our attention that you have failed to perform the following obligations: [Describe breach]. We hereby demand that you cure the breach within [X] days, failing which we reserve the right to pursue all available legal remedies including damages and specific performance." +
      DISCLAIMER,
  },
  {
    id: "consumer-complaint",
    title: "Consumer Complaint",
    description: "Complaint letter to a vendor or service provider for consumer issues.",
    isPremium: false,
    content:
      "Consumer Complaint\n\nDate: [Date]\n\nTo: [Vendor / Service Provider]\n\nSubject: Complaint Regarding [Product/Service]" +
      "\n\nDear Sir/Madam,\n\nI purchased [Product/Service] on [Date]. The following issues were observed: [Description]. I request a refund/replacement/repair as appropriate. Please respond within 14 days to resolve this matter amicably." +
      DISCLAIMER,
  },
  {
    id: "demand-letter",
    title: "Demand Letter",
    description: "Clear demand letter requesting performance or payment before legal action.",
    isPremium: false,
    content:
      "Demand Letter\n\nDate: [Date]\n\nTo: [Recipient]\n\nSubject: Demand for [Payment / Performance]" +
      "\n\nDear [Name],\n\nThis letter demands that you [pay/perform] the outstanding obligation of [describe obligation] within [X] days. If you fail to comply, we will initiate legal proceedings without further notice." +
      DISCLAIMER,
  },
  {
    id: "cease-and-desist",
    title: "Cease and Desist",
    description: "Letter demanding an immediate stop to infringing or harmful activity.",
    isPremium: false,
    content:
      "Cease and Desist\n\nDate: [Date]\n\nTo: [Name]\n\nSubject: Cease and Desist Notice" +
      "\n\nYou are hereby instructed to cease and desist the activities described as [Describe activity] which infringe upon [rights/agreements]. If you do not immediately stop the conduct, we will take appropriate legal action." +
      DISCLAIMER,
  },
  {
    id: "complaint-to-authority",
    title: "Complaint to Authority",
    description: "Formal complaint addressed to a regulatory or government authority.",
    isPremium: false,
    content:
      "Complaint to Authority\n\nDate: [Date]\n\nTo: [Authority Name]\n\nSubject: Complaint Regarding [Issue]" +
      "\n\nI wish to lodge a formal complaint regarding [describe issue], including supporting information: [Evidence]. I request the authority to investigate and take appropriate action." +
      DISCLAIMER,
  },
  {
    id: "response-to-legal-notice",
    title: "Response to Legal Notice",
    description: "Structured response to a received legal notice addressing each claim.",
    isPremium: true,
    content:
      "Response to Legal Notice\n\nDate: [Date]\n\nTo: [Sender Name]\n\nSubject: Response to Notice Dated [Date]" +
      "\n\nWe refer to your notice dated [Date]. The factual and legal position is as follows: [Detailed response]. We request that you review the enclosed evidence and advise if you are willing to discuss resolution prior to litigation." +
      DISCLAIMER,
  },
  {
    id: "settlement-agreement-draft",
    title: "Settlement Agreement Draft",
    description: "Basic settlement agreement framework for dispute resolution.",
    isPremium: true,
    content:
      "Settlement Agreement\n\nDate: [Date]\n\nParties: [Party A] and [Party B]\n\nRecitals: [Background of dispute]\n\nTerms:\n1. Payment: [Amount] to be paid by [Date].\n2. Release: Each party releases the other from claims related to [subject].\n3. Confidentiality: Terms shall remain confidential.\n\nSignatures:\n[Party A]\n[Party B]" +
      DISCLAIMER,
  },
  {
    id: "power-of-attorney-general",
    title: "General Power of Attorney",
    description: "Document granting broad authority to act on someone's behalf.",
    isPremium: true,
    content:
      "General Power of Attorney\n\nI, [Principal Name], of [Address], hereby appoint [Agent Name] as my Attorney-in-Fact to act on my behalf in the following matters:\n\n1. Financial transactions\n2. Real property matters\n3. Legal proceedings\n4. Business operations\n\nThis power of attorney shall remain effective until [Date/Revoked].\n\nPrincipal Signature: ____________\nDate: ____________\nWitness 1: ____________\nWitness 2: ____________\nNotary: ____________" +
      DISCLAIMER,
  },
  {
    id: "power-of-attorney-limited",
    title: "Limited Power of Attorney",
    description: "Document granting specific, limited authority for defined purposes.",
    isPremium: true,
    content:
      "Limited Power of Attorney\n\nI, [Principal Name], grant [Agent Name] authority ONLY to:\n\n[Specific Action, e.g., \"Sell the property at [Address]\" or \"Sign documents related to [Transaction]\"]\n\nThis authority is limited to the above purpose and expires on [Date].\n\nPrincipal Signature: ____________\nDate: ____________\nWitness: ____________\nNotary: ____________" +
      DISCLAIMER,
  },
  {
    id: "simple-will",
    title: "Simple Last Will and Testament",
    description: "Basic will template for straightforward estate distribution.",
    isPremium: true,
    content:
      "Last Will and Testament\n\nI, [Full Legal Name], of [City, State], being of sound mind, declare this my Last Will:\n\n1. Revocation: I revoke all prior wills.\n\n2. Executor: I appoint [Executor Name] as Executor.\n\n3. Debts: Pay all debts and funeral expenses.\n\n4. Bequests:\n   - [Asset] to [Beneficiary]\n   - [Asset] to [Beneficiary]\n\n5. Residuary Estate: All remaining assets to [Beneficiary].\n\nTestator Signature: ____________\nDate: ____________\nWitness 1: ____________\nWitness 2: ____________" +
      DISCLAIMER,
  },
  {
    id: "living-will",
    title: "Living Will / Advance Directive",
    description: "Document expressing healthcare wishes if incapacitated.",
    isPremium: true,
    content:
      "Living Will (Advance Healthcare Directive)\n\nI, [Full Name], make this directive regarding my medical care:\n\nIf I am terminally ill or in a persistent vegetative state with no reasonable expectation of recovery, I direct that:\n\n[ ] Life-sustaining treatment be withheld/withdrawn\n[ ] I receive comfort care only\n[ ] I do/do not want artificial nutrition/hydration\n\nHealthcare Agent: [Name], [Phone]\nAlternate Agent: [Name], [Phone]\n\nSigned: ____________\nDate: ____________\nWitness 1: ____________\nWitness 2: ____________" +
      DISCLAIMER,
  },
  {
    id: "residential-lease-agreement",
    title: "Residential Lease Agreement",
    description: "Standard lease agreement for residential rental properties.",
    isPremium: true,
    content:
      "Residential Lease Agreement\n\nLandlord: [Name]\nTenant: [Name]\nProperty: [Address]\n\n1. Term: [Start Date] to [End Date]\n2. Rent: $[Amount] due on the [X]th of each month\n3. Security Deposit: $[Amount]\n4. Utilities: [Tenant/Landlord responsible for which]\n5. Pets: [Allowed/Not Allowed]\n6. Maintenance: [Responsibilities]\n7. Termination: [Notice requirements]\n\nLandlord Signature: ____________\nTenant Signature: ____________\nDate: ____________" +
      DISCLAIMER,
  },
  {
    id: "bill-of-sale-vehicle",
    title: "Vehicle Bill of Sale",
    description: "Document transferring ownership of a vehicle.",
    isPremium: true,
    content:
      "Vehicle Bill of Sale\n\nSeller: [Name, Address]\nBuyer: [Name, Address]\n\nVehicle Information:\n- Year: [Year]\n- Make: [Make]\n- Model: [Model]\n- VIN: [VIN]\n- Odometer: [Miles]\n\nSale Price: $[Amount]\nPayment Method: [Cash/Check/Financing]\n\nThe seller certifies the vehicle is sold AS-IS and transfers all rights to the buyer.\n\nSeller Signature: ____________\nBuyer Signature: ____________\nDate: ____________" +
      DISCLAIMER,
  },
  {
    id: "promissory-note",
    title: "Promissory Note",
    description: "Written promise to pay a specified sum on demand or at a set time.",
    isPremium: true,
    content:
      "Promissory Note\n\nBorrower: [Name]\nLender: [Name]\nPrincipal Amount: $[Amount]\nDate: [Date]\n\nFor value received, Borrower promises to pay Lender:\n\n1. Principal: $[Amount]\n2. Interest: [X]% per annum\n3. Payment Schedule: [Monthly payments of $X / Lump sum on Date]\n4. Due Date: [Final payment date]\n5. Late Fee: [Amount] if payment is more than [X] days late\n\nBorrower Signature: ____________\nDate: ____________\nWitness: ____________" +
      DISCLAIMER,
  },
  {
    id: "affidavit-general",
    title: "General Affidavit",
    description: "Sworn statement of facts for legal or official purposes.",
    isPremium: true,
    content:
      "Affidavit\n\nState of [State]\nCounty of [County]\n\nI, [Affiant Name], being duly sworn, depose and state:\n\n1. I am over 18 years of age and competent to testify.\n\n2. [Statement of facts - numbered paragraphs]\n\n3. [Additional facts]\n\nI declare under penalty of perjury that the foregoing is true and correct.\n\nAffiant Signature: ____________\nDate: ____________\n\nSworn before me on [Date]\nNotary Public: ____________\nMy Commission Expires: ____________" +
      DISCLAIMER,
  },
  {
    id: "privacy-policy-template",
    title: "Privacy Policy Template",
    description: "Standard privacy policy for websites and applications.",
    isPremium: true,
    content:
      "Privacy Policy\n\n[Company Name]\nLast Updated: [Date]\n\n1. Information We Collect\n- Personal information: [name, email, phone]\n- Usage data: [browsing history, device info]\n- Cookies and tracking technologies\n\n2. How We Use Your Information\n- To provide and improve our services\n- To communicate with you\n- To comply with legal obligations\n\n3. Information Sharing\nWe do not sell your personal information. We may share data with:\n- Service providers\n- Legal authorities when required\n\n4. Your Rights\n- Access your data\n- Request deletion\n- Opt out of marketing\n\n5. Contact Us\n[Email]\n[Address]" +
      DISCLAIMER,
  },
  {
    id: "terms-of-service",
    title: "Terms of Service Template",
    description: "Standard terms of service for websites and apps.",
    isPremium: true,
    content:
      "Terms of Service\n\n[Company Name]\nEffective Date: [Date]\n\n1. Acceptance of Terms\nBy using our service, you agree to these terms.\n\n2. Description of Service\n[Describe what your service does]\n\n3. User Accounts\n- You must provide accurate information\n- You are responsible for account security\n- Accounts are non-transferable\n\n4. Acceptable Use\nYou agree not to:\n- Violate any laws\n- Infringe intellectual property\n- Transmit harmful content\n\n5. Limitation of Liability\n[Standard limitation clause]\n\n6. Termination\nWe may terminate access for violations.\n\n7. Contact\n[Email]" +
      DISCLAIMER,
  },
  {
    id: "copyright-notice",
    title: "Copyright Notice",
    description: "Standard copyright notice for content protection.",
    isPremium: false,
    content:
      "Copyright Notice\n\n© [Year] [Owner Name]. All Rights Reserved.\n\nThe content, design, graphics, and other materials on [Website/Product] are protected by copyright law. No part of this [website/product] may be reproduced, distributed, or transmitted in any form without prior written permission from [Owner Name].\n\nFor permissions, contact: [Email]" +
      DISCLAIMER,
  },
  {
    id: "trademark-notice",
    title: "Trademark Notice",
    description: "Notice protecting trademark rights.",
    isPremium: false,
    content:
      "Trademark Notice\n\n[Brand Name]™ is a trademark of [Company Name].\n\nAll trademarks, service marks, trade names, and logos displayed are the property of their respective owners. Unauthorized use of any trademark displayed here is strictly prohibited.\n\nFor trademark inquiries, contact: [Email]" +
      DISCLAIMER,
  },
];
