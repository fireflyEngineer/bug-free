import * as React from 'react'
import { render } from '@testing-library/react'
import { Header } from '../../../src/pages/index/components/Header'


test('Show has saved icon when user has saved.', () => {
  const { container } = render(<Header isSaved={false} isSignIn={true} />)
  const iconElement = container.querySelector('.icon-bookmark')
  expect(iconElement).toBeInTheDocument()
})

test('Show has not saved icon when user has not saved.', () => {
  const { container } = render(<Header isSaved={true} isSignIn={true} />)
  const iconElement = container.querySelector('.icon-bookmark-save')
  expect(iconElement).toBeInTheDocument()
})