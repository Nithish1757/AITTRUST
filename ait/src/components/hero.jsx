import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function Home({ products = [] }) {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = {
    stiffness: 300,
    damping: 30,
    bounce: 100,
  };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig,
  );

  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  );

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  );

  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig,
  );

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig,
  );

  const translateY = 0;

  return (
    <div
      ref={ref}
      className="w-full min-h-screen overflow-hidden relative bg-black [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />

      <motion.div
        className="mt-8"
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              key={product.title}
              product={product}
              translate={translateX}
            />
          ))}
        </motion.div>

        <motion.div className="flex flex-row space-x-20 mb-20">
          {secondRow.map((product) => (
            <ProductCard
              key={product.title}
              product={product}
              translate={translateXReverse}
            />
          ))}
        </motion.div>

        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              key={product.title}
              product={product}
              translate={translateX}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

function Header() {
  return (
    <div className="max-w-7xl mx-auto h-[45vh] flex flex-col justify-center items-center text-center px-6 relative w-full">
      {" "}
      <h1 className="text-2xl md:text-7xl font-bold text-white">
        The Ultimate <br />
        Development Studio
      </h1>
      <p className="max-w-2xl mt-8 text-base md:text-xl text-gray-300">
        We build beautiful products with the latest technologies and frameworks.
        We are a team of passionate developers and designers that love to build
        amazing products.
      </p>
    </div>
  );
}

function ProductCard({ product, translate }) {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      className="group relative h-96 w-[30rem] flex-shrink-0 overflow-hidden rounded-xl border border-violet-400/20 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 shadow-[0_20px_60px_rgba(15,23,42,0.55)]"
    >
      <a
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          className="absolute inset-0 h-full w-full object-contain p-8 transition-transform duration-500 group-hover:scale-105"
        />
      </a>

      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition duration-300 rounded-xl"></div>

      <h2 className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
        {product.title}
      </h2>
    </motion.div>
  );
}
