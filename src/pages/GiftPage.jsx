import Banner  from '@/components/sections/Banner'
import Life from '@/components/sections/Life'
import Photos from '@/components/sections/Photos'
import Songs from '@/components/sections/Songs'
const GiftPage = () => {

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

                </div>

            </div>
        </>
    )
}
export default GiftPage;