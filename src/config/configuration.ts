const config = () => ({
  port: parseInt(process.env.PORT as string, 10) || 3000,
});

export default config;
