import Link from "next/link";
import { Thing, SimpleStyledH1Application } from "tsdx-styled-components";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Thing></Thing>
    {/* This causes the break, because is a styled-component */}
    <SimpleStyledH1Application />
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
