import React from "react";
import ReactDom from "react-dom/client"
import App from "./App";
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
    <Auth0Provider
    domain="dev-p08jrigqjwu8qnnd.us.auth0.com"
    clientId="m8ysYP7JbIhxrpl1FBStqCvs22yc6fn2"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App/>
  </Auth0Provider>
)


