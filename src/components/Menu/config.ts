import { MenuEntry } from '@tiscotservices/carpooluikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    status: {
      text: 'MIGRATE',
      color: 'warning',
    },
    items: [

      {
        label: 'Exchange',
        href: 'https://app.1inch.io/#/56/swap/BNB/LIBRE',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/pool',
      },

    ],
  },

  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
  },

  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: 'https://docs.pancakeswap.finance/contact-us',
      },
      {
        label: 'Voting',
        href: 'https://voting.pancakeswap.finance',
      },
      {
        label: 'Github',
        href: 'https://github.com/TiscotSerVices',
      },
      {
        label: 'Docs',
        href: 'https://docs.pancakeswap.finance',
      },
      {
        label: 'Blog',
        href: 'https://pancakeswap.medium.com',
      },
      {
        label: 'Merch',
        href: 'https://pancakeswap.creator-spring.com/',
      },
    ],
  },
]

export default config
