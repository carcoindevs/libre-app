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
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: 'https://carcoinmarket.io/#contact',
      },
      {
        label: 'Github',
        href: 'https://github.com/carcoindevs/libre-app',
      },

      {
        label: 'Blog',
        href: 'https://carcoinmarket.io/#about',
      },

    ],
  },
]

export default config
