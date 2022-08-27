import React from 'react'
import Link from "next/link"
export default function Navbar({ children }) {
    const menuItems = <>
        <li>
            <Link href="/">Home</Link>
        </li>
        <li>
            <Link href="/foods">Food</Link>
        </li>
        <li>
            <Link href="/categories">Categories</Link>
        </li>
        <li>
            <Link href="/accessories">Accessories</Link>
        </li>
        <li>
            <Link href="/offers">Offers</Link>
        </li>

        <div class="dropdown dropdown-end mx-2">
            <label tabindex="0" class="btn btn-ghost btn-circle">
                <div class="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    <span class="badge badge-sm indicator-item">8</span>
                </div>
            </label>
            <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div class="card-body">
                    <span class="font-bold text-lg">8 Items</span>
                    <span class="text-info">Subtotal: $999</span>
                    <div class="card-actions">
                        <button class="btn btn-primary btn-block">View cart</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="dropdown dropdown-end mx-2">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                    <img src="https://placeimg.com/80/80/people" />
                </div>
            </label>
            <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                <li>
                    <a class="justify-between">
                        Profile
                        <span class="badge">New</span>
                    </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
            </ul>
        </div>

    </>
    return (
        <div class="drawer">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                <div class="w-full navbar bg-base-300 flex items-center justify-between flex-row-reverse lg:flex-row">
                    <div class="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <Link href="/"><div class="px-2 cursor-pointer mx-2 flex flex-row-reverse"><h5 className="p-3 leading-4">Super <br /> Pets</h5><img className='h-10' src="https://www.nicepng.com/png/full/27-278461_pet-paw-png-dog-paw-clipart-black-and.png" alt="" /></div></Link>
                    <div class="hidden lg:block">
                        <ul class="menu menu-horizontal">
                            {menuItems}
                        </ul>
                    </div>
                </div>
                {children}
            </div>
            <div class="drawer-side">
                <label htmlFor="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                    {menuItems}
                    <label htmlFor="my-drawer-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                </ul>

            </div>
        </div>
    )
}
