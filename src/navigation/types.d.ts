import type { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native'
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import type { Routes } from '@/config/routes'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

/* Root Router */
export type RootStackParamList = {
  [Routes.Main]: NavigatorScreenParams<MainHomeTabParamList>
  [Routes.WithoutTabs]: undefined
}

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>

/* Main Router */
export type MainHomeTabParamList = {
  [Routes.MainHome]: NavigatorScreenParams<HomeStackParamList>
  [Routes.Setting]: undefined
}

export type MainHomeTabScreenProps<T extends keyof MainHomeTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<MainHomeTabParamList, T>,
  RootStackScreenProps<keyof RootStackParamList>
>

/* Home Router */
export type HomeStackParamList = {
  [Routes.Home]: undefined
  [Routes.Details]: undefined
}

export type HomeStackScreenProps<T extends keyof HomeStackParamList> = CompositeScreenProps<
  NativeStackScreenProps<HomeStackParamList, T>,
  MainHomeTabScreenProps<keyof MainHomeTabParamList>
>

/* ... */

/* Map Helper */
export type ScreenPropsMap<T> = T extends keyof RootStackParamList
  ? RootStackScreenProps<T>
  : T extends keyof MainHomeTabParamList
  ? MainHomeTabScreenProps<T>
  : T extends keyof HomeStackParamList
  ? HomeStackScreenProps<T>
  : /* ... */
    never

/* Global */
export type ScreenRoute<T> = ScreenPropsMap<T>['route']
export type ScreenNavigation<T> = ScreenPropsMap<T>['navigation']

declare global {
  namespace ReactNavigation {
    type RootParamList = RootStackParamList
  }
}
