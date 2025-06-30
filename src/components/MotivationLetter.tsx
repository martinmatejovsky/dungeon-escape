import "../styles/MotivationLetter.scss";

export default function MotivationLetter() {
  return (
    <div className="motivation-letter">
      <h1>Martin Matějovský</h1>

      <h2>Frontendový vývojář</h2>

      <p>
        Poslední léta jsem se živil jako vývojář webových stránek (čistě
        frontend), a nyní hledám nové pracovní vytížení. Moje hlavní dovednost
        spočívá ve Vue.js a s vývojem frontendu obecně. Nyní se učím React, ve
        kterém je i napsána tato mini hra,
        https://github.com/martinmatejovsky/dungeon-escape.
      </p>
      <p>
        Chtěl bych se rozvíjet hlavně ve frontendu, a postupně se dostávat i do
        backendu na full-stack vývojáře (Node JS by byl pro mě nejpřirozenější,
        už v něm mám drobný osobní projekt). Tyto znalosti promítám i do mého
        koníčku, kterým je tvorba příběhových her pro kamarády.
      </p>
      <a href="https://github.com/martinmatejovsky">GitHub</a>

      <figure className="motivation-image">
        <img src="/img/DL-III-ante-infocentrum.png" alt="Dobývání Lokte III" />
        <figcaption>Momentka z mé hry Dobývání Lokte III</figcaption>
      </figure>
    </div>
  );
}
