// const array = [
//   ["a", 122],
//   ["d", 5000],
//   ["z", 3],
// ];
const PORT = 3000;

export function convert(arr: (string | number)[][]): {
  value1: string;
  value2: number;
} {
  const newObj = {};
  arr.map((pair) => {
    Object.assign(newObj, { [pair[0]]: pair[1] });
  });
  return newObj;
}

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*", // Be more specific in production
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json",
};

function handleRequest(request: Request): any {
  const url = request.url;
  const headers = new Headers(request.headers);
  console.log("hello");

  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204, // No content
      headers: CORS_HEADERS,
    });
  }

  if (
    request.method === "POST" &&
    url.endsWith(headers.get("host") + "/api/convert")
  ) {
    return request.json().then((data: (string | number)[][]) => {
      const convertedData = convert(data);
      return new Response(JSON.stringify(convertedData), {
        status: 201,
        headers: { "Content-Type": "application/json" },
      });
    });
  }

  return new Response("Not Found", { status: 404 });
}

console.log(`Deno Api running at port ${PORT}`);
Deno.serve({ port: PORT }, handleRequest);
