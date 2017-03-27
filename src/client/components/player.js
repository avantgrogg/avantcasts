import React from 'react';
import { get } from 'lodash';

export const Player = ({ state, playAudio }) => (
    <div>
    <span dangerouslySetInnerHTML={{__html: get(state, 'player.episode.description', '')}}></span>
    <audio id="music" controls="controls">
        <source src={get(state, 'player.episode.enclosures.0.url')} type="audio/mpeg" />
    </audio>
    <button id="pButton" className="play" onClick={(e) => playAudio(e)}>Play</button>
    </div>
);