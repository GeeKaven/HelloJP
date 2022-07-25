import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from '../../constants/menu'
import { FiGithub, FiMenu } from 'react-icons/fi'

export type LayoutProps = {
  children: React.ReactNode
}

const MenuList = function () {
  return (
    <ul className='menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content'>
      {Menu.map((link, i) => (
        <React.Fragment key={i}>
          {!link.sub && (
            <li>
              <Link to={link.to}>{link.name}</Link>
            </li>
          )}
          {link.sub && (
            <React.Fragment>
              <li className='menu-title'>
                <span>{link.name}</span>
              </li>
              {link.sub.map((sub, j) => (
                <li key={j}>
                  <Link to={sub.to}>{sub.name}</Link>
                </li>
              ))}
            </React.Fragment>
          )}
        </React.Fragment>
      ))}
    </ul>
  )
}

const Navbar = function () {
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-none'>
        <button className='btn btn-square btn-ghost drawer-button'>
          <FiMenu />
        </button>
      </div>
      <div className='flex-1'>
        <a className='btn btn-ghost normal-case text-xl'>daisyUI</a>
      </div>
      <div className='flex-none'>
        <button className='btn btn-square btn-ghost'>
          <FiGithub />
        </button>
      </div>
    </div>
  )
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <div className='drawer drawer-mobile'>
        <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content flex flex-col items-start'>
          <Navbar />
          <div className='p-4'>
            {children}
          </div>
        </div>
        <div className='drawer-side'>
          <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
          <MenuList />
        </div>
      </div>
    </div>
  )
}
