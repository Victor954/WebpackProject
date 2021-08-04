export const setAsChanged = (state , setState) => {

    for (const key of Object.keys(state)) {

        setState(prevState => ({
            ...prevState, 
            [key]: { 
                ...prevState[key], 
                isChanegd: true,
            }
        }));
    }
}
