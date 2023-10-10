export const state = () => ({
    formDataList: [],
})

export const mutations = {
    formData(state, data) {
        state.formDataList = data;
    },
}
