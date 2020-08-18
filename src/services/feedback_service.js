require('dotenv').config();

const JiraClient = require('jira-connector');

var jira = new JiraClient({
  host: 'jira.zzz.ca',
  basic_auth: {
    username: process.env.JIRA_USER,
    password: process.env.JIRA_PASS,
  },
});

async function postFeedback(feedback) {
  return await jira.issue.createIssue({
    fields: {
      project: {
        key: 'DBT',
      },
      summary: 'Desk Booking Tool - Feedback',
      description: feedback.feedback,
      issuetype: { name: 'Problem' },
    },
  });
}

module.exports = {
  postFeedback,
};
