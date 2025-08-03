import { Button } from "@/components/ui/button"

function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      
      {/* Background Video */}
      <video
        src="/heroVideo.mp4"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-60"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="relative z-20 flex h-full w-full items-center justify-end px-4 md:px-16">
        <div className="text-right max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Welcome to Skyne
          </h1>
          <p className="text-white text-lg md:text-xl mb-8 leading-relaxed">
            Elevate your everyday style with the bold simplicity of Skyne. Our fashion-forward pieces blend streetwear attitude with premium comfort—crafted for those who express more with less.
          </p>
          <Button className="px-8 py-3 rounded-full font-semibold">
            Shop Now
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
