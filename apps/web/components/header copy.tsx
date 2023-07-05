import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Images from "../pages/images";

export const Header = () => {
    const {pathname} = useRouter();
    console.log('Header pathname',pathname)

    return (
        <div className='header-container nav-div-shadow'>
            <div className='header-content container'>
                <ul className='ul'>

                    <li className='li'>
                        <Link href="/editor" className={pathname === '/editor' ? 'nav-active' : ''}>Home</Link>
                    </li>

                    <li className='li'>
                        <Link href="/containers" className={pathname === '/containers' ? 'nav-active' : ''}>Containers</Link>
                    </li>

                    <li className='li'>
                        <Link href="/images" className={pathname === '/images' ? 'nav-active' : ''}>Images</Link>
                    </li>

                    <li className='li'>
                        <Link href="/trade/future/order" className={pathname === '/trade/future/order' ? 'nav-active' : ''}>Future</Link>
                    </li>

                    <li className='li'>
                        <Link href="/trade/balances" className={pathname === '/trade/balances' ? 'nav-active' : ''}>Balances</Link>
                    </li>

                    <li className='li'>
                        <Link href="/coin/list" className={pathname === '/coin/list' ? 'nav-active' : ''}>Coin list</Link>
                    </li>

                    <li className='li'>
                        <Link href="/ws/market" className={pathname === '/ws/market' ? 'nav-active' : ''}>Ws market</Link>
                    </li>

                </ul>
            </div>
        </div>
    );
}
