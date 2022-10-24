import { useContext } from 'react';
import { Link } from 'react-router-dom';
import FavoritesContext from '../../store/favorites-context';

// CSS
import classes from './MainNavigation.module.css'

function MainNavigation() {
    const favoritesCtx = useContext(FavoritesContext);

    return (
        <header className={classes.header}> {/* class명을 넣어주는 것이 아닌 동적으로 접근 가능 */}
        {/* tailwindCSS나 bootstrap같이 하나하나 sytle compile할 때는 className=''을 쓸 것 */}
            <div className={classes.logo}>React Meepups</div>
            <nav>
                <ul>
                    <li><Link to='/'>All Meetups</Link></li>
                    <li><Link to='/new-meetup'>Add New Meetup</Link></li>
                    <li><Link to='/favorites'>My Favorites <span className={classes.badge}>{favoritesCtx.totalFavorites}</span></Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;