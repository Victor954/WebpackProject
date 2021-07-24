const getStore = (data) => {

    return {
        data: data,
        errrorLoading: null,
        loading: false
    }
}

export const loadProductsStore = getStore([]);

export const addProductStore = getStore({
    id: 0,
    title: '',
    discription: ''
});