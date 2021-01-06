/* eslint-disable @typescript-eslint/camelcase */
import { GA_TRACKING_ID } from "./config";

const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
    page_title: url,
    page_location: url,
  });
};

const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

export default {
  pageview,
  event,
};
