import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.login}>
      <form className={styles.loginFrame}>
        <img
          className={styles.logoIcon}
          loading="eager"
          alt=""
          src="/logo.png"
        />
        <div className={styles.userid}>
          <b className={styles.idTitle}>아이디</b>
          <div className={styles.idbox}>
            <input
              className={styles.idInput}
              placeholder="아이디를 입력해주세요."
              type="text"
            />
          </div>
        </div>
        <div className={styles.password}>
          <b className={styles.passwordTitle}>비밀번호</b>
          <div className={styles.passwordbox}>
            <input
              className={styles.passwordInput}
              placeholder="비밀번호를 입력해주세요."
              type="password"
            />
          </div>
        </div>
        <button className={styles.loginButton}>
          <b className={styles.loginText}>로그인</b>
        </button>
        <div className={styles.joinButton}>
          <b className={styles.joinText}>회원가입</b>
          <img
            className={styles.joinArrow}
            loading="eager"
            alt=""
            src="/arrow.svg"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
