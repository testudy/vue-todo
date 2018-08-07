<template>
    <div id="app" class="container">
        <i-layout>
            <i-header>
                <i-menu mode="horizontal" theme="dark" active-name="home">
                    <i-menu-item name="home" to="/">
                        <Icon type="ios-navigate" />
                        Home
                    </i-menu-item>
                    <i-menu-item name="todo" to="/todo">
                        <Icon type="ios-keypad" />
                        Todo
                    </i-menu-item>
                </i-menu>
            </i-header>
            <i-content>
                <keep-alive>
                    <router-view/>
                </keep-alive>
            </i-content>
        </i-layout>
    </div>
</template>

<style>
.container {
    width: 640px;
    margin: auto;
}
</style>
