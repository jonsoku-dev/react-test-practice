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

// simulating events
// 1. find the textarea element
// 2. simulate a 'change' event
// 3. provide a fake event object
// 4. force the component to update
// 5. assert that the textarea value has changed

it('has a text area that users can type in (타이핑하는행위)', () => {
  // 1, 2. find textarea & simulate a change event
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment' }, // 3. 실제 컴포넌트에 변수로 넣어주는것 처럼..
  })
  // 4. setState 를 하면 리랜더링이 되니까.. 테스트환경에서도 강제로 랜더링을 시켜줘야한다.
  wrapped.update()
  // 5. props를 땡겨온다 (즉 텍스트에어리어에 있는 value에 입력되어있는 값을 가져온다.)
  expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
})
