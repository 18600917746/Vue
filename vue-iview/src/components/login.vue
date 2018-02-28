<template>
  <div id="login">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <div class="login-up">
      <Form ref="formCustom" label-position="top" :model="formCustom" :rules="ruleCustom">
        <FormItem label="name" prop="name">
          <Input type="text" v-model="formCustom.name" placeholder="手机号码/邮箱/用户名"></Input>
        </FormItem>
        <FormItem label="Password" prop="passwd">
          <Input type="password" v-model="formCustom.passwd" placeholder="password..."></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formCustom')">Submit</Button>
          <Button type="ghost" @click="handleReset('formCustom')" style="margin-left: 8px">Reset</Button>
        </FormItem>
        <router-link to="/register">注册</router-link>
        <router-link to="/retrieve">找回密码</router-link>
      </Form>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      const validatePass = (rule , value , callback) => {
        if ( value === '' ) {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      const validateName = (rule , value , callback) => {
        if ( value === '' ) {
          callback(new Error('请输入用户名'));
        } else {
          callback();
        }
      };

      return {
        formCustom: {
          passwd: '' ,
          name: ''
        } ,
        ruleCustom: {
          passwd: [
            {validator: validatePass , trigger: 'blur'}
          ] ,
          name: [
            {validator: validateName , trigger: 'blur'}
          ]
        }
      };
    } ,
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if ( valid ) {
            this.$router.push('/')
          }
        });
      } ,
      handleReset(name) {
        this.$refs[name].resetFields();
      }
    }
  };
</script>
<style scoped lang="less">
  #login {
    background-image: url("http://vue-particles.netlify.com/static/img/sky.871d198.jpg");
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .login-up {
    background: #fff;
    top: 25%;
    width: 320px;
    right: 15%;
    position: fixed;
    border: 1px solid #d8dee2;
    padding: 20px;
  }
</style>
