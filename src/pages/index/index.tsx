import React from 'react'
import ReactMarkdown from 'react-markdown'
import withApollo from '../../lib/with-apollo'
// import { useTesterQuery } from '../../lib/viewer.graphql'
import HeaderContainer from './components/Header'

import './index.less'
import Footer from '../../components/Footer/index';

const Index = () => {
  // const { data } = useTesterQuery()
  return (
    <>
      <div className="Index">
        <HeaderContainer isSaved={false} isSignIn={false} />
        <img className="Index-Banner" src="https://miro.medium.com/max/9216/0*54kyUzeyIGSwLZf5" alt="Banner" />
        <h1>Testing a Full-Stack React Application</h1>
        <h2>Testing user behaviour with Jest and react-testing-library</h2>
        <ReactMarkdown source={`#### mysql
          docker run --name mysql -e MYSQL_ROOT_PASSWORD=123456 -v $PWD/data:/var/lib/mysql -p 3306:3306  -d mysql:5.7.24

          - --name 别名
          - -e password
          - -v 数据挂载
          - -p 端口映射
          - -d 后台运行`} />
      </div>
      <Footer />
    </>
  )
}

export default withApollo(Index)
