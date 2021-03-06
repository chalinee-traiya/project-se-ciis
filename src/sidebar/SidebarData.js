import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BiIcons from 'react-icons/bi';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Status',
    path: '/status',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
  },
  {
    title: 'Payment',
    path: '/payment',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text',
  },
  {
    title: 'Edit',
    path: '/edit',
    icon: <BiIcons.BiEditAlt />,
    cName: 'nav-text',
  },
  {
    title: 'Sign Out',
    path: '/signout',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text',
  },
];
