<template>
    <div id="app" class="container">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="home">
                    <MenuItem name="home" to="/">
                        <Icon type="ios-navigate" />
                        Home
                    </MenuItem>
                    <MenuItem name="todo" to="/todo">
                        <Icon type="ios-keypad" />
                        Todo
                    </MenuItem>
                </Menu>
            </Header>
            <Content>
                <keep-alive>
                    <router-view/>
                </keep-alive>
            </Content>
        </Layout>
    </div>
</template>

<style>
.container {
    width: 640px;
    margin: auto;
}
</style>
