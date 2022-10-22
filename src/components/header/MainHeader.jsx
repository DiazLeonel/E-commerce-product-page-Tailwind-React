import logoSneakers from '@/assets/images/logo.svg';
import avatar from '@/assets/images/image-avatar.png';
import MenuIcon from '@/components/icons/MenuIcon';
import CartIcon from '@/components/icons/CartIcon';
import CloseMenu from '@/components/icons/CloseMenu';
import { useState } from 'react';

const MainHeader = () => {

    const [navClass, setNavClass] = useState('hidden font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0')

    const handleOpenMenu = () => {
        setNavClass('bg-white absolute top-0 left-0 flex flex-col md:mr-auto md:flex md:gap-4 md:flex-row h-full p-8 gap-y-[21px] font-bold w-4/5 md:static md:p-0')
    }
    const handleCloseMenu = () => {
        setNavClass('hidden font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0')
    }

    return (
        <>
            <header className='flex container mx-auto px-4 items-center gap-8 bg-gray-200 py-8'>
                <button className='md:hidden' onClick={handleOpenMenu}>
                    <MenuIcon />
                </button>
                <img src={logoSneakers} alt="Logo Sneakers" className='mr-auto md:mr-0 mb-1' />
                <nav className={navClass}>
                    <button className='mb-8 md:hidden' onClick={handleCloseMenu}>
                        <CloseMenu />
                    </button>
                    <a href="#">Collections</a>
                    <a href="#">Men</a>
                    <a href="#">Women</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </nav>
                <div className='flex gap-4'>
                    <button>
                        <CartIcon />
                    </button>
                    <img className='w-12' src={avatar} alt="" />
                </div>
            </header>
        </>
    )
}

export default MainHeader;