const player = videojs('vid1', {
     autoplay: 'muted',
     controls: true,
     playsinline: true,
     playbackRates: [0.5, 0.8 ,1],
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

const scriptSpans = document.querySelectorAll('#script span');


player.on('timeupdate', () => {
    const currentTime = player.currentTime();

    scriptSpans.forEach(span => {
        const start = parseFloat(span.getAttribute('data-start'));
        const end = parseFloat(span.getAttribute('data-end'));

        if (currentTime >= start && currentTime <= end) {
            span.classList.add('highlight');
        } else {
            span.classList.remove('highlight');
        }
    });
});


// Optional: Make script clickable to jump to specific time in the video
scriptSpans.forEach(span => {
    span.addEventListener('click', () => {
        const start = parseFloat(span.getAttribute('data-start'));
        player.currentTime(start);
        player.play();
    });
});