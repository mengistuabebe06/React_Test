import axios from "axios";

// Get list of Subscriber

const BASE_URL1 =
  "https://100085.pythonanywhere.com/uxlivinglab/newsletter/v1/e532096f-6cb1-4dbf-b6f8-a5b9767d6c8e/?type=subscriberlist";

const apiService = axios.create({
  baseURL: BASE_URL1,
});

export const fetchEndpoints = (data) => async () => {
  try {
    const response = await apiService.post(`${BASE_URL1}`, data);
    return response.data;
  } catch (error) {
    console.error("Error fetching endpoints:", error);
    throw error;
  }
};

// Subscribe to newsletters
const BASE_URL_newsletters =
  "https://100085.pythonanywhere.com/uxlivinglab/newsletter/v1/e532096f-6cb1-4dbf-b6f8-a5b9767d6c8e/?type=subscribe";

const newslettersApiService = axios.create({
  baseURL: BASE_URL_newsletters,
});

export const fetchNewslettersEndpoints = (newslettersData) => async () => {
  try {
    const response = await newslettersApiService.post(
      `${BASE_URL_newsletters}`,
      newslettersData
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching endpoints:", error);
    throw error;
  }
};

// Unsubscribe to newsletters

const BASE_URL_Unsubscribe_newsletters =
  "https://100085.pythonanywhere.com/uxlivinglab/newsletter/v1/e532096f-6cb1-4dbf-b6f8-a5b9767d6c8e/?type=unsubscribe";

const Unsubscribe_newslettersApiService = axios.create({
  baseURL: BASE_URL_newsletters,
});

export const fetchUnsubscribeNewslettersEndpoints =
  (newslettersData) => async () => {
    try {
      const response = await Unsubscribe_newslettersApiService.post(
        `${BASE_URL_Unsubscribe_newsletters}`,
        newslettersData
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching endpoints:", error);
      throw error;
    }
  };
// Distribute Newsletters

const BASE_URL_Distribute_newsletters =
  "https://100085.pythonanywhere.com/uxlivinglab/newsletter/v1/e532096f-6cb1-4dbf-b6f8-a5b9767d6c8e/?type=distribute";

const Distribute_newslettersApiService = axios.create({
  baseURL: BASE_URL_newsletters,
});

export const fetchDistributeNewslettersEndpoints =
  (newslettersData) => async () => {
    try {
      const response = await Distribute_newslettersApiService.post(
        `${BASE_URL_Distribute_newsletters}`,
        newslettersData
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching endpoints:", error);
      throw error;
    }
  };

// DoWell-Random-graph API fetch data
const randomPointsURL =
  "http://100022.pythonanywhere.com/v2/fieldrp/e532096f-6cb1-4dbf-b6f8-a5b9767d6c8e/";
const randomPointsApiService = axios.create({
  baseURL: randomPointsURL,
});

export const fetchRandomPoints = (pointData) => async () => {
  try {
    // const response = await randomPointsApiService.post(
    //   `${randomPointsURL}`,
    //   pointData
    // );
    // return response.data;
    const response = {
      success: true,
      message: "List of points",
      response: {
        input_data: {
          side: 10,
          selection: 5,
        },
        listOfPoints: [
          [5.0, 4.0],
          [8.0, 3.0],
          [7.0, 6.0],
          [3.0, 6.0],
          [2.0, 10.0],
          [4.0, 8.0],
          [1.0, 10.0],
          [10.0, 5.0],
          [6.0, 3.0],
          [9.0, 6.0],
        ],
        success: true,
      },
    };
    return response;
  } catch (error) {
    console.error("Error fetching random points:", error);
    throw error;
  }
};

const randomExcelPointsURL =
  "http://100022.pythonanywhere.com/v2/excelrp/e532096f-6cb1-4dbf-b6f8-a5b9767d6c8e/";
const randomExcelPointsApiService = axios.create({
  baseURL: randomExcelPointsURL,
});

export const fetchExcelRandomPoints = (ExcelpointData) => async () => {
  try {
    // const response = await randomExcelPointsApiService.post(
    //   `${randomExcelPointsURL}`,
    //   ExcelpointData
    // );
    // return response.data;
    const response = {
      success: true,
      message: "List of points",
      response: {
        input_data: {
          side: 100,
          selection: 5,
          choice: 0,
          value: 10,
        },
        listOfPoints: [
          [0.0, -50.0],
          [-35.194232534519884, -44.11735254827345],
          [-24.14083140222754, -23.723398165965452],
          [-32.69028787975587, -35.69669188355893],
          [-20.996562029282412, -21.14893541503782],
          [31.125856778914695, -32.552347306481224],
          [35.5873732792927, -47.39646244209025],
          [-10.500938130819646, -15.897656339954274],
          [20.76915293991995, -20.98480000252665],
          [-32.94575673860799, -36.295378237410965],
        ],
        success: true,
      },
    };
    return response;
  } catch (error) {
    console.error("Error fetching ExcelpointData points:", error);
    throw error;
  }
};
export default {
  fetchEndpoints,
  fetchNewslettersEndpoints,
  fetchUnsubscribeNewslettersEndpoints,
  fetchDistributeNewslettersEndpoints,
  fetchRandomPoints,
  fetchExcelRandomPoints,
};
