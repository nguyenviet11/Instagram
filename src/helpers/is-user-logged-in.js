
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';


export default function IsUserLoggedIn({ user, loggedInpath, children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) => {
                if (!user) {
                    return children;
                }

                if (user) {
                    return (
                        <Redirect
                            to={{
                                pathname: loggedInpath,
                                state: { from: location }
                            }}
                        />
                    );
                }

                return null;
            }}
        />
    );
}

ProtectedRoute.propTypes = {
    user: PropTypes.object,
    children: PropTypes.object.isRequired
};