const BASE_URL = 'https://imdb236.p.rapidapi.com/api/imdb/india/trending-tamil'
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3e921f29a3msh745a296c91272b7p14a9c5jsnd40077bb88d4',
		'x-rapidapi-host': 'imdb236.p.rapidapi.com'
	}
};

export const getPopularMovies = async () => {
    try {
        const response = await fetch(BASE_URL, options)
        const result = await response.json()
        console.log(result)
        return result;
    } catch (error) {
        console.log(error)
        return error;
    }

}