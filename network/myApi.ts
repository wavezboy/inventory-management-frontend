import { headers } from "next/dist/client/components/headers";
import {
  adminType,
  productType,
  salesLogType,
  storeType,
  userType,
} from "../models/myTypes";

const fetchData = async (input: RequestInfo, init?: RequestInit) => {
  const response = await fetch(input, init);
  if (response.ok) {
    return response;
  } else {
    const errorBody = await response.json();
    const errorMessage = errorBody.error;
    throw Error(errorMessage);
  }
};

export async function fetchLoggedInUser(): Promise<userType> {
  const response = await fetchData("/api/authentication/user", {
    method: "GET",
  });
  return response.json();
}

export async function fetchLoggedInAdmin(): Promise<adminType> {
  const response = await fetchData("/api/authentication/admin", {
    method: "GET",
  });
  return response.json();
}

export async function fetchLoggedInStore(): Promise<storeType> {
  const response = await fetchData("/api/authentication/store", {
    method: "GET",
  });
  return response.json();
}

export async function fetchSalesLogsForAdmin(): Promise<salesLogType[]> {
  const response = await fetchData("/api/saleslog/admin/", {
    method: "GET",
  });

  return response.json();
}

export async function fetchSalesLogForAdmin(
  logId: string
): Promise<salesLogType> {
  const response = await fetchData("/api/saleslog/admin/" + logId, {
    method: "GET",
  });

  return response.json();
}

export async function fetchSalesLogsForUser(): Promise<salesLogType[]> {
  const response = await fetchData("/api/saleslog/user/", {
    method: "GET",
  });

  return response.json();
}
export async function fetchSalesLogForUser(
  logId: string
): Promise<salesLogType> {
  const response = await fetchData("/api/saleslog/user/" + logId, {
    method: "GET",
  });

  return response.json();
}

export async function fetchProductsForUser(): Promise<productType[]> {
  const response = await fetchData("/api/product/user", {
    method: "GET",
  });
  return response.json();
}
export async function fetchProductsForAdmin(): Promise<productType[]> {
  const response = await fetchData("/api/product/admin", {
    method: "GET",
  });
  return response.json();
}
export async function fetchProductForAdmin(
  productId: string
): Promise<productType> {
  const response = await fetchData("/api/product/admin/" + productId, {
    method: "GET",
  });
  return response.json();
}
export async function fetchProductForUser(
  productId: string
): Promise<productType> {
  const response = await fetchData("/api/product/user/" + productId, {
    method: "GET",
  });
  return response.json();
}

// undefined
export async function fetchAdmins(): Promise<adminType[]> {
  const response = await fetchData("/api/authentication", { method: "GET" });
  return response.json();
}
// undefine

export async function fetchStores(): Promise<storeType[]> {
  const response = await fetchData(
    "http://localhost:5000/api/authentication/getstores",
    {
      method: "GET",
    }
  );
  return await response.json();
}

export async function fetchUsersForStore(
  accountId: string
): Promise<userType[]> {
  const response = await fetchData(
    "/api/authentication/store/getuser/" + accountId,
    { method: "GET" }
  );
  return response.json();
}

export async function fetchUsersForAdmin(
  accountId: string
): Promise<userType[]> {
  const response = await fetchData(
    "/api/authentication/admin/getuser/" + accountId,
    { method: "GET" }
  );
  return response.json();
}

interface signUpBody {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  phoneNumber?: number;
  contactAddress?: string;
  storeName?: string;
  selectedStoreId: string;
  selectedAdminId: string;
}

export async function signUpUser(credentials: signUpBody): Promise<userType> {
  const response = await fetchData("/api/authentication/user/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
    credentials: "include",
  });

  return response.json();
}

export async function singUpAdmin(credentials: signUpBody): Promise<adminType> {
  const response = await fetchData("/api/authentication/admin/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
    credentials: "include",
  });
  return response.json();
}

export async function signUpStore(credentials: signUpBody): Promise<storeType> {
  const response = await fetchData("/api/authentication/store/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
    credentials: "include",
  });
  return response.json();
}

interface loginBody {
  email: string;
  password: string;
}

export async function loginUser(credentials: loginBody): Promise<userType> {
  const response = await fetchData("/api/authentication/user/login", {
    method: "POST",
    headers: { "Content-Type": "aplication/json" },
    body: JSON.stringify(credentials),
    credentials: "include",
  });

  return response.json();
}
export async function logiAdmin(credentials: loginBody): Promise<adminType> {
  const response = await fetchData("/api/authentication/admin/login", {
    method: "POST",
    headers: { "Content-Type": "aplication/json" },
    body: JSON.stringify(credentials),
    credentials: "include",
  });

  return response.json();
}
export async function loginStore(credentials: loginBody): Promise<storeType> {
  const response = await fetchData("/api/authentication/store/login", {
    method: "POST",
    headers: { "Content-Type": "aplication/json" },
    body: JSON.stringify(credentials),
    credentials: "include",
  });

  return response.json();
}

export async function logout() {
  const response = await fetchData("/api/authentication/logout", {
    method: "POST",
    credentials: "include",
  });

  return response.json();
}

interface createSalesLogBody {
  product: string;
  quantity: string;
  salesPricePerOne: number;
  totalSalesPrice: number;
  storeId: string;
  adminId: string;
}

export async function createSalesLog(
  salesLog: createSalesLogBody
): Promise<salesLogType> {
  const response = await fetchData("/api/saleslog/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(salesLog),
  });

  return response.json();
}

interface createProductBody {
  storeId: string;
  adminId?: string;
  name: string;
  details: String;
  manufacturer: string;
  price: number;
  quantity: number;
}

export async function createProductForAdmin(
  product: createProductBody
): Promise<productType> {
  const response = await fetchData("/api/product/admin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });

  return response.json();
}
export async function createProductForStore(
  product: createProductBody
): Promise<productType> {
  const response = await fetchData("/api/product/store", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });

  return response.json();
}

interface updateProductBody {
  name: string;
  details: string;
  manufacturer: string;
  price: number;
  quantity: number;
}

export async function updateProductForUser(
  credentials: updateProductBody,
  productId: string
): Promise<productType> {
  const response = await fetchData("/api/product/user/" + productId, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  return response.json();
}

export async function updateSalesLogForAdmin(
  credentials: createSalesLogBody,
  logId: string
): Promise<salesLogType> {
  const response = await fetchData("/api/saleslog/admin/" + logId, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  return response.json();
}
export async function updateSalesLogForUser(
  credentials: createSalesLogBody,
  logId: string
): Promise<salesLogType> {
  const response = await fetchData("/api/saleslog/user/" + logId, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  return response.json();
}
