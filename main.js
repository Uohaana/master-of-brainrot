const memePhrases = [
  '“SON MODE: quiet, expensive, and impossible to ignore.”',
  '“SIGMA BOI energy. No explanation. Just aura.”',
  '“67 energy. Low context. High confidence.”',
  '“DAB DETECTED. The room is now officially underperforming.”',
  '“This is the exact vibe: no panic, no apology, all aura.”',
  '“The stare says business. The face says legend.”',
  '“Sigma energy. Son energy. Chaos energy. All of it.”',
  '“This website is not subtle. It is iconic.”',
  '“No context needed. The confidence does all the talking.”',
  '“67 and still somehow the most composed person in the room.”',
  '“Main character with the walk of a sigma and the grin of a son.”',
  '“Too calm. Too confident. Too unbothered.”',
  '“The room is quiet, but the aura is screaming.”',
  '“We are not dramatic. We are just highly effective.”',
  '“Every plan starts as a joke and ends as a legend.”',
  '“The confidence is unverified, but the vibes are immaculate.”',
  '“He walked in like a meme and left like a myth.”',
  '“This is not chaos. This is strategy with a louder soundtrack.”',
  '“Low context, high standards, maximum aura.”',
  '“The internet called. It wants the mood back.”',
  '“The face says calm. The energy says impossible.”'
];

const memeGalleryData = [
  { tag: 'SON', label: 'SON MODE', image: 'https://api.memegen.link/images/drake/son/sigma.png' },
  { tag: 'SIGMA', label: 'SIGMA BOI', image: 'https://api.memegen.link/images/one-does-not-simply/sigma/aura.png' },
  { tag: '67', label: '67 ENERGY', image: 'https://api.memegen.link/images/doge/67/low%20context.png' },
  { tag: 'DAB', label: 'DAB DETECTED', image: 'https://api.memegen.link/images/this-is-fine/low%20context/high%20confidence.png' },
  { tag: 'SON', label: 'NO CONTEXT', image: 'https://api.memegen.link/images/spongebob/no%20context/just%20vibes.png' },
  { tag: 'SIGMA', label: 'AURA ONLY', image: 'https://api.memegen.link/images/expanding-brain/low%20effort/high%20confidence.png' },
  { tag: '67', label: 'CALM AF', image: 'https://api.memegen.link/images/sad-baby/keep%20calm/it%20is%20fine.png' },
  { tag: 'DAB', label: 'SWAG RAID', image: 'https://api.memegen.link/images/woman-yelling/eye%20contact/only.png' },
  { tag: 'SON', label: 'EYE CONTACT ONLY', image: 'https://api.memegen.link/images/surprised-pikachu/uh/that%20was%20smooth.png' },
  { tag: 'SIGMA', label: 'DEADPAN LEGEND', image: 'https://api.memegen.link/images/fry/not%20sure/if%20this%20is%20a%20meme.png' },
  { tag: '67', label: 'LOW CONTEXT', image: 'https://api.memegen.link/images/buff-doge/that%20look/so%20iconic.png' },
  { tag: 'DAB', label: 'WALK OF SHAME', image: 'https://api.memegen.link/images/stonks/no%20apology/just%20results.png' },
  { tag: 'SON', label: 'UNBOTHERED MODE', image: 'https://api.memegen.link/images/office-space/that%20would%20be%20great/yes%20please.png' },
  { tag: 'SIGMA', label: 'WEIRDLY ICONIC', image: 'https://api.memegen.link/images/american-chopper/this%20is%20the%20best/it%20was%20not.png' },
  { tag: '67', label: 'SMOOTH BRAIN', image: 'https://api.memegen.link/images/bored/please%20not%20again/this%20is%20my%20job.png' },
  { tag: 'DAB', label: 'NO APOLOGY', image: 'https://api.memegen.link/images/success-kid/when%20the%20plan%20works/for%20once.png' },
  { tag: 'SON', label: 'ACT LIKE YOU KNOW', image: 'https://api.memegen.link/images/noidea/why%20are%20you%20like%20this/again.png' },
  { tag: 'SIGMA', label: 'NO ONE ASKED', image: 'https://api.memegen.link/images/wow/that%20actually%20worked/again.png' },
  { tag: '67', label: 'CHILL MODE', image: 'https://api.memegen.link/images/oogway/inner%20peace/not%20today.png' },
  { tag: 'DAB', label: 'PITCH CONFIDENCE', image: 'https://api.memegen.link/images/angry/you%20said%20it/now%20deal.png' },
  { tag: 'SON', label: 'BRO THINKS', image: 'https://api.memegen.link/images/smug-rage/this%20face/for%20the%20pitch.png' },
  { tag: 'SIGMA', label: 'JUST AURA', image: 'https://api.memegen.link/images/skeptical-third/are%20you%20sure/about%20that.png' },
  { tag: '67', label: 'INNER PEACE', image: 'https://api.memegen.link/images/the-rock/when%20the%20room%20gets%20quiet/it%20works.png' },
  { tag: 'DAB', label: 'I SAID IT', image: 'https://api.memegen.link/images/is-this-a-pigeon/that%20just%20happened/again.png' },
  { tag: 'SON', label: 'THE FACE', image: 'https://api.memegen.link/images/villain/you%20thought/i%20was%20done.png' },
  { tag: 'SIGMA', label: 'CALM BUT DANGEROUS', image: 'https://api.memegen.link/images/confession-bear/this%20is%20fine/for%20now.png' },
  { tag: '67', label: 'VERY SMOOTH', image: 'https://api.memegen.link/images/duck-face/no%20one%20asked/for%20this.png' },
  { tag: 'DAB', label: 'WEIRD VIBES', image: 'https://api.memegen.link/images/patrick/that%20one%20look/at%20the%20camera.png' },
  { tag: 'SON', label: 'DEADPAN MAGIC', image: 'https://api.memegen.link/images/leo/very%20much/understood.png' },
  { tag: 'SIGMA', label: 'BRAIN OFF', image: 'https://api.memegen.link/images/waiting/someone%20says%20it/at%20last.png' },
  { tag: '67', label: 'NOT TODAY', image: 'https://api.memegen.link/images/armchair-expert/just%20trust%20me/please.png' },
  { tag: 'DAB', label: 'MAXIMUM ENERGY', image: 'https://api.memegen.link/images/spider-man/when%20the%20slide%20deck/starts%20working.png' },
  { tag: 'SON', label: 'LOW CONTEXT LEGEND', image: 'https://api.memegen.link/images/my-collection/lost%20the%20plot/again.png' },
  { tag: 'SIGMA', label: 'THE PLAN', image: 'https://api.memegen.link/images/matrix/what%20if/i%20do%20nothing.png' },
  { tag: '67', label: 'NO IDEA, STILL COOL', image: 'https://api.memegen.link/images/and-it-just-keeps/getting/better.png' },
  { tag: 'DAB', label: 'ZERO PANIC', image: 'https://api.memegen.link/images/captain-picard/not%20my%20problem/that%20is%20your%20problem.png' },
  { tag: 'SON', label: 'I KNOW EXACTLY', image: 'https://api.memegen.link/images/gandalf/what%20have%20we%20here/it%20is%20fine.png' },
  { tag: 'SIGMA', label: 'THE WALK', image: 'https://api.memegen.link/images/yoda/you%20must%20not/overthink%20it.png' },
  { tag: '67', label: 'NO CONTEXT GLOW', image: 'https://api.memegen.link/images/oprah/you%20get/another%20meme.png' },
  { tag: 'DAB', label: 'TOTAL CONTROL', image: 'https://api.memegen.link/images/philosoraptor/what%20if/i/just%20do%20it.png' },
  { tag: 'SON', label: 'THE LEGEND STARE', image: 'https://api.memegen.link/images/roll-safe/this%20is%20the%20plan/and%20it%20works.png' },
  { tag: 'SIGMA', label: 'AURA ENGINE', image: 'https://api.memegen.link/images/bad-luck-brian/that%20look/when%20it%20works.png' },
  { tag: '67', label: 'BLUNT BUT PERFECT', image: 'https://api.memegen.link/images/amused/that%20was%20the%20plan/yes%20it%20was.png' },
  { tag: 'DAB', label: 'RELAXED CONTROL', image: 'https://api.memegen.link/images/social-distancing/not%20talking/just%20vibes.png' },
  { tag: 'SON', label: 'NO PANIC, JUST VIBES', image: 'https://api.memegen.link/images/life-sucks/this%20is%20fine/for%20everyone.png' },
  { tag: 'SIGMA', label: 'STRATEGY MODE', image: 'https://api.memegen.link/images/first-world-problems/why%20is%20this/so%20difficult.png' },
  { tag: '67', label: 'NOD AND MOVE', image: 'https://api.memegen.link/images/crying/this%20is%20me/at%20the%20meeting.png' },
  { tag: 'DAB', label: 'THE CHOSEN LOOK', image: 'https://api.memegen.link/images/evil-toddler/that%20look/again%20please.png' },
  { tag: 'SON', label: 'UNBOTHERED BEAST', image: 'https://api.memegen.link/images/hagrid/this%20is%20a%20problem/for%20later.png' },
  { tag: 'SIGMA', label: 'FINAL FORM', image: 'https://api.memegen.link/images/sovereign/what%20did%20you%20do/now%20we%20know.png' },
  { tag: '67', label: 'THE SILENT WIN', image: 'https://api.memegen.link/images/chef/that%20was%20the%20plan/and%20it%20still%20worked.png' },
  { tag: 'DAB', label: 'VIBE CHECK PASSED', image: 'https://api.memegen.link/images/joseph-ducreux/this%20is%20my%20face/when%20the%20plan%20works.png' },
  { tag: 'SON', label: 'THE ROOM GOES QUIET', image: 'https://api.memegen.link/images/harold/this%20is%20fine/quietly%20winning.png' },
  { tag: 'SIGMA', label: 'ONLY AURA', image: 'https://api.memegen.link/images/learned-something/that%20was%20the%20point/so%20obviously.png' },
  { tag: '67', label: 'WHO ASKED', image: 'https://api.memegen.link/images/one-does-not-simply/why%20are%20you%20like%20this/again.png' },
  { tag: 'DAB', label: 'DRAMA FREE', image: 'https://api.memegen.link/images/cheems/that%20was%20the%20goal/for%20real.png' },
  { tag: 'SON', label: 'JUST NOD', image: 'https://api.memegen.link/images/brain/this%20part%20was%20easy/it%20was%20not.png' },
  { tag: 'SIGMA', label: 'COLD BRAIN', image: 'https://api.memegen.link/images/ten-guy/that%20look/when%20it%20clicks.png' },
  { tag: '67', label: 'LOW CONTEXT, HIGH IMPACT', image: 'https://api.memegen.link/images/buffalo-cowboy/this%20is%20my%20plan/just%20not%20yours.png' },
  { tag: 'DAB', label: 'AURA LIKE A TICKER', image: 'https://api.memegen.link/images/garfield/this%20is%20the%20look/when%20it%20works.png' },
  { tag: 'SON', label: 'I DIDN’T EVEN TRY', image: 'https://api.memegen.link/images/dank-memes/this%20was%20the%20idea/and%20it%20worked.png' },
  { tag: 'SIGMA', label: 'SILENT POWER', image: 'https://api.memegen.link/images/doge/so%20this%20is%20it/low%20expectations.png' },
  { tag: '67', label: 'LITTLE BIT OF CHAOS', image: 'https://api.memegen.link/images/scumbag-brain/that%20was%20the%20plan/obviously.png' },
  { tag: 'DAB', label: 'CONTROLLED CHAOS', image: 'https://api.memegen.link/images/monkey-biscuits/and%20then/it%20got%20weird.png' },
  { tag: 'SON', label: 'THE FACE OF A WIN', image: 'https://api.memegen.link/images/bruh/that%20was%20the%20moment/when%20everyone%20froze.png' },
  { tag: 'SIGMA', label: 'DON’T PANIC', image: 'https://api.memegen.link/images/homer/that%20look/when%20it%20finally%20makes%20sense.png' },
  { tag: '67', label: 'ALMOST CALM', image: 'https://api.memegen.link/images/stonks/this%20is%20the%20point/very%20calm.png' },
  { tag: 'DAB', label: 'UNFLAPPABLE', image: 'https://api.memegen.link/images/cat/no%20one%20asks/for%20this.png' },
  { tag: 'SON', label: 'I SAW THE PLAN', image: 'https://api.memegen.link/images/pigeon/that%20look/when%20it%20clicks.png' },
  { tag: 'SIGMA', label: 'MONEY LOOK', image: 'https://api.memegen.link/images/puppy/that%20face/the%20one%20with%20the%20plan.png' },
  { tag: '67', label: 'THE QUIET VICTORY', image: 'https://api.memegen.link/images/what-if-i-told-you/this%20is%20my%20plan/and%20you%20still%20asked.png' },
  { tag: 'DAB', label: 'THAT ONE LOOK', image: 'https://api.memegen.link/images/patrick/that%20one%20look/at%20the%20camera.png' }
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
