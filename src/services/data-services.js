export default class DataService {
  datas = "testDataFromServer";

  getData() {
    console.log("getData()");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error("Something bad happened"));
        } else {
          resolve(this.datas);
        }
      }, 3000);
    });
  }
}
