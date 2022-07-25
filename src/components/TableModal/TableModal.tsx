export enum TABLE_TYPE {
  ANSWER,
  SCORE,
}

export type TableValueType = {
  t1: string
  t2: string
}

export type TableModalValueType = {
  table: TableValueType[]
  title: string,
  modalId: string,
  type: TABLE_TYPE
}

export type TableModalProps = {
  value: TableModalValueType
}

const TableModal = ({ value }: TableModalProps) => {

  const { table, title, type, modalId } = value

  const body = (
    <table className='table'>
      <tbody>
        {table.map((v, i) => (
          <tr key={i}>
            <td>{v.t1}</td>
            <td>
              {type === TABLE_TYPE.SCORE ? (v.t2 === '1' ? '✔️' : '❌') : v.t2}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )

  let score = null
  if (type === TABLE_TYPE.SCORE) {
    const totalScore = table
      .map((v) => parseInt(v.t2))
      .reduce((p, r) => p + r, 0)
    const poor = totalScore < 8

    score = (
      <div className='flex flex-wrap justify-between items-center p-4'>
        <div className='flex flex-col'>
          <p className='text-green'>
            {totalScore == table.length
              ? '正确解答所有问题！'
              : `${table.length}题中答对${totalScore}题`}
          </p>
          <p className={`${poor ? 'text-green' : 'text-red'}`}>
            {poor
              ? '再加油吧！(￣□￣|||'
              : totalScore < table.length
              ? '不錯喔！（*^ _ ^*）'
              : '恭喜您! 、\\ \\( ⌒▽⌒ )/ /'}
          </p>
        </div>
        <p className='text-center text-red md:text-4xl text-2xl font-bold'>
          {totalScore * 10} 分
        </p>
      </div>
    )
  }

  return (
    <div>
      <input type='checkbox' id={modalId} className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box'>
          <h3 className="font-bold text-lg">{title}</h3>
          {body}
          {score}
          <div className='modal-action'>
            <label htmlFor={modalId} className='btn'>
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TableModal
