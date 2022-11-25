const customFetch = async (url, config) => {        
    try {
        const response = await fetch(url, config);
        const data = await response.json();
        if (data) {
            return {
                data: data,
                success: true,
            };
        }
        throw new Error(data.message);
    } catch (error) {
        return {
        message: error.message,
        success: false,
        };
    }
};

const API_URLS = 'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json'

export const getCatalogue = () => {
  return customFetch(API_URLS, {
    method: 'GET',
  });
};
