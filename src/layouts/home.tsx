import Link from "next/link";

export function HomeLayout() {
  return (
    <>
      <header className="max-w-screen-xl mx-auto lg:grid lg:grid-cols-3 pt-12 space-y-6 lg:space-y-0 px-12 lg:px-0">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">
            The simplest, and most powerful note-taking blogging platform.
          </h1>
          <a
            href="https://collectednotes.com/users/sign_up"
            className="inline-block bg-gray-800 py-3 px-6 text-xl rounded-full text-white"
          >
            <strong>Start writing</strong> FREE
          </a>
        </div>
        <img
          className="col-start-2 col-end-4"
          src="https://static.collectednotes.com/assets/collected-notes-hero-3a661ceff3be8f6760bbd079ae842ca9b7f643de11d9706e070eedd5f787d037.png"
          alt="Example of how Collected Notes looks like in Web, iPad and iPhone."
        />
      </header>

      <section className="max-w-screen-xl mx-auto mb-12 p-12 lg:p-0">
        <h2 className="text-4xl lg:text-5xl font-bold text-center">
          Upload your thoughts.
        </h2>
        <h4 className="text-xl font-bold text-center mb-12">
          Note-taking, with easy sharing. Without the nonsense
        </h4>

        <section className="grid lg:grid-cols-3 gap-x-12 space-y-6 lg:space-y-0">
          <section className="space-y-6">
            <article>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Simplicity
              </h3>
              <p className="leading-relaxed">
                Every app out there eventually tries to do more than they
                should. <strong>We believe in doing less, but better.</strong>
              </p>
            </article>
            <article>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Markdown with live preview
              </h3>
              <p className="leading-relaxed">
                Live{" "}
                <Link
                  href="/[site]/[...note]"
                  as="/blog/a-tour-of-the-markdown-syntax"
                >
                  <a className="underline">Markdown</a>
                </Link>{" "}
                previews allow you to see the final result in real-time as you
                type.
              </p>
            </article>
            <article>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                No nonsense
              </h3>
              <ul>
                <li>No ads.</li>
                <li>No feature creep.</li>
                <li>No tracking.</li>
                <li>No annoying emails.</li>
                <li>No data sold.</li>
                <li>No comments.</li>
                <li>No vanity metrics.</li>
                <li>No proprietary formats.</li>
              </ul>
              <p className="leading-relaxed">
                You'll never see popups, clutter, subscription up-sells, or
                anything that interferes with the reading experience. Collected
                Notes is a reading-first experience.
                <br />
                <strong>Your attention matters.</strong>
              </p>
            </article>
          </section>

          <section className="space-y-6">
            <article>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Native experience
              </h3>
              <p className="leading-relaxed">
                The iPhone & iPad app enables a <strong>fast</strong>{" "}
                native-first experience. Just open the app and dive into writing
                mode.
                <br />
                <Link href="/[site]/[...note]" as="/blog/apps">
                  <a className="px-4 py-2 font-medium mt-2 inline-block border border-white rounded-lg">
                    More about our apps.
                  </a>
                </Link>
              </p>
            </article>

            <video
              className="max-w-full"
              autoPlay
              muted
              loop
              poster="https://static.collectednotes.com/assets/features/screenshot-editing-239f10969ea03e43a8a08161371e840c982cca1670c863924ed01fe361c46be8.png"
            >
              <source
                src="https://photos.collectednotes.com/editing.mp4"
                type="video/mp4"
                media="(prefers-color-scheme: dark)"
              />
              <source
                src="https://photos.collectednotes.com/editing-light-bg.mp4"
                type="video/mp4"
              />
              <p className="leading-relaxed">
                Your browser does not support the video tag.
              </p>
            </video>
          </section>

          <section className="space-y-6">
            <article>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Clear business model
              </h3>
              <p className="leading-relaxed">
                No platform lock-in. Your data is yours, and it's easy to
                export. We make money by charging a{" "}
                <Link href="/[site]/[...note]" as="/blog/premium">
                  <a className="underline">small subscription</a>
                </Link>{" "}
                for API access, image uploads, support and more.
                <br />
                <Link href="/[site]/[...note]" as="/blog/premium">
                  <a className="px-4 py-2 font-medium mt-2 inline-block border border-white rounded-lg">
                    More about ⚡️ Premium
                  </a>
                </Link>
              </p>
            </article>
            <article>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Formats & API
              </h3>
              <p className="leading-relaxed">
                Your notes have an API! meaning you can get them as{" "}
                <a
                  href="https://collectednotes.com/blog/roadmap.json"
                  className="underline"
                >
                  .json
                </a>
                ,{" "}
                <a
                  href="https://collectednotes.com/blog/roadmap.text"
                  className="underline"
                >
                  .txt
                </a>{" "}
                and{" "}
                <a
                  href="https://collectednotes.com/blog/roadmap.md"
                  className="underline"
                >
                  .md
                </a>
                . Simply append the format you want to the post URL and you're
                all set!{" "}
                <Link href="/[site]/[...note]" as="/blog/api">
                  <a className="underline">More about our API</a>
                </Link>
                <br />
                <Link href="/[site]/[...note]" as="/blog/roadmap">
                  <a className="px-4 py-2 font-medium mt-2 inline-block border border-white rounded-lg">
                    See a sample note ↗
                  </a>
                </Link>
              </p>
            </article>
            <article>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">Download</h3>
              <a href="https://apps.apple.com/us/app/collected-notes/id1511343960?ls=1">
                <img src="https://static.collectednotes.com/assets/appstore-light-056de2f81ff61b778a0c192dbb098f9b0416e7e8f79b119e43d11248155e597f.svg" />
              </a>
            </article>
          </section>
        </section>
      </section>
    </>
  );
}
