import axios from "axios";

const searchApi = async (api, name) => {
  let headers = {
    "Content-Type": "application/json",
  };
  let search;
  await axios
    .post(`${api}`, { manga_name: name }, headers)
    .then(function (response) {
      search = response.data.search;
      console.log(search);
    })
    .catch(function (error) {
      console.log(error);
    });
  //   console.log(chapters);
  return search;
};

export default searchApi;
