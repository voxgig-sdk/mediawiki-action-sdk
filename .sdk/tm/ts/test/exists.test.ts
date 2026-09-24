
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { MediawikiActionSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = MediawikiActionSDK.test()
    equal(testsdk instanceof MediawikiActionSDK, true,
      'MediawikiActionSDK.test() must return a client synchronously')
  })

})
