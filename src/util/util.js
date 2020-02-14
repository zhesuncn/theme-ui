function expandFormatRepetitions(format) {
  return format.reduce(function __reducePatterns(patterns, nextItem) {
    if (nextItem.repeat > 1) {
      const expanded = [];
      const copy = { ...nextItem };
      delete copy.repeat;
      for (let i = 0; i < nextItem.repeat; i += 1) {
        expanded.push({ ...copy });
      }
      return [...patterns, ...expanded];
    }
    return [...patterns, nextItem];
  }, []);
}

function formatValue(value, formatSpec = []) {
  if (!value) return { formatted: '', raw: null }
  const format = expandFormatRepetitions(formatSpec);
  if (format.length > 0) {
    const characters = value.split("");
    let formattedValue = "",
      rawValue = "";
    while (format.length > 0 && characters.length > 0) {
      const pattern = format.shift();
      if (typeof pattern.char === "object") {
        while (characters.length > 0 && pattern.char.test(characters[0]) !== true) {
          characters.shift();
        }
        if (characters.length > 0) {
          formattedValue += characters[0];
          rawValue += characters[0];
          characters.shift();
        }
      } else if (typeof pattern.exactly === "string") {
        if (pattern.exactly.length !== 1) {
          throw new Error(
            `Unable to format value: 'exactly' value should be of length 1: ${
              pattern.exactly
            }`
          );
        }
        formattedValue += pattern.exactly;
        if (pattern.exactly === characters[0]) {
          characters.shift();
        }
      } else {
        throw new Error(
          `Unable to format value: Invalid format specification: ${JSON.stringify(
            pattern
          )}`
        );
      }
    }
    return { formatted: formattedValue, raw: rawValue };
  }
  return { formatted: value, raw: value };
}

export {
  formatValue
}