import { useParams } from "react-router-dom"
import Words from "@db/words.json"
import Config from "@constants/config"
import { WordType } from "@constants/types"
import { randomArray } from "@utils/utils"
import { useEffect, useState } from "react"
import { Box, Button, Center, Container, Flex, Input, VStack } from "@chakra-ui/react"

function ConjugationPage() {
  const size = 10
  const { kana } = useParams()
  const conjugationNameKana: { [key: string]: number } = Config.CONJUGATION_NAME_KANA
  const conjugation: number = conjugationNameKana[kana as string]

  const wordsArr: WordType[] = Words as WordType[]
  const [words, setWords] = useState<number[]>([])
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    setWords(randomArray(0, wordsArr.length - 1, 100))
    setPage(1)
  }, [kana])

  function handleNextPage() {
    if ((page + 1) * size > words.length) {
      alert("No more words")
    } else {
      setPage(page + 1)
    }
  }

  const conjugationInputList: any[] = []
  const pageWords = words.slice((page - 1) * size, page * size)
  for (let i = 0; i < pageWords.length; i++) {
    conjugationInputList.push(
      <Flex key={i} justifyContent='space-between' w='100%'>
        <Center fontSize={['sm', 'md', 'lg', 'xl']}>{wordsArr[pageWords[i]].text} ({wordsArr[pageWords[i]].pronunciation})</Center>
        <Box>
          <Input></Input>
        </Box>
      </Flex>
    )
  }

  return (
    <Container p={8}>
      <h1>{kana} page</h1>
      {words.length}
      <VStack spacing={4}>
        {conjugationInputList}
      </VStack>
      <Flex justifyContent='space-around' w='80%' mt={16}>
        <Button colorScheme='teal'>看成绩</Button>
        <Button colorScheme='teal' onClick={handleNextPage}>再一次</Button>
        <Button colorScheme='teal'>解答</Button>
      </Flex>
    </Container>
  )
}

export default ConjugationPage