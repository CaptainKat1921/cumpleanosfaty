import { useEffect, useState } from 'react';
import Masonry from '@/components/Masonry';
import CurvedLoop from '@/components/CurvedLoop';
import StickerPeel from '@/components/StickerPeel'
import AnimatedContent from '@/components/AnimatedContent'
import image from '/images/Gatito_alien.png'

const useMediaQuery = query => {
    const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);
        const handleChange = event => setMatches(event.matches);

        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [query]);

    return matches;
};

const Banner = () => {
    const isTabletUp = useMediaQuery('(min-width: 1024px)');

    const items = [
        { id: "1", img: "/photos/Banner/1.avif", height: isTabletUp ? 600 : 300 },
        { id: "2", img: "/photos/Banner/2.avif", height: isTabletUp ? 500 : 350 },
        { id: "3", img: "/photos/Banner/3.avif", height: isTabletUp ? 700 : 350 },
        { id: "4", img: "/photos/Banner/4.avif", height: isTabletUp ? 900 : 450 },
        { id: "5", img: "/photos/Banner/5.avif", height: isTabletUp ? 600 : 300 },
        { id: "9", img: "/photos/Banner/9.avif", height: isTabletUp ? 600 : 300 },
        { id: "7", img: "/photos/Banner/7.avif", height: isTabletUp ? 800 : 400 },
        { id: "8", img: "/photos/Banner/8.avif", height: isTabletUp ? 600 : 350 },
        { id: "6", img: "/photos/Banner/6.avif", height: isTabletUp ? 700 : 350 },
        { id: "11", img: "/photos/Banner/11.avif", height: isTabletUp ? 1000 : 500 },
        { id: "12", img: "/photos/Banner/12.avif", height: isTabletUp ? 700 : 350 },
        { id: "13", img: "/photos/Banner/13.avif", height: isTabletUp ? 700 : 300 },
        { id: "14", img: "/photos/Banner/14.avif", height: isTabletUp ? 600 : 500 },
        { id: "15", img: "/photos/Banner/15.avif", height: isTabletUp ? 600 : 300 },

    ];
    return (
        <>
            <div className='banner-container'>
                <div className='masonry-container'>
                    <Masonry
                        items={items}
                        ease="power3.out"
                        duration={0.6}
                        stagger={0.15}
                        animateFrom="top"
                        scaleOnHover
                        hoverScale={0.95}
                        blurToFocus={false}
                        colorShiftOnHover={false}

                    />
                </div>
                <div className='title-container'>
                    <StickerPeel
                        imageSrc={image}
                        width={isTabletUp ? 400 : 200}
                        rotate={0}
                        peelBackHoverPct={30}
                        peelBackActivePct={40}
                        shadowIntensity={0.5}
                        lightingIntensity={0.1}
                        initialPosition={{ x: 0, y: -100 }}
                        peelDirection={0}
                    />
                    <CurvedLoop
                        marqueeText="✦ Feliz ✦ Cumpleaños ✦ 25 "
                        speed={0.5}
                        curveAmount={400}
                        direction="left"
                        interactive
                        className="custom-text-style"
                    />
                </div>
                <div className='animated-container'>
                    <AnimatedContent
                        distance={60}
                        direction="vertical"
                        reverse={false}
                        duration={1}
                        ease="bounce.out"
                        initialOpacity={0}
                        animateOpacity
                        scale={1}
                        threshold={0}
                        delay={1}
                    >
                        <div className='confeti-container'>
                            <img src="/images/confeti_right.png" alt="confeti" width="612" height="334" />
                            <img src="/images/confeti_left.png" alt="confeti" width="612" height="334" />
                        </div>
                    </AnimatedContent>
                </div>
            </div>
        </>
    )
}
export default Banner;
