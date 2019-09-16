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
                                                type="email"
                                                class="form-control"
                                                placeholder="Username"
                                                autocomplete="username email"
                                                id="email"
                                                required
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
  import {async} from "q";

  export default {
    mounted() {
      localStorage.removeItem("usertoken");
      this.base_api = localStorage.base_api;
    },
    name: "Login",
    methods: {
      Login: async function () {
        await this.axios({
          method: "post",
          url: this.base_api + "/login",
          data: {email: email.value, password: password.value},
          config: {headers: {"Content-Type": "application/json"}}
        })
          .then(resp => {
            if (resp.status === 200) {
              const token = resp.data.results.token;
              const type = resp.data.results.type;
              localStorage.setItem("usertoken", token); // store the token in localstorage
              localStorage.setItem("type", type)
              localStorage.setItem("email", resp.data.results.email);
              if (token != null) {
                if (password.value == '1234'){
                  localStorage.setItem("new", 1);
                  this.$router.push('/users/reset_password')
                } else {
                  localStorage.setItem("new", 0);
                  window.location.href = '/'
                }
              }
            } else {
              this.$alertify.error("ไม่พบข้อมูลของบัญชี");
            }
          })
          .catch(err => {
            this.$alertify.error("ไม่พบข้อมูลของบัญชี");
            localStorage.removeItem("usertoken"); // if the request fails, remove any possible user token if possible
            reject(err);
          });
      }
    }
  };
</script>
