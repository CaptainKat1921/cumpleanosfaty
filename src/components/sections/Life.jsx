import LogoLoop from '@/components/LogoLoop';
const imageLogos = [
    { src: "https://placehold.co/500x500/png", alt: "Company 1", href: "https://company1.com" },
    { src: "https://placehold.co/500x500/png", alt: "Company 2", href: "https://company2.com" },
    { src: "https://placehold.co/500x500/png", alt: "Company 3", href: "https://company3.com" },
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
                            speed={40}
                            direction="right"
                            logoHeight={300}
                            gap={60}
                            hoverSpeed={0}
                            scaleOnHover
                            fadeOut={false}
                            fadeOutColor="#021326"
                            ariaLabel="Technology partners"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Life;