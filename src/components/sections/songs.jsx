const Songs = () => {
    const playlistId = '19fn2rn7dZLyQXmcfv6JVz';
    return (
        <>
            <div className="songs-container">
                <div className="song-text-container">
                    <h2>
                        Nuestras canciones...
                    </h2>
                </div>
                <div className="spotify-container">
                    <div className="repoductor-container">
                        <iframe
                            title="Spotify Embed: Recommendation Playlist "
                            src={`https://open.spotify.com/embed/playlist/2RSF0w7XkhCwH3gjmqZsHl?utm_source=generator&theme=0`}
                            width="100%"
                            height="100%"
                            style={{ minHeight: '400px' }}
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        />
                    </div>
                    <div className="music-cat-container">
                        <img src="/images/Gatito_musica.gif" alt="cat" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Songs;