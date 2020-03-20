# @vested/koa-middleware-enterpriser

Koa middleware to make your project enterprise ready.

When building user interfaces, it's generally important to experience the
product as it will be perceived by your users. However, many developers build
their frontends alongside their backends, creating unrealistic environments
where the API returns almost instantly. This project simulates the real-world,
allowing you to add just-enough lag to get your interactions just right.

When enabled, the middleware will wait at least `minTimeout` and up to
`maxTimeout` milliseconds before continuing.

## Installation

```
yarn add @vested/koa-middleware-enterpriser
```

## Usage

```
import Koa from 'koa'
import { enterpriser } from '@vested/koa-middleware-enterpriser'

export const app = new Koa()
app.use(enterpriser({ enabled: true, minTimeout: 500, maxTimeout: 1000 }))
```
