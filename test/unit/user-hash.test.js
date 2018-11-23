import {run} from '@syncano/test'

describe('intercom', () => {
  it('should create user hash', async () => {
    const hash = 'e3c1d6379ad4a778e434542ba87251fcecfb4252d7ee8fdb0623cd58e0b6f0dc'
    const ctx = {
      meta: {
        user: {
          username: 'test@test.com'
        }
      },
      config: {
        SECRET_ID: 'secretToken'
      } 
    }

    const res = await run('user-hash', ctx)
    expect(res).toHaveProperty('code', 200)
    expect(res.data).toHaveProperty('user_hash', hash)
  })

  it('Uauthorized user', async () => {
    const res = await run('user-hash')
    expect(res).toHaveProperty('code', 401)
    expect(res.data).toHaveProperty('message', 'Unauthorized!')
  })
})
