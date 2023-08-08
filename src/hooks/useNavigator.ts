import type { Routes } from '@/config/routes'
import type { ScreenNavigation, ScreenRoute } from '@/navigation/types'
import { useNavigation, useRoute } from '@react-navigation/native'

const useNavigator = <T extends Routes>() => {
  const navigation = useNavigation<ScreenNavigation<T>>()
  const route = useRoute<ScreenRoute<T>>()

  return { navigation, route }
}

export default useNavigator
