console.log('@@@ Conectando... ')

document.addEventListener('DOMContentLoaded', () => {
    loadData(city = null)
})

const loadData = async (city) => {
    if (!city) {
        city = 'oceanside'
    }
    const url = `https://realty-in-us.p.rapidapi.com/locations/v2/auto-complete?input=${city}&limit=5`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'c653860161mshbb7b2839132e7f3p1a578ajsnbf31f680a026',
            'x-rapidapi-host': 'realty-in-us.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log('@@@@ result =>', result);
    } catch (error) {
        console.error(error);
    }
}
