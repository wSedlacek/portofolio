export const extractMetadata = (data) => {
  const occurrences = data.match(/(\w+):\s*([^\n]*)/gi);
  let scraps = data;
  occurrences.forEach(
    (occurrence) => (scraps = scraps.replace(occurrence, ''))
  );

  const metadata = Object.fromEntries(
    occurrences.map((match) => {
      const [key, ...value] = match.split(':');

      const processedKey = key.trim();
      const processedValue = value
        .join(':')
        .split(',')
        .map((item) => item.trim());

      return [processedKey, processedValue];
    })
  );

  return [metadata, scraps];
};
