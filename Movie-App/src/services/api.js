const BASE_URL = 'https://imdb.iamidiotareyoutoo.com/search?q='
export const getSearchedMovies = async (query) => {
    try {
        const response = await fetch(`${BASE_URL}${query}`)
        const data = await response.json()
        return data;
    } catch (error) {
        console.log(error)
        return error;
    }

}