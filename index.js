addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  //Making fetch request
  const urlResponse = await fetch(
    "https://cfw-takehome.developers.workers.dev/api/variants"
  );
  const { variants } = await urlResponse.json();
  //Choose random value 0 or 1
  const toSend = Math.floor((Math.random() * 100) % 2);
  const finalData = await fetch(variants[toSend]);
  return finalData;
}
