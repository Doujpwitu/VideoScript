const player = videojs('vid1', {
     autoplay: 'muted',
     controls: true,
     playsinline: true,
     playbackRates: [0.5, 1, 1.5, 2],
     fluid: true,
     controlBar: {
        skipButtons: {
          forward: 5,
          backward: 5
        }
    },
    userActions: {
        hotkeys: true
    }
});
