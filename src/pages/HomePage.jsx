import ScrollReveal from '@/components/ScrollReveal';
import Galaxy from '@/components/Galaxy'
import { Button } from "@/components/ui/button"
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate()
    const handleClick = () =>{
        navigate("/gift")
    }

    return (
        <>
            <main className="relative min-h-screen w-full overflow-x-hidden bg-black text-white">
                <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
                    <Galaxy
                        className="h-full w-full"
                        mouseRepulsion={false}
                        mouseInteraction
                        density={1}
                        glowIntensity={0.3}
                        saturation={0}
                        hueShift={140}
                        twinkleIntensity={0.3}
                        rotationSpeed={0}
                        repulsionStrength={2}
                        autoCenterRepulsion={0}
                        starSpeed={0.5}
                        speed={1}
                    />
                </div>

                <div className="relative z-10">
                    <section className="flex min-h-screen items-center justify-center px-6">
                        <h1 className="text-center text-4xl">
                            Desliza hacia abajo para una sorpresa ❤️
                        </h1>
                    </section>

                    <section className="relative">
                        <div className="flex h-screen items-center justify-center px-6">
                            <div className="max-w-2xl text-center text-2xl leading-relaxed">
                                <ScrollReveal
                                    baseOpacity={0.3}
                                    enableBlur
                                    baseRotation={3}
                                    blurStrength={8}
                                >
                                    Hola amor, hoy en tu cumpleaños quisiera regalarte algo especial.
                                    Asi que he preparado algo para ti, lo hice con mucho cariño y pensando en ti...
                                </ScrollReveal>
                            </div>

                        </div>
                        <div className='flex w-full justify-center items-center h-[100vh]'>
                            <Button className={'text-2xl button-hover'} onClick={handleClick}>
                                < Heart />
                                Ver sorpresa
                                <Heart />
                            </Button>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}
export default HomePage;