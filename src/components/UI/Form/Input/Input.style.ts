import { COLOR } from '@/config/constants/theme'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {},
  input: {
    borderBottomWidth: 1,
    overflow: 'hidden',
    padding: 0,
    paddingTop: 10,
    paddingBottom: 10,
  },
  error: {
    marginTop: 4,
    color: COLOR.READ,
  },
})

export default styles
