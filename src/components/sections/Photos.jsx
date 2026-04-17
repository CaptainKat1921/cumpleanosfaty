import Stack from '@/components/Stack'
const Photos = () => {
    const images = [
        "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
        "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
        "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
        "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format"
    ];
    return (
        <>
            <div className="photos-container">
                <div className='cards-container'>
                    <div className='photostext-container'>
                        <h2>Algunos recuerdos de nosotros...</h2>
                    </div>
                    <div className='gridphotos-container'>
                        <div className='photoCardContainer'>
                            <Stack
                                randomRotation={false}
                                sensitivity={200}
                                sendToBackOnClick={true}
                                cards={images.map((src, i) => (
                                    <img
                                        key={i}
                                        src={src}
                                        alt={`card-${i + 1}`}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        className='imagePhotos'
                                    />
                                ))}
                                autoplay={false}
                                autoplayDelay={3000}
                                pauseOnHover={false}
                            />
                        </div>
                        <div className='photoCardContainer'>
                            <Stack
                                randomRotation={false}
                                sensitivity={200}
                                sendToBackOnClick={true}
                                cards={images.map((src, i) => (
                                    <img
                                        key={i}
                                        src={src}
                                        alt={`card-${i + 1}`}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        className='imagePhotos'
                                    />
                                ))}
                                autoplay={false}
                                autoplayDelay={3000}
                                pauseOnHover={false}
                            />
                        </div>
                        <div className='photoCardContainer'>
                            <Stack
                                randomRotation={false}
                                sensitivity={200}
                                sendToBackOnClick={true}
                                cards={images.map((src, i) => (
                                    <img
                                        key={i}
                                        src={src}
                                        alt={`card-${i + 1}`}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        className='imagePhotos'
                                    />
                                ))}
                                autoplay={false}
                                autoplayDelay={3000}
                                pauseOnHover={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Photos;