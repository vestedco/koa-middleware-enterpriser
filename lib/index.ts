import { Context, Next } from 'koa'

export function enterpriser ({ enabled, minTimeout, maxTimeout } : { enabled: boolean, minTimeout: number, maxTimeout: number }) {
  return async (_ctx: Context, next: Next) => {
    if (!enabled) {
      return next()
    }
    const timeout = Math.random() * maxTimeout + minTimeout
    await new Promise((resolve) => setTimeout(resolve, timeout))
    return next()
  }
}
