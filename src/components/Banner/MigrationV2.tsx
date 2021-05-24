import React from 'react'
import { Text, Flex, Box, ErrorIcon, Button } from '@tiscotservices/carpooluikit'
import Banner from './Banner'

const MigrationV2 = () => {
  return (
    <Banner
      id="v2-migration"
      title={
        <Flex alignItems="center">
          <ErrorIcon color="white" width="32px" mr="16px" />
          <Text color="white" fontSize="24px" bold>
            Message from CarPool devs...
          </Text>
        </Flex>
      }
    >
      <Box ml="48px">
        <Text color="warning" bold>
          CarPool Finance by CarCoin CCM.
        </Text>
        <Text color="white" mb="16px">
          Stake your CPool and earn CPool
        </Text>
        <Button as="a" href="https://carcoinmarket.io/">
          Learn more
        </Button>
      </Box>
    </Banner>
  )
}

export default MigrationV2
