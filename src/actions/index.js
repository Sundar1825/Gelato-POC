export const addTask = (executionAddress, functionName, resolverAddress, resolverFunction) => {
    return{
        type : 'ADD-TASK',
        payload : {executionAddress, functionName, resolverAddress, resolverFunction}
    };
}
