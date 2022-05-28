import React, { useEffect, useState } from 'react'
import { Movie } from '../type'
import { Button } from '@mui/material';
import Image from 'next/image';
import { IoIosInformationCircleOutline, IoMdPlay } from "react-icons/io"

interface BannerProps {
    netflixOriginals: Movie[],
}
const Banner = ({ netflixOriginals }: BannerProps) => {

    // Making the banner select random movie
    const [bannerMovie, setBannerMovie] = useState<Movie | null>(null);

    useEffect(() => {

        const randomMovieIndex = Math.floor(Math.random() * netflixOriginals.length);
        setBannerMovie(netflixOriginals[randomMovieIndex]);
        console.log("useffect called")

    }, [netflixOriginals])

    const baseUrl = 'https://image.tmdb.org/t/p/original/';

    return (
        <div className=' flex flex-col space-y-2 py-28  md:space-y-4 lg:h[65vh]   '>
            <div className='absolute  top-0 left-0 h-[95vh] w-screen -z-20 '>
                <Image src={`${baseUrl}${bannerMovie?.backdrop_path || bannerMovie?.poster_path}`}
                    layout="fill"
                    objectFit='cover' />
            </div>
            <h1 className='text-2xl md:text-4xl lg:text-7xl font-bold'>
                {bannerMovie?.title || bannerMovie?.name || bannerMovie?.original_name}
            </h1>
            <p className='max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl text-shadow-xl'>{bannerMovie?.overview}</p>
            <div className='flex space-x-3'>
                <button className='bannerButton bg-white text-black' ><IoMdPlay className='w-4 h-4 text-black md:h-8 md:w-8' />Play</button>
                <button className='bannerButton bg-[gray]/60'><IoIosInformationCircleOutline className='w-4 h-4 text-white md:h-8 md:w-8' />More Info</button>
            </div>
        </div>
    )
}

export default Banner 