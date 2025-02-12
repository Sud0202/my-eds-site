const videoWrapper = document.querySelector('.video-wrapper');
const iframe = document.createElement('iframe');
iframe.setAttribute('src', 'https://drive.google.com/file/d/1guqG22U3GbIby1jvFd45ky5E2ILO0Yaa/preview');
iframe.setAttribute('width', '640');
iframe.setAttribute('height', '480');
iframe.setAttribute('allow', 'autoplay');
videoWrapper.appendChild(iframe);


function embedYoutube(url, autoplay, background) {
    const usp = new URLSearchParams(url.search);
    let suffix = '';
    
    if (autoplay || background) {
        const suffixParams = {
            autoplay: autoplay ? '1' : '0',
            mute: background ? '1' : '0',
            controls: background ? '0' : '1',
            disablekb: background ? '1' : '0',
            loop: background ? '1' : '0',
            playsinline: background ? '1' : '0',
        };
        suffix = `&${Object.entries(suffixParams).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join('&')}`;
    }
  
    let vid = usp.get('v') ? encodeURIComponent(usp.get('v')) : '';
    const embed = url.pathname;
    if (url.origin.includes('youtu.be')) {
        [, vid] = url.pathname.split('/');
    }
  
    const container = document.querySelector('.yt-video.block');
  
    if (container) {
        const iframeHTML = `<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;">
            <iframe src="https://www.youtube.com${vid ? `/embed/${vid}?rel=0&v=${vid}${suffix}` : embed}" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" 
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media; accelerometer; gyroscope; picture-in-picture" allowfullscreen="" scrolling="no" title="Content from Youtube" loading="lazy"></iframe>
          </div>`;

        container.innerHTML = iframeHTML;
    }
}

const youtubeUrl = new URL('');
const autoplay = true;
const background = false;
embedYoutube(youtubeUrl, autoplay, background);

