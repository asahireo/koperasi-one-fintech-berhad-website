export type SolutionId = 'icmis' | 'kosmart' | 'iaccount' | 'imembership' | 'ilms';

export interface LocalizedString {
  en: string;
  ms: string;
}

export interface LocalizedArray {
  en: string[];
  ms: string[];
}

export interface SolutionData {
  id: SolutionId;
  title: string; // Title usually stays same or similar, but we can localize if needed. Keeping simple for now as names.
  description: LocalizedString;
  features: LocalizedArray;
  link: string;
  detailTitle: LocalizedString;
  detailDescription: LocalizedString;
  detailModules: LocalizedArray;
  detailBenefits?: LocalizedArray;
  architecture?: boolean;
  pricing?: boolean;
  brochureFile?: string;
}

export interface NavItem {
  label: LocalizedString;
  path: string;
  subItems?: { label: LocalizedString; path: string }[];
}
