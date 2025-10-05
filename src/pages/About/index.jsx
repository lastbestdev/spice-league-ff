import commishPic from "../../assets/comish_pic.webp";
import commishPic2 from "../../assets/the-gibbest-the-goggest.png";
import loser2024pic from "../../assets/2024_loser.png";
import loser2025pic from "../../assets/2025_loser.png";
import style from "./style.module.css";

export function About() {
  const isMobile = window.innerWidth < 639;

  return (
    <section style="page">
      <h1>About 🧐</h1>
      <h2>The League </h2>
      <p>
        The Spice League is an assembly of close friends & football fans that
        convene every year for a fantasy football competition. Though the league
        has been around for several years, it experienced a change in leadership
        when Brad Deibert was appointed league commissioner in 2023. Gabby
        Delorme later joined as co-commissioner in 2025 during an unexpected
        Commissioner Crashout (TM).
      </p>

      <div>
        <h2>The Mission</h2>
        <p>
          <strong>
            To share fun, competitive fantasy football with close friends for
            decades to come.
          </strong>
        </p>{" "}
      </div>

      <h2>Past Champions 🏆</h2>
      <ul>
        <li>
          <strong>2024-25: Anthony Voutsinas</strong> (record: 10-4, 1st round:
          Jonathon Taylor)
        </li>
        <li>
          <strong>2023-24: Quentin Foust</strong> (record: 11-3, 1st round:
          Derrick Henry)
        </li>
      </ul>

      <div>
        <h2>Past Losers 🌶️</h2>
        <div class={style.losersContainer}>
          <span class={style.losersItem}>
            <strong>2024-25:</strong>{" "}
            <img
              src={loser2025pic}
              alt="2025 loser pic"
              height="100%"
              width="auto"
            />
          </span>
          <span class={style.losersItem}>
            <strong>2023-24:</strong>{" "}
            <img
              src={loser2024pic}
              alt="2024 loser pic"
              height="100%"
              width="auto"
            />
          </span>
        </div>
      </div>

      <div>
        <h2>Your Commissioners</h2>
        <div class={style.commishHeader}>
          <div>
            {isMobile && (
              <img
                src={commishPic}
                alt="commissioner pic"
                height="240"
                width="240"
                class={style.commishImg}
              />
            )}
            <h3>Brad Deibert</h3>
            <p>
              Oftentimes affectionately referred to as "my commish" by league
              members, Brad has served as full time commissioner of the Spice
              League since filling the role in 2023. He loves all things fantasy
              football, Green Bay Packers, and especially grown men acting their
              age when it comes to their fantasy team. (Hint: it makes his job
              much easier!)
            </p>
            <p>Brad lives in Missoula, MT.</p>
          </div>
          {!isMobile && (
            <img
              src={commishPic}
              alt="commissioner pic"
              height="240"
              width="240"
              class={style.commishImg}
            />
          )}{" "}
        </div>
        <div class={style.commishHeader}>
          <div>
            {isMobile && (
              <img
                src={commishPic2}
                alt="commissioner pic"
                height="240"
                width="240"
                class={style.commishImg}
              />
            )}
            <h3>Gabby Delorme</h3>
            <p>
              AKA Gibby Goggins, Gabby stepped up for the Spice League in 2025
              in a moment of need. He is committed to fun, longevity, and making
              this league the best it can be. Gabby is a fan of the Green Bay
              Packers, and also the league's head spice chef.
            </p>
            <p>Gabby lives in Kalispell, MT.</p>
          </div>
          {!isMobile && (
            <img
              src={commishPic2}
              alt="commissioner pic"
              height="240"
              width="240"
              class={style.commishImg}
            />
          )}{" "}
        </div>
      </div>
    </section>
  );
}
