import { Link } from 'gatsby'
import React, { memo } from 'react'
import { useSiteMetadata } from '~hooks'
import { Button } from '~ui'
import * as Icon from '~svg'

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = props => {
  const {} = props

  const { navigation } = useSiteMetadata()

  return (
    <header className="bg-neutral-14 py-16">
      <div className="container">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="w-full py-6 flex items-center justify-between border-b border-neutral-5 lg:border-none">
            <div className="flex items-center">
              <Icon.Logo className="text-white -mt-9 mr-30" />
              <div className="space-x-32 lg:block">
                {navigation.map(link => (
                  <Link
                    key={link.label}
                    to={link.path}
                    className="text-base font-medium text-white hover:text-green-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="ml-10 space-x-4">
              <Link to={"/SignIn"}><Button>Sign In</Button></Link>
              <Link to={"/SignUp"}><Button variant={'primary'}>Sign up</Button></Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default memo(Header)
