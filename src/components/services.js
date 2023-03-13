const API_KEY = '32672755-e410867216a3d089c501c2971';

export const fetchPictures = (query, page) => {
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(
      new Error(`We don't have pictures with ${query} word`)
    );
  });
};
