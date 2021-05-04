export default  {
    SET_COMPANIES(state, companies){
        state.items = companies
    },

    SET_COMPANY_SELECTED(state, company){
        state.companySelected = company
    },
    SET_CATEGORIES_COMPANY(state, categories){
        state.companySelected.categoriesCompany = categories
    }
}

