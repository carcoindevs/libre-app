import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.cpool,
    earningToken: tokens.cpool,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 13,
    stakingToken: tokens.cpool,
    earningToken: tokens.bnb,
    contractAddress: {
      97: '',
      56: '0xdc8c45b7F3747Ca9CaAEB3fa5e0b5FCE9430646b',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '12.5',
    sortOrder: 999,
    isFinished: false,
  },
  {
    sousId: 11,
    stakingToken: tokens.cake,
    earningToken: tokens.nar,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xDc938BA1967b06d666dA79A7B1E31a8697D1565E',
    },
    poolCategory: PoolCategory.COMMUNITY,
    harvest: true,
    tokenPerBlock: '1',
    sortOrder: 999,
    isFinished: true,
  },
  {
    sousId: 10,
    stakingToken: tokens.cake,
    earningToken: tokens.nya,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x07a0A5B67136d40F4d7d95Bc8e0583bafD7A81b9',
    },
    poolCategory: PoolCategory.COMMUNITY,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '10',
    isFinished: true,
  },
  {
    sousId: 9,
    stakingToken: tokens.cake,
    earningToken: tokens.ctk,
    contractAddress: {
      97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
      56: '0x21A9A53936E812Da06B7623802DEc9A1f94ED23a',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.5',
    sortOrder: 999,
    isFinished: true,
  },
  {
    sousId: 8,
    stakingToken: tokens.cake,
    earningToken: tokens.twt,
    contractAddress: {
      97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
      56: '0xe7f9A439Aa7292719aC817798DDd1c4D35934aAF',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '20',
    sortOrder: 999,
    isFinished: true,
  },
  {
    sousId: 7,
    stakingToken: tokens.cake,
    earningToken: tokens.inj,
    contractAddress: {
      97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
      56: '0xcec2671C81a0Ecf7F8Ee796EFa6DBDc5Cb062693',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.25',
    sortOrder: 999,
    isFinished: true,
  },
]

export default pools
