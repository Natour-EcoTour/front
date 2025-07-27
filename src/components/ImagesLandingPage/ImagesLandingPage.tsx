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
            <div className="embla overflow-hidden rounded-lg shadow-lg" ref={emblaRef}>
                <div className="embla__container flex">
                    <div className="embla__slide flex-none w-full min-w-0 h-96 relative">
                        <Image
                            src="/me.gif"
                            alt="Nature Slide"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="embla__slide flex-none w-full min-w-0 h-96 relative">
                        <Image
                            src="/nature_trail.jpg"
                            alt="Eco Tour Slide 2"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="embla__slide flex-none w-full min-w-0 h-96 relative">
                        <Image
                            src="/me.gif"
                            alt="Adventure Slide 3"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>

            <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 z-10"
                onClick={scrollPrev}
                aria-label="Previous slide"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 z-10"
                onClick={scrollNext}
                aria-label="Next slide"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            <div className="flex justify-center mt-4 space-x-2">
                {scrollSnaps.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${index === selectedIndex
                            ? 'bg-blue-600 scale-125'
                            : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                        onClick={() => scrollTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}