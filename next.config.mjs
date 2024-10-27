/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "lh3.googleusercontent.com" },
      { hostname: "scontent.cdninstagram.com" },
      { hostname: "scontent.fyto3-1.fna.fbcdn.net" },
      { hostname: "a.allegroimg.com" },
      { hostname: "assets.allegrostatic.com" },
      { hostname: "scontent-ams4-1.cdninstagram.com" },
      { hostname: "live.staticflickr.com" },
      { hostname: "an-artist.store" },
      { hostname: "www.flickr.com" },
      { hostname: "*.public.blob.vercel-storage.com" },
      { hostname: "dl.dropboxusercontent.com" },
      { hostname: "www.dropbox.com" },
      { hostname: "play.google.com" },
    ],
  },
};

export default nextConfig;
