import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';

import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        {/* path는 return string, 즉 URL에서 도메인 다음에 나올 경로 */}
        <Route path='/' exact> { /* 기본 페이지 , Switch 때문에 다른 페이지로 이동하는 것을 막기위해 exact를 true로 넣음 */}
          <AllMeetupsPage />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App;
