import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
      <div>
        <h1>Ar-Raheeq Al-Makhtum</h1>
        <h2>Kedudukan Arab dan Bangsa-bangsanya</h2>
        <p>
          Sebenarnya sirah Nabi Muhammad SAW pada hakikatnya merupakan sejarah
          satu risalah dan misi yang dibawa oleh Rasulullah SAW kepada
          masyarakat manusia, dengan risalah inilah baginda membebaskan manusia
          daripada kegelapan kepada cahaya dan dari perhambaan sesama manusia
          kepada pengabdian diri kepada Allah. Oleh yang demikian tak mungkin
          dapat dilukiskan gambaran yang indah dengan sesempurnanya di ruang
          mata kecuali setelah dibandingkan latar belakang kelahiran risalah ini
          dengan kesan-kesan pencapaiannya. Oleh yang demikian maka sepatutnya
          kita membentangkan di sini sebahagian hal mengenai bangsa Arab dan
          perkembangannya sebelum Islam, dan suasana persekitaran di mana
          Muhammad SAW diutuskan.
        </p>
        <h3>Situasi Semenanjung Arab</h3>
        <p>
          Perkataan Arab pada bahasa, memberi erti padang pasir atau gurun
          tandus dan bumi kering tiada air dan tumbuh-tumbuhan. Perkataan ini
          dinisbahkan sejak berabad silam kepada Semenanjung Arab. Demikian juga
          dinisbahkan ke atas bangsa yang mendiami bumi itu dan menjadikannya
          sebagai watan dan negeri mereka. Semenanjung Arab bersempadan dengan
          laut merah dan Semenanjung Sinai di sebelah barat, di sebelah timur
          pula bersempadan dengan Teluk Arab yang berlanjutan sampai ke Laut
          Hindi. Asal <b>Jazirah Al-Arab</b> yang bererti Pulau Arab kerana
          dikelilingi lautan dan padang pasir, seolah-olah terputus dari bumi
          lain dan sebahagian besarnya bersempadan dengan selatan negeri Iraq,
          di bahagian utaranya bersempadan dengan negeri Syam pada beberapa
          perbatasan yang berlainan. Keluasan padunya dilanggar di antara satu
          juta dan satu juta tiga ratus ribu batu persegi.
        </p>
      </div>
    </main>
  );
}
