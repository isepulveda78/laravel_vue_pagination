<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Users</div>

                <div class="card-body">
                    <users v-for="user in users" :user="user" :key="user.id"></users>
                    <pagination :meta="meta" v-on:pagination:switched="getUsers"></pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Users from '../components/Users.vue';
import Pagination from '../components/Pagination.vue';
export default {
    components:{
        Users,
        Pagination
    },
    name: 'App',
    data() {
        return {
            users: [],
            meta: {}
        }
    },
    mounted(){
        this.getUsers()
    },
    methods: {
        getUsers(page = 1){
            axios.get('/api/users', {
                params: {
                    page
                }
            }).then((response) => {
            this.users = response.data.data;
            this.meta = response.data.meta;
        });
        }
    }
}
</script>