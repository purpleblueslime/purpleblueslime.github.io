let messages = localStorage.getItem('messages');
if (messages) {
  messages = JSON.parse(messages);
   messages.forEach(function (messageContent) {
    sendMessage(messageContent);
  });
}

let chatArea = document.querySelector('.chat-area');
chatArea.addEventListener('keydown', function(e) {
  if (e.keyCode == 13 && !e.shiftKey) {
    e.preventDefault();
    let messageContent = document.querySelector('.chat-area').value;
    createMessage(messageContent);
    sendMessage(messageContent);
    document.querySelector('.chat-area').value = null;
    return;
  }
});

const arrowOn = new Audio('assets/arrowOn.mp3');
const arrowOff = new Audio('assets/arrowOff.mp3');

function createMessage (messageContent) {
  let messages = localStorage.getItem('messages');
  if (messages) {
    messages = JSON.parse(messages);
  }
  if (!messages) {
    messages = [];
  }
  messages.push(messageContent);
  localStorage.setItem('messages', JSON.stringify(messages));
}

function sendMessage (messageContent) {
  let messages = document.querySelector('.messages');
  messages.insertAdjacentHTML('beforeend', `
    <div class='message'>
      <a class='author' onclick='popYou()'>
        <img class='avatar small' src='./assets/you.png'/> 
        <div class='name'>You</div>
      </a>
      <div class='message-content'>
      ${messageContent}
      </div>
    </div>
  `);
  let chats = document.querySelector('.chats');
  chats.scroll({top: chats.scrollHeight, behavior: 'smooth'});
}

function popMe () {
  let body = document.querySelector('body');
  body.insertAdjacentHTML('beforeend', `
  <div class='pop-wrap'>
    <div class='pop'>
      <div class='pop-content'>
        <div class='header-wrap'>
          <div class='bannerImage' style='background-image:url(./assets/shikimori.gif);'></div>
          <img class='avatar' src='./assets/me.png' />
          <div class='status DnD'></div>
          <div class='username'>SLIME#0798</div>
        </div>
        <div class='body-wrap'>
          <div class='about-wrap'> 
            <div class='pop-label'>ABOUT ME</div><br>
            SLIME | 17  | he/him | Leo
          </div>
          <div class='roles-wrap'>
            <div class='pop-label'>ROLES</div><br>
            <code>🔵 Python</code> <code>🟡 JavaScript</code> <code>⚪ Next.js</code> <code>🟣 CSS</code>
          </div>    
          <div class='note-wrap'>
            <div class='pop-label'>NOTE</div><br>
            <textarea class='note-area' placeholder='Click to add a note' 
            spellcheck='false' autocorrect='off'></textarea>
          </div>
          <div class='connections-wrap'>
            <div class='connection'>
              <img class='connection-image' src='./assets/github.png'/>
              <div class='connection-label'>purpleblueslime</div>
              <a target='blank' href='https://github.com/purpleblueslime'>
                <div class='ico'>arrow_forward_ios</div>
              </a>
            </div>
            <div class='connection'>
              <img class='connection-image' src='./assets/spotify.png'/>
              <div class='connection-label'>SLIME</div>
              <a target='blank' href='https://sptfy.com/SLIME'>
                <div class='ico'>arrow_forward_ios</div>
              </a>
            </div>
            <div class='connection'>
              <img class='connection-image' src='./assets/steam.png'/>
              <div class='connection-label'>SLIME</div>
              <a target='blank' href='https://steamcommunity.com/id/purpleblueslime/'>
                <div class='ico'>arrow_forward_ios</div>
              </a>
            </div>
            <div class='connection'>
              <img class='connection-image' src='./assets/twitch.png'/>
              <div class='connection-label'>purpleblueslime</div>
              <a target='blank' href='https://www.twitch.tv/purpleblueslime'>
                <div class='ico'>arrow_forward_ios</div>
              </a>
            </div>
            <div class='connection'>
              <img class='connection-image' src='./assets/twitter.png'/>
              <div class='connection-label'>purpleblueslime</div>
              <a target='blank' href='https://twitter.com/purpleblueslime'>
                <div class='ico'>arrow_forward_ios</div>
              </a>
            </div>
            <div class='connection'>
              <img class='connection-image' src='./assets/youtube.png'/>
              <div class='connection-label'>SLIME</div>
              <a target='blank' 
                href='https://www.youtube.com/channel/UCYK3ouWpW_bsLoTiShjRQaQ'>
                <div class='ico'>arrow_forward_ios</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`);
  let poppedme = document.querySelector('.pop-wrap');
  poppedme.addEventListener('click', function({path}) {
    if (path[0].className != 'pop') {
      return;
    }
    poppedme.remove();
  });
}

function popYou () {
  let body = document.querySelector('body');
  body.insertAdjacentHTML('beforeend', `
  <div class='pop-wrap'>
    <div class='pop'>
      <div class='pop-content'>
        <div class='header-wrap'>
          <div class='bannerColor' style='background-color:orange;'></div>
          <img class='avatar' src='./assets/you.png' />
          <div class='status online'></div>
          <div class='username'>You#0000</div>
        </div>
        <div class='body-wrap'>
          <div class='about-wrap'> 
            <div class='pop-label'>ABOUT ME</div><br>
            I like anime.
          </div> 
          <div class='note-wrap'>
            <div class='pop-label'>NOTE</div><br>
            <textarea class='note-area' placeholder='Click to add a note' 
            spellcheck='false' autocorrect='off'></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>`);
  let poppedyou = document.querySelector('.pop-wrap');
  poppedyou.addEventListener('click', function({path}) {
    if (path[0].className != 'pop') {
      return;
    }
    poppedyou.remove();
  });
}

function popShikimori () {
  let body = document.querySelector('body');
  body.insertAdjacentHTML('beforeend', `
  <div class='pop-wrap'>
    <div class='pop'>
      <div class='pop-content'>
        <div class='header-wrap'>
          <div class='bannerColor' style='background-color:pink;'></div>
          <img class='avatar' src='./assets/shikimori.png' />
          <div class='status online'></div>
          <div class='username'>Shikimori#2894</div>
        </div>
        <div class='body-wrap'>
          <div class='about-wrap'> 
            <div class='pop-label'>ABOUT ME</div><br>
            I am not just a cutie >///<
          </div> 
          <div class='roles-wrap'>
            <div class='pop-label'>ROLES</div><br>
            <code>🔵 Python</code>
          </div>    
          <div class='note-wrap'>
            <div class='pop-label'>NOTE</div><br>
            <textarea class='note-area' placeholder='Click to add a note' 
            spellcheck='false' autocorrect='off'></textarea>
          </div>
          <div class='connections-wrap'>
            <div class='connection'>
              <img class='connection-image' src='./assets/github.png'/>
              <div class='connection-label'>Shikimori-bot</div>
              <a target='blank' href='https://github.com/purpleblueslime/Shikimori-bot'>
                <div class='ico'>arrow_forward_ios</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`);
  let poppedyou = document.querySelector('.pop-wrap');
  poppedyou.addEventListener('click', function({path}) {
    if (path[0].className != 'pop') {
      return;
    }
    poppedyou.remove();
  });
}

function popPronouns () {
  let body = document.querySelector('body');
  body.insertAdjacentHTML('beforeend', `
  <div class='pop-wrap'>
    <div class='pop'>
      <div class='pop-content'>
        <div class='header-wrap'>
          <div class='bannerColor' style='background-color:lightblue;'></div>
          <img class='avatar' src='./assets/pronouns.png' />
          <div class='status online'></div>
          <div class='username'>Pronouns#4208</div>
        </div>
        <div class='body-wrap'>
          <div class='about-wrap'> 
            <div class='pop-label'>ABOUT ME</div><br>
            Discord Pronouns bot 🏳️‍🌈
          </div> 
          <div class='roles-wrap'>
            <div class='pop-label'>ROLES</div><br>
            <code>🟡 JavaScript</code>
          </div>    
          <div class='note-wrap'>
            <div class='pop-label'>NOTE</div><br>
            <textarea class='note-area' placeholder='Click to add a note' 
            spellcheck='false' autocorrect='off'></textarea>
          </div>
          <div class='connections-wrap'>
            <div class='connection'>
              <img class='connection-image' src='./assets/github.png'/>
              <div class='connection-label'>Pronouns-bot</div>
              <a target='blank' href='https://github.com/purpleblueslime/Pronouns-bot'>
                <div class='ico'>arrow_forward_ios</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`);
  let poppedyou = document.querySelector('.pop-wrap');
  poppedyou.addEventListener('click', function({path}) {
    if (path[0].className != 'pop') {
      return;
    }
    poppedyou.remove();
  });
}

function popRoxyPantsu () {
  let body = document.querySelector('body');
  body.insertAdjacentHTML('beforeend', `
  <div class='pop-wrap'>
    <div class='pop'>
      <div class='pop-content'>
        <div class='header-wrap'>
          <div class='bannerImage' style='background-image:url(./assets/RoxyPantsu.gif);'></div>
          <img class='avatar' src='./assets/RoxyPantsu.png' />
          <div class='status online'></div>
          <div class='username'>Roxy Pantsu</div>
        </div>
        <div class='body-wrap'>
          <div class='about-wrap'> 
            <div class='pop-label'>ABOUT ME</div><br>
            sniff sniff* by starring this repository you are sniffing Roxy' Pantsu
          </div> 
          <div class='note-wrap'>
            <div class='pop-label'>NOTE</div><br>
            <textarea class='note-area' placeholder='Click to add a note' 
            spellcheck='false' autocorrect='off'></textarea>
          </div>
          <div class='connections-wrap'>
            <div class='connection'>
              <img class='connection-image' src='./assets/github.png'/>
              <div class='connection-label'>Roxy-Pantsu</div>
              <a target='blank' href='https://github.com/Roxy-Pantsu/Roxy-Pantsu'>
                <div class='ico'>arrow_forward_ios</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`);
  let poppedyou = document.querySelector('.pop-wrap');
  poppedyou.addEventListener('click', function({path}) {
    if (path[0].className != 'pop') {
      return;
    }
    poppedyou.remove();
  });
}

function popA () {
  let body = document.querySelector('body');
  body.insertAdjacentHTML('beforeend', `
  <div class='pop-wrap'>
    <div class='pop'>
      <div class='pop-content'>
        <div class='header-wrap'>
          <div class='bannerColor' style='background-color:cornflowerblue;'></div>
          <img class='avatar' src='./assets/a.gif' />
          <div class='status online'></div>
          <div class='username'>a</div>
        </div>
        <div class='body-wrap'>
          <div class='about-wrap'> 
            <div class='pop-label'>ABOUT ME</div><br>
            a
          </div> 
          <div class='note-wrap'>
            <div class='pop-label'>NOTE</div><br>
            <textarea class='note-area' placeholder='Click to add a note' 
            spellcheck='false' autocorrect='off'></textarea>
          </div>
          <div class='connections-wrap'>
            <div class='connection'>
              <img class='connection-image' src='./assets/github.png'/>
              <div class='connection-label'>a</div>
              <a target='blank' href='https://github.com/purpleblueslime/a'>
                <div class='ico'>arrow_forward_ios</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`);
  let poppedyou = document.querySelector('.pop-wrap');
  poppedyou.addEventListener('click', function({path}) {
    if (path[0].className != 'pop') {
      return;
    }
    poppedyou.remove();
  });
}

function micOff () {
  let target = document.querySelector('.mic');

  if (target.innerText == 'mic') {
    target.innerText = 'mic_off';
    arrowOff.play();
    return;
  }

  target.innerText = 'mic';
  arrowOn.play();
  return;
}

function headphonesOff () {
  let target = document.querySelector('.headphones');

  if (target.innerText == 'headphones') {
    target.innerText = 'headset_off';
    arrowOff.play();
    return;
  }

  target.innerText = 'headphones';
  arrowOn.play();
  return;
}