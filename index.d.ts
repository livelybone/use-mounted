/// <reference types="react" />
import { MutableRefObject } from 'react'

declare function useMounted(
  mountedFn?: () => void,
  unmountFn?: () => void,
): MutableRefObject<{
  mounted: boolean
  unmounted: boolean
}>

export default useMounted
