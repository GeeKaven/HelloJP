import { useColorModeValue, Box, Flex, Text, CloseButton, UnorderedList, ListItem, List } from '@chakra-ui/react'
import React from 'react'
import { FiHome } from 'react-icons/fi'
import NavLink from './NavLink'

const Menu = [
  { name: '首页', icon: FiHome, to: '/' },
  { name: '首页', icon: FiHome, to: '/' },
  { name: '首页', icon: FiHome, to: '/' },
  {
    name: '动词变形练习', icon: FiHome,
    sub: [
      { name: 'て形', icon: FiHome, to: '/verbs/te' },
      { name: '辞书形', icon: FiHome, to: '/verbs/jisho' },
      { name: 'ない形', icon: FiHome, to: '/verbs/nai' },
      { name: 'た形', icon: FiHome, to: '/verbs/ta' },
      { name: '意向形', icon: FiHome, to: '/verbs/iko' },
      { name: '命令形', icon: FiHome, to: '/verbs/meirei' },
      { name: '条件形', icon: FiHome, to: '/verbs/joken' },
      { name: '可能形', icon: FiHome, to: '/verbs/kano' },
      { name: '被动、尊敬', icon: FiHome, to: '/verbs/ukemisonkei' },
      { name: '使役形', icon: FiHome, to: '/verbs/shieki' },
    ]
  },
]

export type HeaderProps = {
  onClose(): void;
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