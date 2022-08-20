export async function fetchFromRedditAPI (){
    const response = await fetch('https://www.reddit.com/r/Minecraft.json');
    const json = await response.json();
    return json.data.children;
}