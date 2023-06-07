/** @type {import('next').NextConfig} */
module.exports = () => {
  const rewrites () => {
    return [
      {
        source: "/api",
        destination: "http://127.0.0.1:8000",
      },
    ];
  };
  return {
    rewrites,
  };
};
