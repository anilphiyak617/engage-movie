import Image from 'next/image'
import React from 'react'
import { Movie } from '../type'
interface MovieThumbNailInterfaceProps {
    movie: Movie
}

function MovieThumbNail({ movie }: MovieThumbNailInterfaceProps) {
    console.log(movie)
    return (
        <div className='relative h-28 min-w-[180px] cursor-pointer transition duration-300 ease-out md:h-36 md:min-w-[260px]
         md:hover:scale-110 '>
            <Image src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path
                }`} className="rounded-sm md:rounded object-cover " layout="fill" />
        </div>
    )
}

export default MovieThumbNail 