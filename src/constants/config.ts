const CONJUGATION_ENUM = {
  PRESENT: 0,
  NEGATIVE: 1,
  PAST: 2,
  PAST_NEGATIVE: 3,
  TE_FORM: 4,
  TAI_FORM: 5,
  VOLITIONAL: 6,
  IMPERATIVE: 7,
  PASSIVE: 8,
  CONDITIONAL: 9,
  PROVISIONAL_CONDITIONAL: 10,
  CAUSATIVE: 11,
  POTENTIAL: 12,
}

type CONJUGATION_NAME_TYPE = {
  [key: number]: string
}

const CONJUGATION_NAME: CONJUGATION_NAME_TYPE = {
  0: '辞書形',           // Present
  1: 'ない形',           // Negative
  2: 'た形',            // Past
  3: '过去否定',        // Past Negative
  4: 'て形',            // Te form
  5: 'たい形',          // Tai form
  6: '意志形',          // Volitional
  7: '命令形',          // Imperative
  8: '被动形（れる）',    // Passive
  9: '条件形（たら）',    // Conditional
  10: '假定形（ば）',     // Provisional conditional
  11: '使役形（せる）',   // Causative
  12: '可能形'           // Potential
}

const CONJUGATION_NAME_KANA = {
  "te": 4,       // て形
  "ta": 2,       // た形
  "nai": 1,      // ない形
  "ukemisonkei": 8,   // 被动形
  "shieki": 11,  // 使役形
  "jisho": 0,    // 辞書形
  "meirei": 7,   // 命令形
  "joken": 10,   // 假定形（ば）
  "kanou": 12,   // 可能形
  "ishi": 6,     // 意志形
  "kinshi": 9    // 禁止形
}

export default {
  CONJUGATION_ENUM,
  CONJUGATION_NAME,
  CONJUGATION_NAME_KANA
}