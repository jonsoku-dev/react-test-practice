import commentsReducer from '../comments'
import { SAVE_COMMENT } from '../../actions/types'

it('handles actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'New Comment',
  }

  const newState = commentsReducer([], action)

  expect(newState).toEqual(['New Comment'])
})

it('이상한 타입이 들어왔을 때', () => {
  const newState = commentsReducer([], { type: 'aLADFJKLSDFLKJDF' })

  expect(newState).toEqual([])
})
