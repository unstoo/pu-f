import * as React from 'react'
// import fetch from 'isomorphic-unfetch';
// import { NextPage, NextFunctionComponent } from 'next';


import appContainer from './app-container.module.css';
// import Link from 'next/link'
// import { User } from '../interfaces'
import SideMenu from './SideMenu';
// // ==
import TransactionScreen from './TransactionScreen';
import AccountHeader from './AccountHeader';
import LastOperations from './LastOperations';
import MyCards from './MyCards';
// // ===
import MasterScreen from './MasterScreen';
import SearchBlock from './SearchBlock';
import SearchBar from './SearchBar';
import TipIcon from './TipIcon';
import MyAccounts from './MyAccounts';
import CurrencyExchenger from './CurrencyExchenger';
import ProductsList from './ProductsList';
import Button from './Button';

const propsAccountHeader = {
  accountHolderName: 'Fyodor Dostoevsky',
  accountStatus: 'Verified',
  accountId: 24852,
  interfaceLanguage: 'ENG',
};


type Props = {
  data?: string,
  hydrate?: any
}

const Dashboard: React.FC<Props> = ({hydrate}) => {
  return (
    <>
    <div className={appContainer['app-container']}>
      <SideMenu />
      <MasterScreen>
        <SearchBlock>
          <SearchBar />
          <TipIcon hintText="Some hint."/>
        </SearchBlock>
        <MyAccounts />
        <CurrencyExchenger />
        <ProductsList />
      </MasterScreen>
      <TransactionScreen>
        <AccountHeader
          accountHolderName={hydrate ||propsAccountHeader.accountHolderName}
          accountStatus={propsAccountHeader.accountStatus}
          accountId={propsAccountHeader.accountId}
          interfaceLanguage={propsAccountHeader.interfaceLanguage}
        >
          <Button>Log out</Button>
        </AccountHeader>
        <LastOperations operations={propsLastOperations} />
        <MyCards />
      </TransactionScreen>
    </div>
  </>
  )
}

export default Dashboard

const propsLastOperations = [
  {
    transactionType: 'debit',
    status: 'pending',
    amount: 1333.33,
    currency: 'usd',
    date: '2020-08-16',
    label: 'Amazon',
  },
  {
    transactionType: 'credit',
    status: 'complete',
    amount: 524.23,
    currency: 'usd',
    date: '2020-08-16',
    label: 'Card *1015',
  },
  {
    transactionType: 'debitInner',
    status: 'complete',
    amount: 524.23,
    currency: 'usd',
    date: '2020-08-16',
    label: 'Alexander Block',
  },
  {
    transactionType: 'debit',
    status: 'pending',
    amount: 524.23,
    currency: 'usd',
    date: '2020-08-16',
    label: 'Alexander Block',
  },
  {
    transactionType: 'credit',
    status: 'complete',
    amount: 7611.0,
    currency: 'usd',
    date: '2020-08-16',
    label: 'Card *7777',
  },
  {
    transactionType: 'credit',
    status: 'complete',
    amount: 5549.0,
    currency: 'usd',
    date: '2020-08-16',
    label: 'Card *3778',
  },
];