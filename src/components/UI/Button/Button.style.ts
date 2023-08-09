import { COLOR } from '@/config/constants/theme'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLOR.BLUE,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  title: {
    color: COLOR.WHITE,
    fontWeight: 'bold',
  },
})

export default styles
