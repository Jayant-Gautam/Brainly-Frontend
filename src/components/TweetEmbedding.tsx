import { useEffect, useState } from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';

export default function Tweet({link} : {link : string}) {

    // https://x.com/gunsnrosesgirl3/status/1960965279040856334
    const [id, setId] = useState("");
    function extractId(){
        const parts = link.split("/");
        const tweetId = parts[parts.length - 1];
        setId(tweetId);
    }

    useEffect(() => {
        extractId();
    }, [link])

    return (
        <div>
        {id ? <TwitterTweetEmbed tweetId={id} /> : <p>Loading...</p>}
        </div>
    );
}