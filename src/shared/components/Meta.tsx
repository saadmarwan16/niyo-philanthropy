import Head from "next/head";
import { FunctionComponent, ReactNode } from "react";

interface MetaProps {
  titlePrefix: string;
}

const Meta: FunctionComponent<MetaProps> = ({ titlePrefix }) => {
  const title = titlePrefix + " | " + "Niyo Philanthropy";

  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Promoting initiatives that help those in need"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Meta;
