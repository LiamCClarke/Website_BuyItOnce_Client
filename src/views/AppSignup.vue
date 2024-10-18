<script setup>
import { ref, computed } from 'vue'

const username = ref('');
const email = ref('');
const password = ref('');

// Password Requirements
const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const numbers = /[0-9]/;
const passwordMinLength = 8;
const isMinimumLength = computed(() => {
    return password.value.length >= (passwordMinLength) ? true : false;
});
const hasSpecialCharacter = computed(() => {
    return specialChars.test(password.value);
});
const hasNumber = computed(() => {
    return numbers.test(password.value);
});

const isSubmitDisabled = computed(() => {
    return !isMinimumLength.value || !hasSpecialCharacter.value || !hasNumber.value;
});

function handleSubmit() {
    console.log('form submitted');
}
</script>

<template>
    <div class="content-wrapper">
        <div class="sign-up">
            <div class="logo-container">
                <div class="logo">
                    <router-link :to="{ name: 'Home' }"><h1 class="title">BIO.</h1></router-link>
                </div>
            </div>
            <!-- .prevent on the submit event stops default page refresh html behaviour -->
            <form @submit.prevent="handleSubmit">
                <label for="username">Username</label>
                <input id="username" v-model="username">
                <label for="email">Email</label>
                <input id="email" type="email" v-model="email">
                <label for="password">Password</label>
                <input id="password" type="password" v-model="password">
                <ul class="password-criteria-list">
                    <li class="password-criteria" :class="{ passed: isMinimumLength, failed: !isMinimumLength }">Longer than {{ passwordMinLength }} characters</li>
                    <li class="password-criteria" :class="{ passed: hasSpecialCharacter, failed: !hasSpecialCharacter }">Contains at least 1 special character</li>
                    <li class="password-criteria" :class="{ passed: hasNumber, failed: !hasNumber }">Contains at least 1 number</li>
                </ul>
                <input :disabled="isSubmitDisabled" class="submit-button" type="submit" value="Create Account">
            </form>
        </div>
    </div>
</template>

<style scoped>
.content-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding: 200px 0 200px;
}

.title {
    font-weight: 900;
    letter-spacing: 3px;
    font-size: 30px;
    cursor: pointer;
}

.sign-up {
    max-width: 350px;
    max-height: 500px;
    background-color: var(--secondary-color);
    border: none;
    border-radius: 20px;
    height: 500px;
    width: 350px;
    padding: 40px;
}

.logo-container {
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
}

form {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
}

form label {
    font-weight: 600;
    width: 100%;
}

form input {
    padding: 8px 12px;
    height: 42px;
    border: 1px solid hsla(0, 0%, 100%, .05);
    border-radius: 8px;
    background-color: hsla(0, 0%, 100%, .05);
    padding: 4px;
    font-size: 14px;
}

.form-input-container {
    display: flex;
    flex-direction: column;
}

.submit-button {
    border: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: var(--accent-color);
}

.password-criteria-list {
    list-style-type: circle;
    list-style-position: inside;
}

.passed {
    color: green;
}

.failed {
    color: red;
}
.password-criteria {
    font-size: 12px;
}
</style>