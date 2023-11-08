<template>
    <div class="forward-profile-button">
    <img
        class="forward-arrow" sre="24-arrows-arrow-bold-forvard-2.png"
        alt="forward-arrow"
    />
    </div> 
</template>

<script>
    export default {
    name: "ForwardProfileButton",
    };
</script>

<style>
    .forward-profile-button {
        border: 1px solid;
        border-color: var (--aqua-island);
        border-radius: 33px;
        cursor: pointer;
        display: flex;
        height: 58px;
        transition: all 0.2s ease;
        width: 92px;
    }

    .forward-profile-button:hover {
        transform: scale(1.1);
    }

    .forward-arrow { 
        height: 42.53px; 
        margin-left: 22px; 
        margin-top: 7.7px;
        width: 47px;
    }
</style>