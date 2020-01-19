# react-redux-starter

Starter repository setup with create-react-app. Supports Dark Mode and Google
login powered by Redux.

To start,

clone the repository:

```bash
git clone https://github.com/yagrawl/react-redux-starter.git
cd react-redux-starter
```

Install all the required dependencies:

```bash
npm install
# or
yarn add
```

Obtain your client ID for Google Login.

Visit [here](https://developers.google.com/identity/sign-in/web/sign-in) and click on **Configure a project**. Then, hit on **+ Create a new project**. Fill out the form. For `Configure your OAuth client`, select **Web server** and set the authorized redirect url to : `https://<YOUR_URL>/auth` and finally hit **Create**.

You'll be provided a **Client ID**. Copy this ID and replace `GOOGLE_CLIENT_ID` within this project with your own **Client ID**.

[here](https://github.com/yagrawl/react-redux-starter/blob/master/src/index.js#L2), [here](https://github.com/yagrawl/react-redux-starter/blob/master/src/index.js#L2) and [here](https://github.com/yagrawl/react-redux-starter/blob/master/src/index.js#L2).

The app should be up and running at `http://localhost:3000`.
