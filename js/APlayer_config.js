const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    theme: '#b7daff',
    loop: 'all',
    order: 'list',
    preload: 'auto',
    volume: 0.5,
    lrcType: 3,
    mutex: true,
    listFolded: false,

    audio: [{
        name: '平凡之路',
        artist: '朴树',
        lrc: '/downloads/lrc/平凡之路-朴树.lrc',
        cover: 'http://p2.music.126.net/W_5XiCv3rGS1-J7EXpHSCQ==/18885211718782327.jpg?param=300x300',
        url: 'http://music.163.com/#/song?id=1457815141'
      },
      {
        name: '后会无期',
        artist: 'G.E.M.邓紫棋',
        lrc: '/downloads/lrc/后会无期-G.E.M.邓紫棋.lrc',
        cover: 'http://p1.music.126.net/vpvPajo3kn88nHc7jUjeWQ==/5974746185758035.jpg?param=300x300',
        url: 'http://m10.music.126.net/20190215193113/e5afc8b5376136029366f2053cf30f85/ymusic/2c87/6ec3/582e/0d572dcc04f8de34133c0f364b74c30c.mp3'
      }
    ]
});