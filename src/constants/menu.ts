import { FiHome } from 'react-icons/fi'

export const Menu = [
  { name: '首页', icon: FiHome, to: '/' },
  { name: '首页', icon: FiHome, to: '/' },
  { name: '首页', icon: FiHome, to: '/' },
  {
    name: '动词活用', icon: FiHome, to: '/verbs',
    sub: [
      { name: 'て形', icon: FiHome, to: '/verbs/te' },
      { name: 'た形', icon: FiHome, to: '/verbs/ta' },
      { name: 'ない形', icon: FiHome, to: '/verbs/nai' },
      { name: '被动形', icon: FiHome, to: '/verbs/ukemisonkei' },
      { name: '使役形', icon: FiHome, to: '/verbs/shieki' },
      { name: '辞书形', icon: FiHome, to: '/verbs/jisho' },
      { name: '命令形', icon: FiHome, to: '/verbs/meirei' },
      { name: '假定形', icon: FiHome, to: '/verbs/joken' },
      { name: '可能形', icon: FiHome, to: '/verbs/kanou' },
      { name: '意志形', icon: FiHome, to: '/verbs/ishi' },
      { name: '禁止形', icon: FiHome, to: '/verbs/kinshi' },
    ]
  },
]