/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: false,

  // HeroUI উপাদানগুলোর স্টাইল এবং ডার্ক মোড প্রপার্টি ঠিক রাখার জন্য এটি অত্যন্ত জরুরি
  transpilePackages: ["@heroui/react", "@heroui/styles"],
};

export default nextConfig;