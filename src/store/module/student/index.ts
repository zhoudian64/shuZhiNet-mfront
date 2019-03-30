export interface Student {
    username: string,
    studentName: string,
    token: string,
    ifLogin: boolean
}

const state: Student = {
    username: '',
    studentName: '',
    token: '',
    ifLogin: false
};

const getters = {
    ifLogin(studentState: Student) {
        return studentState.ifLogin
    },
    studentName(studentState: Student) {
        return studentState.studentName
    },
    token(studentState: Student) {
        return studentState.token
    },
    username(studentState: Student) {
        return studentState.username
    }
};

const mutations = {
    login(studentState: Student, student: Student) {
        studentState.username = student.username;
        studentState.ifLogin = true;
        studentState.studentName = student.studentName;
        studentState.token = student.token
    },
    logout(studentState: Student) {
        studentState.ifLogin = false;
        studentState.username = "";
        studentState.studentName = "";
        studentState.token = "";
    }
};

export default {
    state,
    getters,
    mutations
}
