
document.addEventListener('DOMContentLoaded', function () {
    const videoLinks = document.querySelectorAll('.filter-card-video');
    const modal = document.getElementById('reusableWistiaModal');
    const videoContainer = document.getElementById('wistiaVideoContainer');

    videoLinks.forEach(link => {
        link.addEventListener('click', function () {
            const videoId = this.getAttribute('data-video-id');
            const embed = `<wistia-player media-id="${videoId}" seo="false" aspect="0.5625"></wistia-player>`;
            videoContainer.innerHTML = embed;
        });
    });

    modal.addEventListener('hidden.bs.modal', function () {
        videoContainer.innerHTML = ''; // clear video on close
    });
});