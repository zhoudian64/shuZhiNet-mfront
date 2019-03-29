interface student {
    username:string,
    studentName:string,
    token:string,
    ifLogin:boolean
}

const state:student = {
    username:'',
    studentName:'',
    token:'',
    ifLogin: false
}

const getters = {
    ifLogin(state:any){return state.ifLogin},
    studentName(state:any){return state.studentName},
    token(state:any){return state.token},
    username(state:any){return state.username}
}

const mutations = {
    login(state:any,student:any){
        state.username = student.username
        state.ifLogin = true;
        state.studentName = student.studentName;
        state.token = student.token
    },
    logout(state:any){
        state.ifLogin = false;
        state.username = "";
        state.studentName = "";
        state.token = "";
    }
}

export default{
    state,
    getters,
    mutations
}