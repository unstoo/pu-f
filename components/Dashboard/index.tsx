import * as React from 'react'
// import Link from 'next/link'
// import { User } from '../interfaces'
/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-closing-bracket-location */
// import appContainer from './app-container.css';
import SideMenu from './SideMenu';
import MasterScreen from './MasterScreen';
import TransactionScreen from './TransactionScreen';
// // ==
import AccountHeader from './AccountHeader';
// // ===
// import LastOperations from './LastOperations';
// import SearchBlock from './SearchBlock';
// import SearchBar from './SearchBar';
// import TipIcon from './TipIcon';
// import MyAccounts from './MyAccounts';
// import CurrencyExchenger from './CurrencyExchenger';
// import ProductsList from './ProductsList';
// import MyCards from './MyCards';
// // import SomeContext from './SomeContext'
// import Button from './Button';

const propsAccountHeader = {
  accountHolderName: 'Fyodor Dostoevsky',
  accountStatus: 'Verified',
  accountId: 24852,
  interfaceLanguage: 'ENG',
};

// const propsLastOperations = [
//   {
//     transactionType: 'debit',
//     status: 'pending',
//     amount: 1333.33,
//     currency: 'usd',
//     date: '2020-08-16',
//     label: 'Amazon',
//   },
//   {
//     transactionType: 'credit',
//     status: 'complete',
//     amount: 524.23,
//     currency: 'usd',
//     date: '2020-08-16',
//     label: 'Card *1015',
//   },
//   {
//     transactionType: 'debitInner',
//     status: 'complete',
//     amount: 524.23,
//     currency: 'usd',
//     date: '2020-08-16',
//     label: 'Alexander Block',
//   },
//   {
//     transactionType: 'debit',
//     status: 'pending',
//     amount: 524.23,
//     currency: 'usd',
//     date: '2020-08-16',
//     label: 'Alexander Block',
//   },
//   {
//     transactionType: 'credit',
//     status: 'complete',
//     amount: 7611.0,
//     currency: 'usd',
//     date: '2020-08-16',
//     label: 'Card *7777',
//   },
//   {
//     transactionType: 'credit',
//     status: 'complete',
//     amount: 5549.0,
//     currency: 'usd',
//     date: '2020-08-16',
//     label: 'Card *3778',
//   },
// ];

// className={appContainer['app-container']}

type Props = {
  data?: string
}

const ListItem: React.FunctionComponent<Props> = ({ data }) => (
  <>
  <div>
    <SideMenu />
    {/* <SomeContext.Provider value={this.state.MasterScreenData}> */}
    <MasterScreen>
      {/* <SearchBlock>
        <SearchBar />
        <TipIcon />
      </SearchBlock>
      <MyAccounts />
      <CurrencyExchenger />
      <ProductsList /> */}
    </MasterScreen>
    {/* </SomeContext.Provider> */}
    <TransactionScreen>
      <AccountHeader
        accountHolderName={propsAccountHeader.accountHolderName}
        accountStatus={propsAccountHeader.accountStatus}
        accountId={propsAccountHeader.accountId}
        interfaceLanguage={propsAccountHeader.interfaceLanguage}
      >
        {/* <Button>Log out</Button> */}
      </AccountHeader>
      {/* <LastOperations operations={propsLastOperations} />
      <MyCards /> */}
    </TransactionScreen>
  </div>
</>
)

export default ListItem
