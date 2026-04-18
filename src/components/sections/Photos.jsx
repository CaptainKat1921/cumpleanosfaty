import Stack from '@/components/Stack'
const Photos = () => {
    const images1 = [
        "/photos/Us/first/1.avif",
        "/photos/Us/first/2.avif",
        "/photos/Us/first/3.avif",
        "/photos/Us/first/4.avif",
        "/photos/Us/first/5.avif",
        "/photos/Us/first/6.avif",
        "/photos/Us/first/7.avif",
    ];
    const images2 = [
        "/photos/Us/second/1.avif",
        "/photos/Us/second/2.avif",
        "/photos/Us/second/3.avif",
        "/photos/Us/second/4.avif",
        "/photos/Us/second/5.avif",
        "/photos/Us/second/6.avif",
        "/photos/Us/second/7.avif",
    ];
    const images3 = [
        "/photos/Us/third/1.avif",
        "/photos/Us/third/2.avif",
        "/photos/Us/third/3.avif",
        "/photos/Us/third/4.avif",
        "/photos/Us/third/5.avif",
        "/photos/Us/third/6.avif",
        "/photos/Us/third/7.avif",
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
                                cards={images1.map((src, i) => (
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
                                cards={images2.map((src, i) => (
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
                                cards={images3.map((src, i) => (
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
