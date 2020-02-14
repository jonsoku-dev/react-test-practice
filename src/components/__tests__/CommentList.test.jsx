import React from 'react';
import { mount } from 'enzyme';

import Root from '../../Root';
import CommentList from '../CommentList';

let wrapped;

beforeEach(() => {
  const initialState = {
    comments: ['Comment 1', 'Comment 2'],
  };
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>,
  );
});

it('creates one LI per comment', () => {
  // console.log(wrapped.find('li').length);
  expect(wrapped.find('li').length).toEqual(2); // initialState의 길이 2가 나온다.
});
