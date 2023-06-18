const rssPrefix = 'RSS_';

const parseEnv = () => {
  const envVarsWithRSS = Object.entries(process.env).filter((envVar) => {
    return envVar[0].startsWith(rssPrefix);
  });

  const listRSSEnvVars = envVarsWithRSS
    .map((envVar) => {
      return `${envVar[0]}=${envVar[1]}`;
    })
    .join('; ');

  console.log(listRSSEnvVars);
};

parseEnv();
