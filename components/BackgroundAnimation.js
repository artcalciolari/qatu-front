import dynamic from "next/dynamic";
import animationData from "../public/animations/background.json";
import styles from "../styles/BackgroundAnimation.module.css";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const BackgroundAnimation = () => {
  return (
    <div className={styles.background}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default BackgroundAnimation;
