// 禁用视频下载按钮
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有视频元素
    var videos = document.querySelectorAll('video');
    
    // 为每个视频元素设置属性
    videos.forEach(function(video) {
        // 禁用右键菜单
        video.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });
        
        // 设置 controlsList 属性，禁用下载按钮
        video.setAttribute('controlsList', 'nodownload');
        
        // 对于某些浏览器，设置 disablePictureInPicture 和 disableRemotePlayback
        video.setAttribute('disablePictureInPicture', '');
        video.setAttribute('disableRemotePlayback', '');
    });
});
