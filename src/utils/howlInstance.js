import { Howl } from 'howler'
import flowSound from '../assets/chiikawa-wu-wulalawula.mp3'

export const sound = new Howl({
  src: [flowSound],
  autoplay: true,
  loop: false,
  volume: 0.5,
  onload: function() {
    console.log('Audio loaded successfully');
  },
  onloaderror: function(id, error) {
    console.error('Error loading audio:', error);
  },
  onplayerror: function(id, error) {
    console.error('Error playing audio:', error);
  },
  onend: function () {
    console.log('finished.')
  }
})