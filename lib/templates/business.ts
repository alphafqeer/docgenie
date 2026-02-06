import { DocTemplate } from "./types";

export const businessTemplates: DocTemplate[] = [
  {
    id: "business-proposal",
    title: "Business Proposal",
    description: "Structured proposal describing scope, pricing and timelines.",
    isPremium: false,
    content:
      "Business Proposal\n\n[Company Name]\n[Date]\n\nClient: [Client Name]\n\nExecutive Summary:\nA brief overview of the proposed solution and expected outcomes.\n\nScope of Services:\n- [Service 1]: [Description]\n- [Service 2]: [Description]\n\nProject Timeline:\n- Start: [Date]\n- Milestones: [Milestone details]\n\nPricing:\n- [Deliverable] — [Price]\n- Total: [Total Price]\n\nTerms and Conditions:\nPayment terms: [Payment Terms]. Confidentiality: [NDA terms if any].",
  },
  {
    id: "service-agreement",
    title: "Service Agreement",
    description: "Basic service agreement between provider and client.",
    isPremium: false,
    content:
      "Service Agreement\n\nThis Service Agreement (\"Agreement\") is made on [Date] between [Provider Name] and [Client Name].\n\n1. Services: [Describe services].\n2. Term: [Start and End].\n3. Payment: [Fees and schedule].\n4. Termination: [Termination clauses].\n\nSignatures:\n[Provider]\n[Client]",
  },
  {
    id: "nda-non-disclosure",
    title: "NDA (Non-Disclosure Agreement)",
    description: "Confidentiality agreement to protect sensitive information.",
    isPremium: false,
    content:
      "Non-Disclosure Agreement\n\nThis NDA is entered into on [Date] between [Disclosing Party] and [Receiving Party].\n\n1. Definition of Confidential Information: [Definition].\n2. Obligations: The Receiving Party shall not disclose or use Confidential Information except as permitted.\n3. Term: [Duration].\n\nSignatures:\n[Disclosing Party]\n[Receiving Party]",
  },
  {
    id: "partnership-agreement",
    title: "Partnership Agreement",
    description: "Framework for a partnership including roles and profit-sharing.",
    isPremium: false,
    content:
      "Partnership Agreement\n\nDate: [Date]\n\nParties: [Partner A] and [Partner B]\n\nPurpose: [Purpose of partnership].\nCapital Contributions: [Details].\nProfit Sharing: [Percentages].\nGovernance: [Decision making].\n\nSignatures:\n[Partner A]\n[Partner B]",
  },
  {
    id: "memo-internal",
    title: "Internal Memo",
    description: "Template for internal company communications.",
    isPremium: false,
    content:
      "Internal Memo\n\nTo: [Recipients]\nFrom: [Author]\nDate: [Date]\nSubject: [Subject]\n\nMessage:\n[Body of memo]\n\nActions Required:\n- [Action 1]\n- [Action 2]",
  },
  {
    id: "meeting-minutes",
    title: "Meeting Minutes",
    description: "Structured record of meeting topics, decisions and actions.",
    isPremium: false,
    content:
      "Meeting Minutes\n\nMeeting Title: [Title]\nDate: [Date]\nAttendees: [List]\n\nAgenda:\n1. [Item]\n\nNotes and Decisions:\n- [Notes]\n\nAction Items:\n- [Owner] — [Action] — [Due Date]",
  },
  {
    id: "scope-of-work",
    title: "Scope of Work",
    description: "Detailed scope describing deliverables, timeline and acceptance.",
    isPremium: true,
    content:
      "Scope of Work\n\nProject: [Project Name]\nClient: [Client Name]\n\nDeliverables:\n- [Deliverable 1] — Description and acceptance criteria.\n\nTimeline:\n- Start: [Date]\n- Delivery: [Dates]\n\nAcceptance Criteria:\n- [Criteria]\n\nPayment:\n[Payment schedule]",
  },
  {
    id: "company-profile",
    title: "Company Profile",
    description: "Short company profile for proposals and introductions.",
    isPremium: false,
    content:
      "Company Profile\n\n[Company Name]\nFounded: [Year]\nHeadquarters: [Location]\n\nAbout:\n[Brief company description highlighting services and strengths].\n\nKey Clients:\n- [Client 1]\n- [Client 2]\n\nContact: [Contact Info]",
  },
  {
    id: "startup-business-plan",
    title: "Startup Business Plan",
    description: "Comprehensive business plan template for startups seeking funding.",
    isPremium: true,
    content:
      "Startup Business Plan\n\n[Company Name]\n[Date]\n\n1. Executive Summary\n[Brief overview of business, mission, and funding needs]\n\n2. Company Description\n[What the company does, target market, competitive advantage]\n\n3. Market Analysis\n[Industry overview, target market size, trends, competition]\n\n4. Product/Service\n[Description, development stage, IP, roadmap]\n\n5. Marketing Strategy\n[Customer acquisition, pricing, channels]\n\n6. Operations Plan\n[Team, location, technology, processes]\n\n7. Financial Projections\n[3-5 year projections: revenue, expenses, profitability]\n\n8. Funding Request\n[Amount needed, use of funds, exit strategy]\n\nAppendix: [Supporting documents]",
  },
  {
    id: "llc-operating-agreement",
    title: "LLC Operating Agreement",
    description: "Operating agreement for Limited Liability Company members.",
    isPremium: true,
    content:
      "LLC Operating Agreement\n\n[Company Name], LLC\nState of Formation: [State]\nDate: [Date]\n\n1. Formation: The LLC was formed on [Date] under [State] law.\n\n2. Members:\n   - [Member 1]: [X]% ownership\n   - [Member 2]: [X]% ownership\n\n3. Capital Contributions:\n   [List contributions]\n\n4. Profit/Loss Distribution:\n   [In proportion to ownership / other arrangement]\n\n5. Management:\n   [Member-managed / Manager-managed]\n\n6. Meetings & Voting:\n   [Requirements]\n\n7. Transfer of Interests:\n   [Restrictions and procedures]\n\n8. Dissolution:\n   [Conditions and process]\n\nMember Signatures:\n____________\n____________",
  },
  {
    id: "non-compete-agreement",
    title: "Non-Compete Agreement",
    description: "Agreement restricting competitive activities after employment.",
    isPremium: true,
    content:
      "Non-Compete Agreement\n\nBetween: [Company Name] and [Employee/Contractor Name]\nDate: [Date]\n\n1. Non-Competition: For [X] months/years after termination, the undersigned agrees not to:\n   - Work for competitors in [geographic area]\n   - Start a competing business\n   - Solicit company clients\n\n2. Scope: This applies to [industry/field].\n\n3. Consideration: [Payment/employment in exchange]\n\n4. Reasonableness: Both parties agree these restrictions are reasonable.\n\n5. Remedies: Company may seek injunctive relief for violations.\n\nEmployee Signature: ____________\nCompany Representative: ____________\nDate: ____________",
  },
  {
    id: "board-meeting-minutes",
    title: "Board Meeting Minutes",
    description: "Formal minutes for board of directors meetings.",
    isPremium: true,
    content:
      "Board of Directors Meeting Minutes\n\n[Company Name]\nDate: [Date]\nTime: [Time]\nLocation: [Location/Virtual]\n\nDirectors Present:\n- [Name]\n- [Name]\n\nDirectors Absent:\n- [Name]\n\nQuorum: [Established/Not Established]\n\nCall to Order: [Time]\n\nAgenda Items:\n\n1. Approval of Previous Minutes\n   Motion by: [Name]\n   Seconded by: [Name]\n   Vote: [Approved/Not Approved]\n\n2. [Agenda Item]\n   Discussion: [Summary]\n   Resolution: [Decision]\n   Vote: [For/Against/Abstain counts]\n\nNext Meeting: [Date]\nAdjournment: [Time]\n\nSecretary: ____________\nDate Approved: ____________",
  },
  {
    id: "swot-analysis",
    title: "SWOT Analysis Template",
    description: "Strategic planning template analyzing strengths, weaknesses, opportunities, threats.",
    isPremium: true,
    content:
      "SWOT Analysis\n\n[Company/Project Name]\nDate: [Date]\nPrepared by: [Name]\n\nSTRENGTHS:\n- [Strength 1]\n- [Strength 2]\n- [Strength 3]\n\nWEAKNESSES:\n- [Weakness 1]\n- [Weakness 2]\n- [Weakness 3]\n\nOPPORTUNITIES:\n- [Opportunity 1]\n- [Opportunity 2]\n- [Opportunity 3]\n\nTHREATS:\n- [Threat 1]\n- [Threat 2]\n- [Threat 3]\n\nKey Insights:\n[Summary of strategic implications]\n\nRecommended Actions:\n1. [Action based on analysis]\n2. [Action based on analysis]",
  },
  {
    id: "investor-pitch-deck-outline",
    title: "Investor Pitch Deck Outline",
    description: "Structure and content guide for investor presentations.",
    isPremium: true,
    content:
      "Investor Pitch Deck Outline\n\n[Company Name]\n[Tagline]\n\nSlide 1: Title\n- Company name, logo, tagline\n- Contact information\n\nSlide 2: Problem\n- What problem are you solving?\n- Who experiences this problem?\n\nSlide 3: Solution\n- Your product/service\n- Key features and benefits\n\nSlide 4: Market Opportunity\n- TAM, SAM, SOM\n- Market trends\n\nSlide 5: Business Model\n- How you make money\n- Pricing strategy\n\nSlide 6: Traction\n- Key metrics, growth\n- Customer testimonials\n\nSlide 7: Competition\n- Competitive landscape\n- Your differentiation\n\nSlide 8: Team\n- Key team members\n- Relevant experience\n\nSlide 9: Financials\n- Revenue projections\n- Key assumptions\n\nSlide 10: The Ask\n- Funding amount\n- Use of funds\n- Timeline and milestones",
  },
  {
    id: "press-release-template",
    title: "Press Release Template",
    description: "Standard press release format for company announcements.",
    isPremium: false,
    content:
      "FOR IMMEDIATE RELEASE\n\n[Headline: Attention-Grabbing Title]\n\n[City, State] — [Date] — [Company Name] today announced [main news].\n\n[First paragraph: Who, what, when, where, why - the key facts]\n\n[Second paragraph: Supporting details, context, and significance]\n\n[Third paragraph: Quote from company executive]\n\"[Quote about the announcement],\" said [Name], [Title] of [Company Name].\n\n[Fourth paragraph: Additional details, future plans]\n\nAbout [Company Name]\n[Brief company description]\n\nMedia Contact:\n[Name]\n[Email]\n[Phone]\n\n###",
  },
  {
    id: "employee-referral-form",
    title: "Employee Referral Form",
    description: "Form for employees to refer candidates for open positions.",
    isPremium: false,
    content:
      "Employee Referral Form\n\nReferring Employee:\nName: [Your Name]\nDepartment: [Department]\nEmail: [Email]\n\nCandidate Information:\nName: [Candidate Name]\nEmail: [Candidate Email]\nPhone: [Phone]\nLinkedIn: [URL]\n\nPosition Referred For: [Job Title]\n\nHow do you know this candidate?\n[Relationship description]\n\nWhy would they be a good fit?\n[Explanation]\n\nHave you discussed this opportunity with them?\n[ ] Yes [ ] No\n\nReferring Employee Signature: ____________\nDate: ____________",
  },
  {
    id: "vendor-evaluation-form",
    title: "Vendor Evaluation Form",
    description: "Form for evaluating and comparing potential vendors.",
    isPremium: true,
    content:
      "Vendor Evaluation Form\n\nVendor Name: [Name]\nEvaluator: [Your Name]\nDate: [Date]\nProduct/Service: [Description]\n\nEvaluation Criteria (Rate 1-5):\n\n1. Price Competitiveness: [ ]/5\n   Notes: [Comments]\n\n2. Quality of Product/Service: [ ]/5\n   Notes: [Comments]\n\n3. Reliability & Reputation: [ ]/5\n   Notes: [Comments]\n\n4. Customer Support: [ ]/5\n   Notes: [Comments]\n\n5. Delivery/Turnaround Time: [ ]/5\n   Notes: [Comments]\n\n6. Financial Stability: [ ]/5\n   Notes: [Comments]\n\nTotal Score: [ ]/30\n\nRecommendation:\n[ ] Approved [ ] Not Approved [ ] Needs Further Review\n\nComments:\n[Additional notes]",
  },
];
