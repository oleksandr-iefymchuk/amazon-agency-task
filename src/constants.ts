import { Account, Campaign, Profile } from './interfaces';

const accounts: Account[] = [
  {
    accountId: 1,
    email: 'account1@example.com',
    authToken: 'token1',
    creationDate: new Date('2024-01-01'),
  },
  {
    accountId: 2,
    email: 'account2@example.com',
    authToken: 'token2',
    creationDate: new Date('2024-01-15'),
  },
  {
    accountId: 3,
    email: 'account3@example.com',
    authToken: 'token3',
    creationDate: new Date('2023-03-05'),
  },
  {
    accountId: 4,
    email: 'account4@example.com',
    authToken: 'token4',
    creationDate: new Date('2023-07-22'),
  },
  {
    accountId: 5,
    email: 'account5@example.com',
    authToken: 'token5',
    creationDate: new Date('2023-10-12'),
  },
];

const profiles: Profile[] = [
  {
    profileId: 1,
    accountId: 1,
    country: 'Country1',
    marketplace: 'Marketplace1',
  },
  {
    profileId: 2,
    accountId: 1,
    country: 'Country2',
    marketplace: 'Marketplace2',
  },
  {
    profileId: 3,
    accountId: 1,
    country: 'Country3',
    marketplace: 'Marketplace3',
  },
  {
    profileId: 4,
    accountId: 1,
    country: 'Country4',
    marketplace: 'Marketplace4',
  },
  {
    profileId: 5,
    accountId: 2,
    country: 'Country5',
    marketplace: 'Marketplace5',
  },
  {
    profileId: 6,
    accountId: 2,
    country: 'Country6',
    marketplace: 'Marketplace6',
  },
  {
    profileId: 7,
    accountId: 2,
    country: 'Country7',
    marketplace: 'Marketplace7',
  },
  {
    profileId: 8,
    accountId: 2,
    country: 'Country8',
    marketplace: 'Marketplace8',
  },
  {
    profileId: 9,
    accountId: 2,
    country: 'Country9',
    marketplace: 'Marketplace9',
  },
  {
    profileId: 10,
    accountId: 3,
    country: 'Country10',
    marketplace: 'Marketplace10',
  },
  {
    profileId: 11,
    accountId: 3,
    country: 'Country11',
    marketplace: 'Marketplace11',
  },
  {
    profileId: 12,
    accountId: 4,
    country: 'Country12',
    marketplace: 'Marketplace12',
  },
  {
    profileId: 13,
    accountId: 4,
    country: 'Country13',
    marketplace: 'Marketplace13',
  },
  {
    profileId: 14,
    accountId: 5,
    country: 'Country14',
    marketplace: 'Marketplace14',
  },
];

const campaigns: Campaign[] = [
  {
    campaignId: 1,
    profileId: 1,
    clicks: 100,
    cost: 50,
    date: new Date('2024-01-17'),
  },
  {
    campaignId: 2,
    profileId: 2,
    clicks: 150,
    cost: 75,
    date: new Date('2024-01-12'),
  },
  {
    campaignId: 3,
    profileId: 2,
    clicks: 50,
    cost: 175,
    date: new Date('2023-02-15'),
  },
  {
    campaignId: 4,
    profileId: 2,
    clicks: 110,
    cost: 90,
    date: new Date('2023-04-10'),
  },
  {
    campaignId: 5,
    profileId: 2,
    clicks: 170,
    cost: 70,
    date: new Date('2023-09-17'),
  },
  {
    campaignId: 6,
    profileId: 3,
    clicks: 130,
    cost: 60,
    date: new Date('2024-01-14'),
  },
  {
    campaignId: 7,
    profileId: 4,
    clicks: 170,
    cost: 70,
    date: new Date('2023-09-17'),
  },
  {
    campaignId: 8,
    profileId: 6,
    clicks: 190,
    cost: 50,
    date: new Date('2023-11-21'),
  },
];

export { accounts, profiles, campaigns };
