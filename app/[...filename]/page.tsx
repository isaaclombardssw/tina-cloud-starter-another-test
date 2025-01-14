import React from "react";
import client from "../../tina/__generated__/client";
import ClientPage from "./client-page";
import Layout from "../../components/layout/layout";

export const dynamic = "force-static";
export const dynamicParams = true;

export default async function Page({
  params,
}: {
  params: { filename: string[] };
}) {

  const data = await client.queries.page({
    relativePath: `${params.filename}.md`,
  });

  return (
    <Layout rawPageData={data}>
      <ClientPage {...data}></ClientPage>
    </Layout>
  );
}

export async function generateStaticParams() {
  return [];
}
