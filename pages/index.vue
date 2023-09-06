<template>
  <div>
    <div
      class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
    >
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          class="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2
          class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
        >
          Sign in to your account
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <VForm class="space-y-6" action="#" method="POST" @submit="login">
          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Email address</label
            >
            <div class="mt-2">
              <VField
                name="email"
                type="email"
                autocomplete="email"
                required
                v-model="username"
                :rules="emailwordRules"
                id="username"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <VErrorMessage name="email" class="text-rose-700" />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Password</label
              >
              <div class="text-sm">
                <a
                  href="#"
                  class="font-semibold text-indigo-600 hover:text-indigo-500"
                  >Forgot password?</a
                >
              </div>
            </div>
            <div class="mt-2">
              <VField
                name="password"
                type="password"
                autocomplete="current-password"
                required
                v-model="password"
                :rules="passwordRules"
                id="password"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <VErrorMessage name="password" class="text-rose-700" />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </VForm>

        <p class="mt-10 text-center text-sm text-gray-500">
          Not a member?
          {{ " " }}
          <a
            href="#"
            class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >Start a 14 day free trial</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Field, Form, ErrorMessage } from "vee-validate";
import { useAuthStore } from "~/store/auth";
import { useRouter } from 'vue-router'

import * as yup from "yup";

const router = useRouter();
const username = ref("");
const password = ref("");
const authStore = useAuthStore();
const passwordRules = yup.string().required().min(6);
const emailwordRules = yup.string().required().email();
const { handleSubmit } = useForm({
  passwordRules: yup.string().required().min(6),
  emailwordRules: yup.string().required().email(),
});

const login = handleSubmit(async () => {
  try {
    await authStore.login(username.value, password.value);
    router.push("/default");
  } catch (error) {
    alert(error);
  }
});
</script>




<style>
</style>