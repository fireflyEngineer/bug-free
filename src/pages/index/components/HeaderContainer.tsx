import React, { useState, useEffect } from 'react'
import { Props } from './Header';

const withHeaderContainer = (Header: any): React.FC<Props> => (props: Props) => {

  const [headerVisible, setHeaderVisible] = useState(true)
  const onScroll = () => setHeaderVisible(window.scrollY <= 0)
  useEffect(() => {
    document.addEventListener('scroll', onScroll)
    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [])

  const [inputVisible, setInputVisible] = useState(false)
  const onToggleSearch = () => setInputVisible((prev: boolean) => !prev)
  
  return <Header 
    inputVisible={inputVisible}
    onToggleSearch={onToggleSearch}
    visible={headerVisible}
    {...props}
  />
}

export default withHeaderContainer
