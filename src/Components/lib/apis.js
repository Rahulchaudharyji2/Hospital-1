import axios from "axios";

const BACKEND_URL = 'http://localhost:8080';

const instance = axios.create({
    withCredentials: true
});

// Hospital Registration
export async function hospitalRegistration(hospital) {
    const response = await instance.post(`${BACKEND_URL}/hospitals`, hospital);
    if (response.status !== 201) {
        throw new Error('cannnot register the hospital at the moment');
    }
    return response.data;
}
// Hospital Fetch Profile 
export async function fetchHospital() {
    const response = await instance.get(`${BACKEND_URL}/hospital`);
    if (response.status !== 200) {
        throw new Error('cannnot register the hospital at the moment');
    }
    return response.data;
}
// Hospital Login
export async function loginHospital(hospital) {
    const response = await instance.post(`${BACKEND_URL}/login`, hospital);
    if (response.status !== 200) {
        throw new Error('cannnot register the hospital at the moment');
    }
    return response.data;
}
// Hospital Update Details
export async function updateHospitalDetails(hospital) {
    const response = await instance.put(`${BACKEND_URL}/hospitals/${hospital.name}`, hospital);
    if (response.status !== 200) {
        throw new Error('Fail to Update Details');
        }
        return response.data;
        }

// Admin Login
export async function adminLogin(admin) {
    const response = await instance.post(`${BACKEND_URL}/admin/login`, admin);
    if (response.status !== 200) {
        throw new Error('Either Email or Pasword Wrong');
        }
        return response.data;
        }
export async function loginUser(user) {
    const response = await instance.post(`${BACKEND_URL}/login`, user);
    if (response.status !== 200) {
        throw new Error('cannnot register the user at the moment');
    }
    return response.data;
}

export async function logoutUser() {
    const response = await instance.post(`${BACKEND_URL}/logout`);
    if (response.status !== 200) {
        throw new Error('cannnot register the user at the moment');
    }
    return response.data;
}

export async function fetchProfile() {
    const response = await instance.get(`${BACKEND_URL}/profile`);
    if (response.status !== 200) {
        throw new Error('cannnot register the user at the moment');
    }
    return response.data;
}

export async function placeOrder(items) {
    const response = await instance.post(`${BACKEND_URL}/orders`, {items});
    if (response.status !== 200) {
        throw new Error('cannnot register the user at the moment');
    }
    return response.data;
}

export async function addProduct(productData) {
    try {
        const response = await instance.post(`${BACKEND_URL}/products`, productData);
        return response.data; // Assuming your backend returns the newly created product data
    } catch (error) {
        throw new Error('Error adding product'); // Handle specific errors based on your backend response
    }
}

export async function fetchOrders() {
    const response = await instance.get(`${BACKEND_URL}/orders`);
    if (response.status !== 200) {
        throw new Error('cannnot register the user at the moment');
    }
    return response.data;
}