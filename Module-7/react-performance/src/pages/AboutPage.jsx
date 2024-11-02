import React, { useState, Suspense, lazy } from 'react';

const LazyVideo = lazy(() => import('../components/Video.js'));

const AboutPage = () => {
  const [loadVideo, setLoadVideo] = useState(false);

  return (
    <div>
      <h1>About Page</h1>
      <p>Learn more about us on this page</p>
      <button onClick={() => setLoadVideo(true)}>Load video</button>
      {loadVideo && (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyVideo />
        </Suspense>
      )}
    </div>
  );
};

export default AboutPage;
