import { createStore, applyMiddleware } from 'redux'
import sagaMiddleware from '../../src'
import * as io from '../../src/effects'
test('saga onError is optional', () => {
  const middleware = sagaMiddleware()
  createStore(() => ({}), {}, applyMiddleware(middleware))
  const expectedError = new Error('child error')

  function* child() {
    throw expectedError
  }

  function* main() {
    yield io.call(child)
  }

  const task = middleware.run(main)
  return task.toPromise().catch(err => {
    // saga does not blow up without onError
    expect(err).toBe(expectedError)
  })
})
test('saga onError is called for uncaught error (thrown Error instance)', () => {
  const middleware = sagaMiddleware({
    onError: err => {
      actual = err
    },
  })
  createStore(() => ({}), {}, applyMiddleware(middleware))
  const expectedError = new Error('child error')
  let actual

  function* child() {
    throw expectedError
  }

  function* main() {
    yield io.call(child)
  }

  const task = middleware.run(main)
  return task.toPromise().catch(() => {
    // saga passes thrown Error instance in onError handler
    expect(actual).toBe(expectedError)
  })
})
test('saga onError is called for uncaught error (thrown primitive)', () => {
  const middleware = sagaMiddleware({
    onError: err => {
      actual = err
    },
  })
  createStore(() => ({}), {}, applyMiddleware(middleware))
  const expectedError = new Error('child error')
  let actual

  function* child() {
    throw expectedError
  }

  function* main() {
    yield io.call(child)
  }

  const task = middleware.run(main)
  return task.toPromise().catch(() => {
    // saga passes thrown primitive in onError handler
    expect(actual).toBe(expectedError)
  })
})
test('saga onError is not called for caught errors', () => {
  const expectedError = new Error('child error')
  let actual
  let caught
  const middleware = sagaMiddleware({
    onError: err => {
      actual = err
    },
  })
  createStore(() => ({}), {}, applyMiddleware(middleware))

  function* child() {
    throw expectedError
  }

  function* main() {
    try {
      yield io.call(child)
    } catch (err) {
      caught = err
    }
  }

  const task = middleware.run(main)
  return task.toPromise().then(() => {
    // saga must not call onError
    expect(actual).toBe(undefined) // parent must catch error

    expect(caught).toBe(expectedError)
  })
})
