import { useTranslation } from "react-i18next";
import VideoSection from "./VideoSection";

const MeetTheTeam = () => {
  const { t } = useTranslation();

  return (
    <VideoSection
      id="Meet-the-team"
      title={t("meet_the_team.title")}
      thumbnailSrc="aboutTheTeam.png"
      thumbnailAlt="Meet the Team Thumbnail"
      videoSrc="https://www.youtube.com/embed/htedBrrCzls"
    />
  );
};

export default MeetTheTeam;
