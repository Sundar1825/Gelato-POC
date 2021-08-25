export const initialState = {
    executionAddress: null,
    functionName: null,
    resolverAddress: null,
    resolverFunction: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-TASK':
            return { ...state, executionAddress: action.payload.executionAddress, functionName: action.payload.functionName, resolverAddress: action.payload.resolverAddress, resolverFunction: action.payload.resolverFunction }
        default :
            return {...state}
    }

};

