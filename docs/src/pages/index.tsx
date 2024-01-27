import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Translate, { translate } from '@docusaurus/Translate';

import styles from "./index.module.css";

function HomepageHeader() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title"><Translate id="main-page-title">PyloHD</Translate></Heading>
        <p className="hero__subtitle"><Translate id="main-page-subtitle">High-level framework for simplification and systematization of processes in electronic design</Translate></p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title={ translate({id: "main-page-tab-title", message: "Home"}) }
      description=""
    >
      <HomepageHeader />
      <main>
      </main>
    </Layout>
  );
}
