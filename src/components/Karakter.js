// Karakter bileşeniniz buraya gelecek

import React, { useState } from "react";
import Episodes from "./Episodes";

const Karakter = (props) => {
  const { karakter, episodes } = props;
  const [dataGoster, setDataGoster] = useState(false);

  const dataFonksiyon = () => {
    setDataGoster(!dataGoster);
  };

  return (
    <div className="Karakter-main-div">
      <button className="Button" onClick={dataFonksiyon}>
        <p>{karakter.name}</p>{" "}
        <p className="Birth-year">{karakter.birth_year}</p>
        <div className="DataDetay">
          {dataGoster ? (
            <ul>
              <li>Gender : {karakter.gender}</li>
              <li>Height : {karakter.height}</li>
              <li>Mass : {karakter.mass}</li>
              <li>Eye Color : {karakter.eye_color}</li>
              <li>Hair-Color : {karakter.hair_color}</li>
              <li>Skin-Color : {karakter.skin_color}</li>
              {episodes.map((episode) => (
                <li>
                  <Episodes episodeId={episode.episode_id} />
                </li>
              ))}
              {episodes.map((episode) => (
                <li>
                  <Episodes episodeId={episode.episode_id} />
                </li>
              ))}
              {episodes.map((episode) => (
                <li>
                  <Episodes episodeId={episode.episode_id} />
                </li>
              ))}
              {episodes.map((episode) => (
                <li>
                  <Episodes episodeId={episode.episode_id} />
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </button>
    </div>
  );
};

export default Karakter;
