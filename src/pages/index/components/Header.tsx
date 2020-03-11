import withHeaderContainer from './HeaderContainer'
import './Header.less'

export interface Props {
  isSaved: boolean
  isSignIn: boolean
  visible?: boolean
}

export const Header: React.FC<Props> = ({ isSaved, isSignIn, visible = true }) => (
  <section className={`Header ${visible ? '' : 'isHide'}`}>
    <div className="Header-Top">
      <img src="/image/logo.png" alt="logo" className="Header-Logo" />
      <div className="Header-Icons">
        {isSignIn ? (
          <>
            <i className="iconfont icon-search" />
            <i className={`iconfont ${isSaved ? 'icon-bookmark-save' : 'icon-bookmark'}`} />
          </>
        ) : (
          <button className="Header-GetStarted">Get Started</button>
        )}
      </div>
    </div>
    <div className="Header-Divider" />
  </section>
)

export default withHeaderContainer(Header)
