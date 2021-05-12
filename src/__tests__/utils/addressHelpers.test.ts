import { getAddress } from 'utils/addressHelpers'

describe('getAddress', () => {
  const address = {
    56: '0x51bd7298d99178a30eeedc9c7d60ac6415685617',
    97: '0xea56cc54f4e26bd5625f94150cd6418b81dd5764',
  }

  it(`get address for mainnet (chainId 56)`, () => {
    process.env.REACT_APP_CHAIN_ID = '56'
    const expected = address[56]
    expect(getAddress(address)).toEqual(expected)
  })
  it(`get address for testnet (chainId 97)`, () => {
    process.env.REACT_APP_CHAIN_ID = '97'
    const expected = address[97]
    expect(getAddress(address)).toEqual(expected)
  })
  it(`get address for any other network (chainId 31337)`, () => {
    process.env.REACT_APP_CHAIN_ID = '31337'
    const expected = address[56]
    expect(getAddress(address)).toEqual(expected)
  })
})
