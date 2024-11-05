// const array = [
//   ["a", 122],
//   ["d", 5000],
//   ["z", 3],
// ];
const PORT = 3000;

export function convert(arr: (string | number)[][]): any {
  const newObj = {};
  arr.map((pair) => {
    Object.assign(newObj, { [pair[0]]: pair[1] });
  });
  return newObj;
}

function handleRequest(request: Request): any {
  if (request.method === "POST") {
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
