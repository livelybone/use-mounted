import { useEffect, useRef } from 'react'

export type UnmountFn = () => void

export default function useMounted(mountedFn: () => void | UnmountFn) {
  const fn = useRef(mountedFn)
  fn.current = mountedFn
  const state = useRef({
    mounted: false,
    unmounted: false,
  })
  useEffect(() => {
    state.current.mounted = true
    state.current.unmounted = false
    const unmountedFn = fn.current && fn.current()
    return () => {
      if (typeof unmountedFn === 'function') unmountedFn()
      state.current.unmounted = true
    }
  }, [])
  return state
}
