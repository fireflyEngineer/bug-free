import React from 'react'
import renderer from 'react-test-renderer'
import Header from '../../../src/pages/index/components/Header'


it('renders homepage unchanged', () => {
  const tree = renderer.create(<Header />).toJSON()
  expect(tree).toMatchSnapshot()
})