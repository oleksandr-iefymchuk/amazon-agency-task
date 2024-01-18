export interface Account {
  accountId: number;
  email: string;
  authToken: string;
  creationDate: Date;
  [key: string]: unknown;
}

export interface Profile {
  profileId: number;
  accountId: number;
  country: string;
  marketplace: string;
  [key: string]: unknown;
}

export interface Campaign {
  campaignId: number;
  profileId: number;
  clicks: number;
  cost: number;
  date: Date;
  [key: string]: unknown;
}

export interface TableProps<T> {
  data: T[];
  columns: string[];
  onRowClick?: ((row: T) => void) | undefined;
}
