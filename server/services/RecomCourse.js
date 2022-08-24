const RecomCourseModel = require('../db/models/recomCourse');

class RecomCourseService {
  async getRecomCourseData () {
  	return await RecomCourseModel.findAll({
  		where: { status: 1 },
  		attributes: {
  			exclude: ['cid', 'createdAt', 'updatedAt']
  		}
  	})
  }
}

module.exports = new RecomCourseService();