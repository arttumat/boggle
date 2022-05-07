exports.handler = async (event, context) => {
  const { word } = event.queryStringParameters;
  const words = require(`./allwords.json`);

  return {
    statusCode: 200,
    body: words.includes(word) ? "true" : "false",
  };
};
