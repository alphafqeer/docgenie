import { DocTemplate } from "./types";

const DISCLAIMER = "\n\nDisclaimer: This template is for general informational purposes. Real estate transactions should be reviewed by a qualified professional.";

export const realestateTemplates: DocTemplate[] = [
  {
    id: "rental-application",
    title: "Rental Application",
    description: "Application form for prospective tenants.",
    isPremium: false,
    content:
      "Rental Application\n\nProperty Address: [Address]\nDesired Move-In Date: [Date]\nMonthly Rent: $[Amount]\n\nApplicant Information:\nFull Name: ____________________\nDate of Birth: ____________________\nSSN (last 4): ____________________\nPhone: ____________________\nEmail: ____________________\nCurrent Address: ____________________\nHow long at current address: ____________________\n\nEmployment Information:\nEmployer: ____________________\nPosition: ____________________\nMonthly Income: $____________________\nEmployer Phone: ____________________\n\nPrevious Landlord:\nName: ____________________\nPhone: ____________________\nReason for Leaving: ____________________\n\nReferences (2):\n1. Name: _____________ Phone: _____________\n2. Name: _____________ Phone: _____________\n\nI authorize background and credit checks.\n\nApplicant Signature: ____________\nDate: ____________" +
      DISCLAIMER,
  },
  {
    id: "residential-lease-comprehensive",
    title: "Comprehensive Residential Lease",
    description: "Detailed lease agreement for residential properties.",
    isPremium: true,
    content:
      "Residential Lease Agreement\n\nThis Lease is entered into on [Date] between:\nLandlord: [Name], [Address]\nTenant: [Name]\n\nProperty: [Address]\n\n1. TERM: [Start Date] to [End Date]\n\n2. RENT: $[Amount] per month, due on the [X]th\n   Late fee: $[Amount] if paid after [grace period]\n\n3. SECURITY DEPOSIT: $[Amount]\n   To be returned within [X] days of move-out\n\n4. UTILITIES:\n   Landlord pays: [List]\n   Tenant pays: [List]\n\n5. OCCUPANTS: Limited to [X] persons\n\n6. PETS: [Allowed/Not allowed]\n   Pet deposit: $[Amount]\n\n7. MAINTENANCE:\n   Tenant responsible for: [List]\n   Landlord responsible for: [List]\n\n8. ENTRY: Landlord may enter with [X] hours notice\n\n9. SUBLETTING: [Allowed with consent / Not allowed]\n\n10. TERMINATION: [Notice requirements]\n\nLandlord Signature: ____________ Date: ____\nTenant Signature: ____________ Date: ____" +
      DISCLAIMER,
  },
  {
    id: "property-management-agreement",
    title: "Property Management Agreement",
    description: "Agreement between property owner and management company.",
    isPremium: true,
    content:
      "Property Management Agreement\n\nDate: [Date]\n\nOwner: [Name]\nProperty Manager: [Company Name]\nProperty: [Address]\n\n1. TERM: [Start] to [End], renewable [annually/automatically]\n\n2. MANAGER RESPONSIBILITIES:\n   - Collect rent and security deposits\n   - Handle tenant inquiries and complaints\n   - Arrange maintenance and repairs up to $[Amount]\n   - Screen prospective tenants\n   - Provide monthly financial statements\n\n3. OWNER RESPONSIBILITIES:\n   - Maintain property insurance\n   - Fund major repairs\n   - Pay property taxes\n\n4. COMPENSATION:\n   Management fee: [X]% of monthly rent\n   Leasing fee: [X]% of first month's rent\n   Renewal fee: $[Amount]\n\n5. RESERVE FUND: Owner shall maintain $[Amount]\n\n6. TERMINATION: [X] days written notice\n\nOwner Signature: ____________\nManager Signature: ____________\nDate: ____________" +
      DISCLAIMER,
  },
  {
    id: "home-inspection-report",
    title: "Home Inspection Report",
    description: "Template for documenting property inspection findings.",
    isPremium: true,
    content:
      "Home Inspection Report\n\nProperty: [Address]\nInspection Date: [Date]\nInspector: [Name], License #[Number]\nClient: [Name]\n\nProperty Type: [Single Family / Condo / etc.]\nYear Built: [Year]\nSquare Feet: [Sq Ft]\n\nEXTERIOR\n- Roof: [Condition - Good/Fair/Poor] [Notes]\n- Gutters: [Condition] [Notes]\n- Siding: [Condition] [Notes]\n- Foundation: [Condition] [Notes]\n- Driveway: [Condition] [Notes]\n\nINTERIOR\n- Walls/Ceilings: [Condition] [Notes]\n- Floors: [Condition] [Notes]\n- Windows/Doors: [Condition] [Notes]\n- Stairs/Railings: [Condition] [Notes]\n\nSYSTEMS\n- Electrical: [Condition] [Notes]\n- Plumbing: [Condition] [Notes]\n- HVAC: [Condition] Age: [Years]\n- Water Heater: [Condition] Age: [Years]\n\nAPPLIANCES\n- [Appliance]: [Working/Not Working]\n\nSAFETY CONCERNS:\n[List any immediate safety issues]\n\nRECOMMENDATIONS:\n[Priority repairs and estimates]\n\nInspector Signature: ____________\nDate: ____________" +
      DISCLAIMER,
  },
  {
    id: "offer-to-purchase",
    title: "Offer to Purchase Real Estate",
    description: "Formal offer document for purchasing property.",
    isPremium: true,
    content:
      "Offer to Purchase Real Estate\n\nDate: [Date]\n\nBuyer: [Name]\nSeller: [Name]\nProperty: [Address]\n\n1. PURCHASE PRICE: $[Amount]\n\n2. EARNEST MONEY: $[Amount] to be deposited within [X] days\n\n3. FINANCING:\n   [ ] Cash\n   [ ] Conventional loan\n   [ ] FHA/VA loan\n   Contingent on buyer obtaining financing by [Date]\n\n4. INSPECTIONS: Buyer may conduct inspections within [X] days\n\n5. CLOSING DATE: [Date]\n\n6. CONTINGENCIES:\n   [ ] Sale of buyer's current home\n   [ ] Satisfactory inspection\n   [ ] Appraisal at or above purchase price\n\n7. INCLUDED ITEMS: [List fixtures, appliances]\n\n8. EXCLUDED ITEMS: [List]\n\n9. OFFER EXPIRES: [Date and Time]\n\nBuyer Signature: ____________ Date: ____\n\nSeller Response:\n[ ] Accepted [ ] Rejected [ ] Counter-offer attached\n\nSeller Signature: ____________ Date: ____" +
      DISCLAIMER,
  },
  {
    id: "moving-checklist",
    title: "Moving Checklist",
    description: "Comprehensive checklist for relocating to a new home.",
    isPremium: false,
    content:
      "Moving Checklist\n\nMove Date: [Date]\nFrom: [Current Address]\nTo: [New Address]\n\n8 WEEKS BEFORE:\n[ ] Research and book moving company\n[ ] Start decluttering - donate/sell unused items\n[ ] Create inventory of belongings\n[ ] Notify landlord (if renting)\n[ ] Research schools (if applicable)\n\n6 WEEKS BEFORE:\n[ ] Gather packing supplies\n[ ] Start packing non-essentials\n[ ] Notify employer of address change\n[ ] Get quotes for insurance changes\n\n4 WEEKS BEFORE:\n[ ] Confirm moving company\n[ ] Change address with post office\n[ ] Transfer utilities (electric, gas, water, internet)\n[ ] Update address: banks, subscriptions, DMV\n[ ] Arrange pet/child care for moving day\n\n2 WEEKS BEFORE:\n[ ] Confirm delivery dates for new furniture\n[ ] Pack room by room, label boxes\n[ ] Refill prescriptions\n[ ] Plan meals to use up perishables\n\n1 WEEK BEFORE:\n[ ] Confirm moving details\n[ ] Pack \"first night\" essentials box\n[ ] Clean current home\n[ ] Defrost freezer\n\nMOVING DAY:\n[ ] Do final walkthrough\n[ ] Take meter readings\n[ ] Hand over keys\n[ ] Supervise loading/unloading\n\nAFTER MOVE:\n[ ] Unpack essentials first\n[ ] Check all items against inventory\n[ ] Update driver's license\n[ ] Register to vote at new address",
  },
  {
    id: "sublease-agreement",
    title: "Sublease Agreement",
    description: "Agreement for subletting a rental property.",
    isPremium: true,
    content:
      "Sublease Agreement\n\nOriginal Lease Date: [Date]\nProperty: [Address]\n\nTenant (Sublessor): [Name]\nSubtenant (Sublessee): [Name]\nLandlord: [Name]\n\n1. TERM: [Start Date] to [End Date]\n\n2. RENT: $[Amount] per month\n   Due on: [Day] of each month\n   Payable to: [Sublessor/Landlord]\n\n3. SECURITY DEPOSIT: $[Amount]\n\n4. ORIGINAL LEASE: Subtenant agrees to abide by all terms of the original lease (attached).\n\n5. LANDLORD CONSENT: [ ] Obtained [ ] Pending\n\n6. UTILITIES: Subtenant responsible for: [List]\n\n7. FURNISHINGS: [ ] Furnished [ ] Unfurnished\n   Inventory attached: [ ] Yes [ ] No\n\n8. SUBLESSOR OBLIGATIONS:\n   - Remains responsible to Landlord under original lease\n   - Will address maintenance issues with Landlord\n\nSublessor Signature: ____________ Date: ____\nSublessee Signature: ____________ Date: ____\nLandlord Approval: ____________ Date: ____" +
      DISCLAIMER,
  },
  {
    id: "lease-termination-notice",
    title: "Lease Termination Notice",
    description: "Notice to terminate a lease agreement.",
    isPremium: false,
    content:
      "Notice of Lease Termination\n\nDate: [Date]\n\nTo: [Landlord/Tenant Name]\n[Address]\n\nFrom: [Your Name]\n[Your Address]\n\nRe: Lease Termination for [Property Address]\n\nThis letter serves as formal notice that I am terminating the lease agreement dated [Original Lease Date] for the property at [Address].\n\nEffective Date: [Last day of tenancy]\n\nReason (optional): [Reason for termination]\n\nPer the terms of our lease, this notice is being provided [X] days in advance of the termination date.\n\nMove-Out Details:\n- I will vacate the premises by [Date and Time]\n- Please schedule a move-out inspection for [Preferred Date]\n- Forward security deposit to: [New Address]\n\nI will ensure the property is returned in good condition, normal wear and tear excepted.\n\nPlease confirm receipt of this notice.\n\nSincerely,\n[Your Name]\n[Phone]\n[Email]" +
      DISCLAIMER,
  },
  {
    id: "room-rental-agreement",
    title: "Room Rental Agreement",
    description: "Agreement for renting a room in a shared living space.",
    isPremium: false,
    content:
      "Room Rental Agreement\n\nProperty Address: [Address]\nRoom Description: [Room details]\n\nLandlord/Primary Tenant: [Name]\nRoom Tenant: [Name]\n\n1. TERM: [Start Date] to [End Date] / Month-to-month\n\n2. RENT: $[Amount] per month\n   Due on: [Day] of each month\n   Payment method: [Cash/Check/Venmo/etc.]\n\n3. SECURITY DEPOSIT: $[Amount]\n\n4. UTILITIES INCLUDED:\n   [ ] Electric [ ] Gas [ ] Water\n   [ ] Internet [ ] Cable [ ] Other: ____\n\n5. SHARED SPACES:\n   [ ] Kitchen [ ] Bathroom [ ] Living room\n   [ ] Laundry [ ] Parking [ ] Storage\n\n6. HOUSE RULES:\n   - Quiet hours: [Times]\n   - Guests: [Policy]\n   - Smoking: [Allowed/Not allowed]\n   - Pets: [Allowed/Not allowed]\n\n7. NOTICE TO VACATE: [X] days\n\nLandlord Signature: ____________ Date: ____\nTenant Signature: ____________ Date: ____" +
      DISCLAIMER,
  },
  {
    id: "rent-increase-notice",
    title: "Rent Increase Notice",
    description: "Formal notice to tenant about rent increase.",
    isPremium: true,
    content:
      "Notice of Rent Increase\n\nDate: [Date]\n\nTo: [Tenant Name]\n[Property Address]\n\nDear [Tenant Name],\n\nThis letter is to notify you that your monthly rent will increase effective [Effective Date].\n\nCurrent Rent: $[Current Amount]\nNew Rent: $[New Amount]\nIncrease Amount: $[Difference]\nEffective Date: [Date]\n\nThis increase is being made in accordance with your lease agreement and applicable local laws. The required [X] days notice is being provided.\n\nReasons for increase (optional):\n- [Property taxes increased]\n- [Insurance costs increased]\n- [Market rate adjustment]\n\nPlease confirm receipt of this notice and your continued tenancy at the new rate.\n\nIf you have any questions, please contact me at [Phone/Email].\n\nSincerely,\n[Landlord Name]\n[Contact Information]" +
      DISCLAIMER,
  },
  {
    id: "security-deposit-return",
    title: "Security Deposit Return Letter",
    description: "Letter returning security deposit with itemized deductions.",
    isPremium: true,
    content:
      "Security Deposit Return Statement\n\nDate: [Date]\n\nTo: [Former Tenant Name]\n[Forwarding Address]\n\nProperty: [Address]\nMove-Out Date: [Date]\nMove-Out Inspection: [Date]\n\nSECURITY DEPOSIT ACCOUNTING:\n\nOriginal Deposit: $[Amount]\n\nDeductions:\n- Cleaning: $[Amount]\n- Repairs: $[Amount]\n  [Itemized repair description]\n- Unpaid rent: $[Amount]\n- Utilities: $[Amount]\n- Other: $[Amount]\n\nTotal Deductions: $[Amount]\n\nAMOUNT RETURNED: $[Amount]\n\n[ ] Check enclosed\n[ ] Direct deposit to [account]\n\nPhotos and receipts for deductions are attached.\n\nIf you have questions, contact me at [Phone/Email].\n\nSincerely,\n[Landlord Name]" +
      DISCLAIMER,
  },
  {
    id: "maintenance-request",
    title: "Maintenance Request Form",
    description: "Tenant form for requesting property repairs.",
    isPremium: false,
    content:
      "Maintenance Request Form\n\nDate Submitted: [Date]\n\nTenant Information:\nName: [Name]\nUnit/Property: [Address]\nPhone: [Phone]\nEmail: [Email]\n\nIssue Details:\nLocation in property: [Room/Area]\nDescription: [Detailed description of problem]\n\nUrgency Level:\n[ ] Emergency (water leak, no heat, safety issue)\n[ ] Urgent (major appliance broken)\n[ ] Routine (minor repair needed)\n\nPreferred contact time: [Time]\nPermission to enter if not home: [ ] Yes [ ] No\n\nPhotos attached: [ ] Yes [ ] No\n\n---\nFOR OFFICE USE:\nReceived by: ____________ Date: ____\nWork order #: ____________\nAssigned to: ____________\nScheduled for: ____________\nCompleted: ____________",
  },
  {
    id: "pet-addendum",
    title: "Pet Addendum to Lease",
    description: "Addendum permitting pets in rental property.",
    isPremium: true,
    content:
      "Pet Addendum\n\nThis Pet Addendum is attached to and made part of the Lease Agreement dated [Date] for the property at [Address].\n\nTenant: [Name]\nLandlord: [Name]\n\nAPPROVED PET(S):\nPet #1:\n- Type: [Dog/Cat/Other]\n- Breed: [Breed]\n- Name: [Name]\n- Weight: [lbs]\n- Age: [Age]\n- Color: [Color]\n\nTERMS AND CONDITIONS:\n1. Pet Deposit: $[Amount] (refundable/non-refundable)\n2. Monthly Pet Rent: $[Amount]\n3. Pet must be [spayed/neutered]\n4. Current vaccinations required\n5. Pet must be on leash in common areas\n6. Tenant responsible for all damages\n7. Must clean up after pet immediately\n8. Landlord reserves right to revoke permission\n\nTenant Signature: ____________ Date: ____\nLandlord Signature: ____________ Date: ____" +
      DISCLAIMER,
  },
  {
    id: "eviction-notice",
    title: "Eviction Notice Template",
    description: "Notice to vacate for lease violations or non-payment.",
    isPremium: true,
    content:
      "Notice to Vacate\n\nDate: [Date]\n\nTo: [Tenant Name(s)]\n[Property Address]\n\nYou are hereby notified to vacate the above premises within [X] days from the date of this notice.\n\nReason for Eviction:\n[ ] Non-payment of rent\n    Amount owed: $[Amount]\n    For period: [Dates]\n\n[ ] Lease violation(s):\n    [Description of violation]\n\n[ ] Lease expiration without renewal\n\n[ ] Other: [Reason]\n\nYou may cure this violation by:\n[Actions tenant can take to avoid eviction, if applicable]\n\nIf you fail to vacate or cure the violation by [Date], legal proceedings will be initiated.\n\nThis notice is served in accordance with [State] law.\n\nLandlord: ____________\nDate: ____________\n\nDelivery Method:\n[ ] Hand delivered [ ] Posted on door [ ] Certified mail" +
      DISCLAIMER,
  },
];
