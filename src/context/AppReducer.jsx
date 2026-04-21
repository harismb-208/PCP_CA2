export const AppReducer = (state, action) => {
    switch (action.type) {

        case "SET_DATA":
            return {
                ...state,
                activities: action.payload
            };

        case "TOGGLE_GOAL":
            return {
                ...state,
                activities: state.activities.map(a =>
                    a.activityId === action.payload
                        ? {
                            ...a,
                            goalAchieved: a.steps > 8000 ? true : !a.goalAchieved
                        }
                        : a
                )
            };

        default:
            return state;
    }
};