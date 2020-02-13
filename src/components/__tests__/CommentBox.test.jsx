import React from 'react'
import { mount } from 'enzyme'
import CommentBox from '../CommentBox'

// 아래 명령을 실행하여 length를 출력 할 수 있다.
// console.log(wrapped.find('textarea').length)

let wrapped

// 1
beforeEach(() => {
  wrapped = mount(<CommentBox />)
})

// 3

afterEach(() => {
  wrapped.unmount()
})

// 2
it('has a text area and a button', () => {
  //   console.log(wrapped.find('textarea').length)
  //   console.log(wrapped.find('button').length)
  expect(wrapped.find('textarea').length).toEqual(1)
  expect(wrapped.find('button').length).toEqual(1)
})
