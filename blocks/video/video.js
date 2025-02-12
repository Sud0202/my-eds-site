const videoWrapper = document.querySelector('.video-wrapper');

const iframe = document.createElement('iframe');

iframe.setAttribute('src', 'https://drive.google.com/file/d/1guqG22U3GbIby1jvFd45ky5E2ILO0Yaa/preview');
iframe.setAttribute('width', '640'); 
iframe.setAttribute('height', '480'); 
iframe.setAttribute('allow', 'autoplay'); 

videoWrapper.appendChild(iframe);
