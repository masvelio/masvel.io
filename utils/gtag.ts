/* eslint-disable @typescript-eslint/camelcase */
export const GA_TRACKING_ID = process.env.GA_TRACKING_ID;

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
