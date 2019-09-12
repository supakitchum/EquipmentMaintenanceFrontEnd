<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <b-form @submit.prevent="Login">
                  <h1>Login</h1>
                  <p class="text-muted">Sign In to your account</p>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend>
                      <b-input-group-text>
                        <i class="icon-user"></i>
                      </b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input
                      name="email"
                      type="text"
                      class="form-control"
                      placeholder="Username"
                      autocomplete="username email"
                      id="email"
                    />
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend>
                      <b-input-group-text>
                        <i class="icon-lock"></i>
                      </b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input
                      name="password"
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      autocomplete="current-password"
                      id="password"
                    />
                  </b-input-group>
                  <b-row>
                    <b-col cols="6">
                      <b-button variant="primary" class="px-4" type="submit">Login</b-button>
                    </b-col>
                    <b-col cols="6" class="text-right">
                      <b-button variant="link" class="px-0">Forgot password?</b-button>
                    </b-col>
                  </b-row>
                </b-form>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { async } from "q";
export default {
  mounted() {
    localStorage.removeItem("usertoken");
    this.base_api = localStorage.base_api
  },
  name: "Login",
  methods: {
    Login: async function() {
      await this.axios({
        method: "post",
        url: this.base_api+"/login",
        data: { email: email.value, password: password.value },
        config: { headers: { "Content-Type": "application/json" } }
      })
        .then(resp => {
          const token = resp.data.results.token;
          console.log(token);
          localStorage.setItem("usertoken", token); // store the token in localstorage
          if (token != null) {
            this.$router.push("/");
          }
        })
        .catch(err => {
          localStorage.removeItem("usertoken"); // if the request fails, remove any possible user token if possible
          reject(err);
        });
    }
  }
};
</script>
