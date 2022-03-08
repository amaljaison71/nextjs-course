import Link from "next/link";
import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>;
      <ul>
        <Link href="/news/nextjs-is-a-great-framework">
          <li>NextJs is A Great Framework</li>
        </Link>
        <li>Something else</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
