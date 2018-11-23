import * as S from '@eyedea/syncano'
import * as crypto from 'crypto'

class Endpoint extends S.Endpoint {
  async run(
    {response}: S.Core,
    {config}: S.Context
  ) {
    if (!this.user) {
      return response.json({message: 'Unauthorized!'}, 401)
    }

    // tslint:disable-next-line:variable-name
    const user_hash = crypto
      .createHmac('sha256', config.SECRET_ID)
      .update(this.user.username)
      .digest('hex')

    return response.json({user_hash})
  }
}

export default ctx => new Endpoint(ctx)
