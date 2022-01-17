import Image from "next/image";
import { HomeIcon, PlusIcon, SearchIcon, StarIcon } from '@heroicons/react/solid'

function Header() {
    return (
        <div className="bg-[#040714] sticky top-0 z-[1000] flex items-center h-[72px] px-10 md:px-12">
            <Image
                src="/images/logo.svg"
                width={80}
                height={80}
                className='cursor-pointer'
            />
            <div className="hidden ml-10 md:flex items-center space-x-6">
                <a className="header-link group">
                    <HomeIcon className="h-4" />
                    <span className="span capitalize">home</span>
                </a>
                <a className="header-link group">
                    <SearchIcon className="h-4" />
                    <span className="span capitalize">search</span>
                </a>
                <a className="header-link group">
                    <PlusIcon className="h-4" />
                    <span className="span capitalize">watchlist</span>
                </a>
                <a className="header-link group">
                    <StarIcon className="h-4" />
                    <span className="span capitalize">originals</span>
                </a>
                <a className="header-link group">
                    <img src="/images/movie-icon.svg" alt="" className="h-5" />
                    <span className="span capitalize">movies</span>
                </a>
                <a className="header-link group">
                    <img src="/images/series-icon.svg" alt="" className="h-5" />
                    <span className="span capitalize">series</span>
                </a>
            </div>
            <button className="uppercase ml-auto border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200">login</button>
        </div>
    );
}

export default Header;
