import { useColorModeValue, Box, Flex, Text, CloseButton, UnorderedList, ListItem, List } from '@chakra-ui/react'
import React, { MouseEventHandler } from 'react'
import NavLink from '../NavLink'
import { Menu } from '../../constants/menu'

export type HeaderProps = {
  onClose: MouseEventHandler<HTMLButtonElement>;
  [x: string]: any;
}

export default function SideBar({ onClose, ...rest }: HeaderProps) {
  return (
    <Box
      transition='3s ease'
      bg={useColorModeValue('white', 'gray.900')}
      borderRight='1px'
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      overflow='auto'
      {...rest}>
      <Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
        <Text fontSize='2xl' fontFamily='monospace' fontWeight='bold'>
          Logo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <List>
        {Menu.map((link, i) => (
          <React.Fragment key={i}>
            <ListItem><NavLink link={link} /></ListItem>
            {link.sub &&
              <List>
                {link.sub.map((sub, j) => <ListItem key={j}><NavLink link={sub} mx='8' fontSize='sm' p='3' /></ListItem>)}
              </List>}
          </React.Fragment>
        ))}
      </List>
    </Box>
  )
}