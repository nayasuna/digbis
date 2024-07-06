import ReactGA from 'react-ga';

const TRACKING_ID = "G-LRG9M76WK5"; // Ganti dengan Tracking ID Anda
ReactGA.initialize(TRACKING_ID);

export const pageView = (page) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

export const event = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label
  });
};
