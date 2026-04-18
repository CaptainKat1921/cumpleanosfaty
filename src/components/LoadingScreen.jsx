const LoadingScreen = ({ progress }) => {
  return (
    <main className="gift-loader" role="status" aria-live="polite" aria-busy="true">
      <div className="gift-loader__content">
        <h1>Preparando tu sorpresa...</h1>
        <div className="gift-loader__bar" aria-hidden="true">
          <span style={{ width: `${progress}%` }} />
        </div>
        <p className="gift-loader__progress">{progress}%</p>
      </div>
    </main>
  );
};

export default LoadingScreen;
