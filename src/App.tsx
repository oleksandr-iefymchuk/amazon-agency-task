import { useState } from 'react';
import './App.scss';
import { Account, Campaign, Profile } from './interfaces';
import { accounts, campaigns, profiles } from './constants';
import Table from './components/Table';

const App: React.FC = () => {
  const accountColumns: string[] = [
    'accountId',
    'email',
    'authToken',
    'creationDate',
  ];
  const profileColumns: string[] = ['profileId', 'country', 'marketplace'];
  const campaignColumns: string[] = ['campaignId', 'clicks', 'cost', 'date'];

  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

  const handleAccountClick = (account: Account): void => {
    setSelectedAccount(account);
    setSelectedProfile(null);
  };

  const handleProfileClick = (profile: Profile): void => {
    setSelectedProfile(profile);
  };

  return (
    <div>
      <h1>Accounts</h1>
      <Table<Account>
        data={accounts}
        columns={accountColumns}
        onRowClick={handleAccountClick}
      />

      {selectedAccount && (
        <>
          <h2>Profiles of selected account</h2>
          <Table<Profile>
            data={profiles.filter(
              (profile) => profile.accountId === selectedAccount.accountId,
            )}
            columns={profileColumns}
            onRowClick={handleProfileClick}
          />
        </>
      )}

      {selectedProfile && (
        <>
          <h3>Campaigns of selected profile</h3>
          <Table<Campaign>
            data={campaigns.filter(
              (campaign) => campaign.profileId === selectedProfile.profileId,
            )}
            columns={campaignColumns}
          />
        </>
      )}
    </div>
  );
};

export default App;
