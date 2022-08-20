export async function fetchFromRedditAPI (){
    const url = 'https://www.reddit.com/r/Minecraft.json';
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        // headers: {
        //   'Content-Type': 'application/json',
        //   'User-Agent': 'PostmanRuntime/7.29.2',
        //   'Connection':'keep-alive'
        // },
      });
    const json = await response.json();
    return json.data.children;
}