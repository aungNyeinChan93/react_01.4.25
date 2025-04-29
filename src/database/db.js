import axios from "axios";

const Todos = [
    { id: 1, task: 'task 1', status: false },
    { id: 2, task: 'task 2', status: true },
    { id: 3, task: 'task 3', status: true },
    { id: 4, task: 'task 4', status: false },
];

const fetchUser = async () => {
    const { data } = await axios.get('https://fakestoreapi.com/users');
    return data;
};

const fetchProducts = async () => {
    try {
        const { data } = await axios.get('https://fakestoreapi.com/products');
        return data;
    } catch (error) {
        console.log(error);
    }
}

const gitHubUsers = async () => {
    const { data } = await axios.get('https://api.github.com/users');
    return await data;
}

export { Todos, fetchUser, fetchProducts, gitHubUsers };
