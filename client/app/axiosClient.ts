import axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
		'Access-Control-Allow-Headers': 'Content-Type, Authorization',
	},
});

export default instance;
