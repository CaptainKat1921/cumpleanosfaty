import { useEffect, useState } from 'react'
import LoadingScreen from '@/components/LoadingScreen'
import Banner  from '@/components/sections/Banner'
import Life from '@/components/sections/Life'
import Photos from '@/components/sections/Photos'
import Songs from '@/components/sections/Songs'
import Letter from '@/components/sections/Letter'

const giftImageSources = [
    "/photos/Banner/1.jpeg",
    "/photos/Banner/2.jpeg",
    "/photos/Banner/3.jpeg",
    "/photos/Banner/4.jpeg",
    "/photos/Banner/5.jpeg",
    "/photos/Banner/9.jpeg",
    "/photos/Banner/7.jpeg",
    "/photos/Banner/8.jpeg",
    "/photos/Banner/6.jpeg",
    "/photos/Banner/11.jpeg",
    "/photos/Banner/12.jpeg",
    "/photos/Banner/13.jpeg",
    "/photos/Banner/14.jpeg",
    "/photos/Banner/15.jpeg",
    "/images/Gatito_alien.png",
    "/images/confeti_right.png",
    "/images/confeti_left.png",
    "/photos/Life/1.jpeg",
    "/photos/Life/2.jpeg",
    "/photos/Life/3.jpeg",
    "/photos/Life/4.jpg",
    "/photos/Life/5.jpg",
    "/photos/Life/6.jpg",
    "/images/UFO.gif",
    "/photos/Life/12.jpeg",
    "/photos/Life/7.jpg",
    "/photos/Life/8.jpg",
    "/photos/Life/9.jpeg",
    "/photos/Life/10.jpeg",
    "/photos/Life/11.jpg",
    "/photos/Us/first/1.jpeg",
    "/photos/Us/first/2.jpeg",
    "/photos/Us/first/3.jpeg",
    "/photos/Us/first/4.jpeg",
    "/photos/Us/first/5.jpeg",
    "/photos/Us/first/6.jpeg",
    "/photos/Us/first/7.jpeg",
    "/photos/Us/second/1.jpeg",
    "/photos/Us/second/2.jpeg",
    "/photos/Us/second/3.jpeg",
    "/photos/Us/second/4.jpeg",
    "/photos/Us/second/5.jpeg",
    "/photos/Us/second/6.jpeg",
    "/photos/Us/second/7.jpeg",
    "/photos/Us/third/1.jpeg",
    "/photos/Us/third/2.jpeg",
    "/photos/Us/third/3.jpeg",
    "/photos/Us/third/4.jpeg",
    "/photos/Us/third/5.jpeg",
    "/photos/Us/third/6.jpeg",
    "/photos/Us/third/7.jpeg",
    "/images/Gatito_musica.gif",
    "/images/carta.png",
    "/images/howl_and_sophie.png",
];

const minimumLoadingTime = 700;

const preloadImage = src =>
    new Promise(resolve => {
        const image = new Image();

        image.onload = async () => {
            try {
                await image.decode?.();
            } catch {
                // The image is already loaded; decode can reject for animated assets.
            }

            resolve();
        };

        image.onerror = resolve;
        image.src = src;
    });

const GiftPage = () => {
    const [loadedImages, setLoadedImages] = useState(0);
    const [isReady, setIsReady] = useState(false);
    const totalImages = giftImageSources.length;
    const progress = Math.min(100, Math.round((loadedImages / totalImages) * 100));

    useEffect(() => {
        let isMounted = true;
        let finishTimer;
        const startedAt = window.performance.now();

        setLoadedImages(0);
        setIsReady(false);

        const preloadAllImages = async () => {
            await Promise.all(
                giftImageSources.map(src =>
                    preloadImage(src).finally(() => {
                        if (isMounted) {
                            setLoadedImages(current => Math.min(current + 1, totalImages));
                        }
                    })
                )
            );

            const elapsed = window.performance.now() - startedAt;
            const remainingTime = Math.max(0, minimumLoadingTime - elapsed);

            finishTimer = window.setTimeout(() => {
                if (isMounted) {
                    setIsReady(true);
                }
            }, remainingTime);
        };

        preloadAllImages();

        return () => {
            isMounted = false;
            window.clearTimeout(finishTimer);
        };
    }, [totalImages]);

    if (!isReady) {
        return <LoadingScreen progress={progress} />;
    }

    return (
        <>
            <div className="father-container">
                <div className="banner-section text-white">
                    <Banner />
                </div>
                <div className="life-section">
                    <Life />
                </div>
                <div className="photos-section">
                    <Photos />
                </div>
                <div className="songs-section">
                    <Songs />
                </div>
                <div className="letter-section">
                    <Letter />
                </div>

            </div>
        </>
    )
}
export default GiftPage;
