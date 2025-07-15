function AboutUs() {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-20 font-[Outfit]">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About <span className="text-white tracking-wide">Skyne</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
          Skyne is not just fashion — it’s identity. We blend street culture with modern design to create pieces that speak louder than trends.
        </p>
        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
          Each drop is a bold statement of confidence and authenticity. With quality, creativity, and community at our core, we aim to empower self-expression through every stitch.
        </p>
      </div>

      <div className="mt-12 max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center">
        <div className="bg-zinc-900 p-6 rounded-lg border border-gray-800 hover:shadow-md transition">
          <h3 className="text-lg font-semibold mb-2 text-white">Our Vision</h3>
          <p className="text-gray-400 text-sm">
            To redefine everyday fashion with fearless minimalism and cultural relevance.
          </p>
        </div>
        <div className="bg-zinc-900 p-6 rounded-lg border border-gray-800 hover:shadow-md transition">
          <h3 className="text-lg font-semibold mb-2 text-white">Our Values</h3>
          <p className="text-gray-400 text-sm">
            We stand for creativity, authenticity, and consistency in every drop we release.
          </p>
        </div>
        <div className="bg-zinc-900 p-6 rounded-lg border border-gray-800 hover:shadow-md transition">
          <h3 className="text-lg font-semibold mb-2 text-white">Our Community</h3>
          <p className="text-gray-400 text-sm">
            A movement of bold individuals who express themselves through elevated streetwear.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
