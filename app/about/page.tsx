function About() {
  return (
    <main className="flex flex-col md:flex-row min-h-screen md:max-w-[80vw] w-full items-center justify-center md:gap-10 gap-8 md:px-10 px-5 text-black font-medium text-m">
      <p className="md:flex-6 w-full">
        <span className="text-lg font-semibold">Hey folks👋</span> I created
        this application while learning Nextjs and TypeScript. It's a small
        movie website made using TMDB APIs. The goal was to transition from
        Reactjs + JavaScript to Nextjs + TypeScript. Wanna see more of my
        projects! or just talk about tech💻, movies🎥 or do a project together?{" "}
        <span className="text-lg font-semibold">Let's catch up➡️</span>
      </p>
      <div className="flex gap-5 justify-center items-center md:flex-4 md:flex-nowrap flex-wrap w-full">
        <span className="px-4 py-2 rounded text-white bg-[#00acee]">
          <a href="https://twitter.com/muditwt" target="_blank">
            Twitter
          </a>
        </span>
        <span className="px-4 py-2 rounded text-white bg-[#171515]">
          <a href="https://github.com/mudit023" target="_blank">
            Github
          </a>
        </span>
        <span className="px-4 py-2 rounded text-white bg-[#0f172a]">
          <a href="https://mudit.hashnode.dev/" target="_blank">
            Hashnode
          </a>
        </span>
        <span className="px-4 py-2 rounded text-white bg-[#BB001B]">
          <a href="mailto:muditmishra023@gmail.com" target="_blank">
            Email
          </a>
        </span>
      </div>
    </main>
  );
}

export default About;
