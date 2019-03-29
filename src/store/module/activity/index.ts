interface activity {
    id:string;
    title:string;
    leader:string;
    address:string;
    start_time:string;
    end_time:string;
    sign_up_time:string;
}

const state = {
    activity:Array<activity>(),
}

const getters = {
    activity(state:any){
            return state.activity.map(function(item:any){
                return{
                    id: item.id,
                    title:item.title,
                    leader:item.leader,
                    address:item.address,
                    start_time:item.start_time.replace(/T|Z/g,' '),
                    end_time:item.end_time.replace(/T|Z/g,' '),
                    sign_up_time:item.sign_up_time.replace(/T|Z/g,' ')
                }
            })
    }
}

const mutations={
    getActivities(state:any,payload:Array<activity>){
        payload.forEach( item => {
            state.activity.push(item)
        });
    }
}



export default{
    state,
    mutations,
    getters
}