'use client'

import { Sidebar } from 'flowbite-react';
import Link from 'next/link';
import { HiChartPie, HiViewBoards, HiInbox, HiUser, HiShoppingBag, HiArrowSmRight, HiTable} from "react-icons/hi";

interface SideItemsProps {
  href: string;
  text: string;
  icon?: any;
  isActive?: boolean;
}
function SideItem({ href, text, icon}: SideItemsProps ) {
  return (
    <li className=''>
      <Link href={href} className=" flex items-center hover:bg-gray-100 cursor-pointer font-normal text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700">
          <div className='text-gray-500 p-2 font-normal text-2xl rounded-lg dark:text-white dark:hover:bg-gray-700 '>
            {icon}
          </div>
         <span className="p-2 w-full">{text}</span>
      </Link>
    </li>
  )
}

export default function SideBar() {
  return (  

    <div className="w-fit">
      <Sidebar aria-label="Sidebar with logo branding example">
        <Sidebar.Logo
          href="#"
          img="favicon.png"
          imgAlt="Flowbite logo"
        >
          Flowbite
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>

            <SideItem href='/' isActive={true} text='Home' icon={ <HiChartPie/> }></SideItem>
            <SideItem href='/dashboard' isActive={false} text='Dashboard' icon={ <HiInbox/> }></SideItem>


           

        
            <Sidebar.Item
              href="/dashboard"             
              icon={HiUser}
            >
              Users
            </Sidebar.Item>
            <Sidebar.Item
              href="/"             
              icon={HiShoppingBag}
            >
              Products
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={HiArrowSmRight}
            >
              Sign In
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={HiTable}
            >
              Sign Up
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>

      
    
  
  )
}