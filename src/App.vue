<template>
    <div id="app" class="container">
        <nav id="nav" class="nav nav-pills nav-justified">
            <router-link to="/" class="nav-link">Home</router-link>
            <router-link to="/todo" class="nav-link">Todo</router-link>
        </nav>
        <router-view/>
    </div>
</template>

<style>
.container {
    width: 640px;
    padding-top: 16px;
}
</style>
