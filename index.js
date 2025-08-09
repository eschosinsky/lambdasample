// index.js

exports.handler = async (event) => {
  // El "handler" es la función que AWS Lambda ejecutará.
  // "async" indica que es una función asíncrona, lo cual es una buena práctica.
  // "event" es el objeto que contiene la información de la solicitud (si aplica).

  const response = {
    statusCode: 200,
    headers: {
      "Content-Type": "text/plain",
    },
    body: "Hallo runde blaue Welt 2",
  };
  
  return response;
};
