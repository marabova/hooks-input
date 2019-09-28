import React from "react";
import Header from "./Header";
import Form from "./Form";
import Link from "./Link";

const Home = () => {
  return (
    <div className="wrapper">
      <Header />
      <section className="grid grid--container ">
        <article className="content">
          <div className="row row--sm-center row--sm-center">
            <div className="col col--sm-12 text--sm-center">
              <h1>Log in to your current account, wherever you are</h1>
            </div>
            <div className="col col--sm-12 text--sm-center">
              <Form />
            </div>
            <div className="col col--sm-12 text--sm-center">
              <p>
                <Link
                  text="Don’t have an account?"
                  href="/"
                  className="mb-100"
                  title="Don’t have an account?"
                />
              </p>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};
export default Home;
