import axios from "axios";
import { useEffect, useState } from "react";

const Episodes = (props) => {
  const { episodeId } = props;

  const [episodeData, setEpisodeData] = useState(null);

  const [episodeDetayGoster, setEpisodeDetayGoster] = useState(false);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/films/${episodeId}/`).then((response) => {
      setEpisodeData(response.data);
    });
  }, [episodeId]);

  const detayFonksiyon = () => {
    setEpisodeDetayGoster(!episodeDetayGoster);
  };

  return (
    <div>
      {episodeData ? (
        <div>
          <div className="Episodes-main">
            <p>
              Episode {episodeData.episode_id}: {episodeData.title}
            </p>
            <p className="Episode-ok" onMouseEnter={detayFonksiyon}>
              ↓
            </p>
          </div>
          <div className="Episode-detay">
            {episodeDetayGoster ? (
              <ul>
                <li>{episodeData.opening_crawl}</li>
                <li>Directed by: {episodeData.director}</li>
                <li>Produced by: {episodeData.producer}</li>
                <li>Release date: {episodeData.release_date}</li>
              </ul>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Episodes;
