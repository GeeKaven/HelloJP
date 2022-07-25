import { useParams } from 'react-router-dom'
import Words from '@db/words.json'
import Config from '@constants/config'
import { WordType } from '@constants/types'
import { randomArray } from '@utils/utils'
import React, { useEffect, useState } from 'react'
import TableModal, {
  TableValueType,
  TableModalValueType,
  TABLE_TYPE,
} from '@/components/TableModal'

function ConjugationPage() {
  const size = 10
  const { kana } = useParams()
  const conjugationNameKana: { [key: string]: number } =
    Config.CONJUGATION_NAME_KANA
  const conjugation: number = conjugationNameKana[kana as string]

  const wordsArr: WordType[] = Words as WordType[]
  const [words, setWords] = useState<number[]>([])
  const [page, setPage] = useState<number>(1)
  const [inputValues, setInputValues] = useState<string[]>(Array(size).fill(''))
  const [modalValue, setModalValue] = useState<TableModalValueType>({
    table: [],
    title: '',
    type: TABLE_TYPE.SCORE,
    modalId: ''
  })
  const scoreModal = 'score-modal'
  const answerModal = 'answer-modal'

  useEffect(() => {
    setWords(randomArray(0, wordsArr.length - 1, 100))
    setPage(1)
    setInputValues(Array(size).fill(''))
  }, [kana])

  function handleNextPage() {
    if ((page + 1) * size > words.length) {
      alert('No more words')
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
      const value: string = inputValues[i]
      const word: string =
        wordsArr[pageWords[i]].conjugations.plain[conjugation].text
      newScore[i] = { t1: `问题${i}`, t2: value === word ? '1' : '0' }
    }
    console.log(newScore)
    setModalValue({ table: newScore, title: '成绩', type: TABLE_TYPE.SCORE, modalId: scoreModal })
  }

  function handleAnswer() {
    const newAnswer: TableValueType[] = Array(size)
    for (let i = 0; i < pageWords.length; i++) {
      const wordIndex = pageWords[i]
      newAnswer[i] = {
        t1: wordsArr[wordIndex].text,
        t2: wordsArr[wordIndex].conjugations.plain[conjugation].text,
      }
    }
    setModalValue({ table: newAnswer, title: '解答', type: TABLE_TYPE.ANSWER, modalId: answerModal })
  }

  const conjugationInputList: any[] = []
  const pageWords = words.slice((page - 1) * size, page * size)
  for (let i = 0; i < pageWords.length; i++) {
    conjugationInputList.push(
      <div key={i} className='flex justify-between w-full'>
        <div className='text-base sm:text-sm md:text-md lg:text-lg xl:text-xl text-center'>
          {i + 1}、 {wordsArr[pageWords[i]].text} (
          {wordsArr[pageWords[i]].pronunciation})
        </div>
        <div className='w-0.5'>
          <input
            value={inputValues[i]}
            name={i.toString()}
            onChange={handleInputChange}
            autoComplete='off'
          ></input>
        </div>
      </div>
    )
  }

  return (
    <div className='p-2'>
      <div className='flex font-bold text-md text-center flex-col content-start'>
        <p className='mb-1'>
          「ひらがな（全角）」で{' '}
          <span className='text-red'>
            {Config.CONJUGATION_NAME[conjugation]}{' '}
          </span>
          を入力してください。
        </p>
        <p className=''>
          请用”平假名(全形)”输入{' '}
          <span className='text-red'>
            {Config.CONJUGATION_NAME[conjugation]}
          </span>
        </p>
        <div className='flex justify-between mb-1'>
          <p className='whitespace-nowrap	mr-2'>例： {wordsArr[0].text}</p>
          <input type="text" placeholder={wordsArr[0].conjugations.plain[conjugation].text} readOnly/>
        </div>
        {conjugationInputList}
        <div className='justify-around w-3/4 mt-4'>
          <label htmlFor={scoreModal} className="btn modal-button" onClick={handleScore}>看成绩</label>
          <button className='btn' onClick={handleNextPage}>再一次</button>
          <label htmlFor={answerModal} className="btn modal-button" onClick={handleAnswer}>解答</label>
        </div>
        <TableModal value={modalValue} />
      </div>
    </div>
  )
}

export default ConjugationPage
