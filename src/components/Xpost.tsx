import React, { useEffect, useRef } from "react";

interface TweetEmbedProps {
  tweetUrl: string;
}

const TweetEmbed: React.FC<TweetEmbedProps> = ({ tweetUrl }) => {
  const tweetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Twitter widget script only once
    const existingScript = document.getElementById("twitter-wjs");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "twitter-wjs";
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // Already loaded, force widget render
      setTimeout(() => {
        if ((window as any).twttr?.widgets && tweetRef.current) {
          (window as any).twttr.widgets.load(tweetRef.current);
        }
      }, 300);
    }
  }, []);

  return (
    <div ref={tweetRef}>
      <blockquote className="twitter-tweet">
        <a href={tweetUrl}></a>
      </blockquote>
    </div>
  );
};

export default TweetEmbed;
