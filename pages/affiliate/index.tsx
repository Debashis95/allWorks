import { Getlandingpagedetails } from "@/api/functions/landingpage.api";
import BannerAfterSec from "@/components/BannerAfterSec/BannerAfterSec";
import BannerSec from "@/components/BannerSec/BannerSec";
import FeatureSec from "@/components/FeatureSec/FeatureSec";
import Outdoor from "@/components/Outdoor/Outdoor";
import UseApp from "@/components/UseApp/UseApp";
import Wrapper from "@/layout/wrapper/Wrapper";
import { LinearProgress, Typography } from "@mui/material";
import { useQuery } from "react-query";

export default function Home() {
  const {
    data: landingpagedetails,
    isLoading: landingpageloading,
    isError: landingpageError
  } = useQuery({
    queryKey: ["landing-page-details"],
    queryFn: () => Getlandingpagedetails()
  });

  if (landingpageloading)
    return (
      <>
        <LinearProgress />
      </>
    );

  if (landingpageError)
    return (
      <>
        <Typography variant="h3">Error Found </Typography>
      </>
    );

  return (
    <Wrapper>
      <BannerSec landingbanner={landingpagedetails}>
        <Typography>{landingpagedetails?.banner_text_2}</Typography>
      </BannerSec>
      <BannerAfterSec landingbanneraftersec={landingpagedetails} />
      <UseApp howtouseapp={landingpagedetails} />
      <FeatureSec featuresdetails={landingpagedetails} />
      <Outdoor contactdetails={landingpagedetails} />
    </Wrapper>
  );
}
