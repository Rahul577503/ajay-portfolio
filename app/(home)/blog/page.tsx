import React from "react";
import fs from "fs";
import path from "path";
import matter, { GrayMatterFile } from "gray-matter";
import Link from "next/link";
import Head from "next/head";

interface FrontMatter {
  title: string;
  date: string;
  description: string;
}

const BlogCard: React.FC<{ meta: FrontMatter; slug: string }> = ({
  meta,
  slug,
}) => (
  <div className="flex flex-col py-2 border-b border-gray-600 last:border-b-0">
    <Link href={`/blogs/${slug}`} passHref>
      <div className="flex items-center space-x-4">
        <div className="text-xl font-bold">
          <Link href={`/blogs/${slug}`}>{meta.title}</Link>
        </div>
      </div>
    </Link>
    <div className="flex flex-col  space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
      <div className="">
        <p className="text-sm">{meta.date}</p>
        <p className="text-base">{meta.description}</p>
      </div>
    </div>
  </div>
);

const Mdx: React.FC = () => {
  const blogDir = "blogs";
  const files = fs.readdirSync(path.join(process.cwd(), blogDir));
  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");
    const frontMatter = matter(fileContent) as GrayMatterFile<string> & {
      data: FrontMatter;
    };

    return {
      meta: frontMatter.data,
      slug: filename.replace(".mdx", ""),
    };
  });

  return (
    <main className="px-4 lg:px-0 relative left-0 right-0 top-20  py-4    max-w-2xl mx-auto">
      <Head>
        <title> Blog-Rahul Maurya</title>
        <meta
          name="description"
          content="Welcome to my blog. Here you'll find interesting articles about various topics."
        />
      </Head>
      <div className="flex flex-col  md:justify-center ">
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} meta={blog.meta} slug={blog.slug} />
        ))}
      </div>
    </main>
  );
};

export default Mdx;