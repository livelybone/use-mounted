/// <reference types="react" />
import { MutableRefObject } from 'react'

declare type UnmountFn = () => void

declare function useMounted(
  mountedFn?: () => void | UnmountFn,
): MutableRefObject<{
  mounted: boolean
  unmounted: boolean
}>

export default useMounted
export { UnmountFn }
