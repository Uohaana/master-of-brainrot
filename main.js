const memePhrases = [
  '"SON MODE: quiet, expensive, and impossible to ignore."',
  '"SIGMA BOI energy. No explanation. Just aura."',
  '"67 energy. Low context. High confidence."',
  '"DAB DETECTED. The room is now officially underperforming."',
  '"This is the exact vibe: no panic, no apology, all aura."',
  '"The stare says business. The face says legend."',
  '"Sigma energy. Son energy. Chaos energy. All of it."',
  '"This website is not subtle. It is iconic."',
  '"No context needed. The confidence does all the talking."',
  '"67 and still somehow the most composed person in the room."',
  '"Main character with the walk of a sigma and the grin of a son."',
  '"Too calm. Too confident. Too unbothered."',
  '"The room is quiet, but the aura is screaming."',
  '"We are not dramatic. We are just highly effective."',
  '"Every plan starts as a joke and ends as a legend."',
  '"The confidence is unverified, but the vibes are immaculate."',
  '"He walked in like a meme and left like a myth."',
  '"This is not chaos. This is strategy with a louder soundtrack."',
  '"Low context, high standards, maximum aura."',
  '"The internet called. It wants the mood back."',
  '"The face says calm. The energy says impossible."'
];

const memeGalleryData = [
  { tag: 'SON', label: 'SON MODE', image: 'https://i.imgflip.com/30b1gx.jpg' },
  { tag: 'SIGMA', label: 'SIGMA BOI', image: 'https://i.kym-cdn.com/entries/icons/original/000/026/152/gigachad.jpg' },
  { tag: '67', label: '67 ENERGY', image: 'https://i.imgflip.com/1bij.jpg' },
  { tag: 'DAB', label: 'DAB DETECTED', image: 'https://i.kym-cdn.com/entries/icons/original/000/018/012/this_is_fine.jpg' },
  { tag: 'SON', label: 'NO CONTEXT', image: 'https://i.imgflip.com/2z5a4v.jpg' },
  { tag: 'SIGMA', label: 'AURA ONLY', image: 'https://i.kym-cdn.com/entries/icons/original/000/022/940/cover4.jpg' },
  { tag: '67', label: 'CALM AF', image: 'https://i.kym-cdn.com/entries/icons/original/000/016/546/tumblr_nxpf86At6d1tcn90ko1_500.jpg' },
  { tag: 'DAB', label: 'SWAG RAID', image: 'https://i.kym-cdn.com/entries/icons/original/000/022/017/thumb.png' },
  { tag: 'SON', label: 'EYE CONTACT ONLY', image: 'https://i.kym-cdn.com/entries/icons/original/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.png' },
  { tag: 'SIGMA', label: 'DEADPAN LEGEND', image: 'https://i.imgflip.com/1swyga.jpg' },
  { tag: '67', label: 'LOW CONTEXT', image: 'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg' },
  { tag: 'DAB', label: 'WALK OF SHAME', image: 'https://i.imgflip.com/4/43hc6.jpg' },
  { tag: 'SON', label: 'UNBOTHERED MODE', image: 'https://i.imgflip.com/4/1yrb4m.jpg' },
  { tag: 'SIGMA', label: 'WEIRDLY ICONIC', image: 'https://i.imgflip.com/4/4ydnpt.jpg' },
  { tag: '67', label: 'SMOOTH BRAIN', image: 'https://i.kym-cdn.com/entries/icons/original/000/030/710/dd0.png' },
  { tag: 'DAB', label: 'NO APOLOGY', image: 'https://i.imgflip.com/4/2y6itk.jpg' },
  { tag: 'SON', label: 'ACT LIKE YOU KNOW', image: 'https://i.imgflip.com/4/25w3gc.jpg' },
  { tag: 'SIGMA', label: 'NO ONE ASKED', image: 'https://i.kym-cdn.com/entries/icons/original/000/026/489/thinking.jpg' },
  { tag: '67', label: 'CHILL MODE', image: 'https://i.imgflip.com/4/2lq6p2.jpg' },
  { tag: 'DAB', label: 'PITCH CONFIDENCE', image: 'https://i.kym-cdn.com/entries/icons/original/000/000/091/TrollFace.jpg' },
  { tag: 'SON', label: 'BRO THINKS', image: 'https://i.imgflip.com/4/2xcfqx.jpg' },
  { tag: 'SIGMA', label: 'JUST AURA', image: 'https://i.kym-cdn.com/entries/icons/original/000/025/090/tumblr_inline_p22adoj5O81qzamak_500.jpg' },
  { tag: '67', label: 'INNER PEACE', image: 'https://i.imgflip.com/4/1ag5gf.jpg' },
  { tag: 'DAB', label: 'I SAID IT', image: 'https://i.imgflip.com/4/1s4c5l.jpg' },
  { tag: 'SON', label: 'THE FACE', image: 'https://i.kym-cdn.com/entries/icons/original/000/024/965/well.jpg' },
  { tag: 'SIGMA', label: 'CALM BUT DANGEROUS', image: 'https://i.imgflip.com/4/2scrgp.jpg' },
  { tag: '67', label: 'VERY SMOOTH', image: 'https://i.kym-cdn.com/entries/icons/original/000/017/981/The_Real_Kermit.jpg' },
  { tag: 'DAB', label: 'WEIRD VIBES', image: 'https://i.imgflip.com/4/2nk5z0.jpg' },
  { tag: 'SON', label: 'DEADPAN MAGIC', image: 'https://i.kym-cdn.com/entries/icons/original/000/025/669/d8g.jpg' },
  { tag: 'SIGMA', label: 'BRAIN OFF', image: 'https://i.imgflip.com/4/14wqa4.jpg' },
  { tag: '67', label: 'NOT TODAY', image: 'https://i.kym-cdn.com/entries/icons/original/000/001/007/lolwut.jpg' },
  { tag: 'DAB', label: 'MAXIMUM ENERGY', image: 'https://i.imgflip.com/4/2f4ypb.jpg' },
  { tag: 'SON', label: 'LOW CONTEXT LEGEND', image: 'https://i.kym-cdn.com/entries/icons/original/000/023/987/overcome.jpg' },
  { tag: 'SIGMA', label: 'THE PLAN', image: 'https://i.imgflip.com/4/34yt33.jpg' },
  { tag: '67', label: 'NO IDEA, STILL COOL', image: 'https://i.kym-cdn.com/entries/icons/original/000/015/976/plutchik-wheel.jpg' },
  { tag: 'DAB', label: 'ZERO PANIC', image: 'https://i.imgflip.com/4/3b1jlz.jpg' },
  { tag: 'SON', label: 'I KNOW EXACTLY', image: 'https://i.kym-cdn.com/entries/icons/original/000/017/203/ScreenShot2012-06-08at9.52.10PM.png' },
  { tag: 'SIGMA', label: 'THE WALK', image: 'https://i.imgflip.com/4/2owbvl.jpg' },
  { tag: '67', label: 'NO CONTEXT GLOW', image: 'https://i.kym-cdn.com/entries/icons/original/000/027/989/Screen_Shot_2019-01-04_at_3.18.05_PM.jpg' },
  { tag: 'DAB', label: 'TOTAL CONTROL', image: 'https://i.imgflip.com/4/2qmr9g.jpg' },
  { tag: 'SON', label: 'THE LEGEND STARE', image: 'https://i.kym-cdn.com/entries/icons/original/000/025/817/Screen_Shot_2018-03-30_at_11.34.27_AM.png' },
  { tag: 'SIGMA', label: 'AURA ENGINE', image: 'https://i.imgflip.com/4/2wkt4w.jpg' },
  { tag: '67', label: 'BLUNT BUT PERFECT', image: 'https://i.kym-cdn.com/entries/icons/original/000/009/566/koolaidman.png' },
  { tag: 'DAB', label: 'RELAXED CONTROL', image: 'https://i.imgflip.com/4/2jrjlw.jpg' },
  { tag: 'SON', label: 'NO PANIC, JUST VIBES', image: 'https://i.kym-cdn.com/entries/icons/original/000/019/735/why-can-t-i-hold-all-these-limes-motivational-poster-1.jpg' },
  { tag: 'SIGMA', label: 'STRATEGY MODE', image: 'https://i.imgflip.com/4/3smdmh.jpg' },
  { tag: '67', label: 'NOD AND MOVE', image: 'https://i.kym-cdn.com/entries/icons/original/000/000/157/nes.jpg' },
  { tag: 'DAB', label: 'THE CHOSEN LOOK', image: 'https://i.imgflip.com/4/28dzyp.jpg' },
  { tag: 'SON', label: 'UNBOTHERED BEAST', image: 'https://i.kym-cdn.com/entries/icons/original/000/012/073/7nTnr.jpg' },
  { tag: 'SIGMA', label: 'FINAL FORM', image: 'https://i.imgflip.com/4/3p9lw8.jpg' },
  { tag: '67', label: 'THE SILENT WIN', image: 'https://i.kym-cdn.com/entries/icons/original/000/013/111/xkcd-fuck-grapefruit.jpg' },
  { tag: 'DAB', label: 'VIBE CHECK PASSED', image: 'https://i.imgflip.com/4/1wz4hs.jpg' },
  { tag: 'SON', label: 'THE ROOM GOES QUIET', image: 'https://i.kym-cdn.com/entries/icons/original/000/027/924/claiming.jpg' },
  { tag: 'SIGMA', label: 'ONLY AURA', image: 'https://i.imgflip.com/4/2d40ym.jpg' },
  { tag: '67', label: 'WHO ASKED', image: 'https://i.kym-cdn.com/entries/icons/original/000/015/725/DLtzM1VCAAA3qIQ.jpg' },
  { tag: 'DAB', label: 'DRAMA FREE', image: 'https://i.imgflip.com/4/2w9fwp.jpg' },
  { tag: 'SON', label: 'JUST NOD', image: 'https://i.kym-cdn.com/entries/icons/original/000/019/484/n6eupc.jpg' },
  { tag: 'SIGMA', label: 'COLD BRAIN', image: 'https://i.imgflip.com/4/2phds1.jpg' },
  { tag: '67', label: 'LOW CONTEXT, HIGH IMPACT', image: 'https://i.kym-cdn.com/entries/icons/original/000/024/580/moarkewl.jpg' },
  { tag: 'DAB', label: 'AURA LIKE A TICKER', image: 'https://i.imgflip.com/4/2nhdpc.jpg' },
  { tag: 'SON', label: 'I DIDN'T EVEN TRY', image: 'https://i.kym-cdn.com/entries/icons/original/000/001/582/picard-facepalm.jpg' },
  { tag: 'SIGMA', label: 'SILENT POWER', image: 'https://i.imgflip.com/4/39xplt.jpg' },
  { tag: '67', label: 'LITTLE BIT OF CHAOS', image: 'https://i.kym-cdn.com/entries/icons/original/000/000/745/nfNeT.jpg' },
  { tag: 'DAB', label: 'CONTROLLED CHAOS', image: 'https://i.imgflip.com/4/5a8p5g.jpg' },
  { tag: 'SON', label: 'THE FACE OF A WIN', image: 'https://i.kym-cdn.com/entries/icons/original/000/010/390/ohyou.jpg' },
  { tag: 'SIGMA', label: 'DON'T PANIC', image: 'https://i.imgflip.com/4/2w8l54.jpg' },
  { tag: '67', label: 'ALMOST CALM', image: 'https://i.kym-cdn.com/entries/icons/original/000/016/212/manning.jpg' },
  { tag: 'DAB', label: 'UNFLAPPABLE', image: 'https://i.imgflip.com/4/47m0fh.jpg' },
  { tag: 'SON', label: 'I SAW THE PLAN', image: 'https://i.kym-cdn.com/entries/icons/original/000/000/080/sadafrog.jpg' },
  { tag: 'SIGMA', label: 'MONEY LOOK', image: 'https://i.imgflip.com/4/2qb1hb.jpg' },
  { tag: '67', label: 'THE QUIET VICTORY', image: 'https://i.kym-cdn.com/entries/icons/original/000/001/593/whoops.jpg' },
  { tag: 'DAB', label: 'THAT ONE LOOK', image: 'https://i.kym-cdn.com/entries/icons/original/000/023/034/cover5.jpg' }
];

const memePhrase = document.getElementById('meme-phrase');
const shuffleButton = document.getElementById('shuffle-meme');

function updateMeme() {
  if (!memePhrase) return;

  const nextPhrase = memePhrases[Math.floor(Math.random() * memePhrases.length)];
  memePhrase.textContent = nextPhrase;
}

function renderGallery() {
  const targets = [
    document.getElementById('meme-gallery'),
    document.getElementById('meme-vault')
  ].filter(Boolean);

  targets.forEach((container) => {
    container.innerHTML = memeGalleryData
      .map(
        (entry) => `
          <article class="gallery-tile">
            <span class="tile-tag">${entry.tag}</span>
            <img src="${entry.image}" alt="${entry.label}" />
            <strong>LOL</strong>
            <h3>${entry.label}</h3>
            <p>That moment when the strategy is weird, the timing is perfect, and the internet is absolutely not ready.</p>
          </article>
        `
      )
      .join('');
  });
}

shuffleButton?.addEventListener('click', updateMeme);
updateMeme();
renderGallery();
