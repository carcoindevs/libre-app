import React from 'react'
import { Text, Flex, Box, ErrorIcon, Button } from 'carpooluikit'
import Banner from './Banner'

const MigrationV2 = () => {
  return (
    <Banner
      id="v2-migration"
      title={
        <Flex alignItems="center">
          <ErrorIcon color="white" width="32px" mr="16px" />
          <Text color="white" fontSize="24px" bold>
            Message from LibreSwap devs...
          </Text>
        </Flex>
      }
    >
      <Box ml="48px">
        <Text color="warning" bold>
          LibreSwap is still under construction and liquidity pools are not yet migrated.
        </Text>
        <Text color="white" mb="16px">
          All LPs will be migrated to LibreSwap over the next several hours starting from now.
        </Text>
        <Button as="a" href="https://v1exchange.pancakeswap.finance/#/migrate">
          Migrate Now
        </Button>
      </Box>
    </Banner>
  )
}

export default MigrationV2
