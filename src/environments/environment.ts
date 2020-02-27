// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  REGISTER_URL: 'http://localhost:8080/register',
  LOGIN_URL: 'http://localhost:8080/login',
  MEMBER_URL: 'http://localhost:8080/user/member',
  LOGGED_IN_MEMBER_URL: 'http://localhost:8080/user/logged-in-member',
  POSTS_URL: 'http://localhost:8080/posts',
  NEWS_URL: 'http://localhost:8080/posts/news',
  WEATHER_API_KEY: '37bd7ebe43f9ccf2058d4f1a201d6b94',
  WEATHER_API_URL: 'http://api.openweathermap.org/data/2.5/weather/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
