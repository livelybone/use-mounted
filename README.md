# @livelybone/use-mounted
[![NPM Version](http://img.shields.io/npm/v/@livelybone/use-mounted.svg?style=flat-square)](https://www.npmjs.com/package/@livelybone/use-mounted)
[![Download Month](http://img.shields.io/npm/dm/@livelybone/use-mounted.svg?style=flat-square)](https://www.npmjs.com/package/@livelybone/use-mounted)
![gzip with dependencies: 0.6kb](https://img.shields.io/badge/gzip--with--dependencies-0.6kb-brightgreen.svg "gzip with dependencies: 0.6kb")
![typescript](https://img.shields.io/badge/typescript-supported-blue.svg "typescript")
![pkg.module](https://img.shields.io/badge/pkg.module-supported-blue.svg "pkg.module")

> `pkg.module supported`, which means that you can apply tree-shaking in you project

[中文文档](./README-CN.md)

React hook for mounted and unmounted, return an object: MutableRefObject<{ mounted: boolean, unmounted: boolean }>

## repository
https://github.com/livelybone/use-mounted.git

## Demo
https://github.com/livelybone/use-mounted#readme

## Run Example
Your can see the usage by run the example of the module, here is the step:

1. Clone the library `git clone https://github.com/livelybone/use-mounted.git`
2. Go to the directory `cd your-module-directory`
3. Install npm dependencies `npm i`(use taobao registry: `npm i --registry=http://registry.npm.taobao.org`)
4. Open service `npm run dev`
5. See the example(usually is `http://127.0.0.1/examples/test.html`) in your browser

## Installation
```bash
npm i -S @livelybone/use-mounted
```

## Global name - The variable the module exported in `umd` bundle
`useMounted`

## Interface
See what method or params you can use in [index.d.ts](./index.d.ts)

```typescript jsx
import useMounted from '@livelybone/use-mounted'
const Comp = () => {
  const mount = useMounted(() => {
    console.log('mounted')
    return () => console.log('unmounted')
  })
  console.log(`Is comp mounted? ${mount.current.mounted ? 'Yes' : 'No'}`)
  console.log(`Is comp unmounted? ${mount.current.unmounted ? 'Yes' : 'No'}`)
  return <div></div>
}
```

Use in html, see what your can use in [CDN: unpkg](https://unpkg.com/@livelybone/use-mounted/lib/umd/)
```html
<-- use what you want -->
<script src="https://unpkg.com/@livelybone/use-mounted/lib/umd/<--module-->.js"></script>
```
