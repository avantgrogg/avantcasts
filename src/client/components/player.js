import React, { Component } from 'react';
import { get } from 'lodash';

export class Player extends Component {
    shouldComponentUpdate() {
        const music = document.getElementById('music');
        music.load();
        return true;
    }
//   componentDidMount() {
//     //return this.props.media.isPlaying !== media.isPlaying
//     console.log('SOMETHINGJNDJBGJDHBHG');
//   }

  render() {
    const { state, playAudio } = this.props;
    return (
      <div>
        <span dangerouslySetInnerHTML={{__html: get(state, 'player.episode.description', '')}}></span>
        <audio id="music" controls="controls">
            <source src={get(state, 'player.episode.enclosures.0.url')} type="audio/mpeg" />
        </audio>
        <button id="pButton" className="play" onClick={(e) => playAudio(e)}>Play</button>
      </div>
    );
  }
}