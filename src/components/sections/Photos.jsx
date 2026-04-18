import Stack from '@/components/Stack'
const Photos = () => {
    const images1 = [
        "/photos/Us/first/1.jpeg",
        "/photos/Us/first/2.jpeg",
        "/photos/Us/first/3.jpeg",
        "/photos/Us/first/4.jpeg",
        "/photos/Us/first/5.jpeg",
        "/photos/Us/first/6.jpeg",
        "/photos/Us/first/7.jpeg",
    ];
    const images2 = [
        "/photos/Us/second/1.jpeg",
        "/photos/Us/second/2.jpeg",
        "/photos/Us/second/3.jpeg",
        "/photos/Us/second/4.jpeg",
        "/photos/Us/second/5.jpeg",
        "/photos/Us/second/6.jpeg",
        "/photos/Us/second/7.jpeg",
    ];
    const images3 = [
        "/photos/Us/third/1.jpeg",
        "/photos/Us/third/2.jpeg",
        "/photos/Us/third/3.jpeg",
        "/photos/Us/third/4.jpeg",
        "/photos/Us/third/5.jpeg",
        "/photos/Us/third/6.jpeg",
        "/photos/Us/third/7.jpeg",
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
