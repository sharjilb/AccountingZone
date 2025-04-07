import React from "react";
import Image from "next/image";
import RelatedPost from "@/components/news/single-post/RelatedPost";
import CommentsSection from "@/components/news/single-post/CommentsSection";
import PostCommentForm from "@/components/news/single-post/PostCommentForm";
import SinglePostSection from "@/components/news/single-post/SinglePostSection";

export default function Blog() {
  return (
    <main>
      <article className="overflow-hidden mx-8 sm:mx-20 my-[80px] md:my-[120px] lg:mb-[160px] xl:mb-[210px] lg:mx-auto p-[40px_0_60px] md:p-[60px_0_80px] lg:p-[100px_0_120px] xl:p-[150px_0_200px]">
        <header className="container mx-auto w-[90%] lg:w-[65%] my-[60px]">
          <div className="container">
            <h1 className="text-3xl font-bold sm:text-5xl xl:text-6xl">Blog</h1>
          </div>
        </header>
        <div className="lg:h-[400px] xl:max-w-[1830px] mx-auto 2xl:mt-20 2xl:h-[40vw] relative mt-0">
          <Image
            src="/news/single-post/bg-post-2.jpg"
            width="1800"
            height="768"
            alt=""
            className="w-full h-auto max-w-full absolute top-0 right-0 bottom-0 left-0"
          />
          <div className="flex flex-col mx-auto container justify-center items-center h-full p-[50px_20px] relative z-10 text-center 2xl:p-[100px_345px] 2xl:items-start 2xl:justify-end 2xl:text-left">
            <h1 className="m-0 text-4xl font-bold text-white lg:text-5xl 2xl:text-6xl">
              Blog
              <br />
              <span className="text-[#fbc710]">London</span>
            </h1>
          </div>
        </div>
        <div className="flex flex-col mt-7 sm:mt-[210px] mx-auto lg:w-1/2 overflow-hidden lg:flex-row lg:justify-between">
          <section className="w-full">
            <SinglePostSection />

            <RelatedPost />

            <div className="lg:max-w-[760px] xl:max-w-[1830px] container">
              <CommentsSection />
              <PostCommentForm />
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
