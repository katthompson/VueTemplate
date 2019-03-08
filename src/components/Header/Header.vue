<template>
    <header>
        <div class="header-content">
            <div class="logo"><img src="../../assets/logo.png" alt="logo" ></div>
            <p>Intercept POC - Vue Form</p>
            <nav class="desktop">
                <navigation/>
            </nav>
            <div class="mobile menu" v-bind:class="{'change': isActive}" v-on:click="toggle">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
            <nav class="mobile" v-bind:class="{'closed': mobileMenu}" v-on:click="toggleMenu">
                <navigation/>
            </nav>
        </div>
    </header>
</template>



<script src="./Header.js"></script>
<!-- <style src="./Header.css" lang="css"></style> -->
<style src="./Header.scss" lang="scss"></style>
