const rssPrefix = "RSS_";

const parseEnv = () => {

  const envVarsWithRSS = Object.entries(process.env).filter((envVar) => {
    if (envVar[0].startsWith(rssPrefix)) return true;
  });

  const listRSSEnvVars = envVarsWithRSS
    .map((envVar) => {
      return `${envVar[0]}=${envVar[1]}`;
    })
    .join("; ");
    
  console.log(listRSSEnvVars);
};

parseEnv();
