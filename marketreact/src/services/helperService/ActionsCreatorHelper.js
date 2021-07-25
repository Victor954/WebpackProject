const getAction = (type) => {

    return (value) => {

        return {
            type: type,
            payload: value
        }
    }
}

export const getActions = ({ failedType , succeededType , requestType , loadingType }) => {

    return {
        action_failed: getAction(failedType),
        action_succeeded: getAction(succeededType),
        action_request: getAction(requestType),
        action_loading: getAction(loadingType)
    }
}
