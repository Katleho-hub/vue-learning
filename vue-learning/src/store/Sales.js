import axios from "axios";

export const SalesModule = {
    namespaced: true,
    state() {
        const sales = [];

        return {
            sales
        }
    },
    actions: {
        loadSales({ commit }) {
            axios({
                method: 'get',
                url: "https://services.odata.org/Northwind/Northwind.svc/Sales_Totals_by_Amounts?$format=json"
            })
                .then((result) => {
                    console.table(result.data.value);
                    commit("STORE_SALES", result.data.value);
                })
                .catch((error) => {
                    throw new Error(`API ${error}`);
                });
        }
    },
    mutations: {
        STORE_SALES(state, sales) {
            state.sales = sales;
        }
    }
}
