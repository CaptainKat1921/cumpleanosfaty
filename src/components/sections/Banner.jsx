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
        {
            id: "1",
            img: "https://picsum.photos/id/1015/600/900?grayscale",
            url: "https://example.com/one",
            height: 400,
        },
        {
            id: "2",
            img: "https://picsum.photos/id/1011/600/750?grayscale",
            url: "https://example.com/two",
            height: 250,
        },
        {
            id: "3",
            img: "https://picsum.photos/id/1020/600/800?grayscale",
            url: "https://example.com/three",
            height: 600,
        },
        {
            id: "4",
            img: "https://picsum.photos/id/1015/600/900?grayscale",
            url: "https://example.com/one",
            height: 400,
        },
        {
            id: "5",
            img: "https://picsum.photos/id/1011/600/750?grayscale",
            url: "https://example.com/two",
            height: 250,
        },
        {
            id: "6",
            img: "https://picsum.photos/id/1020/600/800?grayscale",
            url: "https://example.com/three",
            height: 600,
        },
        {
            id: "7",
            img: "https://picsum.photos/id/1020/600/800?grayscale",
            url: "https://example.com/three",
            height: 600,
        }, {
            id: "8",
            img: "https://picsum.photos/id/1011/600/750?grayscale",
            url: "https://example.com/two",
            height: 250,
        }

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
