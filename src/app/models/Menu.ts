import { Section } from './Section';

export interface Menu {
  full: boolean;
  items: Section[];
  selected?: string;
}
