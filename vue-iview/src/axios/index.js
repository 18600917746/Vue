import axios from 'axios';
import qs from 'qs';

const install = function ( Vue, potions ) {
	Vue.prototype.ajax = function ( url, data, callback, type ) {
		let that = this;
		let options = {};
		data = qs.stringify( data );
		type = type ? type : 'post';
		if ( type == 'get' ||type == 'GET') {
			options = {
				method: type,
				url: AJAXURL + url + '?' + data,
			};
		} else if ( type == 'post' || type == 'POST' ) {
			options = {
				method: type,
				url: AJAXURL + url,
				data: data
			};
		}
		axios( options ).then( function ( response ) {

			if(response.data.code == 404){//请登录
        that.$router.push('/login');
			}
			if (response.data.code != 200) {
				that.$message('对方不想和你说话，并且向你抛出了一个异常');
			}
			if ( callback ) {
				callback( response.data );
			}
		} )
		.catch( function ( error ) {
		  if(error.response.status ==404){
        that.$router.push('/login');
      }
      that.$Message.error('对方不想和你说话，并且向你抛出了一个异常');
		} );
	}
}
export default install;
