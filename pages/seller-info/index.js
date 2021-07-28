import styles from "./seller-info.module.scss";

import Button from "@/shared/Button";
import Footer from "@/shared/Footer2";
import Header from "@/shared/Header";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.tab}>How it Works</div>
      <div className={styles.tab}>Pricing</div>
      <div className={styles.tab}>Get Started</div>
    </div>
  );
};

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.ctaButton}>
        <Button type="secondary" name="Start Selling" action={() => {}} />
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const Placeholder = () => {
    return (
      <div className={styles.placeholder}>
        <div className={styles.circle}>&nbsp;</div>
        <div className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
          molestie leo. Ut feugiat tellus augue, vel sodales ipsum porta at. Ut
          rhoncus accumsan nulla, vitae ullamcorper quam tempus vitae. Mauris
          condimentum molestie neque, quis venenatis quam hendrerit ac. Sed ac
          massa vitae massa tempus mollis.
        </div>
      </div>
    );
  };

  return (
    <div className={styles.howItWorks}>
      <h2> How it Works</h2>
      <div className={styles.content}>
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </div>
    </div>
  );
};

const Pricing = () => {
  const Box = ({ name }) => {
    return (
      <div className={styles.box}>
        <div className={styles["box-header"]}> {name} </div>
        <div className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          porttitor sem lorem, vitae sagittis ligula faucibus eu. Quisque ligula
          dolor, venenatis quis lacus convallis, pellentesque blandit ipsum.
          Nullam viverra mauris ac dictum sagittis. Nam mattis, magna nec
          placerat vestibulum, turpis purus finibus turpis.
        </div>
      </div>
    );
  };

  return (
    <div className={styles.pricing}>
      <h2> Pricing </h2>
      <div className={styles.content}>
        <div className={[styles.box, styles.active].join(" ")}>
          <div className={styles["box-header-active"]}>
            <h3> OFFER </h3>
            <h4> 2 Months </h4>
          </div>
          <div className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            porttitor sem lorem, vitae sagittis ligula faucibus eu. Quisque
            ligula dolor, venenatis quis lacus convallis, pellentesque blandit
            ipsum. Nullam viverra mauris ac dictum sagittis. Nam mattis, magna
            nec placerat vestibulum, turpis purus finibus turpis.
          </div>
        </div>
        <Box name="B" />
        <Box name="C" />
      </div>
    </div>
  );
};

const SellerInfo = () => {
  return (
    <>
      <div className={styles.headerWrapper}>
        <Header />
        <Nav />
      </div>
      <Banner />
      <HowItWorks />
      <Pricing />
      <Footer />
    </>
  );
};

export default SellerInfo;
