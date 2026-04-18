import LogoLoop from '@/components/LogoLoop';

const imageLogos = [
    { src: "/photos/Life/1.jpeg", alt: "Recuerdo de vida 1", width: 960, height: 1280 },
    { src: "/photos/Life/2.jpeg", alt: "Recuerdo de vida 2", width: 1200, height: 1600 },
    { src: "/photos/Life/3.jpeg", alt: "Recuerdo de vida 3", width: 1085, height: 932 },
    { src: "/photos/Life/4.jpg", alt: "Recuerdo de vida 4", width: 2428, height: 2488 },
    { src: "/photos/Life/5.jpg", alt: "Recuerdo de vida 5", width: 991, height: 1438 },
    { src: "/photos/Life/6.jpg", alt: "Recuerdo de vida 6", width: 2264, height: 3172 },
    { src: "/images/UFO.gif", alt: "OVNI animado", width: 480, height: 480 },    
    { src: "/photos/Life/12.jpeg", alt: "Recuerdo de vida 12", width: 1692, height: 2552 },
    { src: "/photos/Life/7.jpg", alt: "Recuerdo de vida 7", width: 1692, height: 2552 },
    { src: "/photos/Life/8.jpg", alt: "Recuerdo de vida 8", width: 2120, height: 3104 },
    { src: "/photos/Life/9.jpeg", alt: "Recuerdo de vida 9", width: 1280, height: 960 },
    { src: "/photos/Life/10.jpeg", alt: "Recuerdo de vida 10", width: 1280, height: 961 },
    { src: "/photos/Life/11.jpg", alt: "Recuerdo de vida 11", width: 2172, height: 1976 },
];

const Life = () => {
    return (
        <>
            <div className="life-container">
                <div className='carrousel-container'>
                    <div className='lifetext-container'>
                        <h2>Tu historia, contada en imágenes...</h2>
                    </div>
                    <div className='logoloop-container'>
                        <LogoLoop
                            logos={imageLogos}
                            speed={60}
                            direction="right"
                            logoHeight={300}
                            gap={60}
                            hoverSpeed={0}
                            scaleOnHover
                            fadeOut={false}
                            fadeOutColor="#021326"
                            ariaLabel="Recuerdos de vida"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Life;
