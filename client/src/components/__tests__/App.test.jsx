import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'
import CommentBox from '../CommentBox'
import CommentList from '../CommentList'

let wrapped // 변수 스코프에 걸리니 전역변수로 만든다.

// 이 파일의 첫번째 테스트 위에서 각 함수가 끝나기 전에 함수를 호출한다.
beforeEach(() => {
  wrapped = shallow(<App />)
})

it('shows a comment box', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1)
})

it('shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1)
})
