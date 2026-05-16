export async function getCategories() {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/categories");
    return response.json();
  } catch (error) {
    return {
      success: false,
      message: `Category fetch failed! ${error}`,
    };
  }
}

export async function getProductsByCategory(category: string) {
  try {
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/products/?categorySlug=${category}`,
    );
    return response.json();
  } catch (error) {
    return {
      success: false,
      message: `Category fetch failed! ${error}`,
    };
  }
}

export async function getAllProducts() {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    return response.json();
  } catch (error) {
    return {
      success: false,
      message: `Category fetch failed! ${error}`,
    };
  }
}

export async function getProductById(productId: string) {
  try {
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/products/${productId}`,
    );
    return response.json();
  } catch (error) {
    return {
      success: false,
      message: `Category fetch failed! ${error}`,
    };
  }
}
