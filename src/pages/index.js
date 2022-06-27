import Head from "next/head";
import Image from "next/image";

import Layout from "../components/layout";
import HeroBanner from "../components/heroBanner";
import Button from "../components/button";
import FeaturedCoffees from "../components/featuredCoffees";
import Spacer from "../components/spacer";
import ContentWithIconCards from "../components/contentWithIconCards";
import NumberedSections from "../components/numberedSections";

export default function Home() {
  return (
    <Layout>
      <HeroBanner>
        <h1>Great coffee made simple.</h1>
        <p>
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <Button>Create your plan</Button>
      </HeroBanner>
      <Spacer size={136} />
      <FeaturedCoffees />
      <Spacer size={200} />
      <ContentWithIconCards />
      <Spacer size={200} />
      <NumberedSections />
      <Spacer size={200} />
    </Layout>
  );
}
