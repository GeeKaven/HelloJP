import { Flex, HStack, IconButton, Text, useColorModeValue } from "@chakra-ui/react";
import { MouseEventHandler } from "react";
import { FiBell, FiMenu } from "react-icons/fi"

export type HeaderProps = {
  onOpen: MouseEventHandler<HTMLButtonElement>,
  [x: string]: any,
}

export default function Header({ onOpen, ...rest }: HeaderProps) {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height='20'
      position='sticky'
      top='0'
      alignItems='center'
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth='1px'
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant='outline'
        aria-label='open menu'
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize='2xl'
        fontFamily='monospace'
        fontWeight='bold'>
        Logo
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton
          size='lg'
          variant='ghost'
          aria-label='open menu'
          icon={<FiBell />} />
      </HStack>
    </Flex>
  )
}