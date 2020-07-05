const SCORMCloud = require("scormcloud-api-wrapper");
require("dotenv").config();
const APP_ID = process.env.APP_ID;
const APP_SECRET_KEY = process.env.APP_SECRET_KEY;

const api = new SCORMCloud(APP_ID, APP_SECRET_KEY);

// Verify credentials are valid and service is reachable.
api.authPing(function (error, result) {
  if (error) throw error;
  console.log("Authenticated: ", result);
});

// Retrieve a list of courses associated with the appid.
api.getCourseList(function (error, result) {
  console.log(result);
  /* Returns an array of courses:
    [
      {
        id: '810348d9-318e-48d5-b352-a1f6eb3a92cd',
        title: 'Example Course',
        registrations: 1,
        size: 3023399,
        tags: ['example', 'course'],
        learningStandard: 'scorm_12',
        createDate: '2017-11-10T16:30:00.000+0000'
      },
      ...
    ]
    */
});
