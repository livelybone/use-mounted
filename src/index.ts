import { useEffect, useRef } from 'react'

export default function useMounted(
  mountedFn?: () => void,
  unmountFn?: () => void,
) {
  const fns = useRef({ mountedFn, unmountFn })
  fns.current.mountedFn = mountedFn
  fns.current.unmountFn = unmountFn

  const state = useRef({ mounted: false, unmounted: false })

  useEffect(() => {
    state.current.mounted = true
    fns.current.mountedFn && fns.current.mountedFn()
    return () => {
      fns.current.unmountFn && fns.current.unmountFn()
      state.current.unmounted = true
    }
  }, [])

  return state
}
