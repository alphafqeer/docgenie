import { DocTemplate } from "./types";

const DISCLAIMER = "\n\nDisclaimer: This template is for general informational purposes. Medical documents should be reviewed by qualified healthcare professionals.";

export const medicalTemplates: DocTemplate[] = [
  {
    id: "patient-intake-form",
    title: "Patient Intake Form",
    description: "Comprehensive patient information form for new patients.",
    isPremium: false,
    content:
      "Patient Intake Form\n\nDate: [Date]\nProvider/Practice: [Name]\n\nPATIENT INFORMATION:\nFull Name: ____________________\nDate of Birth: ____________________\nGender: [ ] Male [ ] Female [ ] Other\nSSN (last 4): ____________________\nAddress: ____________________\nPhone: ____________________\nEmail: ____________________\n\nEMERGENCY CONTACT:\nName: ____________________\nRelationship: ____________________\nPhone: ____________________\n\nINSURANCE INFORMATION:\nInsurance Company: ____________________\nPolicy Number: ____________________\nGroup Number: ____________________\nPolicyholder Name: ____________________\nRelationship to Patient: ____________________\n\nREASON FOR VISIT:\n____________________\n____________________\n\nCURRENT MEDICATIONS:\n1. ____________________\n2. ____________________\n3. ____________________\n\nALLERGIES:\n____________________\n\nPatient/Guardian Signature: ____________\nDate: ____________" +
      DISCLAIMER,
  },
  {
    id: "medical-history-form",
    title: "Medical History Form",
    description: "Detailed patient medical history questionnaire.",
    isPremium: false,
    content:
      "Medical History Form\n\nPatient Name: [Name]\nDate of Birth: [DOB]\nDate: [Date]\n\nPAST MEDICAL HISTORY:\n[ ] Asthma\n[ ] Cancer (Type: ________)\n[ ] Diabetes (Type 1 / Type 2)\n[ ] Heart Disease\n[ ] High Blood Pressure\n[ ] Stroke\n[ ] Thyroid Problems\n[ ] Other: ________\n\nSURGICAL HISTORY:\nProcedure: ________ Year: ____\nProcedure: ________ Year: ____\n\nFAMILY HISTORY:\n           Father  Mother  Siblings\nDiabetes    [ ]     [ ]      [ ]\nHeart Dis.  [ ]     [ ]      [ ]\nCancer      [ ]     [ ]      [ ]\nHigh BP     [ ]     [ ]      [ ]\n\nSOCIAL HISTORY:\nSmoking: [ ] Never [ ] Former [ ] Current (packs/day: __)\nAlcohol: [ ] None [ ] Occasional [ ] Daily\nExercise: [ ] Sedentary [ ] Moderate [ ] Active\n\nCURRENT MEDICATIONS:\n1. ________ Dose: ________ Frequency: ________\n2. ________ Dose: ________ Frequency: ________\n\nALLERGIES:\nMedication: ________ Reaction: ________\n\nPatient Signature: ____________\nDate: ____________" +
      DISCLAIMER,
  },
  {
    id: "treatment-consent-form",
    title: "Treatment Consent Form",
    description: "Informed consent for medical treatment or procedure.",
    isPremium: true,
    content:
      "Consent for Treatment\n\nPatient Name: [Name]\nDate of Birth: [DOB]\nDate: [Date]\n\nPROCEDURE/TREATMENT:\n[Name of procedure or treatment]\n\nPROVIDER: Dr. [Name]\n\nI, the undersigned patient, hereby consent to the above procedure/treatment.\n\nI UNDERSTAND THAT:\n1. The nature of the procedure has been explained to me\n2. The expected benefits include: [Benefits]\n3. The potential risks include: [Risks]\n4. Alternatives to this treatment include: [Alternatives]\n5. I may ask questions at any time\n6. I may withdraw consent at any time before the procedure\n\nI HAVE HAD THE OPPORTUNITY TO:\n[ ] Ask questions\n[ ] Discuss concerns\n[ ] Consider alternatives\n\nI confirm that I have not been coerced and give this consent voluntarily.\n\nPatient Signature: ____________\nDate: ____________ Time: ____________\n\nWitness: ____________\nDate: ____________\n\nProvider: ____________\nDate: ____________" +
      DISCLAIMER,
  },
  {
    id: "surgical-consent-form",
    title: "Surgical Consent Form",
    description: "Detailed informed consent for surgical procedures.",
    isPremium: true,
    content:
      "Surgical Consent Form\n\nPatient Name: [Name]\nDate of Birth: [DOB]\nMedical Record #: [Number]\nDate of Surgery: [Date]\n\nPROCEDURE:\n[Name of surgical procedure]\n\nSURGEON: Dr. [Name]\n\nI consent to the operation listed above and any additional procedures deemed necessary during surgery.\n\nI UNDERSTAND:\n1. The nature of the surgery: [Description]\n2. Potential risks including but not limited to:\n   - Bleeding\n   - Infection\n   - Reaction to anesthesia\n   - [Procedure-specific risks]\n3. Expected benefits: [Benefits]\n4. Recovery expectations: [Recovery details]\n5. Alternatives: [Non-surgical options]\n\nANESTHESIA:\n[ ] General [ ] Regional [ ] Local [ ] Sedation\nI consent to anesthesia as determined appropriate.\n\nBLOOD PRODUCTS:\n[ ] I consent to blood transfusion if necessary\n[ ] I do NOT consent to blood products\n\nPatient Signature: ____________\nDate: ____________ Time: ____________\n\nSurgeon Signature: ____________\nDate: ____________" +
      DISCLAIMER,
  },
  {
    id: "medical-records-release",
    title: "Medical Records Release Authorization",
    description: "Authorization form for releasing protected health information.",
    isPremium: false,
    content:
      "Authorization to Release Medical Records\n\nPatient Name: [Name]\nDate of Birth: [DOB]\nAddress: [Address]\nPhone: [Phone]\n\nI authorize:\n[Provider/Facility Name]\n[Address]\n\nTo release my medical records to:\n[Recipient Name]\n[Address]\n[Fax/Email]\n\nINFORMATION TO BE RELEASED:\n[ ] Complete medical record\n[ ] Office visit notes\n[ ] Lab results\n[ ] Imaging/X-rays\n[ ] Immunization records\n[ ] Other: ________\n\nDate Range: [From] to [To]\n\nPURPOSE:\n[ ] Continuing care\n[ ] Insurance\n[ ] Legal\n[ ] Personal use\n[ ] Other: ________\n\nThis authorization expires on: [Date] or [1 year from signing]\n\nI understand I may revoke this authorization in writing at any time.\n\nPatient/Guardian Signature: ____________\nDate: ____________\n\nRelationship (if not patient): ____________" +
      DISCLAIMER,
  },
  {
    id: "medical-leave-letter",
    title: "Medical Leave Letter",
    description: "Letter from healthcare provider supporting medical leave.",
    isPremium: true,
    content:
      "Medical Leave Letter\n\n[Practice Letterhead]\n\nDate: [Date]\n\nTo Whom It May Concern:\n\nRe: [Patient Name]\nDate of Birth: [DOB]\n\nI am the treating physician for the above-named patient. Based on my evaluation and ongoing treatment, I am providing this letter to support their need for medical leave.\n\nDiagnosis: [General description - without unnecessary detail]\n\nMedical Leave Period:\nFrom: [Start Date]\nTo: [Estimated End Date / Until further notice]\n\nWork Restrictions (if applicable):\n[ ] Complete leave from work required\n[ ] Modified duties recommended:\n    - [Restriction 1]\n    - [Restriction 2]\n[ ] Reduced hours: [X] hours per week maximum\n\nFollow-up:\nPatient will be re-evaluated on [Date] to assess ability to return to work.\n\nPlease contact our office at [Phone] if you require additional information.\n\nSincerely,\n\nDr. [Name]\n[Specialty]\n[License Number]\n[Practice Name]\n[Phone]" +
      DISCLAIMER,
  },
  {
    id: "prescription-template",
    title: "Prescription Template",
    description: "Standard prescription format for medications.",
    isPremium: true,
    content:
      "PRESCRIPTION\n\n[Practice Name]\n[Address]\n[Phone] | [Fax]\n\nProvider: [Name], [Credentials]\nLicense #: [Number]\nDEA #: [Number]\n\nDate: [Date]\n\nPatient: [Name]\nDOB: [Date]\nAddress: [Address]\n\nRx\n\nMedication: [Drug Name]\nStrength: [Dosage]\nQuantity: [Number] ([Written Number])\nSig: [Directions - e.g., \"Take 1 tablet by mouth twice daily\"]\n\nRefills: [Number] times\n\n[ ] Dispense as Written / No Substitution\n[ ] Substitution Permitted\n\n__________________________\nPrescriber Signature\n\nDate: ____________" +
      DISCLAIMER,
  },
  {
    id: "hipaa-consent-form",
    title: "HIPAA Consent Form",
    description: "Patient acknowledgment of privacy practices.",
    isPremium: true,
    content:
      "HIPAA Privacy Consent Form\n\n[Practice Name]\n\nPatient Name: [Name]\nDate of Birth: [DOB]\n\nACKNOWLEDGMENT OF NOTICE OF PRIVACY PRACTICES\n\nI acknowledge that I have received or been offered a copy of [Practice Name]'s Notice of Privacy Practices, which describes how my health information may be used and disclosed.\n\nI understand that:\n1. My health information will be protected according to federal and state law\n2. The practice may use my information for treatment, payment, and healthcare operations\n3. I may request restrictions on certain uses (though the practice is not required to agree)\n4. I have the right to access and amend my records\n5. I may revoke this consent in writing at any time\n\nCONSENT FOR COMMUNICATION:\nI consent to be contacted at:\n[ ] Home phone: [Number]\n[ ] Cell phone: [Number]\n[ ] Email: [Email]\n[ ] May leave detailed messages: [ ] Yes [ ] No\n\nPatient Signature: ____________\nDate: ____________\n\nIf signed by someone other than patient:\nName: ____________\nRelationship: ____________" +
      DISCLAIMER,
  },
  {
    id: "appointment-confirmation",
    title: "Appointment Confirmation Letter",
    description: "Letter confirming a scheduled medical appointment.",
    isPremium: false,
    content:
      "Appointment Confirmation\n\n[Practice Name]\n[Address]\n[Phone]\n\nDate: [Date]\n\nDear [Patient Name],\n\nThis letter confirms your upcoming appointment:\n\nDate: [Appointment Date]\nTime: [Time]\nProvider: Dr. [Name]\nLocation: [Address]\nReason: [Type of visit]\n\nPLEASE BRING:\n- Photo ID\n- Insurance card\n- List of current medications\n- Referral (if required)\n- [Other required items]\n\nARRIVAL:\nPlease arrive [X] minutes early to complete paperwork.\n\nCANCELLATION POLICY:\nIf you need to cancel or reschedule, please call at least [24/48] hours in advance to avoid a cancellation fee.\n\nCONTACT:\nQuestions? Call us at [Phone]\n\nWe look forward to seeing you!\n\n[Practice Name]",
  },
  {
    id: "vaccination-record",
    title: "Vaccination Record",
    description: "Personal immunization history record.",
    isPremium: false,
    content:
      "Vaccination Record\n\nPatient Name: [Name]\nDate of Birth: [DOB]\nMedical Record #: [Number]\n\nIMMUNIZATION HISTORY:\n\nVaccine               | Date      | Dose | Provider\n--------------------------------------------------\nCOVID-19              | [Date]    | 1st  | [Name]\nCOVID-19              | [Date]    | 2nd  | [Name]\nCOVID-19 Booster      | [Date]    | -    | [Name]\nInfluenza (Flu)       | [Date]    | -    | [Name]\nTdap                  | [Date]    | -    | [Name]\nMMR                   | [Date]    | -    | [Name]\nHepatitis B           | [Date]    | 1st  | [Name]\nHepatitis B           | [Date]    | 2nd  | [Name]\nHepatitis B           | [Date]    | 3rd  | [Name]\nVaricella (Chicken Pox)| [Date]   | -    | [Name]\nShingles (Shingrix)   | [Date]    | 1st  | [Name]\nPneumonia (PPSV23)    | [Date]    | -    | [Name]\n\nNEXT DUE:\n[Vaccine Name] due on [Date]\n\nThis record was generated on [Date] by [Practice Name].\n\nVerified by: ____________\nDate: ____________" +
      DISCLAIMER,
  },
  {
    id: "referral-letter",
    title: "Medical Referral Letter",
    description: "Referral letter from one healthcare provider to another.",
    isPremium: true,
    content:
      "Medical Referral Letter\n\n[Referring Practice]\n[Address]\n[Phone] | [Fax]\n\nDate: [Date]\n\nTo: Dr. [Specialist Name]\n[Specialty]\n[Practice/Hospital]\n[Address]\n\nRe: [Patient Name]\nDOB: [Date of Birth]\n\nDear Dr. [Name],\n\nI am referring the above patient for your expert evaluation and management.\n\nReason for Referral:\n[Describe the condition/concern]\n\nRelevant History:\n[Brief medical history pertinent to referral]\n\nCurrent Medications:\n[List medications]\n\nRecent Test Results:\n[Relevant labs, imaging, etc.]\n\nPlease evaluate and advise on management. I would appreciate a follow-up report.\n\nThank you for seeing this patient.\n\nSincerely,\nDr. [Your Name]\n[Specialty]\n[Phone]" +
      DISCLAIMER,
  },
  {
    id: "disability-letter",
    title: "Disability Support Letter",
    description: "Medical letter supporting disability accommodations.",
    isPremium: true,
    content:
      "Disability Support Letter\n\n[Practice Letterhead]\n\nDate: [Date]\n\nTo Whom It May Concern:\n\nRe: [Patient Name]\nDOB: [Date of Birth]\n\nI am the treating physician for the above-named patient and have been managing their care since [Date].\n\nDiagnosis:\n[Medical condition(s)]\n\nFunctional Limitations:\nDue to their condition, the patient experiences the following limitations:\n- [Limitation 1]\n- [Limitation 2]\n- [Limitation 3]\n\nRecommended Accommodations:\n- [Accommodation 1]\n- [Accommodation 2]\n\nDuration: [ ] Temporary (until [Date]) [ ] Permanent\n\nThis letter is provided at the patient's request to support their application for [disability benefits / workplace accommodations / etc.].\n\nPlease contact me at [Phone] if you require additional information.\n\nSincerely,\nDr. [Name]\n[License Number]" +
      DISCLAIMER,
  },
  {
    id: "school-physical-form",
    title: "School Physical Form",
    description: "Health examination form for school enrollment.",
    isPremium: false,
    content:
      "School Physical Examination Form\n\nStudent Name: [Name]\nDate of Birth: [DOB]\nGrade: [Grade]\nSchool: [School Name]\nExam Date: [Date]\n\nPHYSICAL MEASUREMENTS:\nHeight: ___ ft ___ in    Weight: ___ lbs\nBlood Pressure: ___/___ mmHg\nPulse: ___ bpm    Vision: L ___ R ___\nHearing: [ ] Pass [ ] Refer\n\nEXAMINATION FINDINGS:\n[ ] Normal [ ] Abnormal - Notes:\nHead/Neck: _______________\nEyes/Ears: _______________\nHeart: _______________\nLungs: _______________\nAbdomen: _______________\nMusculoskeletal: _______________\nNeurological: _______________\n\nIMMUNIZATIONS: [ ] Up to date [ ] Needs: ___\n\nCLEARANCE:\n[ ] Cleared for all activities\n[ ] Cleared with restrictions: _______________\n[ ] Not cleared - Reason: _______________\n\nPhysician Signature: ____________\nDate: ____________\nLicense #: ____________" +
      DISCLAIMER,
  },
  {
    id: "sports-physical-form",
    title: "Sports Physical Form",
    description: "Pre-participation physical for athletic activities.",
    isPremium: false,
    content:
      "Sports Pre-Participation Physical\n\nAthlete: [Name]\nDOB: [DOB]\nSport(s): [Sport]\nSchool/Team: [Name]\nExam Date: [Date]\n\nMEDICAL HISTORY (check all that apply):\n[ ] Heart problems\n[ ] Asthma\n[ ] Concussion\n[ ] Heat illness\n[ ] Seizures\n[ ] Broken bones\n[ ] Allergies: _______________\n[ ] Current medications: _______________\n\nFAMILY HISTORY:\n[ ] Sudden cardiac death before age 50\n[ ] Heart disease\n[ ] Other: _______________\n\nPHYSICAL EXAM:\nHeight: ___  Weight: ___  BP: ___/___\nHeart: [ ] Normal [ ] Abnormal\nLungs: [ ] Normal [ ] Abnormal\nMusculoskeletal: [ ] Normal [ ] Abnormal\n\nCLEARANCE STATUS:\n[ ] Cleared without restrictions\n[ ] Cleared with recommendations: ___\n[ ] Not cleared for: ___\n[ ] Pending further evaluation\n\nPhysician: _______________\nSignature: _______________\nDate: _______________" +
      DISCLAIMER,
  },
];
