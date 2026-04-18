import LogoLoop from '@/components/LogoLoop';

const imageLogos = [
    { src: "/photos/Life/1.jpeg", alt: "Recuerdo de vida 1", width: 960, height: 1280 },
    { src: "/photos/Life/2.jpeg", alt: "Recuerdo de vida 2", width: 1200, height: 1600 },
    { src: "/photos/Life/3.jpeg", alt: "Recuerdo de vida 3", width: 1500, height: 1000 },
    { src: "/photos/Life/1.jpeg", alt: "Recuerdo de vida 1", width: 960, height: 1280 },
    { src: "/photos/Life/2.jpeg", alt: "Recuerdo de vida 2", width: 1200, height: 1600 },
    { src: "/images/UFO.gif", alt: "OVNI animado", width: 480, height: 480 },
];

const Life = () => {
    return (
        <>
            <div className="life-container">
                <div className='carrousel-container'>
                    <div className='lifetext-container'>
                        <h2>Una vista a todo lo que has logrado...</h2>
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
