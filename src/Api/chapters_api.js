import axios from "axios";

const mangaApi = async (api, id) => {
  let headers = {
    "Content-Type": "application/json",
  };
  let chapters;
  await axios
    .post(`${api}`, { chapter_id: id }, headers)
    .then(function (response) {
      chapters = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  //   console.log(chapters);
  return chapters;
};

export default mangaApi;
