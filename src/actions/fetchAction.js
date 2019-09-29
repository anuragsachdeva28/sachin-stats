export const storeData = (data) => {
    return (dispatch) => {
        dispatch({ type: 'STORE', payload: data })
    }
}