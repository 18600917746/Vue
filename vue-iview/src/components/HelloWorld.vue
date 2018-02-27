<template>
  <div class="slide">
    <Layout>
      <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
          <router-link :to="item.link" v-for="(item,index) in slideObj" :key="index">
            <MenuItem :name="item.MenuItem">
              <Icon :type="item.icon"></Icon>
              <span> {{ item.title }} </span>
            </MenuItem>
          </router-link>
        </Menu>
      </Sider>
      <Layout>
        <Header :style="{padding: 0}" class="layout-header-bar">
          <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '20px 20px 0'}" type="navicon-round"
                size="24"></Icon>
        </Header>
        <Content :style="{margin: '20px', background: '#fff', minHeight: heig}">
          <router-view></router-view>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
  export default {
    name: 'slide' ,
    data() {
      return {
        isCollapsed: false ,
        heig: '460px' ,
        //  TODO: slide 数据对象
        slideObj: [{
          icon: 'ios-navigate' ,
          title: 'Option 1' ,
          link: 'option1' ,
          MenuItem: '1-1'
        } ,
          {
            icon: 'search' ,
            title: 'Option 2' ,
            link: 'option2' ,
            MenuItem: '1-2'
          }
        ]
      };
    } ,
    computed: {
      rotateIcon() {
        return [
          'menu-icon' ,
          this.isCollapsed ? 'rotate-icon' : ''
        ];
      } ,
      menuitemClasses() {
        return [
          'menu-item' ,
          this.isCollapsed ? 'collapsed-menu' : ''
        ];
      }
    } ,
    methods: {
      collapsedSider() {
        this.$refs.side1.toggleCollapse();
      }
    }
    , mounted: function () {
      this.heig = (window.innerHeight - 106) + 'px';
    }
  };
</script>
<style scoped>
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout a {
    color: #fff;
    display: block;
  }

  .layout-header-bar {
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
  }

  .layout-logo-left {
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }

  .menu-icon {
    transition: all .3s;
  }

  .rotate-icon {
    transform: rotate(-90deg);
  }

  .menu-item span {
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }

  .menu-item i {
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }

  .collapsed-menu span {
    width: 0px;
    transition: width .2s ease;
  }

  .collapsed-menu i {
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
</style>
