import { useDisclosure, useColorModeValue, Box, Drawer, DrawerContent } from '@chakra-ui/react'
import Header from './Header'
import SideBar from './SideBar'

export type LayoutProps = {
  children: React.ReactNode,
}

export default function Layout({ children }: LayoutProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SideBar onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size='md'>
          <DrawerContent>
            <SideBar onClose={onClose}></SideBar>
          </DrawerContent>
      </Drawer>
      
      <Header onOpen={onOpen} />
      <Box ml={{base: 0, md: 60}} p='4'>
        {children}
      </Box>
    </Box>
  )
}