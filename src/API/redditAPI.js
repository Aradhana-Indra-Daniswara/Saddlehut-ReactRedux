export async function fetchFromRedditAPI (){
    const url = 'https://www.reddit.com/r/Minecraft.json';
    const response = await fetch(url, {
        method: 'GET',
      });
    const json = await response.json();
    return json.data.children;
}