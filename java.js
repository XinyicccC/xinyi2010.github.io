const $ = (id) => document.getElementById(id);
const contents =
[
  {
    img: "images/12.png",
    title: "Education",
    desc: "During exam seasons, speech contests, and high-pressure classes, CLAM-IX can detect students’ high-arousal and high-impulse emotional curves in advance and gently down-regulate them within milliseconds, allowing students to return more quickly to an optimal mental state for learning and expression.\nTeachers have observed a marked reduction in classroom conflicts, and students demonstrate greater patience and active listening during group work.\nThe system also generates anonymous emotional heat maps to help schools optimize timetables, class pacing, and exam schedules.\nIn the long term, the overall learning environment becomes quieter, more orderly, and more conducive to creativity."
  },
  {
    img: "images/13.png",
    title: "Family Dynamics",
    desc: "In scenarios involving parent–child communication, caregiving stress, and adolescent mood swings, CLAM-IX continuously monitors family members’ emotional curves in the background. When it detects an “emotional tipping point,” it delivers mild interventions—such as neural feedback to lower arousal—preventing emotions from escalating into arguments or impulsive actions.\nAs a result, parents and children can continue conversations in a calmer state, focusing more on the issue itself rather than the conflict. Over time, family stability and mutual trust significantly improve, while the rate of emotional harm decreases."
  },
  {
    img: "images/21.png",
    title: "Public Security",
    desc: "In large-scale public settings such as concerts, festivals, and rush-hour commutes, CLAM-IX conducts real-time aggregation and analysis of anonymized crowd emotion data. When it detects an abnormal spike in the risk index—such as concentrated surges of anger, panic, or agitation—it triggers a coordinated multi-agency response, including crowd guidance, environmental evacuation, and psychological support measures.\nThis “emotional firewall” mechanism keeps public spaces running more smoothly and significantly reduces incidents like sudden conflicts or stampedes. For everyday citizens, the change is subtle—they simply feel that events are more comfortable, commutes smoother, and life safer."
  }
];

const timelineContents = 
[
  { title: "2042 — The Emotional Imbalance",
    desc: "Under the pressures of rapid digitalization and a high-intensity education system, South Korea has seen a continued rise in adolescent mental health issues and social conflict incidents. \n\n Youth violence, public disputes, and mental health problems among overworked labor groups frequently make the news. The suicide rate has ranked highest among OECD countries for ten consecutive years, while repeated school bullying cases have sparked nationwide public outrage. \n\n This has led to joint calls from the government and academia. Society is in urgent need of a “proactive, real-time, and scalable” solution." },
    
    
  { title: "2050 — Breakthrough Research",
    desc: "Seoul National University, KAIST, and multiple neuroscience research institutes jointly developed the Original Sin Mapping Chip (OSMC), which predicts and suppresses potentially harmful behaviors by modeling multimodal neural and physiological signals. The system can, upon detecting that an individual has entered a “high-risk emotional zone,” trigger mild neural feedback within milliseconds to interrupt the impulse-behavior chain. \nThis achievement, funded jointly by the Korean Ministry of Science and ICT and the Ministry of Health and Welfare, was designated as a national key research priority. \n\nKey breakthroughs included the first-ever realization of reversible neural feedback within milliseconds: \n  •	When emotions such as anger, panic, or aggression approach their threshold, the system can intervene with precision. \n  •	Interventions may include—but are not limited to—mild discomfort (e.g., tingling, momentary blurriness), attention-shifting stimuli, or immersive virtual experiences. \n"
  },
  { title: "2053 — Launch of the CLAM-IX",
    desc: "The South Korean government amended the Public Safety and Emotional Well-being Promotion Act to include the National Emotional Safety Framework Bill, authorizing tech companies and public institutions to jointly develop CLAM-IX. \n\nLed by Samsung’s Bioelectronics Division, and in collaboration with universities and the Agency for Defense Development, the goal was to achieve nationwide deployment within five years. The aim was for the system to serve not only high-risk occupations, but also—through widespread implementation—to build a “zero-conflict society.” \n\n Officials emphasized that interventions would always follow medical safety standards and operate within a traceable legal framework." 
  }, 
  { title: "2054 — First Social Trial",
    desc: "The first pilot involved newborns in Seoul and Busan, along with voluntary participants from select primary and secondary schools—a total of 50,000 individuals received “prototype implants.” Newborns were implanted at birth, with the system set to automatically deactivate on their 22nd birthday. During this period, the chip remained continuously synchronized with the national database. \n\nWhen the system predicted that emotional fluctuations might lead to harmful actions, it triggered lightweight interventions (such as brief visual interference, auditory cues, or mild neural stimulation). \nRepeated triggers would increase intervention intensity until reaching the individual’s maximum tolerance threshold. \n\nResults: \n•	Violent incidents decreased by 37%.\n•	Average conflict duration shortened to under 3 seconds. \n•	Intervention accuracy reached 95%.\nPublic debate emerged: \n•	Some parents began questioning whether “children are still as natural as before.” \n•	Most participants said it made them “calmer and safer,” but some worried the induced “discomfort” could be repurposed for non-safety objectives. \n" 
  },
  { title: "2059 — Technological Iteration",
    desc: "Amid public skepticism, CLAM-IX launched version 2.0, introducing a Personalized Tolerance Curve, allowing users to set their own trigger thresholds within a safe range.A Intervention Log System was also established, enabling oversight bodies to review any intervention record. \n\nHowever, some users reported that during public gatherings and protests, intervention frequency was noticeably higher than normal—officials attributed this to “large-scale group emotional fluctuations." 
  },
    
    
  { title: "2065 — Large-Scale Deployment",
    desc: "ACLAM-IX became a core safety feature across education, healthcare, and transportation sectors, and was adopted into public safety protocols in multiple countries. \n•	Newborn implantation rate reached 98.7%.\n•	Automatic deactivation at age 22 became a social norm. \nImpact: \n•	Public transport passenger conflicts decreased by 82%.\n•	Severe bullying cases in schools nearly disappeared. \n•	Corporate internal conflict management costs dropped by 40%.\n" 
  }, 
  { title: "2070 — Global Partnerships",
    desc: "Cross-border data integration allowed CLAM-IX to form a worldwide emotional stability network. \nIn areas with the highest security classification, punitive feedback was used not only to suppress individual impulses but also incorporated into macro-level emotional regulation strategies—capable of modulating emotional fluctuations across entire cities or even nations. \n" 
  }
];

const MODAL_DATA_STORY = 
[
  {
    img: "images/3.png",
    title: "March 14",
    desc: "I went to the school again today. My daughter was pushed over in the hallway, scraping her elbow.\n Holding back my anger, I confronted the other child’s parents, only to hear, “Kids are justplaying around.” \n When I pressed them, they warned me instead, “Don’t go too far.” \n On the way home, my hands wouldn’t stop shaking. \n I had never thought this before—if only there were a way to stop people from doing such things."
  },
  {
    img: "images/1.png",
    title: "May 2",
    desc: "Senior management called me into a meeting. On the screen: “Clam X Project — Zero Bullying in Schools.” \n It’s an emotional intervention program for all minors, said to eliminate violent impulses. \n I thought of my daughter’s wound and her cold eyes. \n I agreed to join the development team. /nMaybe this really is an opportunity."
  },
  {
    img: "images/23.png",
    title: "August 21",
    desc: "Lately, my son has been rebellious and avoids talking to me. \n I heard some classmates are encouraging them to “resist their parents,” and he seems influenced. /n The chip is nearly ready, and this should be controllable. \n I don’t want him to become one of those bullies. \n Sometimes I hesitate, but when I think it’s for his own good, my doubts fade."
  },
  {
    img: "images/9.png",
    title: "December 7",
    desc: "My son took part in the chip trial, and the results are clear. \n He no longer yells at me and can quietly finish his homework. \n Today, my boss asked me to review the website’s operation. \n I noticed many comments had been censored, and some doubts raised were far from what I had envisioned. \n Why? Could there really be different versions?"
  },
  {
    img: "images/10.png",
    title: "February 18 (next year)",
    desc: "My son is growing unnervingly quiet. \n When he speaks, his gaze is empty—like a robot without emotions. \n Online, someone claimed the chip is tailored differently for each child. \n I must find out the truth. \n But if it’s real… what should I do?"
  },
];

function setModalContent(data) 
{
  const modalImg = $("modalimg");
  const modalTitle = $("modaltitle");
  const modalDesc = $("modaldesc");

  if (modalTitle) modalTitle.textContent = data?.title || "";
  if (modalDesc)  modalDesc.textContent  = data?.desc  || "";
  if (modalImg) {
    if (data && data.img) {
      modalImg.src = data.img;
      modalImg.style.display = "";
    } else {
      modalImg.removeAttribute("src");
      modalImg.style.display = "none";
    }
  }
}

function showModal() 
{
  const modal = $("modal");
  if (!modal) return;
  modal.style.display = "block";
}

function hideModal() 
{
  const modal = $("modal");
  if (!modal) return;
  modal.style.display = "none";
}

function openModal(index) 
{
  setModalContent(contents[index]);
  showModal();
}

function closeModal() 
{
  hideModal();
}
function openStoryModal(index) 
{
  setModalContent(MODAL_DATA_STORY[index]);
  showModal();
}
function openTimelineModal(index) 
{
  setModalContent(timelineContents[index]);
  showModal();
}

document.addEventListener("keydown", (e) => 
{
  if (e.key === "Escape" || e.key === "Esc") 
  {
    hideModal();
    const overlay = $("loginOverlay");
    if (overlay && overlay.style.display && overlay.style.display !== "none")
    {
      closeLoginOverlay();
    }
  }
});

function submitComment() 
{
  const input = $("commentInput");
  const text = (input?.value || "").trim();
  if (!text) return;

  const commentList = $("commentList");
  const newComment = document.createElement("div");
  newComment.className = "commentbox";
  newComment.textContent = "Anonymous: " + text;
  newComment.setAttribute("onclick", "Login()");
  commentList.appendChild(newComment);

  input.value = "";
  commentList.scrollTop = commentList.scrollHeight;
}

function Login() 
{
  const overlay = $("loginOverlay");
  if (overlay) overlay.style.display = "flex";
}

function closeLoginOverlay() 
{
  const overlay = $("loginOverlay");
  const error = $("loginError");
  const input = $("loginCode");
  if (overlay) overlay.style.display = "none";
  if (error) error.style.display = "none";
  if (input) input.value = "";
}

function validateCode() 
{
  const codeInput = $("loginCode");
  const box = $("loginBox");
  const error = $("loginError");
  const code = codeInput ? codeInput.value : "";
  if (code === "z5450259") {
    window.location.href = "Intranet.html";
  } else {
    if (error) error.style.display = "block";
    if (box) {
      box.classList.add("shake");
      if (codeInput) codeInput.value = "";
      setTimeout(() => box.classList.remove("shake"), 300);
    }
  }
}

function toggleAccountPage() 
{
  const panel = $("accountPanel");
  if (panel) panel.classList.toggle("open");
}


function initTechnicalPrinciple()
{
  const section = document.getElementById("Technical principle");
  if (!section) return;
  const layerA = section.querySelector(".tp-layer-a");
  const layerB = section.querySelector(".tp-layer-b");
  if (!layerA || !layerB) return;
  const goB = () => {
    layerA.classList.remove("tp-active");
    layerA.setAttribute("aria-hidden", "true");
    layerB.classList.add("tp-active");
    layerB.setAttribute("aria-hidden", "false");
  };
  const goA = () => {
    layerB.classList.remove("tp-active");
    layerB.setAttribute("aria-hidden", "true");
    layerA.classList.add("tp-active");
    layerA.setAttribute("aria-hidden", "false");
  };
  section.querySelectorAll(".tp-layer-a .tp-click").forEach(el => {
    el.addEventListener("click", goB, { passive: true });
  });
  section.querySelectorAll(".tp-layer-b .tp-click").forEach(el => {
    el.addEventListener("click", goA, { passive: true });
  });

}

window.addEventListener('DOMContentLoaded', initTechnicalPrinciple);
(function () 
 {
  function initSeamlessLoop() 
    {
    const strip = document.getElementById('storyStrip');
    if (!strip) return;
    strip.style.overflowX = 'auto';
    strip.style.whiteSpace = 'nowrap';
    strip.style.scrollSnapType = 'none';
    const originals = Array.from(strip.children);
    const COUNT = originals.length;
    if (!COUNT) return;
    originals.forEach(node => strip.appendChild(node.cloneNode(true)));
    const ensureWidth = () => 
    {
      const need = strip.clientWidth * 3;
      while (strip.scrollWidth < need) 
      {
        for (let i = 0; i < COUNT; i++) 
        {
          strip.appendChild(originals[i].cloneNode(true));
        }
      }
    };
    ensureWidth();
    const measureSegmentWidth = () => 
    {
      let sum = 0;
      for (let i = 0; i < COUNT && i < strip.children.length; i++) 
      {
        sum += strip.children[i].getBoundingClientRect().width;
      }

      if (COUNT >= 2) 
      {
        const a = strip.children[0].getBoundingClientRect();
        const b = strip.children[1].getBoundingClientRect();
        const approxGap = Math.max(0, (b.left - a.left) - a.width);
        sum += approxGap * (COUNT - 1);
      }
      if (!isFinite(sum) || sum <= 0) 
      {
        return strip.scrollWidth / 2;
      }
      return sum;
    };

    let SEG_WIDTH = measureSegmentWidth();
    const SPEED = 0.095; 
    let paused = false;
    let last = 0;

    strip.addEventListener('mouseenter', () => { paused = true; });
    strip.addEventListener('mouseleave', () => { paused = false; last = 0; });

    const wrapIfNeeded = () => 
    {
      if (strip.scrollLeft >= SEG_WIDTH) 
      {
        strip.scrollLeft -= SEG_WIDTH;
      } else if (strip.scrollLeft < 0) 
      {
        strip.scrollLeft += SEG_WIDTH;
      }
    };

    function tick(ts) 
    {
      if (!last) last = ts;
      const dt = ts - last;
      last = ts;

      if (!paused) 
      {
        strip.scrollLeft += dt * SPEED;
        wrapIfNeeded();
      }
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);

    let resizeTimer = null;
    const onResize = () => 
    {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => 
     {
        ensureWidth();
        const prev = SEG_WIDTH;
        SEG_WIDTH = measureSegmentWidth();
        if (prev && SEG_WIDTH && isFinite(strip.scrollLeft)) {
          const ratio = SEG_WIDTH / prev;
          strip.scrollLeft *= ratio;
        }
      }, 120);
    };
    window.addEventListener('resize', onResize);
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') 
  {
    setTimeout(initSeamlessLoop, 0);
  } 
  else 
  {
    document.addEventListener('DOMContentLoaded', initSeamlessLoop);
  }
})();


function openStoryModal(index) 
{
  setModalContent(MODAL_DATA_STORY[index]);
  const modal = document.getElementById("modal");
  if (modal) {
    modal.classList.add("modal--story");
  }
  showModal();
}

function closeModal() 
{
  const modal = document.getElementById("modal");
  if (modal) {
    modal.style.display = "none";
    modal.classList.remove("modal--story");
  }
}

(function initPersistentBGM()
 {
  const BGM_ID = 'bgm';
  const KEY_START = 'bgm_global_start_epoch_ms'; 
  const KEY_UNMUTE = 'bgm_unmuted';              
  const bgm = document.getElementById(BGM_ID);
  if (!bgm) return;

  bgm.volume = 0.6;
  if (!sessionStorage.getItem(KEY_START)) 
  {
    sessionStorage.setItem(KEY_START, Date.now().toString());
  }

  const seekToElapsed = () => 
  {
    const startMs = parseInt(sessionStorage.getItem(KEY_START) || '0', 10);
    if (!startMs || !isFinite(startMs)) return;

    const elapsedSec = Math.max(0, (Date.now() - startMs) / 1000);
    const dur = bgm.duration;
    if (isFinite(dur) && dur > 0) 
    {
      const t = elapsedSec % dur;
      try { bgm.currentTime = t; } catch(_) {}
    }
  };

  const tryPlayWithPolicy = async () => 
  {
    const canUnmute = sessionStorage.getItem(KEY_UNMUTE) === '1';
    bgm.muted = !canUnmute; 

    try 
    {
      await bgm.play();               
      if (!bgm.muted) 
      {
        sessionStorage.setItem(KEY_UNMUTE, '1'); 
      }
    } catch 
    {
      bgm.muted = true;
      try { await bgm.play(); } catch {}
    }
  };
  const start = () => 
  {
    if (isFinite(bgm.duration) && bgm.duration > 0) 
    {
      seekToElapsed();
      tryPlayWithPolicy();
    } else {
      bgm.addEventListener('loadedmetadata', () => 
      {
        seekToElapsed();
        tryPlayWithPolicy();
      }, { once: true });
      setTimeout(() => { seekToElapsed(); tryPlayWithPolicy(); }, 300);
    }
  };

  if (document.readyState === 'complete' || document.readyState === 'interactive') 
  {
    start();
  } 
  else 
  {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  }

  const enableSound = async () => 
  {
    bgm.muted = false;
    try {
      await bgm.play();
      sessionStorage.setItem(KEY_UNMUTE, '1');
    } catch {}
  };
  ['pointerdown','touchstart','keydown'].forEach(evt => 
  {
    window.addEventListener(evt, enableSound, { once: true, passive: true });
  });

  document.addEventListener('visibilitychange', () => 
 {
    if (!document.hidden) 
    {
      seekToElapsed();
      if (!bgm.paused) 
      {
        if (sessionStorage.getItem(KEY_UNMUTE) === '1') bgm.muted = false;
        bgm.play().catch(() => {});
      }
    }
  });
})();

document.addEventListener("DOMContentLoaded", function () 
{
  const overlay = document.getElementById("accessOverlay");
  if (overlay) 
  {
    overlay.style.display = "flex";              
    setTimeout(() => 
    {
      const box = document.getElementById("accessBox");
      if (box) 
      {
        box.classList.add("shake");
        setTimeout(() => box.classList.remove("shake"), 300);
      }
    }, 200);
  }
});

function closeAccessOverlay() 
{
  const overlay = document.getElementById("accessOverlay");
  if (overlay) overlay.style.display = "none";
}
function goBack() 
{
  window.location.href = "Intranet.html";
}