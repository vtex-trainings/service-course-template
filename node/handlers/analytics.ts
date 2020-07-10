export async function analytics(ctx: Context, next: () => Promise<any>) {
  if (ctx.method.toUpperCase() === 'GET') {
    ctx.status = 200
    ctx.body = 'OK'

    ctx.set('cache-control', 'no-cache')
  }
  await next()
}
