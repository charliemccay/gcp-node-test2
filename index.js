const functions = require('@google-cloud/functions-framework');
const fetch = require('node-fetch');


   /**
 * HTTP Cloud Function that makes an HTTP request
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
functions.http('makeRequest', async (req, res) => {
    const url = 'https://jsonplaceholder.typicode.com/todos/1'; // URL to send the request to
    const externalRes = await fetch(url);
    const body = await externalRes.json();
    if (body)
        res.status(externalRes.ok ? 200 : 500).send(body);
    else
        res.status(externalRes.ok ? 200 : 500).send("nothing to return");
  });

 