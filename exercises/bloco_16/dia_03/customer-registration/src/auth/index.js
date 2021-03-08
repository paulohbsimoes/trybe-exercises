import store from '../store/index';

const isAuthenticated = () => store.getState().user.isAuthenticated;

export default isAuthenticated;
