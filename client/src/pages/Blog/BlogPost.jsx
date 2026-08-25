import { Link, useParams, Navigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock3,
  BookOpen,
} from "lucide-react";
import SEO, { SITE_URL } from "../../components/SEO/SEO";
import { getPostBySlug, getAllPosts } from "../../data/blogPosts";

function BlogPost() {
  const { slug } = useParams();

  const post = getPostBySlug(slug);
  const allPosts = getAllPosts();

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = allPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  /* =========================================================
     ARTICLE SCHEMA
  ========================================================= */

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "CodeCPS Technologies",
    },
    publisher: {
      "@type": "Organization",
      name: "CodeCPS Technologies",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  /* =========================================================
     BREADCRUMB SCHEMA
  ========================================================= */

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${SITE_URL}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-[#191b1f]">
      <SEO
        title={post.title}
        description={post.description}
        path={`/blog/${post.slug}`}
        schema={[articleSchema, breadcrumbSchema]}
      />

      {/* =========================================================
          ARTICLE HERO
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
        {/* Glow */}

        <div
          className="
            pointer-events-none
            absolute
            -right-32
            -top-32
            h-[320px]
            w-[320px]
            rounded-full
            bg-[#086FFD]/15
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-40
            -left-32
            h-[300px]
            w-[300px]
            rounded-full
            bg-[#086FFD]/10
            blur-3xl
          "
        />

        <div
          className="
            relative
            mx-auto
            max-w-[900px]
          "
        >
          {/* Back */}

          <Link
            to="/blog"
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-white/60
              transition-colors
              duration-300

              hover:text-[#086FFD]
            "
          >
            <ArrowLeft size={15} />

            Back to Blog
          </Link>

          {/* Category */}

          <div
            className="
              mt-7
              inline-flex
              items-center
              gap-2
              rounded-lg
              bg-[#086FFD]/10
              px-3
              py-1.5
              text-[10px]
              font-bold
              uppercase
              tracking-[0.1em]
              text-[#086FFD]
            "
          >
            <BookOpen size={13} />

            {post.category}
          </div>

          {/* Title */}

          <h1
            className="
              mt-5
              max-w-[900px]
              text-[36px]
              font-bold
              leading-[1.08]
              tracking-[-1.5px]
              text-white

              sm:text-[46px]
              sm:tracking-[-2px]

              lg:text-[58px]
              lg:tracking-[-2.5px]
            "
          >
            {post.title}
          </h1>

          {/* Description */}

          <p
            className="
              mt-5
              max-w-[760px]
              text-sm
              leading-6
              text-white/60

              sm:text-base
              sm:leading-7
            "
          >
            {post.description}
          </p>

          {/* Meta */}

          <div
            className="
              mt-6
              flex
              flex-wrap
              items-center
              gap-x-6
              gap-y-3
              text-[11px]
              font-medium
              text-white/45
            "
          >
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={13} />

              {new Date(post.date).toLocaleDateString(
                "en-US",
                {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                }
              )}
            </span>

            <span className="inline-flex items-center gap-1.5">
              <Clock3 size={13} />

              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          ARTICLE CONTENT
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
        <div
          className="
            mx-auto
            grid
            max-w-[1100px]
            gap-10

            lg:grid-cols-[1fr_280px]
            lg:items-start
          "
        >
          {/* =====================================================
              ARTICLE
          ===================================================== */}

          <article
            className="
              min-w-0
              rounded-[24px]
              border
              border-[#191b1f]/8
              bg-white
              p-6
              shadow-[0_12px_40px_rgba(15,23,42,0.04)]

              sm:p-8

              lg:p-10
            "
          >
            <div className="space-y-10">
              {post.content.map((section, i) => (
                <section key={i}>
                  <h2
                    className="
                      text-xl
                      font-semibold
                      leading-tight
                      tracking-tight
                      text-[#191b1f]

                      sm:text-2xl
                    "
                  >
                    {section.heading}
                  </h2>

                  <p
                    className="
                      mt-4
                      text-[15px]
                      leading-7
                      text-[#191b1f]/65

                      sm:text-base
                      sm:leading-8
                    "
                  >
                    {section.body}
                  </p>
                </section>
              ))}
            </div>

            {/* =================================================
                ARTICLE CTA
            ================================================= */}

            <div
              className="
                mt-12
                overflow-hidden
                rounded-2xl
                bg-[#086FFD]
                p-6
                text-white

                sm:p-8
              "
            >
              <h3
                className="
                  text-xl
                  font-semibold
                  tracking-tight

                  sm:text-2xl
                "
              >
                Want to build something like this?
              </h3>

              <p
                className="
                  mt-2
                  max-w-[600px]
                  text-sm
                  leading-6
                  text-white/75
                "
              >
                Tell us about your idea and we'll help you choose
                the right technology and development approach.
              </p>

              <Link
                to="/contact"
                className="
                  group
                  mt-5
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-white
                  px-5
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
                Get in Touch

                <ArrowRight
                  size={15}
                  className="
                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>
          </article>

          {/* =====================================================
              SIDEBAR
          ===================================================== */}

          <aside
            className="
              lg:sticky
              lg:top-24
            "
          >
            <div
              className="
                rounded-2xl
                border
                border-[#191b1f]/8
                bg-[#f8fafc]
                p-5
              "
            >
              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-[#086FFD]
                "
              >
                About This Article
              </span>

              <p
                className="
                  mt-3
                  text-sm
                  leading-6
                  text-[#191b1f]/55
                "
              >
                Practical technology insights from CodeCPS
                Technologies to help businesses build smarter
                digital solutions.
              </p>

              <div
                className="
                  mt-5
                  border-t
                  border-[#191b1f]/8
                  pt-5
                "
              >
                <Link
                  to="/contact"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-bold
                    text-[#086FFD]
                  "
                >
                  Work With Us

                  <ArrowRight
                    size={14}
                    className="
                      transition-transform
                      duration-300

                      group-hover:translate-x-1
                    "
                  />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* =========================================================
          RELATED ARTICLES
      ========================================================= */}

      {relatedPosts.length > 0 && (
        <section
          className="
            bg-[#f8fafc]
            px-5
            py-14

            sm:px-8
            sm:py-20

            lg:px-10
            lg:py-24
          "
        >
          <div className="mx-auto max-w-[1100px]">
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
                Keep Reading
              </span>

              <h2
                className="
                  mt-4
                  text-3xl
                  font-semibold
                  tracking-tight
                  text-[#191b1f]

                  sm:text-4xl
                "
              >
                You may also

                <span className="text-[#086FFD]">
                  {" "}like.
                </span>
              </h2>
            </div>

            <div
              className="
                mt-10
                grid
                gap-5

                md:grid-cols-3
              "
            >
              {relatedPosts.map((item) => (
                <Link
                  key={item.slug}
                  to={`/blog/${item.slug}`}
                  className="
                    group
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
                  <span
                    className="
                      inline-block
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
                    {item.category}
                  </span>

                  <h3
                    className="
                      mt-4
                      text-lg
                      font-semibold
                      leading-snug
                      text-[#191b1f]
                      transition-colors
                      duration-300

                      group-hover:text-[#086FFD]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      line-clamp-2
                      text-sm
                      leading-6
                      text-[#191b1f]/55
                    "
                  >
                    {item.description}
                  </p>

                  <div
                    className="
                      mt-5
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
                      size={14}
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
          </div>
        </section>
      )}

      {/* =========================================================
          BOTTOM CTA
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
        <div
          className="
            relative
            mx-auto
            max-w-[1100px]
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
              Let's build something meaningful.
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
              Have an idea, product or business challenge?
              Our team is ready to help turn it into reality.
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

export default BlogPost;