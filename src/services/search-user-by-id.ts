import { apiConfig } from "./api-config";

export async function searchUserById(id: string) {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/clients/${id}`);
    const data = await response.json();

    return data;
  } catch (error: any) {
    alert("User not found.");
  }
}
