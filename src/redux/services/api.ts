export const fetchAPI = async <T>(url: string, method: string = "GET", body?: any): Promise<T> => {
    const options: RequestInit = {
      method,
      headers: { "Content-Type": "application/json" },
      ...(body && { body: JSON.stringify(body) }),
    };
  
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("API request failed");
    }
  
    return await response.json();
  };