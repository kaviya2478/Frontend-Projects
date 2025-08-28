export const saveTransactionAPI = (transaction) =>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve({
                ...transaction,
                saved:true,
                date:new Date().toLocaleString(),
            });
        },1000);
    });
};