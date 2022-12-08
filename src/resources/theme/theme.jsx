import { extendTheme } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  components: {
  },
  brand: {
    primario: '#f2fdff',
    secundario: '#e1c2b7',
    terciario: '#ffc09f',
    azul: '#5899e2',
    rojo: '#f40000',
    verde: '#adf7b6',
    negro: '#000'
  },

}

export const theme = extendTheme({ colors })