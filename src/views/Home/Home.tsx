import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@tiscotservices/carpooluikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import CakeStats from 'views/Home/components/CakeStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import EarnAPRCard from 'views/Home/components/EarnAPRCard'
import EarnAssetCard from 'views/Home/components/EarnAssetCard'
import WinCard from 'views/Home/components/WinCard'

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/pan-bg-mobile.svg');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/pan-bg2.png');
    background-position: center;
    height: 165px;
    padding-top: 0;
  }
`

const Footer = styled.div`
  align-items: center;
  background-image: url('/images/Transparentbadge.png');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/Transparentbadge.png');
    background-position: center;
    height: 180px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;

  & > div {
    grid-column: span 7;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 6;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 8;
    }
  }
`

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 4;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
      <Heading as="h1" size="xl" mb="24px" color="primary">
        {TranslateString(576, ' ')}
      </Heading>
        <Text>{TranslateString(578, ' ')}</Text>
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
        </Cards>
        <CTACards>
          <EarnAPRCard />
          <EarnAssetCard />
          <WinCard />
        </CTACards>
        <Cards>
          <CakeStats />
          <TotalValueLockedCard />
        </Cards>
      </div>
      <Footer href="https://carcoinmarket.com/">{TranslateString(610, 'CarCoin')}</Footer>
    </Page>
  )
}

export default Home
