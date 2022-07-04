import { Button, Flex, forwardRef, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Table, TableContainer, Tbody, Td, Text, Tr, useDisclosure, VStack } from "@chakra-ui/react"
import { useImperativeHandle } from "react"

export enum TABLE_TYPE {
  ANSWER,
  SCORE
}

export type TableValueType = {
  t1: string
  t2: string
}

export type TableModalValueType = {
  table: TableValueType[],
  title: string
  type: TABLE_TYPE
}

export type TableModalType = {
  value: TableModalValueType
}

export type TableModalRef = {
  onOpen: () => void,
  modalIsOpen: () => boolean
}

const TableModal = forwardRef(({ value }: TableModalType, ref) => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const { table, title, type } = value

  useImperativeHandle(ref, () => ({
    onOpen,
    modalIsOpen() {
      return isOpen
    }
  }))

  const body = (
    <TableContainer>
      <Table size={['sm', 'md']}>
        <Tbody>
          {table.map((v, i) => (
            <Tr key={i}>
              <Td>{v.t1}</Td>
              <Td>{type === TABLE_TYPE.SCORE ? v.t2 === '1' ? '✔️' : '❌' : v.t2}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )

  let score = null
  if (type === TABLE_TYPE.SCORE) {
    const totalScore = table.map((v) => parseInt(v.t2)).reduce((p, r) => p + r, 0)
    const poor = totalScore < 8
    score = (
      <Flex flexWrap='wrap' justifyContent='space-between' alignItems='center' p='4'>
        <VStack align='left'>
          <Text color='green'>{totalScore == table.length ? '正确解答所有问题！' : `${table.length}题中答对${totalScore}题`}</Text>
          <Text color={poor ? 'green' : 'red'}>
            {poor ? '再加油吧！(￣□￣|||' : totalScore < table.length ? '不錯喔！（*^ _ ^*）' : '恭喜您! 、\\ \\( ⌒▽⌒ )/ /'}
          </Text>
        </VStack>
        <Text align='center' color='red' fontSize={['2xl', '4xl']} as='u' fontWeight='bold'>{totalScore * 10} 分</Text>
      </Flex>
    )
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {body}
          {score}
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='teal' onClick={onClose}>关闭</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
})

export default TableModal