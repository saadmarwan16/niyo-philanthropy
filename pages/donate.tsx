import type { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import OneTimeDonation from "../src/modules/donate/components/OneTimeDonation";
import donateController from "../src/modules/donate/controllers/donate_controller";
import { DonatePageModel } from "../src/modules/donate/data/models/donate_page_model";
import ContactUs from "../src/shared/components/ContactUs";
import Footer from "../src/shared/components/Footer";
import Header from "../src/shared/components/Header";
import Meta from "../src/shared/components/Meta";
import { ErrorModel } from "../src/shared/errors/error_model";
import ReactMarkdown from "react-markdown";

interface DonatePageProps {
  error: ErrorModel | null;
  results: DonatePageModel | null;
}

const Donate: NextPage<DonatePageProps> = (props) => {
  const [results, setResults] = useState(props.results);
  const [error, setError] = useState(props.error);

  return (
    <div>
      <Meta titlePrefix="Donate" />

      <div className="header-section">
        <Header />
      </div>

      {results && (
        <>
          <main className="p-0 md:p-16 parallax">
            <div className="flex flex-col w-full gap-12 px-4 py-8 md:rounded-lg md:w-1/2 bg-base-200">
              <div>
                <h1 className="heading1">{results.data.attributes.title}</h1>
                <ReactMarkdown className="mt-3">
                  {results.data.attributes.description}
                </ReactMarkdown>
              </div>

              <OneTimeDonation campaigns={results.data.campaigns} />
            </div>
          </main>
          <ContactUs />
          {results.data.attributes.footer.data?.attributes && (
            <Footer data={results.data.attributes.footer.data?.attributes} />
          )}
        </>
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const results = await donateController.getPage();

  return {
    props: results,
  };
};

export default Donate;
