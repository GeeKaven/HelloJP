import { Button, Flex, forwardRef, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Table, TableContainer, Tbody, Td, Text, Tr, useDisclosure, VStack } from "@chakra-ui/react"
import { useImperativeHandle } from "react"

export type ModalAnswerType = {
  answers: number[],
  title: string
}

export type ModalAnswerRef = {
  onOpen: () => void,
  modalIsOpen: () => boolean
}

const ModalAnswer = forwardRef(({ answers, title }: ModalAnswerType, ref) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  useImperativeHandle(ref, () => ({
    onOpen,
    modalIsOpen() {
      return isOpen
    }
  }))

  const score = answers.reduce((p, r) => p + r, 0)
  const poor = score < 8

  const body = (
    <TableContainer>
      <Table variant='simple' size={['sm', 'md']}>
        <Tbody>
          {answers.map((v, i) => (
            <Tr key={i}>
              <Td>问题 {i + 1}</Td>
              <Td>{v == 0 ? '❌' : '✔️'}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {body}
          <Flex flexWrap='wrap' justifyContent='space-between' alignItems='center' p='4'>
            <VStack align='left'>
              <Text>{score == answers.length ? '正确解答所有问题！' : `${answers.length}题中答对${score}题`}</Text>
              <Text color={poor ? 'green' : 'red'}>
                {poor ? '再加油吧! (￣□￣|||' : score < answers.length ? '不錯喔! (*^ ^*)' : '恭喜您! 、\\ \\( ⌒▽⌒ )/ /'}
              </Text>
            </VStack>
            <Text align='center' color='red' fontSize={['2xl', '4xl']} as='u' fontWeight='bold'>{score * 10} 分</Text>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='teal' onClick={onClose}>关闭</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
})

export default ModalAnswer