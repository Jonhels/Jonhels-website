import { TOGGLE_SWITCHER } from '../Actions/types';
import { LIGHT_MODE, DARK_MODE } from '../Assets/styles';

export default (
    state = {
        isDarkMode: true,
        ...DARK_MODE
    },
    action
) => {
    switch (action.type) {
        case TOGGLE_SWITCHER:
            const isDarkMode = !state.isDarkMode;
            const ColorObject = isDarkMode ? DARK_MODE : LIGHT_MODE;
            return { ...state, isDarkMode, ...ColorObject };
        default:
            return state;
    }
};