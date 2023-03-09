// JavaScript Nuggets

// Fetch API - Browser API for HTTP (AJAX) Requests
// Default - GET Requets, supports other methods as well 
// Return Promise


const url = 'https://www.course-api.com/react-tours-project'

console.log(fetch(url))

fetch(url)
	.then((resp) => console.log(resp))
	.catch((err) => console.log(err))


const getTours = async () => {
	try{
		const resp = await fetch(url);
		const data =  await resp.json();
		console.log(data);
	}
	catch (error) {
		console.log(error)
	}
}