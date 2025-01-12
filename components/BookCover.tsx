import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react'
import BookCoverSvg from './BookCoverSvg';

type BookCoverVariant = 'extraSmall' | 'small' | 'medium' | 'regular' | 'wide' | 'default';

const variantStyles: Record<BookCoverVariant, string> = {
    extraSmall: "book-cover_extra_small",
    small: "book-cover_small",
    medium: "book-cover_medium",
    regular: "book-cover_regular",
    default: "book-cover",
    wide: "book-cover_wide",
}

interface Props {
    className?: string;
    variant?: BookCoverVariant;
    coverColor: string;
    coverUrl: string;
}

const BookCover = ({ 
    className, 
    variant='default', 
    coverColor='#012B48', 
    coverUrl="https://placeholder.co/400x600.png", 
}: Props) => {
  return (
    <div
        className={cn('relative transition-all duration-300', variantStyles[variant], className)}
    >
        <BookCoverSvg coverColor={coverColor} />
        <div className='absolute z-10' style={{ left: "12%", width: "87.5%", height: "88%"}}>
            <Image src={coverUrl} alt='book cover' fill className='rounded-sm object-fill' />
        </div>
    </div>
  )
}

export default BookCover