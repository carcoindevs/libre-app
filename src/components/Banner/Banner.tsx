import React from 'react'
import { Box, ExpandableLabel, Flex } from '@tiscotservices/carpooluikit'
import styled from 'styled-components'
import usePersistState from 'hooks/usePersistState'

interface Props {
  id: string
  title: React.ReactNode
}

const Wrapper = styled(Box)<{ isVisible: boolean }>`
  background: #BDBDBD;
  box-shadow: inset 0px -4px 4px rgba(0, 0, 0, 0.25);
  padding: 32px;
  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
  }
`

const Content = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`

const Banner: React.FC<Props> = ({ id, title, children, ...props }) => {
  const [isVisible, setIsVisible] = usePersistState(true, `banner-${id}`)
  return (
    <Wrapper isVisible={isVisible} {...props}>
      <Flex justifyContent="space-between" flexDirection={['column', 'row']}>
        {title}
        <ExpandableLabel expanded={isVisible} onClick={() => setIsVisible((prev) => !prev)}>
          {isVisible ? 'Hide' : 'Details'}
        </ExpandableLabel>
      </Flex>
      <Content isVisible={isVisible}>{children}</Content>
    </Wrapper>
  )
}

export default Banner
