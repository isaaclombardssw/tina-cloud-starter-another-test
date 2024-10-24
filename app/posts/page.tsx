import Layout from "../../components/layout/layout";
import client from "../../tina/__generated__/client";
import PostsClientPage from "./client-page";

// export const dynamic = "force-static";
// export const dynamicParams = true;

export default async function PostsPage() {
  const posts = await client.queries.postConnection();

  if (!posts) {
    return null;
  }

  return (
    <Layout rawPageData={posts.data}>
      <PostsClientPage {...posts} />
    </Layout>
  );
}
