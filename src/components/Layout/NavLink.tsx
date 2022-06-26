import { Link as RouterLink } from 'react-router-dom'
import { Flex, Icon, Link } from '@chakra-ui/react'

export type NavLinkProps = {
  link: any,
  [x: string]: any,
}

export default function NavLink({ link, ...rest }: NavLinkProps) {

  const {name, icon, to} = link

  return (
    <Link as={RouterLink} to={to} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align='center'
        p='4'
        mx='4'
        borderRadius='lg'
        role='group'
        cursor='pointer'
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon mr='4' fontSize='16' _groupHover={{ color: 'white' }} as={icon} />
        )}
        {name}
      </Flex>
    </Link>
  )
}