import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
 const [currentQuestion, setCurrentQuestion] = useState(0);
const [gameAnswer, setGameAnswer] = useState("");
  const [showSurprise, setShowSurprise] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

useEffect(() => {
  const birthday = new Date("October 10, 2026 00:00:00").getTime();

  const timer = setInterval(() => {
    const now = new Date().getTime();
    const difference = birthday - now;

    if (difference <= 0) {
      clearInterval(timer);

      setTimeLeft({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });

      return;
    }

    setTimeLeft({
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),
      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),
      seconds: Math.floor(
        (difference / 1000) % 60
      ),
    });
  }, 1000);

  return () => clearInterval(timer);
}, []);
  return (
    <main className="birthday-page">

      {/* HERO */}
      <section className="hero">
        <p className="small-text">
          A little something made just for you
        </p>

        <h1>
          Happy Birthday,
          <br />
          <span>Abishek 🤎</span>
        </h1>

        <p className="subtitle">
          Some people become a beautiful part of our story without even
          realizing it.
        </p>

        <a href="#letter" className="start-button">
          Open Your Surprise
          <span>→</span>
        </a>
      </section>


      {/* WELCOME */}
      <section className="welcome">
        <p className="small-text">
          Welcome to your little surprise
        </p>

        <h2>
          This one is
          <br />
          <span>just for you.</span>
        </h2>

        <p className="welcome-text">
          I wanted to create something that wasn't just a birthday wish,
          but a little place filled with memories, words and moments.
        </p>

        <div className="continue-indicator">
          <span>Keep scrolling</span>
          <span>↓</span>
        </div>
      </section>


      {/* LETTER */}
      <section className="letter-section" id="letter">
        <p className="small-text">
          A little letter
        </p>

        <div className="letter-card">

          <div className="letter-top">
            <span>For my Milkshake 🤎</span>
            <span>♡</span>
          </div>

          <h2>
  Happy happy
  <br />
  <span>birthdayy! 🤎</span>
</h2>
          <p>
  First of all happy happy birthdayy 🥹🤎 Indha birthday vandhu
  unaku mattum illa enakum special dhaan, bcoz this is the first
  time unnoda birthday apo na unkooda irukradhuu.... 🥹
</p>

          <p>
  Thanks for everything. Na neraiya time unna tension panniruken,
  kovamakiruken, adhu enakeyy theriyum 😭. Soo adhellam tolerate
  panni kindahh irundhadhuku yellathukumey thanks...... And sorry
  unna yedhadhu overthink panna vachu hurt pannirundhaa. 🥹
</p>

          <p>
  Nee enaku rmba rmba special. Infact nee dhaan enaku yellameyy.
  Na idha summa sollanumnu sollala, from the bottom of my heart
  sollren. Na unna oru naal pakama irundha kooda avlo miss pannuven.
  But adha sollavoh expressoh panna matten, knjm timirudhaan enaku 😭.
  But unna vida enaku rmba rmba adhigamaana luv irukuu, adhu
  1000000% confirm, okayy vaa. 🤎
</p>

          
            <p>
  Lastahh oreyy oru vishayam... Na enna thappu pannalum, pudikaadha
  maadhiri pannalum, enna thittu, enmela kovapadu... but vittu mattum
  poiraadha. 🥹 Na apapo yedhadhu loosuhh maadhiri pesiruven, aana
  therinjey pesamatten okayy vahh, pathukkoo 😂😭
</p>

<p>
  Rmba vala valanu pesuranohh... seri seri 😭
</p>

<p>
  Inoru vishayam... idheyy maadhiri unnoda yella birthday kum na
  un pakathulaiyey irukanumm, seriyaaaaaa!!! 🤎🥹
</p>
           <div className="letter-sign">
  <span>Happy Birthday once again,</span>
  <strong>My Milkshakeee 🤎</strong>
</div>

</div>
</section>
    


      {/* MEMORIES */}
      <section className="memories-section" id="memories">

        <p className="small-text">
          Little pieces of us
        </p>

        <h2 className="section-title">
          Moments worth
          <br />
          <span>remembering.</span>
        </h2>

        <p className="section-description">
          Some moments are small, but somehow they become the ones we
          remember the most.
        </p>

        <div className="memory-grid">

          <div className="memory-card card-one">

            <div className="photo-placeholder">
  <img src="/photos/p1.jpeg" alt="Our first memory" />
</div>
            <div className="memory-caption">
              <span>01</span>
              <p>“Little pieces of us what I imagine”</p>
            </div>

          </div>


          <div className="memory-card card-two">

            <div className="photo-placeholder">
  <img src="/photos/p2.jpeg" alt="A favourite moment" />
</div>

            <div className="memory-caption">
              <span>02</span>
              <p>Not real yet, but exactly how I imagine us.</p>
            </div>

          </div>


          <div className="memory-card card-three">

            <div className="photo-placeholder">
  <img src="/photos/p3.jpeg" alt="Just us" />
</div>

            <div className="memory-caption">
              <span>03</span>
              <p>Manifesting this kind of forehead-to-forehead love.</p>
            </div>

          </div>

        </div>

        <div className="memory-note">
          <span>More memories coming...</span>
          <span>♡</span>
        </div>

      </section>


      {/* TIMELINE */}
      <section className="timeline-section" id="timeline">

        <p className="small-text">
          A little timeline
        </p>

        <h2 className="section-title">
          Our little
          <br />
          <span>story.</span>
        </h2>

        <p className="section-description">
          Not every important moment needs a big announcement.
          Some stories are made from the smallest moments.
        </p>

        <div className="timeline">

          <div className="timeline-item">

            <div className="timeline-dot">
              01
            </div>

            <div className="timeline-content">

              <span className="timeline-date">
                December 6
              </span>

              <h3>
                The beginning
              </h3>

              <p>
                Every story has a beginning. This was ours.
              </p>

            </div>

          </div>


          <div className="timeline-item">

            <div className="timeline-dot">
              02
            </div>

            <div className="timeline-content">

              
               <span className="timeline-date">
                    Somewhere along the way
                </span>
              

              <h3>When You Became Special</h3>

              <p>
  Somewhere between the little moments, you quietly became someone very special to me.
</p>

            </div>

          </div>


          <div className="timeline-item">

            <div className="timeline-dot">
              03
            </div>

            <div className="timeline-content">

              <span className="timeline-date">April 20</span>
<h3>The Moments I Want to Keep</h3>

              <p>
  Some moments may seem small, but they're the ones I find myself wanting to remember the most.
</p>

            </div>

          </div>


          <div className="timeline-item">

            <div className="timeline-dot">
              04
            </div>

            <div className="timeline-content">

              <span className="timeline-date">October 10</span>

              <h3>Today, It’s Your Day</h3>

              <p>
  Today, it’s your day. And somehow, you became such a beautiful part of my story...
</p>

            </div>

          </div>

        </div>

      </section>


      {/* THINGS I LIKE ABOUT YOU */}
      <section className="qualities-section" id="qualities">

        <p className="small-text">
          A few things
        </p>

        <h2 className="section-title">
          Things I like
          <br />
          <span>about you.</span>
        </h2>

        <p className="section-description">
          Just a few of the little things that make you special.
        </p>

        <div className="qualities-grid">

          <div className="quality-card">

            <div className="quality-number">
              01
            </div>

            <div className="quality-icon">
              ♡
            </div>

           <h3>Your Understanding Nature</h3>
            <p>
  Nii vandhu easy-ahh understand pannippa. Yedhunalum oru sila
  time vilayatuku puriyaadha maadhiri pannuva 😭 but adhu okayy dhaan.
  Nii matured-ahh, practical-ahh pesuva, adhuu enaku rmba rmba pudikum. 🤎
</p>
          </div>


          <div className="quality-card">

            <div className="quality-number">
              02
            </div>

            <div className="quality-icon">
              ✦
            </div>

           <h3>The Little Things</h3>
<p>
  Nii vandhu oru problem-ahh evlo simple-ahh solve panna mudiyumohh,
  avlo smooth-ahh solve pannuva. Open-ahh yedhunaalum, “nii ipdi dhaan”
  apdindradha straight-ahh solluva. Aprm light-ahh care and love-um
  irukum... adhuvum enaku rmba pudikum. 🤎
</p>

          </div>


          <div className="quality-card">
  <div className="quality-number">03</div>
  <div className="quality-icon">∞</div>

  <h3>Just Being You</h3>

  <p>
    Nii niiyaa iruka, adhu dhaan. Aprm enkitta edhachum pudikalana
    sollu-nu kekura... but unkitta yellameyy pudikum na, naan edha
    poi solluven? 😭 Seri, yedho olarren okayy 😂 Enaku idhudhaan
    pudikum-nu separate-ahh solla mudiyala. Unna reason-eyy illama
    apdiii avlooo pudikum... avlodhaan!!!! 🤎
  </p>
</div>

          <div className="quality-card">
  <div className="quality-number">04</div>
  <div className="quality-icon">☼</div>

  <h3>Your Presence</h3>

  <p>
    Nii irundhaaleyy podhum enaku. Last-ahh vera edhuvumeyy
    venamm, seriyaa? 😭 Cringe-ahh irukunu theriyudhu...
    but paravala. Last vara en koodaveyy iru, enna aanaalum plzzzz. 🤎🥹
  </p>
</div>
        </div>

        <p className="quality-note">
          And honestly... I could keep going. 🤎
        </p>

      </section>
            {/* MINI GAME */}
      {/* MINI GAME */}
<section className="game-section" id="game">

  <p className="small-text">A tiny little game</p>

  <h2 className="section-title">
    How well do you
    <br />
    <span>know us?</span>
  </h2>

  <p className="section-description">
    Let's see if you remember a few little things about us. 🤎
  </p>

  <div className="game-card">

    <p className="game-question">
      Question {String(currentQuestion + 1).padStart(2, "0")}
    </p>

    {currentQuestion === 0 && (
      <>
        <h3>When did our story officially begin? 🤎</h3>

        <div className="game-options">
          <button onClick={() => setGameAnswer("wrong")}>December 1</button>
          <button onClick={() => setGameAnswer("correct")}>December 6</button>
          <button onClick={() => setGameAnswer("wrong")}>December 10</button>
          <button onClick={() => setGameAnswer("wrong")}>December 15</button>
        </div>
      </>
    )}

    {currentQuestion === 1 && (
      <>
        <h3>What do I call you the most? 👀</h3>

        <div className="game-options">
          <button onClick={() => setGameAnswer("wrong")}>Milkshake</button>
          <button onClick={() => setGameAnswer("wrong")}>Daa</button>
          <button onClick={() => setGameAnswer("wrong")}>Abishek</button>
          <button onClick={() => setGameAnswer("correct")}>Kutty Paiyahh 🤎</button>
        </div>
      </>
    )}

    {currentQuestion === 2 && (
      <>
        <h3>Which date is special to both of us? 🤎</h3>

        <div className="game-options">
          <button onClick={() => setGameAnswer("wrong")}>December 1</button>
          <button onClick={() => setGameAnswer("correct")}>December 6</button>
          <button onClick={() => setGameAnswer("wrong")}>April 20</button>
          <button onClick={() => setGameAnswer("wrong")}>October 10</button>
        </div>
      </>
    )}

    {currentQuestion === 3 && (
      <>
        <h3>Who loves the most? 👀🤎</h3>

        <div className="game-options">
          <button onClick={() => setGameAnswer("wrong")}>You</button>
          <button onClick={() => setGameAnswer("correct")}>Me</button>
          <button onClick={() => setGameAnswer("wrong")}>Both of us</button>
          <button onClick={() => setGameAnswer("wrong")}>Equal love</button>
        </div>
      </>
    )}

    {currentQuestion === 4 && (
      <>
        <h3>Who gets angry first? 😭</h3>

        <div className="game-options">
          <button onClick={() => setGameAnswer("correct")}>Me 😭</button>
          <button onClick={() => setGameAnswer("wrong")}>You</button>
          <button onClick={() => setGameAnswer("wrong")}>Both of us</button>
          <button onClick={() => setGameAnswer("wrong")}>Nobody 😂</button>
        </div>
      </>
    )}

    {gameAnswer === "correct" && (
      <>
        <p className="game-result correct">
          Correcttt! 🤎✨
        </p>

        {currentQuestion < 4 && (
          <button
            className="next-question-button"
            onClick={() => {
              setCurrentQuestion(currentQuestion + 1);
              setGameAnswer("");
            }}
          >
            Next Question →
          </button>
        )}

        {currentQuestion === 4 && (
          <p className="game-result correct">
            You made it through all 5! 😂🤎
          </p>
        )}
      </>
    )}

    {gameAnswer === "wrong" && (
      <p className="game-result wrong">
        Nopeee 😭 Try again!
      </p>
    )}

  </div>

</section>
{/* BIRTHDAY COUNTDOWN */}
<section className="countdown-section" id="countdown">

  {timeLeft.days === 0 &&
  timeLeft.hours === 0 &&
  timeLeft.minutes === 0 &&
  timeLeft.seconds === 0 ? (
    <>
      <p className="small-text">Today is your day 🤎</p>

      <h2 className="section-title">
        Happy Birthday,
        <br />
        <span>Abishek. 🤎</span>
      </h2>

      <p className="countdown-date">
        October 10, 2026 ✨
      </p>
    </>
  ) : (
    <>
      <p className="small-text">Counting down to your day</p>

      <h2 className="section-title">
        Until your
        <br />
        <span>birthday.</span>
      </h2>

      <div className="countdown-grid">

        <div className="countdown-box">
          <strong>{timeLeft.days}</strong>
          <span>Days</span>
        </div>

        <div className="countdown-box">
          <strong>{timeLeft.hours}</strong>
          <span>Hours</span>
        </div>

        <div className="countdown-box">
          <strong>{timeLeft.minutes}</strong>
          <span>Minutes</span>
        </div>

        <div className="countdown-box">
          <strong>{timeLeft.seconds}</strong>
          <span>Seconds</span>
        </div>

      </div>

      <p className="countdown-date">
        October 10, 2026 🤎
      </p>
      {timeLeft.days === 0 &&
timeLeft.hours === 0 &&
timeLeft.minutes === 0 &&
timeLeft.seconds === 0 && (
  <div className="birthday-reveal">
    <p className="small-text">Today is your day 🤎</p>

    <h3>
      Happy Birthday,
      <br />
      <span>Abishek ✨</span>
    </h3>

    <p>
      The countdown may be over,
      <br />
      but the celebration is just beginning. 🤎
    </p>
  </div>
)}
    </>
  )}

</section>
         {/* FINAL SURPRISE */}
<section className="surprise-section" id="surprise">

  <p className="small-text">
    One last thing
  </p>

  <h2 className="section-title">
    Before you
    <br />
    <span>go...</span>
  </h2>

  <p className="surprise-text">
    There is just one little thing I wanted you to know.
  </p>

  <div className="surprise-button-wrapper">

    <button
      className="surprise-button"
      onClick={() => setShowSurprise(true)}
    >
      Open the final surprise
      <span>♡</span>
    </button>

    {showSurprise && (
      <div className="surprise-message">

        <span className="surprise-heart">
          ♡
        </span>

        <h3>
          Happy Birthday, Abishek.
        </h3>

        <p>
          I hope this little corner of the internet
          makes you smile today.
        </p>

        <strong>
          Here's to many more beautiful memories. 🤎
        </strong>

      </div>
    )}

  </div>

</section>
    </main>
  );
}

export default App;