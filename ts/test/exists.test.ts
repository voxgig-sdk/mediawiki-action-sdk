
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { MediawikiActionSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await MediawikiActionSDK.test()
    equal(null !== testsdk, true)
  })

})
