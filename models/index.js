import HTTP from '@/utils/http';

/**
 * 请求模型
 */
export default class IndexModel extends HTTP {
  
  getHomeData () {
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: 'api/get_home_data',
        success (data) {
          resolve(data)
        },
        error (err) {
          resolve(error);
        }
      })
    })
  }

  getListData () {
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: 'api/get_list_data',
        success (data) {
          resolve(data)
        },
        error (err) {
          resolve(error);
        }
      })
    })
  }

  getCourseData () {
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: 'api/get_course_data',
        success (data) {
          resolve(data)
        },
        error (err) {
          resolve(error);
        }
      })
    })
  }
}