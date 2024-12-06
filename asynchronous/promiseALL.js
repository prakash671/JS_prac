// Simulate fetch responses
const mockApi = (url) => {
  return new Promise((resolve, reject) => {
    const mockResponses = {
      "https://api.example.com/user": { name: "John Doe", age: 30 },
      "https://api.example.com/posts": [{ id: 1, title: "Hello World" }],
      "https://api.example.com/comments": [{ id: 1, comment: "Nice post!" }],
    };

    setTimeout(() => {
      if (mockResponses[url]) {
        resolve({ json: () => Promise.resolve(mockResponses[url]) });
      } else {
        reject("404 Not Found");
      }
    }, Math.random() * 2000);
  });
};

// Replace fetch with mockApi
const fetchUserData = mockApi("https://api.example.com/user");
const fetchPosts = mockApi("https://api.example.com/posts");
const fetchComments = mockApi("https://api.example.com/comments");

// Execution
Promise.all([fetchUserData, fetchPosts, fetchComments])
  .then((responses) => Promise.all(responses.map((res) => res.json())))
  .then((data) => {
    const mappedData = data.map((item) => {
      console.log(item);
      return item;
    });
    //console.log("data->" + mappedData);

    const [userData, posts, comments] = data;
    console.log("User Data:", userData);
    console.log("Posts:", posts);
    console.log("Comments:", comments);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
