export interface Activity {
    typeid: string;
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
    deActivit (activityState: any) {
        return activityState.activity.filter((item: Activity, index: number) => {
            return ["2", "3", "4"].indexOf(item.typeid) + 1 && activityState.activity.indexOf(item) === index;
        }).map((item: Activity) => {
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
    },
    zhiActivity (activityState: any) {
        return activityState.activity.filter((item: Activity, index: number) => {
            return ["1", "5"].indexOf(item.typeid) + 1 && activityState.activity.indexOf(item) === index;
        }).map((item: Activity) => {
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
    },
    tiActivity (activityState: any) {
        return activityState.activity.filter((item: Activity) => {
            return item.typeid === "6"
        }).map((item: Activity) => {
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
    },
    meiActivity (activityState: any) {
        return activityState.activity.filter((item: Activity) => {
            return item.typeid === "7"
        }).map((item: Activity) => {
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
    },
    laoActivity (activityState: any) {
        return activityState.activity.filter((item: Activity) => {
            return item.typeid === "8"
        }).map((item: Activity) => {
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
