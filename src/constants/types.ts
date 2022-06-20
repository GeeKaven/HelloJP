export type ConjugationType = {
  text: string,
  conjugation: number,
  keigo: boolean,
  pronunciation?: string,
}

export type WordType = {
  text: string,
  conjugation: number,
  keigo: boolean,
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