import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay';

export function ImagesLandingPage() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: 'center',
            containScroll: 'trimSnaps',
            dragFree: false,
            slidesToScroll: 1,
            skipSnaps: false,
            startIndex: 0
        },
        [
            Autoplay({
                delay: 3000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
                rootNode: (emblaRoot) => emblaRoot.parentElement
            })
        ]
    )

    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const scrollTo = useCallback((index: number) => {
        if (emblaApi) emblaApi.scrollTo(index)
    }, [emblaApi])

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return

        setScrollSnaps(emblaApi.scrollSnapList())
        emblaApi.on('select', onSelect)
        onSelect()
    }, [emblaApi, onSelect])

    return (
        <div className="relative max-w-6xl mx-auto">
            <div className="embla overflow-hidden rounded-3xl shadow-2xl border border-white/20" ref={emblaRef}>
                <div className="embla__container flex">
                    <div className="embla__slide flex-none w-full min-w-0 h-96 md:h-[28rem] relative group">
                        <Image
                            src="/nature_trail.jpg"
                            alt="Nature Slide"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="embla__slide flex-none w-full min-w-0 h-96 md:h-[28rem] relative group">
                        <Image
                            src="/nature_trail.jpg"
                            alt="Eco Tour Slide 2"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="embla__slide flex-none w-full min-w-0 h-96 md:h-[28rem] relative group">
                        <Image
                            src="/nature_trail.jpg"
                            alt="Adventure Slide 3"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                </div>
            </div>

            <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 z-10 group backdrop-blur-sm"
                onClick={scrollPrev}
                aria-label="Previous slide"
            >
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 z-10 group backdrop-blur-sm"
                onClick={scrollNext}
                aria-label="Next slide"
            >
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            <div className="flex justify-center mt-6 space-x-3">
                {scrollSnaps.map((_, index) => (
                    <button
                        key={index}
                        className={`transition-all duration-300 rounded-full ${index === selectedIndex
                            ? 'w-8 h-3 bg-white shadow-lg'
                            : 'w-3 h-3 bg-white/60 hover:bg-white/80'
                            }`}
                        onClick={() => scrollTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}