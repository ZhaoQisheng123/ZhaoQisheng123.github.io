// Keep the poster visible until the visitor starts a video.
document.querySelectorAll('.project-player').forEach(player => {
  const video = player.querySelector('video');
  const button = player.querySelector('.project-play-button');
  if (!video || !button) return;

  video.controls = false;
  button.hidden = false;

  button.addEventListener('click', async () => {
    button.hidden = true;
    video.controls = true;
    video.focus({ preventScroll: true });
    try {
      await video.play();
    } catch {
      // Native controls remain available if playback needs another attempt.
      video.controls = true;
    }
  });
  video.addEventListener('play', () => {
    button.hidden = true;
    video.controls = true;
  });
});

document.querySelectorAll('[data-video-target]').forEach(link => {
  link.addEventListener('click', () => {
    const figure = document.getElementById(link.dataset.videoTarget);
    if (!figure) return;
    const button = figure.querySelector('.project-play-button');
    const video = figure.querySelector('video');
    if (button && !button.hidden) button.click();
    else if (video) video.play().catch(() => {});
  });
});
