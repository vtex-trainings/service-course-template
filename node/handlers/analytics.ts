export async function analytics(ctx: Context, next: () => Promise<any>) {
  ctx.status = 200
  ctx.body = 'OK'
  ctx.set('cache-control', 'no-cache')

  await next()
}
