export type ConjugationType = {
  text: string,
  conjugation: number,
  keigo: number,
  pronunciation?: string,
}

export type WordType = {
  text: string,
  conjugation: number,
  keigo: number,
  dictId: number,
  pronunciation?: string,
  conjugations: {
    plain: {
      [key: string]: ConjugationType,
    },
    keigo: {
      [key: string]: ConjugationType,
    }
  }
}