import { useTranslation } from "react-i18next";
import VideoSection from "./VideoSection";

const MeetTheProduct = () => {
  const { t } = useTranslation();

  return (
    <VideoSection
      id="Meet-the-product"
      title={t("meet_the_product.title")}
      thumbnailSrc="Home-page-img2.png"
      thumbnailAlt="Meet the Product Thumbnail"
      videoSrc="https://www.youtube.com/embed/WqbVJnGyBa4"
    />
  );
};

export default MeetTheProduct;
