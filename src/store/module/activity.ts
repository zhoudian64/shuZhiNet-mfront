export interface Activity {
    id: string;
    title: string;
    leader: string;
    address: string;
    start_time: Date;
    end_time: Date;
    sign_up_time: Date;
}

const state = {
    activity: Array<Activity>(),
};

const getters = {
    activity(activityState: any) {
        return activityState.activity.map((item: Activity) => {
            return {
                id: item.id,
                title: item.title,
                leader: item.leader,
                address: item.address,
                start_time: new Date(item.start_time),
                end_time: new Date(item.end_time),
                sign_up_time: new Date(item.sign_up_time)
            }
        })
    }
};

const mutations = {
    getActivities(activityState: any, payload: Array<Activity>) {
        payload.forEach((item) => {
            activityState.activity.push(item)
        });
    }
};

export default {
    state,
    mutations,
    getters
}
