import axios from 'axios';

const TakePhotos = async (q, page) => {
  const key_API = '29481170-b8cb5e2348f04b98e255503c6';
  const url = 'https://pixabay.com/api/';
  const per_page = 12;
  const params = {
    key: key_API,
    q: q,
    per_page,
    page,
  };
  return await axios
    .get(url, { params })
    .then(res => res.data.hits)
    .catch(error => console.log(error));
};

export default TakePhotos;
