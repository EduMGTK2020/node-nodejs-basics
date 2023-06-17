const argPrefix = "--";

const parseArgs = () => {
  const argsList = process.argv
    .reduce((result, arg, index, arr) => {
      if (arg.startsWith(argPrefix)) {
        const argName = arg.replace(argPrefix, "");
        const argValue = arr[index + 1];
        return [...result, `${argName} is ${argValue}`];
      }
      return result;
    }, [])
    .join(", ");

  console.log(argsList);
};

parseArgs();
