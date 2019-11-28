<template>
    <div class="media">
        <div class="media-left">
            <a href="#"><img src="https://via.placeholder.com/64" :alt="user.name" class="mt-1"></a>
        </div>
        <div class="media-body ml-1">
            <h5 class="media-heading">{{ user.name }}</h5>
            {{ user.email }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'Users',
    props: ['user']
}
</script>