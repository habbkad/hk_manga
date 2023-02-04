import axios from "axios";

const mangaApi = async (api) => {
  let manga;
  await axios
    .get(`${api}`)
    .then(function (response) {
      // handle success

      manga = response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

  return manga;
};

export default mangaApi;
