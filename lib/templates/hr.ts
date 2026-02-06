import { DocTemplate } from "./types";

export const hrTemplates: DocTemplate[] = [
  {
    id: "employment-offer-letter",
    title: "Employment Offer Letter",
    description: "Formal offer letter for a new hire with role, compensation and start date.",
    isPremium: false,
    content:
      "Offer Letter\n\n[Company Name]\n[Company Address]\n\nDate: [Date]\n\nCandidate: [Candidate Name]\nPosition: [Job Title]\nReporting To: [Manager Name]\n\nDear [Candidate Name],\n\nWe are pleased to offer you the position of [Job Title] at [Company Name]. Your employment will commence on [Start Date]. Your starting salary will be [Salary] per [month/year], payable in accordance with the Company's payroll practices. You will be eligible for the following benefits: [List benefits].\n\nThis offer is contingent upon successful completion of [background check / references / other]. Please confirm your acceptance of this offer by signing and returning a copy of this letter by [Acceptance Date].\n\nSincerely,\n[Hiring Manager]\n[Title]",
  },
  {
    id: "employment-confirmation-letter",
    title: "Employment Confirmation Letter",
    description: "Letter confirming permanent employment after probation.",
    isPremium: false,
    content:
      "Employment Confirmation\n\nDate: [Date]\n\nTo: [Employee Name]\n\nDear [Employee Name],\n\nWe are pleased to confirm your permanent employment with [Company Name] as [Job Title], effective [Confirmation Date]. Your terms of employment remain as previously agreed, including salary of [Salary] and applicable benefits.\n\nWe appreciate your contributions to date and look forward to your continued progress.\n\nSincerely,\n[HR Manager]\n[Company Name]",
  },
  {
    id: "experience-letter",
    title: "Experience Letter",
    description: "Official experience letter detailing employee tenure and responsibilities.",
    isPremium: false,
    content:
      "Experience Certificate\n\nDate: [Date]\n\nTo Whom It May Concern,\n\nThis is to certify that [Employee Name] was employed with [Company Name] from [Start Date] to [End Date] as [Job Title]. During their tenure they were responsible for: [Key Responsibilities]. [Employee Name] displayed professionalism, reliability, and contributed positively to our team.\n\nWe wish them success in their future endeavors.\n\nSincerely,\n[Authorized Signatory]\n[Title]",
  },
  {
    id: "salary-certificate",
    title: "Salary Certificate",
    description: "Certificate stating salary details for an employee.",
    isPremium: false,
    content:
      "Salary Certificate\n\nDate: [Date]\n\nTo Whom It May Concern,\n\nThis is to certify that [Employee Name], holding the position of [Job Title] with employee ID [Employee ID], is currently employed with [Company Name]. Their current gross salary is [Gross Salary] per [month/year].\n\nIf you require any further information, please contact [HR Contact].\n\nSincerely,\n[HR Manager]\n[Company Name]",
  },
  {
    id: "warning-letter",
    title: "Warning Letter",
    description: "Formal warning for performance or conduct issues.",
    isPremium: false,
    content:
      "Warning Letter\n\nDate: [Date]\n\nTo: [Employee Name]\n\nSubject: Formal Warning Regarding [Issue]\n\nDear [Employee Name],\n\nThis letter serves as a formal warning regarding [describe issue: performance/attendance/behavior]. On [Date(s)] the following incidents were recorded: [Details]. You are expected to correct this behavior immediately. Failure to improve may result in further disciplinary action, up to and including termination.\n\nPlease treat this matter seriously and discuss any mitigating circumstances with your manager.\n\nSincerely,\n[Manager Name]\n[Title]",
  },
  {
    id: "termination-letter",
    title: "Termination Letter",
    description: "Notice of termination with effective date and final settlement details.",
    isPremium: true,
    content:
      "Termination of Employment\n\nDate: [Date]\n\nTo: [Employee Name]\n\nThis letter is to inform you that your employment with [Company Name] will terminate effective [Termination Date]. The reasons for termination are: [Reason summary]. Your final settlement will include unpaid salary up to the termination date, accrued leave encashment [if applicable], and deductions as per company policy.\n\nPlease return all company property by [Return Date]. If you have questions regarding benefits or final pay, contact [HR Contact].\n\nSincerely,\n[Authorized Signatory]\n[Title]",
  },
  {
    id: "resignation-acceptance-letter",
    title: "Resignation Acceptance Letter",
    description: "Acknowledgement and acceptance of an employee's resignation.",
    isPremium: false,
    content:
      "Resignation Acceptance\n\nDate: [Date]\n\nTo: [Employee Name]\n\nWe acknowledge receipt of your resignation dated [Resignation Date] and accept it with last working day as [Last Working Day]. We thank you for your contributions and wish you success in your future endeavors. Please complete the exit formalities with HR.\n\nSincerely,\n[HR Manager]\n[Company Name]",
  },
  {
    id: "leave-approval-letter",
    title: "Leave Approval Letter",
    description: "Formal approval for an employee leave request.",
    isPremium: false,
    content:
      "Leave Approval\n\nDate: [Date]\n\nTo: [Employee Name]\n\nSubject: Leave Approval for [Dates]\n\nYour request for leave from [Start Date] to [End Date] has been approved. Please ensure handover of responsibilities to [Colleague Name] and update your manager if any changes occur.\n\nSincerely,\n[Manager Name]\n[Title]",
  },
  {
    id: "promotion-letter",
    title: "Promotion Letter",
    description: "Notification of promotion with new role and effective date.",
    isPremium: false,
    content:
      "Promotion Letter\n\nDate: [Date]\n\nTo: [Employee Name]\n\nWe are pleased to inform you of your promotion to [New Job Title], effective [Effective Date]. Your new responsibilities include: [Responsibilities]. Your revised compensation will be [New Salary]. Congratulations and thank you for your continued contributions.\n\nSincerely,\n[Manager Name]\n[Title]",
  },
  {
    id: "offer-letter-tech",
    title: "Tech Offer Letter",
    description: "Specialized offer letter for technology positions with equity details.",
    isPremium: true,
    content:
      "Technology Offer Letter\n\n[Company Name]\n[Date]\n\nDear [Candidate Name],\n\nWe are excited to offer you the position of [Job Title] on our [Team Name] team.\n\nCompensation Package:\n- Base Salary: $[Amount] per year\n- Stock Options: [Number] shares vesting over [4] years\n- Signing Bonus: $[Amount]\n- Annual Bonus Target: [%] of base salary\n\nBenefits:\n- Health, dental, and vision insurance\n- 401(k) with [%] match\n- Unlimited PTO\n- Remote work flexibility\n- Learning & development budget: $[Amount]/year\n\nStart Date: [Date]\nReporting To: [Manager Name]\n\nPlease sign and return by [Date].\n\n[Hiring Manager]\n[Title]",
  },
  {
    id: "remote-work-agreement",
    title: "Remote Work Agreement",
    description: "Agreement outlining remote work policies and expectations.",
    isPremium: true,
    content:
      "Remote Work Agreement\n\nEmployee: [Employee Name]\nEffective Date: [Date]\n\n1. Work Location: [Home Address]\n2. Work Hours: [Core hours] with flexibility\n3. Equipment: Company will provide [list equipment]\n4. Communication: Available via [channels] during work hours\n5. Security: Employee agrees to maintain confidentiality and follow security protocols\n6. Expenses: [Reimbursement policy]\n7. Office Visits: Required [frequency] for team meetings\n\nThis agreement may be modified or terminated with [notice period] written notice.\n\nEmployee Signature: ____________\nDate: ____________\n\nManager Signature: ____________\nDate: ____________",
  },
  {
    id: "employee-handbook-acknowledgment",
    title: "Employee Handbook Acknowledgment",
    description: "Form confirming employee has received and reviewed the handbook.",
    isPremium: true,
    content:
      "Employee Handbook Acknowledgment\n\nI, [Employee Name], acknowledge that I have received a copy of [Company Name]'s Employee Handbook dated [Date].\n\nI understand that:\n1. I am responsible for reading and understanding the policies\n2. The handbook is not an employment contract\n3. Policies may be updated with notice\n4. I can ask HR questions about any policies\n\nI agree to comply with all company policies and procedures.\n\nEmployee Signature: ____________\nDate: ____________\nEmployee ID: ____________",
  },
  {
    id: "nda-employee",
    title: "Employee Non-Disclosure Agreement",
    description: "NDA for employees regarding confidential company information.",
    isPremium: true,
    content:
      "Employee Non-Disclosure Agreement\n\nThis NDA is between [Company Name] and [Employee Name].\n\n1. Confidential Information includes: trade secrets, business plans, customer lists, financial data, product designs, and proprietary technology.\n\n2. Obligations: Employee shall not disclose, use, or copy confidential information except for work purposes.\n\n3. Duration: Obligations continue during employment and for [X] years after.\n\n4. Return of Materials: Upon termination, all confidential materials must be returned.\n\n5. Remedies: Company may seek injunctive relief for breaches.\n\nEmployee Signature: ____________\nDate: ____________",
  },
  {
    id: "contractor-agreement",
    title: "Independent Contractor Agreement",
    description: "Agreement for hiring independent contractors with scope and payment terms.",
    isPremium: true,
    content:
      "Independent Contractor Agreement\n\nThis Agreement is between [Company Name] (\"Client\") and [Contractor Name] (\"Contractor\").\n\n1. Services: [Description of services]\n2. Term: [Start Date] to [End Date]\n3. Compensation: $[Amount] per [hour/project], payable [terms]\n4. Relationship: Contractor is independent, not an employee\n5. Intellectual Property: All work product belongs to Client\n6. Confidentiality: Contractor agrees to maintain confidentiality\n7. Termination: Either party may terminate with [X] days notice\n\nClient Signature: ____________\nContractor Signature: ____________\nDate: ____________",
  },
  {
    id: "performance-review-quarterly",
    title: "Quarterly Performance Review",
    description: "Template for quarterly employee performance evaluations.",
    isPremium: true,
    content:
      "Quarterly Performance Review\n\nEmployee: [Name]\nReview Period: Q[X] [Year]\nReviewer: [Manager Name]\nDate: [Date]\n\nGoals from Last Quarter:\n1. [Goal] - [Met/Not Met/In Progress]\n2. [Goal] - [Met/Not Met/In Progress]\n\nKey Accomplishments:\n- [Accomplishment 1]\n- [Accomplishment 2]\n\nAreas for Improvement:\n- [Area 1]\n\nGoals for Next Quarter:\n1. [Goal]\n2. [Goal]\n\nOverall Rating: [Exceeds/Meets/Below Expectations]\n\nEmployee Comments:\n\nManager Comments:\n\nSignatures:\nEmployee: ____________ Date: ____\nManager: ____________ Date: ____",
  },
  {
    id: "final-warning-letter",
    title: "Final Warning Letter",
    description: "Last formal warning before termination proceedings.",
    isPremium: true,
    content:
      "Final Written Warning\n\nDate: [Date]\nEmployee: [Name]\nDepartment: [Department]\n\nThis is your FINAL WARNING regarding [issue]. Previous warnings were issued on [dates].\n\nDetails of Current Incident:\n[Description]\n\nExpected Improvement:\n[Specific expectations and timeline]\n\nConsequences:\nFailure to meet these expectations will result in immediate termination.\n\nSupport Provided:\n[Training, mentoring, or resources offered]\n\nEmployee Acknowledgment:\nI understand this is my final warning.\n\nEmployee Signature: ____________\nDate: ____________\nHR Witness: ____________\nDate: ____________",
  },
  {
    id: "internship-offer-letter",
    title: "Internship Offer Letter",
    description: "Offer letter for internship positions with duration and stipend details.",
    isPremium: false,
    content:
      "Internship Offer Letter\n\n[Company Name]\nDate: [Date]\n\nDear [Intern Name],\n\nWe are pleased to offer you an internship position as [Intern Title] at [Company Name].\n\nDetails:\n- Duration: [Start Date] to [End Date]\n- Department: [Department]\n- Supervisor: [Supervisor Name]\n- Stipend: $[Amount] per [month/hour]\n- Hours: [X] hours per week\n\nResponsibilities:\n- [Responsibility 1]\n- [Responsibility 2]\n\nPlease confirm your acceptance by [Date].\n\nWe look forward to having you on our team!\n\n[HR Manager]\n[Company Name]",
  },
  {
    id: "reference-letter",
    title: "Reference Letter",
    description: "Professional reference letter for former employees.",
    isPremium: false,
    content:
      "Reference Letter\n\nDate: [Date]\n\nTo Whom It May Concern,\n\nI am writing to recommend [Employee Name] for [position/opportunity] they are pursuing.\n\n[Employee Name] worked at [Company Name] as [Job Title] from [Start Date] to [End Date]. During this time, they demonstrated:\n\n- [Key strength 1]\n- [Key strength 2]\n- [Key strength 3]\n\n[Specific example of their work or achievement]\n\nI highly recommend [Employee Name] and am confident they will be a valuable asset to any organization.\n\nPlease contact me at [Email/Phone] if you have any questions.\n\nSincerely,\n[Your Name]\n[Your Title]\n[Company Name]",
  },
  {
    id: "job-description-template",
    title: "Job Description Template",
    description: "Standard template for creating job descriptions.",
    isPremium: true,
    content:
      "Job Description\n\nJob Title: [Title]\nDepartment: [Department]\nReports To: [Manager Title]\nLocation: [Location/Remote]\nEmployment Type: [Full-time/Part-time/Contract]\n\nAbout Us:\n[Company description]\n\nJob Summary:\n[Brief overview of the role]\n\nKey Responsibilities:\n- [Responsibility 1]\n- [Responsibility 2]\n- [Responsibility 3]\n\nRequired Qualifications:\n- [X] years of experience in [field]\n- [Required skill 1]\n- [Required skill 2]\n\nPreferred Qualifications:\n- [Nice-to-have skill]\n\nCompensation & Benefits:\n- Salary range: $[Min] - $[Max]\n- [Benefits overview]\n\nTo Apply:\n[Application instructions]",
  },
  {
    id: "exit-interview-form",
    title: "Exit Interview Form",
    description: "Questionnaire for departing employees to provide feedback.",
    isPremium: true,
    content:
      "Exit Interview Form\n\nEmployee: [Name]\nDepartment: [Department]\nPosition: [Title]\nLast Day: [Date]\nInterviewer: [HR Name]\n\n1. Reason for Leaving:\n[ ] New opportunity [ ] Relocation [ ] Retirement\n[ ] Dissatisfaction [ ] Personal reasons [ ] Other: ____\n\n2. What did you enjoy most about working here?\n[Response]\n\n3. What could the company improve?\n[Response]\n\n4. How was your relationship with your manager?\n[Response]\n\n5. Would you recommend this company to others?\n[ ] Yes [ ] No\n\n6. Would you consider returning in the future?\n[ ] Yes [ ] No [ ] Maybe\n\n7. Additional Comments:\n[Response]\n\nEmployee Signature: ____________\nDate: ____________",
  },
];
