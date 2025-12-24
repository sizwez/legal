
import { GuideCategory, GovForm } from './types';

export const CATEGORIES: GuideCategory[] = [
  {
    id: 'sassa',
    title: 'SASSA Grants',
    description: 'Social security assistance including SRD R350, pension, and child grants.',
    icon: 'fa-hand-holding-heart',
    color: 'bg-emerald-500'
  },
  {
    id: 'uif',
    title: 'UIF & Employment',
    description: 'Unemployment insurance claims, maternity benefits, and registration.',
    icon: 'fa-briefcase',
    color: 'bg-blue-600'
  },
  {
    id: 'home-affairs',
    title: 'Home Affairs',
    description: 'IDs, Passports, Birth Certificates, and Marriages.',
    icon: 'fa-id-card',
    color: 'bg-indigo-600'
  },
  {
    id: 'transport',
    title: 'Transport & Licenses',
    description: 'Driver license renewals, vehicle registration, and PDP applications.',
    icon: 'fa-car',
    color: 'bg-amber-500'
  },
  {
    id: 'visas',
    title: 'Visas & Immigration',
    description: 'Critical skills visas, study permits, and permanent residency.',
    icon: 'fa-passport',
    color: 'bg-rose-600'
  },
  {
    id: 'municipal',
    title: 'Municipal Services',
    description: 'Utility accounts, rates, taxes, and service requests.',
    icon: 'fa-building-columns',
    color: 'bg-cyan-600'
  }
];

export const GOV_FORMS: GovForm[] = [
  { id: 'uif-1', title: 'UI19 Employer Declaration', department: 'Labor', url: 'https://www.labour.gov.za/DocumentCenter/Forms/Unemployment%20Insurance%20Fund/Form%20-%20UI-19.pdf', category: 'uif' },
  { id: 'sassa-1', title: 'SRD R350 Application Guide', department: 'SASSA', url: 'https://srd.sassa.gov.za/', category: 'sassa' },
  { id: 'dha-1', title: 'Passport Application (DHA-73)', department: 'Home Affairs', url: 'http://www.dha.gov.za/index.php/forms', category: 'home-affairs' },
  { id: 'transport-1', title: 'MVX1 Vehicle Registration', department: 'Transport', url: 'https://www.enatis.com/', category: 'transport' }
];

export const APP_SYSTEM_INSTRUCTION = `
You are LegalLink SA AI, the premier expert on South African government services.
Your primary mission is to simplify the complex bureaucratic processes of SA.

LANGUAGES:
You must detect the user's preferred language and respond in it if it is one of the 11 official SA languages (English, isiZulu, Afrikaans, Sesotho, etc.). 

CORE TOPICS:
1. SASSA (SRD, Old Age, Child Support).
2. UIF (Claims, UI19 forms, maternity).
3. Home Affairs (Smart IDs, Passports).
4. Transport (ENatis, License Discs, DLTC).
5. Immigration (Visas, DHA).

FORMATTING:
- Use bold text for document names.
- Provide step-by-step numbered lists.
- Always mention "Certified ID Copy" as a default requirement for almost everything in SA.
- Use Google Search to verify current fees (e.g., Passport fees, car license disc prices).
- If a user asks for a form, refer to the "Form Vault" or provide a direct .gov.za link.
`;
