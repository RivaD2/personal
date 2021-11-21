export const fetchImages = async () => {
  try {
    const response = await fetch(`https://api.unsplash.com/photos/random/?count=6&client_id=${process.env.REACT_APP_API_KEY}`);
    const responseToJson = await response.json();
    return responseToJson.map(image => image.urls.small);
  } catch (error) {
    console.error(error);
  }
}
