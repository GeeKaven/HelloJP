import { useParams } from "react-router-dom"
import Words from "@db/words.json"
import Config from "@constants/config"
import { WordType } from "@constants/types"
import { randomArray } from "@utils/utils"
import React, { useEffect, useRef, useState } from "react"
import { Box, Button, Center, Container, Flex, Input, Text, VStack } from "@chakra-ui/react"
import TableModal, { TableModalRef, TableValueType, TableModalValueType, TABLE_TYPE } from "@/components/TableModal"

function ConjugationPage() {
  const size = 10
  const { kana } = useParams()
  const conjugationNameKana: { [key: string]: number } = Config.CONJUGATION_NAME_KANA
  const conjugation: number = conjugationNameKana[kana as string]

  const modalRef = useRef<TableModalRef>(null)

  const wordsArr: WordType[] = Words as WordType[]
  const [words, setWords] = useState<number[]>([])
  const [page, setPage] = useState<number>(1)
  const [inputValues, setInputValues] = useState<string[]>(Array(size).fill(''))
  const [modalValue, setModalValue] = useState<TableModalValueType>({ table: [], title: '', type: TABLE_TYPE.SCORE })


  useEffect(() => {
    setWords(randomArray(0, wordsArr.length - 1, 100))
    setPage(1)
    setInputValues(Array(size).fill(''))
  }, [kana])

  function handleNextPage() {
    if ((page + 1) * size > words.length) {
      alert("No more words")
    } else {
      setInputValues(Array(size).fill(''))
      setPage(page + 1)
    }
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newInputValues = [...inputValues]
    newInputValues[parseInt(event.target.name)] = event.target.value
    setInputValues(newInputValues)
    console.log(newInputValues)
  }

  function handleScore() {
    const newScore: TableValueType[] = Array(size)
    for (let i = 0; i < inputValues.length; i++) {
      const value: string = inputValues[i];
      const word: string = wordsArr[pageWords[i]].conjugations.plain[conjugation].text
      newScore[i] = { t1: `问题${i}`, t2: value === word ? '1' : '0' }
    }
    console.log(newScore)
    setModalValue({ table: newScore, title: '成绩', type: TABLE_TYPE.SCORE })
    if (modalRef.current !== null) { modalRef.current.onOpen() }
  }

  function handleAnswer() {
    const newAnswer: TableValueType[] = Array(size)
    for (let i = 0; i < pageWords.length; i++) {
      const wordIndex = pageWords[i];
      newAnswer[i] = {
        t1: wordsArr[wordIndex].text, 
        t2: wordsArr[wordIndex].conjugations.plain[conjugation].text
      }
    }
    setModalValue({table: newAnswer, title: '解答', type: TABLE_TYPE.ANSWER})
    if (modalRef.current !== null) { modalRef.current.onOpen() }
  }

  const conjugationInputList: any[] = []
  const pageWords = words.slice((page - 1) * size, page * size)
  for (let i = 0; i < pageWords.length; i++) {
    conjugationInputList.push(
      <Flex key={i} justifyContent='space-between' w='100%'>
        <Center fontSize={['sm', 'md', 'lg', 'xl']}>{i + 1}、 {wordsArr[pageWords[i]].text} ({wordsArr[pageWords[i]].pronunciation})</Center>
        <Box width={['50%', 'auto']}>
          <Input
            value={inputValues[i]}
            name={i.toString()}
            onChange={handleInputChange}
            autoComplete='off'>
          </Input>
        </Box>
      </Flex>
    )
  }

  return (
    <Container p={8}>
      <Flex fontWeight='bold' fontSize={['sm', 'md', 'lg']} textAlign='left' flexDirection='column' alignContent='flex-start'>
        <Text mb='2'>「ひらがな（全角）」で <Box as="span" color='red'>{Config.CONJUGATION_NAME[conjugation]} </Box> を入力してください。</Text>
        <Text mb='2'>
          请用”平假名(全形)”输入 <Box as="span" color='red'>{Config.CONJUGATION_NAME[conjugation]}</Box></Text>
        <Flex mb='4' justifyContent='space-between'>
          <Text whiteSpace='nowrap' mr='6'>例：  {wordsArr[0].text}</Text>
          <Input size='sm' placeholder={wordsArr[0].conjugations.plain[conjugation].text} readOnly></Input>
        </Flex>
      </Flex>

      <VStack spacing={4}>
        {conjugationInputList}
      </VStack>
      <Flex justifyContent='space-around' w='80%' mt={16}>
        <Button colorScheme='teal' onClick={handleScore}>看成绩</Button>
        <Button colorScheme='teal' onClick={handleNextPage}>再一次</Button>
        <Button colorScheme='teal' onClick={handleAnswer}>解答</Button>
      </Flex>
      <TableModal value={modalValue} ref={modalRef} />
    </Container>
  )
}

export default ConjugationPage