# Simple Hacker News App

This is a hacker news site build with `React`, `Redux`, and utilizing Hacker New's `Firebase` api. You can run the code or [view a hosted version](https://stunning-chimera-605904.netlify.app/).

```
npm i
npm run dev
```
_hosted here:_ [View Simple Hacker News](https://stunning-chimera-605904.netlify.app/)

# Things to Check Out
1. Implementation of Hacker News API
   1. [@features/news/api/hacker-news-api.ts](./src/features/news/api/hacker-news-firebase-api.ts): A Redux Toolkit API that use a FirebaseClient as a baseQuery.
   1. [@features/news/api/mockData.ts](./src/features/news/api/mockData.ts): Mocked hacker news firestore data used in tests.
   1. [@serivces/FirebaseClient.ts](./src/services/FirebaseClient.ts): A light wrapper of the realtime firebase api.
1. Use of the API
   1. [@features/news/hooks/useLatestNews.ts](./src/features/news/hooks/useLatestNews.ts): A hook to get latest news and support basic pagination. [Tested](./src/features/news/hooks/useLatestNews.test.tsx)
   1. [@features/news/components/NewsDetail.tsx](./src/features/news/components/NewsDetail.tsx): A component that include RTK query to get its data. With hacker new's firebase implementation each news item needs to be fetched individually. This component reflects that.
1. Redux
   1. [@store/store.ts](./src/store/store.ts): Redux store with state that holds starred news that is persisted with `redux-persist`.
   1. [@features/news/newsSlice.ts](./src/features/news/newsSlice.ts): Redux state for starred news functionality.
1. Pages Folder - _I could have used something like Next.js but decided to start from scratch since it's a simple app_
   1. [@pages/templates/PageTemplate.tsx](./src/pages/templates/PageTemplate.tsx): contains the page layout with nav and footer.
   1. [@pages/index.tsx](./src/pages/index.tsx): React Router RouteObject for index page.
   1. [@pages/index.tsx](./src/pages/index.tsx): React Router RouteObject for starred page.
1. Testing
   1. [@features/news/hooks/useLatestNews.ts](./src/features/news/hooks/useLatestNews.ts): A test for a hook that fetches data and does pagination.
   1. [@features/news/components/LatestNews.test.tsx](./src/features/news/components/LatestNews.test.tsx): An integration test for a React component hook that fetches paginated hacker news.
1. Theme and styles
   1. The theme is written in `.scss` and has both global styles in the `theme/global` folder and CSS modules. I recommend checking out the following files:
      1. [./theme/variables.scss](./src/theme/variables.scss): SCSS Variables for font, colors, and a mobile breakpoint
      2. [./theme/mixins.scss](./src/theme/mixins.scss): Helper mixins for global and CSS modules that can including fonts, breakpoints or clearing list styles.
      3. [./theme/global/theme.scss](./src/theme/mixins.scss): Sets CSS variables that are used in CSS modules.

# To Be Continued!
1. __Better Testsing:__ There should be more test coverage, _particularly negative testing_, and mock for Hacker News API could be improved.
2. __Improved Loading and Error Components:__ The loading and error components from RTK was a draft and should ideally be better and hardened.
3. __More Themes, Like Dark Mode!__
