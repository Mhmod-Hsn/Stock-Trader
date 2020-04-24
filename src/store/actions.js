import db from '@/firebase/init';

export const loadData =({commit})=>{
    db.collection('data').doc('savedData').get()
        .then(data=>{
            if (data){
                const stocks = data.data().stocks;
                const funds = data.data().funds;
                const stockPortfolio = data.data().stockPortfolio;

                const portfolio = {
                    stockPortfolio,
                    funds
                };

                commit('SET_STOCKS',stocks);
                commit('SET_PORTFOLIO',portfolio);

            }

        })
};
