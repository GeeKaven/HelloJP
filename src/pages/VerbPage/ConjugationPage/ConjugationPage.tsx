import { useParams } from "react-router-dom"
import Words from "../../../db/words.json"
import Config from "../../../constants/config"
import { WordType } from "../../../constants/types"
import { randomArray } from "../../../utils/utils"
import { useEffect, useState } from "react"
import { Box, Button, Center, Flex, Input } from "@chakra-ui/react"

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
  }, [kana])

  function handleNextPage() {
    if ((page + 1) * size < words.length) {
      setPage(page + 1)
    } else {
      alert("No more words")
    }
  }

  const conjugationInputList: any[] = []
  const pageWords = words.slice((page - 1) * size, page * size)
  for (let i = 0; i < pageWords.length; i++) {
    conjugationInputList.push(
      <Flex key={i} flexWrap="wrap">
        <Center>{wordsArr[pageWords[i]].conjugations.plain[conjugation].text}</Center>
        <Box>
          <Input></Input>
        </Box>
      </Flex>
    )
  }

  return (
    <Box p={8}>
      <h1>{kana} page</h1>
      {words.length}
      {conjugationInputList}
      <Flex>
        <Button >看成绩</Button>
        <Button onClick={handleNextPage}>下一页</Button>
        <Button >解答</Button>
      </Flex>
    </Box>
  )
}

export default ConjugationPage