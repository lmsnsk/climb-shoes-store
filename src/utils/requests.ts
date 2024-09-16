import { ICartElementSever, Inputs, IOrderServer } from "./types";

const APIPATH = "http://localhost:3333/api/v1/";

const OPTIONS: RequestInit = {
  method: "GET",
  headers: { "Content-Type": "application/json" },
  credentials: "include",
};

export const getData = async (pathname: string) => {
  try {
    const response = await fetch(APIPATH + pathname, OPTIONS);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const getMyCart = async (pathname: string) => {
  try {
    const response = await fetch(APIPATH + pathname, OPTIONS);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const updateMyCart = async (
  pathname: string,
  sendData: { id: number; size: number | null; count: number; owner: number }
) => {
  try {
    const response = await fetch(APIPATH + pathname, {
      ...OPTIONS,
      method: "PUT",
      body: JSON.stringify(sendData),
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const addToMyCart = async (pathname: string, sendData: ICartElementSever) => {
  try {
    const response = await fetch(APIPATH + pathname, {
      ...OPTIONS,
      method: "POST",
      body: JSON.stringify(sendData),
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const removeFromCart = async (
  pathname: string,
  sendData: { id: number; owner: number; size: number | null }
) => {
  try {
    const response = await fetch(APIPATH + pathname, {
      ...OPTIONS,
      method: "DELETE",
      body: JSON.stringify(sendData),
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const removeMyCart = async (pathname: string) => {
  try {
    const response = await fetch(APIPATH + pathname, OPTIONS);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getAuth = async (pathname: string) => {
  const response = await fetch(APIPATH + pathname, OPTIONS);
  return await response.json();
};

export const postRequest = async (pathname: string, sendData: Inputs) => {
  try {
    const response = await fetch(APIPATH + pathname, {
      ...OPTIONS,
      method: "POST",
      body: JSON.stringify(sendData),
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getOrders = async (pathname: string) => {
  try {
    const response = await fetch(APIPATH + pathname, OPTIONS);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const createOrderRequest = async (pathname: string, sendData: IOrderServer) => {
  try {
    const response = await fetch(APIPATH + pathname, {
      ...OPTIONS,
      method: "POST",
      body: JSON.stringify(sendData),
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const logoutRequest = async (pathname: string) => {
  try {
    const response = await fetch(APIPATH + pathname, OPTIONS);
    return response;
  } catch (er) {
    console.error(er);
  }
};
