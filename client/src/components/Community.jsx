import styles from "./community.module.css";
import profile1 from "../images/community card 1.png";
import profile2 from "../images/community card 2.png";
import verified from "../images/verified.png";
import communityArr from "../images/community arrow.jpg";
import twitter from "../images/twitter.png";
import comment from "../images/comment.png";
import repost from "../images/repost.png";
import heart from "../images/heart.png";
import share from "../images/share.png";
const Community = () => {
  return (
    <>
      <div className={styles.communityTop}>
        <div className={styles.img}>
          <img src={communityArr} alt={communityArr} />
        </div>
        <div className={styles.content}>
          <h1>
            Join Our <br /> <span>COMMUNITY</span>
          </h1>
          <p>
            At SQL Quizbot, we believe in the power of collaboration and open
            communication, and we have a number of communities that you can join
            to connect with other like-minded.
          </p>
          <button>JOIN Us</button>
        </div>
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.profile}>
            <div className={styles.personal}>
              <img className={styles.dp} src={profile1} alt={profile1} />
              <p>
                Lorem Ipsum <br /> <span>@Loremipsum</span>
              </p>
              <img src={verified} alt={verified} />
            </div>
            <img src={twitter} alt={twitter} />
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            lacus leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt
            dignissim urna eu iaculis. Suspendisse nulla tortor, volutpat
            @Loremipsum
          </p>
          <div className={styles.hashtags}>
            <p>#Lorem ipsum</p>
            <p>#Lorem ipsum</p>
          </div>
          <div className={styles.postInfo}>
            <span>
              <img src={comment} alt={comment} /> <p>321</p>
            </span>
            <span>
              <img src={repost} alt={repost} /> <p>220</p>
            </span>{" "}
            <span>
              <img src={heart} alt={heart} /> <p>1556k</p>
            </span>{" "}
            <span>
              <img src={share} alt={share} />
            </span>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.profile}>
            <div className={styles.personal}>
              <img className={styles.dp} src={profile2} alt={profile1} />
              <p>
                Lorem Ipsum <br /> <span>@Loremipsum</span>
              </p>
              <img src={verified} alt={verified} />
            </div>
            <img src={twitter} alt={twitter} />
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            lacus leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt
            dignissim urna eu iaculis. Suspendisse nulla tortor, volutpat
            @Loremipsum
          </p>
          <div className={styles.hashtags}>
            <p>#Lorem ipsum</p>
            <p>#Lorem ipsum</p>
          </div>
          <div className={styles.postInfo}>
            <span>
              <img src={comment} alt={comment} /> <p>321</p>
            </span>
            <span>
              <img src={repost} alt={repost} /> <p>220</p>
            </span>{" "}
            <span>
              <img src={heart} alt={heart} /> <p>1556k</p>
            </span>{" "}
            <span>
              <img src={share} alt={share} />
            </span>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.profile}>
            <div className={styles.personal}>
              <img className={styles.dp} src={profile1} alt={profile1} />
              <p>
                Lorem Ipsum <br /> <span>@Loremipsum</span>
              </p>
              <img src={verified} alt={verified} />
            </div>
            <img src={twitter} alt={twitter} />
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            lacus leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt
            dignissim urna eu iaculis. Suspendisse nulla tortor, volutpat
            @Loremipsum
          </p>
          <div className={styles.hashtags}>
            <p>#Lorem ipsum</p>
            <p>#Lorem ipsum</p>
          </div>
          <div className={styles.postInfo}>
            <span>
              <img src={comment} alt={comment} /> <p>321</p>
            </span>
            <span>
              <img src={repost} alt={repost} /> <p>220</p>
            </span>{" "}
            <span>
              <img src={heart} alt={heart} /> <p>1556k</p>
            </span>{" "}
            <span>
              <img src={share} alt={share} />
            </span>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.profile}>
            <div className={styles.personal}>
              <img className={styles.dp} src={profile2} alt={profile1} />
              <p>
                Lorem Ipsum <br /> <span>@Loremipsum</span>
              </p>
              <img src={verified} alt={verified} />
            </div>
            <img src={twitter} alt={twitter} />
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            lacus leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt
            dignissim urna eu iaculis. Suspendisse nulla tortor, volutpat
            @Loremipsum
          </p>
          <div className={styles.hashtags}>
            <p>#Lorem ipsum</p>
            <p>#Lorem ipsum</p>
          </div>
          <div className={styles.postInfo}>
            <span>
              <img src={comment} alt={comment} /> <p>321</p>
            </span>
            <span>
              <img src={repost} alt={repost} /> <p>220</p>
            </span>{" "}
            <span>
              <img src={heart} alt={heart} /> <p>1556k</p>
            </span>{" "}
            <span>
              <img src={share} alt={share} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
