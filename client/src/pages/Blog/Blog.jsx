import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  Clock3,
  BookOpen,
  Sparkles,
} from "lucide-react";
import SEO from "../../components/SEO/SEO";
import { getAllPosts } from "../../data/blogPosts";

function Blog() {
  const posts = getAllPosts();

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "CodeCPS Technologies Blog",
    description:
      "Insights on software development, web development, AI automation and technology for growing businesses.",
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
    })),
  };

  return (
    <main className="min-h-screen bg-white text-[#191b1f]">
      <SEO
        title="Blog - Software, Web & AI Insights"
        description="Read the CodeCPS Technologies blog for practical insights on custom software development, web development, and AI automation for growing businesses."
        keywords="software development blog, web development blog, AI automation blog, tech insights"
        path="/blog"
        schema={blogSchema}
      />

      {/* =========================================================
          HERO
      ========================================================= */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#191b1f]
          px-5
          pb-14
          pt-12

          sm:px-8
          sm:pb-16
          sm:pt-14

          lg:px-10
          lg:pb-20
          lg:pt-16
        "
      >
        <div
          className="
            relative
            mx-auto
            max-w-[1200px]
            text-center
          "
        >
          {/* =================================================
              BADGE
          ================================================= */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              px-4
              py-2
            "
          >
            <Sparkles
              size={13}
              className="text-[#086FFD]"
            />

            <span
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#086FFD]
              "
            >
              Our Blog
            </span>
          </div>

          {/* =================================================
              HERO HEADING
          ================================================= */}

          <h1
            className="
              mx-auto
              mt-5
              max-w-[850px]
              text-[38px]
              font-bold
              leading-[1.05]
              tracking-[-1.8px]
              text-white

              sm:text-[48px]
              sm:tracking-[-2px]

              md:text-[56px]

              lg:text-[64px]
              lg:tracking-[-2.5px]
            "
          >
            Ideas that help your business

            <span className="block text-[#086FFD]">
              grow smarter.
            </span>
          </h1>

          {/* =================================================
              HERO DESCRIPTION
          ================================================= */}

          <p
            className="
              mx-auto
              mt-5
              max-w-[680px]
              text-sm
              leading-6
              text-white/60

              sm:text-base
              sm:leading-7
            "
          >
            Practical insights on software development, web technology,
            AI automation and digital products to help you make smarter
            technology decisions.
          </p>
        </div>
      </section>

      {/* =========================================================
          BLOG INTRO
      ========================================================= */}

      <section
        className="
          px-5
          py-14

          sm:px-8
          sm:py-20

          lg:px-10
          lg:py-24
        "
      >
        <div className="mx-auto max-w-[1200px]">

          {/* =================================================
              SECTION HEADING
          ================================================= */}

          <div
            className="
              flex
              flex-col
              justify-between
              gap-5

              lg:flex-row
              lg:items-end
            "
          >
            <div>
              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-[#086FFD]
                "
              >
                Latest Insights
              </span>

              <h2
                className="
                  mt-4
                  text-3xl
                  font-semibold
                  leading-tight
                  tracking-tight
                  text-[#191b1f]

                  sm:text-4xl
                "
              >
                Explore our latest

                <span className="text-[#086FFD]">
                  {" "}articles.
                </span>
              </h2>
            </div>

            <p
              className="
                max-w-[500px]
                text-sm
                leading-6
                text-[#191b1f]/55
              "
            >
              Discover practical ideas, development tips and technology
              insights from our team to help you build better digital
              products.
            </p>
          </div>

          {/* =================================================
              FEATURED POST
          ================================================= */}

          {posts.length > 0 && (
            <Link
              to={`/blog/${posts[0].slug}`}
              className="
                group
                mt-10
                grid
                overflow-hidden
                rounded-[24px]
                border
                border-[#191b1f]/8
                bg-[#f8fafc]
                shadow-[0_15px_45px_rgba(15,23,42,0.05)]
                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-[#086FFD]/20
                hover:shadow-[0_20px_55px_rgba(8,111,253,0.10)]

                lg:grid-cols-[1.05fr_0.95fr]
              "
            >
              {/* =================================================
                  FEATURED CONTENT
              ================================================= */}

              <div className="p-7 sm:p-9 lg:p-12">

                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-lg
                    bg-[#086FFD]/10
                    px-3
                    py-1.5
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.08em]
                    text-[#086FFD]
                  "
                >
                  <BookOpen size={13} />
                  Featured Article
                </div>

                <h3
                  className="
                    mt-6
                    max-w-[650px]
                    text-2xl
                    font-semibold
                    leading-tight
                    tracking-tight
                    text-[#191b1f]

                    sm:text-3xl

                    lg:text-4xl
                  "
                >
                  {posts[0].title}
                </h3>

                <p
                  className="
                    mt-4
                    max-w-[620px]
                    text-sm
                    leading-6
                    text-[#191b1f]/55

                    sm:text-base
                    sm:leading-7
                  "
                >
                  {posts[0].description}
                </p>

                {/* META */}

                <div
                  className="
                    mt-6
                    flex
                    flex-wrap
                    items-center
                    gap-x-5
                    gap-y-2
                    text-[11px]
                    font-medium
                    text-[#191b1f]/45
                  "
                >
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={13} />

                    {new Date(posts[0].date).toLocaleDateString(
                      "en-US",
                      {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      }
                    )}
                  </span>

                  <span className="inline-flex items-center gap-1.5">
                    <Clock3 size={13} />
                    {posts[0].readTime}
                  </span>
                </div>

                {/* READ BUTTON */}

                <div
                  className="
                    mt-7
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-bold
                    text-[#086FFD]
                  "
                >
                  Read Featured Article

                  <ArrowRight
                    size={16}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </div>
              </div>

              {/* =================================================
                  FEATURED VISUAL
              ================================================= */}

              <div
                className="
                  relative
                  hidden
                  min-h-[300px]
                  overflow-hidden
                  bg-[#191b1f]

                  lg:block
                "
              >
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                  "
                >
                  <div
                    className="
                      flex
                      h-28
                      w-28
                      items-center
                      justify-center
                      rounded-[28px]
                      border
                      border-white/10
                      bg-white/[0.05]
                      shadow-2xl
                    "
                  >
                    <BookOpen
                      size={46}
                      strokeWidth={1.5}
                      className="text-[#086FFD]"
                    />
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* =================================================
              ALL POSTS
          ================================================= */}

          <div
            className="
              mt-12
              grid
              gap-5

              sm:grid-cols-2

              lg:grid-cols-3
            "
          >
            {posts.slice(1).map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="
                  group
                  flex
                  flex-col
                  rounded-2xl
                  border
                  border-[#191b1f]/8
                  bg-white
                  p-6
                  shadow-[0_10px_35px_rgba(15,23,42,0.04)]
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-[#086FFD]/20
                  hover:shadow-[0_18px_45px_rgba(8,111,253,0.09)]
                "
              >
                {/* CATEGORY */}

                <span
                  className="
                    inline-block
                    w-fit
                    rounded-lg
                    bg-[#086FFD]/10
                    px-2.5
                    py-1.5
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.08em]
                    text-[#086FFD]
                  "
                >
                  {post.category}
                </span>

                {/* TITLE */}

                <h3
                  className="
                    mt-5
                    text-lg
                    font-semibold
                    leading-snug
                    text-[#191b1f]
                    transition-colors
                    duration-300

                    group-hover:text-[#086FFD]
                  "
                >
                  {post.title}
                </h3>

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-3
                    line-clamp-3
                    text-sm
                    leading-6
                    text-[#191b1f]/55
                  "
                >
                  {post.description}
                </p>

                {/* META */}

                <div
                  className="
                    mt-5
                    flex
                    flex-wrap
                    items-center
                    gap-x-4
                    gap-y-2
                    text-[11px]
                    font-medium
                    text-[#191b1f]/40
                  "
                >
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={12} />

                    {new Date(post.date).toLocaleDateString(
                      "en-US",
                      {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      }
                    )}
                  </span>

                  <span className="inline-flex items-center gap-1.5">
                    <Clock3 size={12} />

                    {post.readTime}
                  </span>
                </div>

                {/* READ ARTICLE */}

                <div
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-1.5
                    text-sm
                    font-bold
                    text-[#086FFD]
                  "
                >
                  Read Article

                  <ArrowRight
                    size={15}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </div>
              </Link>
            ))}
          </div>

          {/* =================================================
              EMPTY STATE
          ================================================= */}

          {posts.length === 0 && (
            <div
              className="
                mt-10
                rounded-2xl
                border
                border-[#191b1f]/8
                bg-[#f8fafc]
                p-10
                text-center
              "
            >
              <BookOpen
                size={32}
                className="mx-auto text-[#086FFD]"
              />

              <h3
                className="
                  mt-4
                  text-lg
                  font-semibold
                  text-[#191b1f]
                "
              >
                No articles yet
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  text-[#191b1f]/50
                "
              >
                New articles will be published here soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section
        className="
          px-5
          pb-16

          sm:px-8
          sm:pb-20

          lg:px-10
          lg:pb-24
        "
      >
        <div
          className="
            relative
            mx-auto
            max-w-[1200px]
            overflow-hidden
            rounded-[24px]
            bg-[#086FFD]
            px-6
            py-10
            text-center
            text-white

            sm:px-10
            sm:py-12

            lg:px-16
            lg:py-14
          "
        >
          {/* CTA DECORATION */}

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-48
              w-48
              rounded-full
              bg-white/10
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-24
              -left-20
              h-48
              w-48
              rounded-full
              bg-white/10
              blur-3xl
            "
          />

          <div className="relative">

            <h2
              className="
                text-2xl
                font-semibold
                tracking-tight

                sm:text-3xl

                lg:text-4xl
              "
            >
              Have a project in mind?
            </h2>

            <p
              className="
                mx-auto
                mt-3
                max-w-xl
                text-sm
                leading-6
                text-white/75
              "
            >
              Let's turn your idea into a powerful digital product
              that helps your business grow.
            </p>

            <Link
              to="/contact"
              className="
                group
                mt-6
                inline-flex
                items-center
                gap-2.5
                rounded-xl
                bg-white
                px-6
                py-3
                text-sm
                font-bold
                text-[#086FFD]
                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-slate-50
              "
            >
              Start a Conversation

              <ArrowRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Blog;