import "bootstrap/dist/css/bootstrap.css";
import '../css/homepage.css';
import '../css/utilities.css';
import '../css/detail.css';
import '../css/checkout.css';
import '../css/complete-checkout.css';
import '../css/sign-in.css';
import '../css/sign-up.css';
import '../css/sign-up-photo.css';
import '../css/sign-up-success.css';
import '../css/404-not-found.css';
import '../css/overview.css';
import '../css/sidebar.css';
import '../css/transactions.css';
import '../css/transactions-detail.css';
import '../css/edit-profile.css';
import '../css/navbar-log-in.css';

import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
